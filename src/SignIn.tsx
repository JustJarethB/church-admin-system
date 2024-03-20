import { Auth } from "@firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { Button } from "./components";

type SignInProps = { auth: Auth };
export const SignIn = ({ auth }: SignInProps) => {
    const [handleClick] = useSignInWithGoogle(auth);
    return <div className="flex justify-center items-center"><div className="mt-[20vh] h-[60vh] p-8 flex justify-center items-end border border-slate-800 shadow-slate-800 shadow-sm bg-slate-900 rounded w-1/2 "><Button onClick={() => handleClick()}>Sign in with Google</Button></div></div>
}