type ProfileImageProps = { imageUrl?: string; displayName: string };
export const ProfileImage = ({ displayName, imageUrl }: ProfileImageProps) => (
  <img
    className="block rounded-full w-1/2 mx-auto"
    src={
      imageUrl ??
      `https://api.dicebear.com/8.x/identicon/svg?seed=${displayName}`
    }
    alt={displayName}
  />
);
