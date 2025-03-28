import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = JSX.IntrinsicElements["input"] & {
  label: string
}


export const Input = (props: InputProps) => (
  <Labelled label={props.label} staticc={props.readOnly} className="text-neutral">
    <input
      required
      {...props}
      className={twMerge(
        !props.readOnly && "peer py-4 w-full rounded-xl disabled:bg-opacity-50 bg-neutral-contrast px-8 text-sm outline-none",
        props.readOnly && " py-4 w-full px-8 text-sm outline-none bg-[inherit] text-white",
        props.className
      )}
    />
  </Labelled>
);

type LabelProps = PropsWithChildren<{
  label: string,
  staticc?: boolean,
  htmlFor?: string,
  className?: string
}>
export const Labelled = ({ children, label, staticc = true, htmlFor, className }: LabelProps) => <div className={twMerge("group relative", className)}>
  {children}
  <label
    htmlFor={htmlFor}
    className={twMerge(
      !staticc && "absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-neutral-contrast peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-neutral-contrast",
      staticc && "absolute left-2 flex transform items-center transition-all duration-300 -top-7 h-1/2 pl-0 text-base text-neutral-contrast peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-neutral-contrast",
    )}>{label}</label>
</div>