import { Button, Logo } from "@/components";
import appleLogo from "@/assets/Apple_logo_black.svg";
import googleLogo from "@/assets/google_24px.svg";
import githubLogo from "@/assets/github.svg";
import { supabase } from "@/api";
import { useAuth } from "@/providers/AuthProvider";
import { Provider } from "@supabase/supabase-js";
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
        <ThirdParty />
        {/* <SupaAuth /> */}
      </div>
    </div>
  );
};
// TODO: remove auth-ui-react and auth-ui-shared
// const SupaAuth = () => {
//   const { signIn } = useAuth()
//   return (
//     <div className="h-full flex items-center ">
//       <div className="mx-10 mt-5 grid gap-2 w-full">
//         <Auth supabaseClient={supabase} onlyThirdPartyProviders providers={['github']} appearance={{ theme: ThemeSupa }} />
//         <Button onClick={signIn}>Login Manually</Button>
//       </div>
//     </div>
//   )
// }

const ThirdParty = () => {
  const { signIn } = useAuth()
  const handleSignIn = (provider: Provider = 'github') => () => signIn(provider)
  return (<div className="h-full flex items-center ">
    <div className="mx-10 mt-5 grid gap-2 w-full">
      <Button
        className="grid grid-flow-col gap-2 items-center justify-center"
        onClick={handleSignIn()}
      >
        <p>Sign in with </p>
        <img alt="Github" className="h-8" src={githubLogo} />
      </Button>
      <Button
        disabled
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