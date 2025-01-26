/// <reference types="vite-plugin-svgr/client" />
import LogoSVG from "@/assets/IAW.svg?react";
type LogoProps = {
  color: "primary" | "secondary" | "white" | "black";
};
const CLASS_FROM_COLOR: Record<LogoProps["color"], string> = {
  primary: "text-primary",
  secondary: "text-secondary-dark",
  white: "text-neutral-contrast",
  black: "text-neutral",
};
export const Logo = ({ color }: LogoProps) => (
  <LogoSVG className={`${CLASS_FROM_COLOR[color]} h-full`} />
);
