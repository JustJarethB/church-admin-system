import { ProfileImage } from "@/components";

export const ProfileChip = ({
  imageUrl,
  displayName,
}: Parameters<typeof ProfileImage>[0]) => {
  return (
    <div className="flex gap-2">
      <ProfileImage inline imageUrl={imageUrl} displayName={displayName} />
      {displayName ?? "User"}
    </div>
  );
};
