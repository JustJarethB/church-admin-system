import { Bars3Icon } from "@heroicons/react/24/solid";
import { Logo } from "@/components";
import { twMerge } from "tailwind-merge";

export const Header = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      {...props}
      className={twMerge(
        "w-full bg-primary h-12 p-2 flex justify-between",
        props.className
      )}
    >
      <Logo color="white" />
      <Bars3Icon />
    </div>
  );
};
