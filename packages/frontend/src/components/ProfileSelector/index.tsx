import { PlusIcon } from "@heroicons/react/24/solid";
import { Profile } from "api/src/profile";
import { Link } from "react-router-dom";
export type ProfileSelectionProps = {
  profileId?: string
};
export const ProfileSelector = ({ profileId }: ProfileSelectionProps) => {
  if (!profileId)
    return (
      <div className="w-full flex justify-center items-center border-2 rounded border-neutral-light relative aspect-square">
        <PlusIcon className="w-1/2 text-neutral-light" />
      </div>
    );
  return (
    <Link to={`/organisations/${profileId}/edit`} className="w-full flex justify-center items-center border-2 rounded border-neutral-light relative aspect-square overflow-hidden">
      <img
        className="w-full h-full"
        src={`https://api.dicebear.com/8.x/identicon/svg?seed=${profileId}`}
        alt={profileId}
      />
    </Link>
  );
};
