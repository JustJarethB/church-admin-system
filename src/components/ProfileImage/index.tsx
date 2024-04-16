import { twMerge } from "tailwind-merge";

type ProfileImageProps = {
  imageUrl?: string | null;
  displayName: string;
  inline?: boolean;
};
export const ProfileImage = ({
  displayName,
  imageUrl = null,
  inline,
}: ProfileImageProps) => (
  <img
    className={twMerge(
      "block rounded-full max-h-full max-w-full w-1/2 mx-auto",
      inline && "size-6"
    )}
    src={
      imageUrl ??
      `https://api.dicebear.com/8.x/identicon/svg?seed=${displayName}`
    }
    alt={displayName}
  />
);
