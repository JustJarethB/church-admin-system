import { PLACEHOLDER_CHURCH } from "@/data";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren } from "react";
import { Link, LinkProps, Outlet } from "react-router-dom";
export * from "./Teams";
export const Church = () => {
  const church = PLACEHOLDER_CHURCH;
  return (
    <div className="flex flex-col justify-between py-4">
      <img
        className="block rounded-full w-1/2 mx-auto"
        src={church.logoUrl}
        alt={church.displayName}
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

const Row = (props: LinkProps) => (
  <Link {...props} className="flex justify-between" />
);

type SectionProps = {
  title: string;
};
const Section = ({ title, children }: PropsWithChildren<SectionProps>) => (
  <div className="my-2">
    <div className=" bg-primary border rounded border-opacity-10 border-white">
      <div className="bg-opacity-0 bg-white">
        <div className="p-2 flex justify-between">
          <h2 className="text-xl">{title}</h2>
          <PlusIcon className="h-8" />
        </div>
        {children && (
          <>
            <hr className="text-white opacity-30" />
            <div className="p-2">{children}</div>
          </>
        )}
      </div>
    </div>
  </div>
);
