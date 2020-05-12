import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"

export default function MessageForm(props) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Confirm</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ton Film préféré est enregistré !
          </Modal.Title>
        </Modal.Header>
  <Modal.Body>{props.comment}</Modal.Body>
      </Modal>
    </>
  )
}