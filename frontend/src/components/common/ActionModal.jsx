import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ActionModal = ({ show, onClose, children, title }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ minHeight: '300px', minWidth: '500px' }}>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ActionModal;