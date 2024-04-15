import { PlusIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren } from "react";

type SectionProps = {
  title: string;
};
export const Section = ({
  title,
  children,
}: PropsWithChildren<SectionProps>) => (
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
