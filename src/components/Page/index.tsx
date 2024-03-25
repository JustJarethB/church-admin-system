import { Header } from "./Header";
import { Content } from "./Content";

export const Page = (props: Parameters<typeof Content>[0]) => {
  return (
    <div className="relative">
      <Header className="sticky top-0 left-0" />
      <Content {...props} />
    </div>
  );
};
