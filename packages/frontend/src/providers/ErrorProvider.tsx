import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react"
type ErrorContextType = {
    errors: Record<string, string>,
    clearError: (key: string) => void,
    setError: (value: string) => void,
}
let _uuid = 0
const uuid = () => ++_uuid

const ErrorContext = createContext<ErrorContextType>({
    errors: {},
    clearError: function (): void {
        throw new Error("Function not implemented.")
    },
    setError: function (): void {
        throw new Error("Function not implemented.")
    }
})
export const ErrorProvider = ({ children }: PropsWithChildren) => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const clearError = useCallback((key: string) => {
        setErrors((prev) => {
            const { [key]: _, ...rest } = prev
            return rest
        })
    }, [])
    const setError = useCallback((value: string) => {
        setErrors((prev) => ({ ...prev, [uuid()]: value }))
    }, [])
    const value = useMemo(() => ({ errors, clearError, setError }), [errors, clearError, setError])
    console.log("errors", errors)
    return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}
const useError = () => {
    return useContext(ErrorContext)
}
export const useErrors = () => {
    return useError().errors
}
export const useClearError = () => {
    return useError().clearError
}
export const useSetError = () => {
    return useError().setError
}