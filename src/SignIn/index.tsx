import { Auth } from "@firebase/auth";
import {
  useSignInWithApple,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Button, Logo } from "../components";
import appleLogo from "../assets/Apple_logo_black.svg";
import googleLogo from "../assets/google_24px.svg";
import { UsernameAndPassForm } from "./UsernameAndPassForm";

type SignInProps = { auth: Auth };
export const SignIn = ({ auth }: SignInProps) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithApple] = useSignInWithApple(auth);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="absolute top-0 h-1/4 w-full flex justify-center items-center p-8">
        <Logo color="secondary" />
      </div>
      <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow">
        {/* <UsernameAndPassForm /> */}
        <div className="h-full flex items-center ">
          <div className="mx-10 mt-5 grid gap-2 w-full">
            <Button
              className="grid grid-flow-col gap-2 items-center justify-center"
              onClick={() => signInWithGoogle()}
            >
              <p>Sign in with </p>
              <img alt="Google" className="h-8" src={googleLogo} />
            </Button>
            <Button
              disabled
              className="grid grid-flow-col gap-2 items-center justify-center"
              onClick={() => signInWithApple()}
            >
              <p>Sign in with </p>
              <img alt="Apple" className="h-8" src={appleLogo} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
