import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon"
import { Suspense } from "react"
import { createPortal } from "react-dom"

const Spinner = () => createPortal(
    <div className="fixed inset-0  backdrop-blur-sm bg-opacity-0 z-50 text-neutral-contrast">
        <div className="flex justify-center items-center h-full">
            <ArrowPathIcon className="animate-spin h-12" />
        </div>
    </div>
    , document.body)
// const Suspended = () => <Spinner />
const Suspended = ({ children }: { children: React.ReactNode }) => <Suspense fallback={<Spinner />}>
    {children}
</Suspense>

export const withSuspense = <T extends JSX.IntrinsicAttributes>(Component: React.FC<T>) => (props: T) => <Suspended>
    <Component {...props} />
</Suspended>