import { Link, LinkProps } from "react-router-dom";

export const Row = (props: LinkProps) => (
  <Link {...props} className="flex justify-between" />
);
