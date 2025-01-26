import { Button } from "./components";
import { getAuth } from "firebase/auth";

export const SignOut = () => {
  const auth = getAuth();
  const signOut = () => auth.signOut();
  if (!auth.currentUser) return <></>;
  return <Button onClick={signOut}>Sign Out</Button>;
};
