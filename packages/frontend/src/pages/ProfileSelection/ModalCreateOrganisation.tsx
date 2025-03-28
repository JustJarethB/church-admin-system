import api from "@/api";
import { Button, Input } from "@/components";
import { RoutedModal } from "@/components/Modal";
import { useSetError } from "@/providers/ErrorProvider";
import { createRef, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ModalCreateOrganisation = () => {
    const setError = useSetError()
    const formRef = createRef<HTMLFormElement>();
    const navigate = useNavigate();
    const { mutate, isPending, isSuccess, isError, data, error } = api.organisation.create.useMutation()
    const onClick = async (e: FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return
        const formData = [...formRef.current.querySelectorAll('input')].reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {} as Record<string, string>)
        mutate({ name: formData["Organisation Name"] })
    }
    isSuccess && navigate(`/organisations/${data.id}/edit`)
    useEffect(() => {
        if (error) setError(error.message)
    }, [error])

    return (
        <RoutedModal title="Create Organisation">
            <form ref={formRef} className="flex-1 flex flex-col gap-4 justify-between h-full">
                <Input id="Organisation Name" />
                <Button onClick={onClick} style="success">Create {isPending && "spinner"} {isSuccess && 'success'} {isError && 'error'}</Button>
            </form>
        </RoutedModal>
    );
};
