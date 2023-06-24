import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalVenison() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <Form.Control type="text" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Latin name</Form.Label>
                  <Form.Control type="text" />
                </Col>
                <Col>
                  <Form.Label>Gender</Form.Label>
                  <Row>
                    <Col>
                      <Form.Check label="Male" type="radio" />
                    </Col>
                    <Col>
                      <Form.Check label="Female" inline type="radio" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Maximum number</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>From date</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>To date</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            id="btnSave"
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVenison;
