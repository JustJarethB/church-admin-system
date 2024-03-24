import { twMerge } from "tailwind-merge";

export const Content = (props: JSX.IntrinsicElements["div"]) => (
  <div {...props} className={twMerge("p-2 ", props.className)} />
);
