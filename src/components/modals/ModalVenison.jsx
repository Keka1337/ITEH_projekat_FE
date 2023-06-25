import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalVenison({ handleSave }) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setError(false);
    setName("");
    setShow(true);
  };
  const save = () => {
    setError(false);
    if (!name.length) {
      setError(true);
    } else {
      handleSave({
        name,
      });
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="primary" id="btn-new" onClick={handleShow}>
        New venison
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Venison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                  />
                  {error && (
                    <Form.Control.Feedback type="invalid">
                      Please enter venison name.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" id="btnSave" onClick={save}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVenison;
