import { Header } from "./Header";
import { Content } from "./Content";
import { useClearError, useErrors } from "@/providers/ErrorProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";

export const Page = (props: Parameters<typeof Content>[0]) => {
  return (
    <div className="relative">
      <Header className="sticky top-0 left-0" />
      <Errors />
      <Content {...props} />
    </div>
  );
};

const Errors = () => {
  const errors = useErrors()
  const clearError = useClearError()
  if (!Object.entries(errors).length) return <></>
  return createPortal(
    <div className="absolute z-50 top-0 left-0 right-0 text-neutral-contrast">
      <div className="grid gap-y-2 py-4">
        {
          Object.entries(errors).map(([key, value]) => (
            <div key={key} className="relative w-screen px-4">
              <div key={key} className="bg-error p-4 rounded-lg relative">
                <XMarkIcon className="absolute top-2 right-2 h-4 cursor-pointer" onClick={() => clearError(key)} />
                <div className="overflow-auto max-h-12">
                  {value}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    , document.body)
}