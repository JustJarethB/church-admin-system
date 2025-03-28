import api from "@/api";
import { Button, Input, Labelled, ProfileImage } from "@/components";
import { useSetError } from "@/providers/ErrorProvider";
import { useRef } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
export const PageOrganisationDetails = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const navigate = useNavigate()
    const { id } = useParams();
    const setError = useSetError()
    const { pathname } = useLocation()
    const isEdit = (/\/edit$/).test(pathname)
    const [organisation] = api.organisation.ofId.useSuspenseQuery(id!)
    const [teams] = api.team.ofOrganisation.useSuspenseQuery(id!);
    const [profiles] = api.profile.ofOrganisation.useSuspenseQuery(id!);
    const { mutateAsync } = api.organisation.update.useMutation()
    console.log('data', organisation)
    if (!organisation) {
        setError('Organisation not found')
        return <Navigate to="/404" />
    }
    const onSubmit = () => { // TODO: custom <Form /> with this logic
        const formData = [...(formRef.current?.querySelectorAll('input') ?? [])].map(({ value, id }) => [id, value])
        const data = Object.fromEntries(formData)
        mutateAsync({ id: id!, ...data }).then(({ name }) => {
            setError("Successfully Updated " + name) // todo: setSuccess
            navigate("../")
        })
        console.log(formData, data)
    }
    return <div className="relative">
        {isEdit && (
            <div className="absolute right-0 top-0"><Button onClick={onSubmit} style="success">Save</Button></div>
        )}
        <ProfileImage displayName={organisation.name} />

        <form ref={formRef} className="flex-1 flex flex-col gap-8 mt-8 justify-between h-full">
            <Input readOnly={!isEdit} id="name" label="Organisation Name" defaultValue={organisation.name} />
            <Input readOnly={!isEdit} id="description" label="Organisation Description" defaultValue={organisation.description ?? "org"} />
            <Labelled label="Teams" className="mt-2 text-center">
                {teams.length <= 0 ?
                    <p className="pb-2">No Teams Found</p>
                    :
                    teams.map(team => <p>{team.name}</p>)
                }
                <Button style="secondary">Create Team</Button>
            </Labelled>
            <Labelled label="Profiles" className="mt-2 text-center">
                {
                    profiles.length <= 0 ?
                        <p className="pb-2">No Profiles Found</p>
                        :
                        profiles.map(profile => <p>{profile.id}</p>)
                }
                <Button style="secondary">Add Profile</Button>
            </Labelled>
        </form>
    </div>
}
