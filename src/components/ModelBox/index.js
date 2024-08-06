import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

const ModelBox = ({ showModel, editText, setEditText, setShowModal, handleUpdateTask }) => {
    return (

        <Modal show={showModel} onHide={() => setShowModal(false)}>


            <Modal.Header closeButton>
                Edit Task
            </Modal.Header>

            <Modal.Body>
                <Form.Control type='text' value={editText} onChange={(e) => setEditText(e.target.value)} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShowModal(false)} > Close</Button>
                <Button onClick={handleUpdateTask} >Save Change </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModelBox