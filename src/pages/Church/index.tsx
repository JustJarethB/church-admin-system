import { PLACEHOLDER_CHURCH } from "@/data";
import { Outlet } from "react-router-dom";
import { Section, ProfileImage } from "@/components";
import { Row } from "./utils";
export * from "./Teams";
export const Church = () => {
  const church = PLACEHOLDER_CHURCH;
  return (
    <div className="flex flex-col justify-between py-4">
      <ProfileImage
        displayName={church.displayName}
        imageUrl={church.logoUrl}
      />
      <h1 className="text-2xl mx-auto py-4">{church.displayName}</h1>
      <Section title="Upcoming Events">
        {Object.entries(church.upcomingEvents).map(([id, e]) => (
          <Row key={id} to={`./events/${id}`}>
            <p>
              {
                church.services[e.service as keyof typeof church.services]
                  .displayName
              }
            </p>
            {e.date.toLocaleDateString()}
          </Row>
        ))}
      </Section>
      <Section title="Services">
        {Object.entries(church.services).map(([id, { displayName }]) => (
          <Row key={id} to={`./services/${id}`}>
            {displayName}
          </Row>
        ))}
      </Section>
      <Section title="Teams">
        {Object.entries(church.teams).map(([id, { displayName, people }]) => (
          <Row key={id} to={`./teams/${id}`}>
            <p>{displayName}</p>
            <p>{people.length}</p>
          </Row>
        ))}
      </Section>
      <Outlet />
    </div>
  );
};
