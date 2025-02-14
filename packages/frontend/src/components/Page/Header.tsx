import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Logo } from "@/components";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignOut } from "@/SignOut";

export const Header = (props: JSX.IntrinsicElements["div"]) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      {...props}
      className={twMerge(
        "w-full bg-primary h-12 p-2 flex justify-between",
        props.className
      )}
    >
      <Logo color="white" />
      <Bars3Icon onClick={() => setIsOpen(true)} />
      <SideMenu isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};
type SideMenuProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const SideMenu = ({ isOpen, handleClose }: SideMenuProps) => {
  if (!isOpen) return <></>;
  return createPortal(
    <div className="absolute inset-0 backdrop-blur-sm flex justify-end">
      <div className="h-full w-3/4 bg-primary rounded-sm shadow-neutral-dark shadow-2xl relative">
        <div className="h-12 flex p-2 justify-between">
          <div></div>
          <XMarkIcon
            className="text-neutral-contrast hover:text-neutral-contrast-dark h-8"
            onClick={handleClose}
          />
        </div>
        <div className="">
          <Nav onClick={handleClose} to={"/"}>
            Home
          </Nav>
          <Nav onClick={handleClose} to={"/church"}>
            Church
          </Nav>
          <Nav onClick={handleClose} to={"/profiles"}>
            Profiles
          </Nav>

        </div>
        <div className="bottom-0 absolute left-0 right-0 p-4">
          <SignOut />
        </div>
      </div>
    </div>,
    document.body
  );
};

const Nav = (props: Parameters<typeof NavLink>[0]) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      twMerge(
        "text-neutral-contrast font-bold text-2xl uppercase w-full text-center p-2 block",
        isActive && "text-secondary"
      )
    }
  />
);
