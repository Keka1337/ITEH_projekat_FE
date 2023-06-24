import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalHunter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="btn-new" onClick={handleShow}>
        New hunter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hunter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>ID number</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Licence</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Col>
                <Col>
                  <Form.Label>Team</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select team</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
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

export default ModalHunter;
