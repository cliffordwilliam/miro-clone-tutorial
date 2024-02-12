"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import AuthLoadingLogo from "@/components/AuthLoadingLogo";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>{children}</Authenticated>
          <AuthLoading>
            <AuthLoadingLogo />
          </AuthLoading>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  );
};

export default ConvexClientProvider;
