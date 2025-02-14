import { twMerge } from "tailwind-merge";
type ButtonStyle = "primary" | "secondary" | "success"
export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "style"> & {
  outline?: boolean;
  style?: ButtonStyle;
};

const CLASS_BY_STYLE: Record<ButtonStyle, string> = {
  primary: "bg-primary hover:bg-primary-light border-primary",
  secondary: "bg-neutral-contrast hover:bg-neutral-contrast-dark text-neutral border-neutral-contrast [&.outline]:text-neutral-contrast",
  success: "bg-success hover:bg-success-dark border-success text-success-contrast",
};

export const Button = ({
  style = "secondary",
  outline,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={twMerge(
      "p-2 px-4 rounded-xl border w-full disabled:grayscale disabled:contrast-50",
      CLASS_BY_STYLE[style],
      outline && "bg-opacity-0 outline",
      props.className
    )}
  />
);
