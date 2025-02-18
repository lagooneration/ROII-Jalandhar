import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
      <FcGoogle />
        Continue with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };