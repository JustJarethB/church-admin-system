import { twMerge } from "tailwind-merge";
import { withSuspense } from "../Suspended";

export const Content = withSuspense((props: JSX.IntrinsicElements["div"]) => (
  <div {...props} className={twMerge("p-2 mt-8", props.className)} />
));
