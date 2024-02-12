import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <>
      <Button>root</Button>
      <UserButton />
    </>
  );
};

export default Page;
