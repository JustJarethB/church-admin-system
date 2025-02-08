import { Button, Logo } from "@/components";
import appleLogo from "@/assets/Apple_logo_black.svg";
import googleLogo from "@/assets/google_24px.svg";
import { createProfile, getUserHasProfile, supabase } from "@/api";
import { PLACEHOLDER_USERS } from "@/data";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession } from "@/api/useSession";
import { useAuth } from "@/AuthProvider";
export const SignOut = () => {
  return <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
}
export const SignIn = () => {

  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="absolute top-0 h-1/4 w-full flex justify-center items-center p-8">
        <Logo color="secondary" />
      </div>
      <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow">
        {/* <UsernameAndPassForm /> */}
        {/* <ThirdParty /> */}
        <SupaAuth />
      </div>
    </div>
  );
};

const SupaAuth = () => {
  const { signIn } = useAuth()
  return (
    <div className="h-full flex items-center ">
      <div className="mx-10 mt-5 grid gap-2 w-full">
        <Auth supabaseClient={supabase} onlyThirdPartyProviders providers={['github']} appearance={{ theme: ThemeSupa }} />
        <Button onClick={signIn}>Login Manually</Button>
      </div>
    </div>
  )
}

const ThirdParty = () => {
  const handleSignIn = () => () => { }
  return (<div className="h-full flex items-center ">
    <div className="mx-10 mt-5 grid gap-2 w-full">
      <Button
        className="grid grid-flow-col gap-2 items-center justify-center"
        onClick={handleSignIn()}
      >
        <p>Sign in with </p>
        <img alt="Google" className="h-8" src={googleLogo} />
      </Button>
      <Button
        disabled
        className="grid grid-flow-col gap-2 items-center justify-center"
        onClick={handleSignIn()}
      >
        <p>Sign in with </p>
        <img alt="Apple" className="h-8" src={appleLogo} />
      </Button>
      {import.meta.env.VITE_ANONYMOUS_SIGNIN && (
        <Button
          className="grid grid-flow-col gap-2 items-center justify-center"
          onClick={handleSignIn()}
        >
          <p>
            <span className="font-mono">[DEV]</span> Sign in
          </p>
        </Button>
      )}
    </div>
  </div>
  )
}