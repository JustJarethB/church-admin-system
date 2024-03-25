import { SignOut } from "../SignOut";
import { Page } from "../components";
import { ProfileSelector } from "../components/ProfileSelector";
import { useCurrentUser, useUserProfiles } from "../api";

export const ProfileSelection = () => {
  const [user] = useCurrentUser();
  const [profiles] = useUserProfiles();
  if (!user) throw new Error("No user in authenticated zone");
  return (
    <Page className="flex flex-col justify-between py-4">
      <img
        className="block rounded-full w-1/2 mx-auto"
        src={user.photoURL ?? undefined}
      />
      <p className="text-xl mx-auto">Welcome, {user.displayName}</p>
      <div className="border rounded border-neutral-light grid gap-2 grid-cols-2">
        {profiles?.map((profile) => {
          return <ProfileSelector profile={profile} />;
        })}
        <ProfileSelector profile={undefined} />
      </div>
      <SignOut />
    </Page>
  );
};
