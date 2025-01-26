import { SignOut } from "@/SignOut";
import { ProfileSelector, ProfileImage } from "@/components";
import { useCurrentUser, useUserProfiles } from "@/api";

export const ProfileSelection = () => {
  const [user] = useCurrentUser();
  const [profiles] = useUserProfiles();
  if (!user) throw new Error("No user in authenticated zone");
  return (
    <div className="flex flex-col justify-between py-4">
      <ProfileImage
        displayName={user.displayName ?? user.uid}
        imageUrl={user.photoURL ?? undefined}
      />
      <p className="text-xl mx-auto">Welcome, {user.displayName ?? "User"}</p>
      <div className="border rounded border-neutral-light grid gap-2 grid-cols-2">
        {profiles?.map((profile) => {
          return <ProfileSelector key={profile.churchId} profile={profile} />;
        })}
        <ProfileSelector profile={undefined} />
      </div>
      <SignOut />
    </div>
  );
};
