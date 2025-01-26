import { PlusIcon } from "@heroicons/react/24/solid";
import { Profile, useChurchFromProfile } from "@/api";
export type ProfileSelectionProps = {
  profile: Profile | undefined;
};
export const ProfileSelector = ({ profile }: ProfileSelectionProps) => {
  const [church] = useChurchFromProfile(profile);
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
