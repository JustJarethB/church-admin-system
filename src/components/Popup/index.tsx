import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { XCircleIcon } from "@heroicons/react/24/solid";
type PopupProps = {
  open?: boolean;
  handleClose?: () => void;
};
export const Popup = ({
  open,
  handleClose,
  children,
}: PropsWithChildren<PopupProps>) => {
  if (!open) return <></>;
  return createPortal(
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex items-center justify-center p-2">
      <div className="bg-neutral text-neutral-contrast rounded w-full min-h-12">
        <div className="w-full grid justify-end p-2 ">
          <XCircleIcon
            className="text-error hover:text-error-dark h-8"
            onClick={handleClose}
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};
