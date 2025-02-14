import { useNavigate } from "react-router-dom"
import { Modal, ModalProps } from "."

export const RoutedModal = (props: Omit<ModalProps, 'onClose'>) => {
    const navigate = useNavigate()
    return <Modal {...props} onClose={() => navigate(-1)} />
}