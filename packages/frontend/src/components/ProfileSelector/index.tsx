import { PlusIcon } from "@heroicons/react/24/solid";
import { Profile } from "api/src/profile";
export type ProfileSelectionProps = {
  profileId?: string
};
export const ProfileSelector = ({ profileId }: ProfileSelectionProps) => {
  const [church] = [{ logoUrl: "", displayName: "" }]
  if (!church)
    return (
      <div className="w-full flex justify-center items-center border-2 rounded border-neutral-light relative aspect-square">
        <PlusIcon className="w-1/2 text-neutral-light" />
      </div>
    );
  return (
    <div className="w-full flex justify-center items-center border-2 rounded border-neutral-light relative aspect-square overflow-hidden">
      <img
        className="w-full h-full"
        src={church.logoUrl}
        alt={church.displayName}
      />
    </div>
  );
};
