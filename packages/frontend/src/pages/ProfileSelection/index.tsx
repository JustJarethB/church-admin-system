import api from "@/api";
import { Button, ProfileSelector } from "@/components";
import { Modal, ModalProps, useModalController } from "@/components/Modal";
import { Link, Outlet } from "react-router-dom";

export const ProfileSelection = () => {
  const inviteModalController = useModalController()
  const { data: user } = api.user.current.useQuery()
  const { data: profiles } = api.profile.ofUser.useQuery();
  console.log({ user, profiles });
  if (profiles?.length === 0) return (
    <div className="flex flex-col justify-between items-center p-8 gap-2">
      <div className="h-[20vh]" />
      <h1 className="text-3xl font-bold">You have no profiles</h1>
      <div className="h-[20vh]" />
      <Button onClick={inviteModalController.open}>Expecting an Invitation</Button>
      <Link to={"./create"}>Create Organisation</Link>
      {inviteModalController.isOpen && <WaitingForInviteModal onClose={inviteModalController.close} />}
      <Outlet />
    </div>
  )
  return (
    <div className="flex flex-col justify-between py-4">
      <div className="border rounded border-neutral-light grid gap-2 grid-cols-2">
        {profiles?.map((profile) => {
          return <ProfileSelector key={profile.organisationId} profileId={profile.id} />
        })}
        <ProfileSelector />
      </div>
    </div>
  )
}

const WaitingForInviteModal = ({ onClose }: ModalProps) => <Modal title="Waiting for Invitation" onClose={onClose}>
  <div className="text-center flex-1">
    <p className="mb-4">It looks like we don't have any invitations matching your account yet.</p>
    <p>Reach out to your administrator to make sure your details match</p>
  </div>
</Modal>
