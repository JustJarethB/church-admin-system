import { RoutedPopup, ProfileChip } from "@/components";
import { useParams } from "react-router-dom";
import { PLACEHOLDER_CHURCH, PLACEHOLDER_USERS } from "@/data";
import { Row } from "./utils";

export const TeamsModal = () => {
  const church = PLACEHOLDER_CHURCH;
  const { id } = useParams();
  const team = church.teams[id as keyof typeof church.teams];
  const people = team.people.reduce(
    (obj, id) => ({
      ...obj,
      [id]: PLACEHOLDER_USERS.find((user) => user.uid == id),
    }),
    {}
  );
  return (
    <RoutedPopup title={team.displayName}>
      <div className="space-y-2">
        {team.people
          .map((userId) => people[userId as keyof typeof people])
          .map(({ uid, displayName, photoURL }) => {
            return (
              <Row to={"/profile/" + uid} key={uid}>
                <ProfileChip imageUrl={photoURL} displayName={displayName} />
              </Row>
            );
          })}
      </div>
    </RoutedPopup>
  );
};
