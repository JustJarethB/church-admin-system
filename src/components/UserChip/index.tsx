import { User } from "firebase/auth";

type UserChipProps = { user: User };
export const UserChip = ({
  user: { displayName, uid, photoURL },
}: UserChipProps) => {
  return (
    <span
      key={uid}
      title={uid}
      className="p-1 text-sm rounded-full bg-neutral-light inline-flex items-center"
    >
      <p className="p-1">{displayName}</p>
      <img className="h-7 ml-1 rounded-full" src={photoURL ?? undefined} />
    </span>
  );
};
