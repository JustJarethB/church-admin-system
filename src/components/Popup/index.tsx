import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";

export * from "./Routed";

export type PopupProps = PropsWithChildren<{
  open?: boolean;
  handleClose?: () => void;
  captive?: boolean;
}>;

export const Popup = (props: PopupProps) => {
  const { open, handleClose, children, captive } = props;
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
    target,
  }) => {
    if (captive) return;
    if (currentTarget !== target) return;
    handleClose?.();
  };
  if (!open) return <></>;
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex items-center justify-center p-2"
    >
      <div className="bg-neutral text-neutral-contrast rounded w-full min-h-12">
        <div className="w-full grid justify-end p-2 ">
          <XMarkIcon
            className="text-error border-error border rounded-full p-0.5 hover:text-error-dark h-8"
            onClick={handleClose}
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};
