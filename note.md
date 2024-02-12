# create next app as usual

copy from shadcn doc -> try a button comp and clear root page

# register with github and login to convex

create a new project there

install

```bash
npm i convex
```

run backend

```bash
npx convex dev
```

get your existing project -> or you need to login to github and convex dashboard -> then you can create a project here

this will sync terminal with convex dashboard

create a convex dir -> where you write funcs API

inside the app dashboard is where you see your tables

now u have new .env.local var

init + run backend -> keep this running

so now 2 terminal -> front and back

made changes in API/schema? no need to do like in prisma -> generate and push

this keeps live updates

go to dashboard to see tables + logs of be

# connect clerk + convex using jwt template

go to clerk

create new app

google + mail

get env and paste in .env.local

```bash
npm i @clerk/nextjs
```

add clerk middleware to src

we are going to create a new provider that uses clerk and convex

create jwt template -> choose convex -> name it convex -> makes sure that aud = "convex" -> app ID for config -> apply changes to create

later when we add the auth config -> we need to make sure that the applicationID === aud

create the auth.config.js -> copy from the auth/clerk docs in the convex docs

change the domain to the issuer -> get issuer from the clerk jwt template detail page

if everythng is ok it will say convex functions ready! in the be terminal

create the provider to be used later in the root layout

create providers in src dir

in there create the convexClientProvider

```tsx
"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import AuthLoadingLogo from "@/components/AuthLoadingLogo";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!; // u can do this (!) to remove the undefined type thing that comes with process.env vars
const convex = new ConvexReactClient(convexUrl);

const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>{children}</Authenticated>
          <AuthLoading>
            <AuthLoadingLogo /> // just a image comp (rendered if it is loading)
          </AuthLoading>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  );
};

export default ConvexClientProvider;
```

# hug the root layout children with the convexClientProvider

then when you are not logged in, try to go to root page, you will be kicked to the issuer url in the auth.config that you get from clerk jwt template

you can remove the clerk tag from their form in the customize sidebar link, there you can turn on the premium feature, this works in developer mode, not in production
