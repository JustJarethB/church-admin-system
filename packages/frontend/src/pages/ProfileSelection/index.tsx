import { SignOut } from "@/SignOut";
import api from "@/api";
import { ProfileSelector, ProfileImage } from "@/components";

export const ProfileSelection = () => {
  const { data: user } = api.user.current.useQuery()
  const { data: profiles } = api.profile.ofUser.useQuery();
  console.log({ user, profiles });
  return (
    <div className="flex flex-col justify-between py-4">
      <ProfileImage
        displayName={user?.email ?? user?.id ?? 'undefined'}
        imageUrl={user?.avatarUrl ?? undefined}
      />
      <p className="text-xl mx-auto">Welcome, {user?.fullName ?? "User"}</p>
      <div className="border rounded border-neutral-light grid gap-2 grid-cols-2">
        {profiles?.map((profile) => {
          return <ProfileSelector key={profile.organisationId} profileId={profile.id} />
        })}
        <ProfileSelector />
      </div>
      <SignOut />
    </div>
  )
}
