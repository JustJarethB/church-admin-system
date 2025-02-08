import { useAuth } from "./AuthProvider";
import { Button } from "./components";

export const SignOut = () => {
  const auth = {
    currentUser: true,
    signOut: () => alert('unimplemented')
  };
  const { signOut } = useAuth()
  if (!auth.currentUser) return <></>;
  return <Button onClick={signOut}>Sign Out</Button>;
};
