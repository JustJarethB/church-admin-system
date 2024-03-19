import { Auth } from "@firebase/auth";

type SignInProps = { auth: Auth };
export const SignOut = ({ auth }: SignInProps) => {
    const signOut = () => auth.signOut();
    if (!auth.currentUser) return <></>
    return <button onClick={signOut}>Sign Out</button>
}