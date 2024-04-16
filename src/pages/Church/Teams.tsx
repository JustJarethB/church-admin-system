import { RoutedPopup } from "@/components";
import { useParams } from "react-router-dom";
import { PLACEHOLDER_CHURCH } from "@/data";

export const TeamsModal = () => {
  const church = PLACEHOLDER_CHURCH;
  const { id } = useParams();
  const team = church.teams[id as keyof typeof church.teams];
  return (
    <RoutedPopup title={team.displayName}>
      {team.people.map((userId) => {
        return (
          <p key={userId} className="px-2 border rounded-full">
            {userId}
          </p>
        );
      })}
    </RoutedPopup>
  );
};
