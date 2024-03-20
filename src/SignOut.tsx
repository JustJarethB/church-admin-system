import { Auth } from "@firebase/auth";
import { Button } from "./components";

type SignInProps = { auth: Auth };
export const SignOut = ({ auth }: SignInProps) => {
    const signOut = () => auth.signOut();
    if (!auth.currentUser) return <></>
    return <Button onClick={signOut}>Sign Out</Button>
}