import { twMerge } from "tailwind-merge";

export type InputProps = JSX.IntrinsicElements["input"];
export const Input = (props: InputProps) => (
  <div className="group relative text-neutral">
    <input
      required
      {...props}
      className={twMerge(
        "peer py-4 w-full rounded-xl disabled:bg-opacity-50 bg-neutral-contrast px-8 text-sm outline-none",
        props.className
      )}
    />
    <label
      htmlFor={props.id}
      className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-neutral-contrast peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-neutral-contrast"
    >
      {props.id}
    </label>
  </div>
);
