import { Auth } from "@firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth"

type SignInProps = { auth: Auth };
export const SignIn = ({ auth }: SignInProps) => {
    const [handleClick] = useSignInWithGoogle(auth);
    return <button onClick={() => handleClick()}>Sign in with Google</button>
}