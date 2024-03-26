import { SignOut } from "@/SignOut";
import { ProfileSelector } from "@/components/ProfileSelector";
import { useCurrentUser, useUserProfiles } from "@/api";
import placeholderPhoto from "@/assets/anon-user.png";

export const ProfileSelection = () => {
  const [user] = useCurrentUser();
  const [profiles] = useUserProfiles();
  if (!user) throw new Error("No user in authenticated zone");
  return (
    <div className="flex flex-col justify-between py-4">
      <img
        className="block rounded-full w-1/2 mx-auto"
        src={user.photoURL ?? placeholderPhoto}
        alt={
          user.photoURL
            ? user.displayName ?? "Profile Image"
            : "Profile Image: Image by gstudioimagen on Freepik"
        }
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
