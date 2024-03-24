import { Header } from "./Header";
import { Content } from "./Content";

export const Page = (props: Parameters<typeof Content>[0]) => {
  return (
    <div className="h-full relative">
      <Header className="absolute top-0 left-0" />
      <div className="pt-12 h-full">
        <Content {...props} />
      </div>
    </div>
  );
};
