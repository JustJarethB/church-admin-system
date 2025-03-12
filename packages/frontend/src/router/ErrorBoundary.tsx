import { useSetError } from "@/providers/ErrorProvider";
import { useEffect } from "react";
import { isRouteErrorResponse, RouteObject, useRouteError } from "react-router-dom"

const getErrorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) return error.statusText
    if (!error) return 'Unknown Error'
    if (typeof error == 'string') return error;
    if (typeof error == 'number') return "Unimplemented Error Number " + error
    if (typeof error !== 'object') return "Malformed Error"
    if ('message' in error && typeof error.message == 'string') {
        return error.message
    }
    return "Uknown Error"
}

export const ErrorBoundary: RouteObject['ErrorBoundary'] = () => {
    const error = useRouteError()
    const setError = useSetError()
    useEffect(() => {
        setError(getErrorMessage(error))
    }, [error, setError])
    return <div className="text-center">
        <h1 className="text-2xl mt-[40vh]">Oops! Something went wrong</h1>
        <p>This component was unable to load</p>
    </div>
}