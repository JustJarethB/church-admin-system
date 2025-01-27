import { Button } from "./components";

export const SignOut = () => {
  const auth = {
    currentUser: true,
    signOut: () => alert('unimplemented')
  };
  const signOut = () => auth.signOut();
  if (!auth.currentUser) return <></>;
  return <Button onClick={signOut}>Sign Out</Button>;
};
