import { XMarkIcon } from "@heroicons/react/20/solid"
import { PropsWithChildren, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "../Button"
export type ModalProps = PropsWithChildren<{
    onClose: () => void
    title?: string
    captive?: boolean;

}>
export { RoutedModal } from "./Routed"

const MobileModal = ({ children, onClose, title = "", captive }: ModalProps) => {
    const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = ({
        currentTarget,
        target,
    }) => {
        if (captive) return;
        if (currentTarget !== target) return;
        onClose();
    };

    return (
        <div onClick={handleBackdropClick} className="absolute top-0 left-0 bottom-0 right-0 z-9 bg-black backdrop-blur-sm bg-opacity-40 p-2">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                <div className=" bg-neutral text-neutral-contrast rounded-lg w-full min-h-[50vh] p-4 flex flex-col justify-between gap-4">
                    <div className="">
                        <XMarkIcon className="ml-auto text-error hover:text-error-light cursor-pointer h-8" onClick={onClose} />
                        <h1 className="text-2xl mb-8 text-center font-bold">{title}</h1>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )

}
const DesktopModal = ({ children, onClose, title = "", captive }: ModalProps) => {
    const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = ({
        currentTarget,
        target,
    }) => {
        if (captive) return;
        if (currentTarget !== target) return;
        onClose();
    };

    return (
        <div onClick={handleBackdropClick} className="absolute top-0 left-0 bottom-0 right-0 z-9 bg-black backdrop-blur-sm bg-opacity-40 p-2">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral text-neutral-contrast min-w-[60vw] rounded-lg">
                <div className="p-4 h-8 flex mb-8">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <XMarkIcon className="ml-auto text-error hover:text-error-light cursor-pointer h-8" onClick={onClose} />
                </div>
                <div className="p-4">

                    {children}
                </div>
            </div>
        </div>
    )
}
export const Modal = (props: ModalProps) => {
    return createPortal(<MobileModal {...props} />, document.body)
}
export const useModalController = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    return { isOpen, open, close, setIsOpen }
}