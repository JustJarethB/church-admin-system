import { twMerge } from "tailwind-merge";

export type InputProps = JSX.IntrinsicElements["input"] & {
  label: string
}


export const Input = (props: InputProps) => (
  <div className="group relative text-neutral">
    <input
      required
      {...props}
      className={twMerge(
        !props.readOnly && "peer py-4 w-full rounded-xl disabled:bg-opacity-50 bg-neutral-contrast px-8 text-sm outline-none",
        props.readOnly && " py-4 w-full px-8 text-sm outline-none bg-[inherit] text-white",
        props.className
      )}
    />
    <label
      htmlFor={props.id}
      className={twMerge(
        !props.readOnly && "absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-neutral-contrast peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-neutral-contrast",
        props.readOnly && "absolute left-2 flex transform items-center transition-all duration-300 -top-7 h-1/2 pl-0 text-base text-neutral-contrast peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-neutral-contrast",
      )}
    >
      {props.label}
    </label>
  </div>
);

