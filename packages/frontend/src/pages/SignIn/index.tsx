import {
  useSignInWithApple,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Button, Logo } from "@/components";
import appleLogo from "@/assets/Apple_logo_black.svg";
import googleLogo from "@/assets/google_24px.svg";
import { createProfile, getUserHasProfile } from "@/api";
import { UserCredential, getAuth, signInAnonymously } from "firebase/auth";

export const SignIn = () => {
  const auth = getAuth();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithApple] = useSignInWithApple(auth);
  const handleSignIn = (func: () => Promise<UserCredential | undefined>) => {
    return () =>
      func().then(async (credential) => {
        if (!credential) throw new Error("Unhandled: credential errror");
        const userId = credential.user.uid;
        if (!(await getUserHasProfile(userId))) {
          const churchId = "zCb7Xxp0Nif9xALfnVRl"; // Test Church
          createProfile({ userId, churchId });
        }
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="absolute top-0 h-1/4 w-full flex justify-center items-center p-8">
        <Logo color="secondary" />
      </div>
      <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow">
        {/* <UsernameAndPassForm /> */}
        <div className="h-full flex items-center ">
          <div className="mx-10 mt-5 grid gap-2 w-full">
            <Button
              className="grid grid-flow-col gap-2 items-center justify-center"
              onClick={handleSignIn(signInWithGoogle)}
            >
              <p>Sign in with </p>
              <img alt="Google" className="h-8" src={googleLogo} />
            </Button>
            <Button
              disabled
              className="grid grid-flow-col gap-2 items-center justify-center"
              onClick={handleSignIn(signInWithApple)}
            >
              <p>Sign in with </p>
              <img alt="Apple" className="h-8" src={appleLogo} />
            </Button>
            {import.meta.env.VITE_ANONYMOUS_SIGNIN && (
              <Button
                className="grid grid-flow-col gap-2 items-center justify-center"
                onClick={handleSignIn(() => signInAnonymously(auth))}
              >
                <p>
                  <span className="font-mono">[DEV]</span> Sign in
                </p>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
