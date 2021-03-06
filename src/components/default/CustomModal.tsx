import { Modal } from 'react-bootstrap';

import './CustomModal.css';

type Props = {
    title?: string,
    children?: React.ReactNode,
    show: boolean,
    handleClose: () => void,
    [x: string]: any
}

export default function BaseModal ({ title, children, handleClose, show, ...rest }: Props) {
    return (
        <Modal
            size="lg"
            animation={false}
            className="custom-modal"
            centered={true}
            show={show}
            onHide={handleClose}
            {...rest}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
