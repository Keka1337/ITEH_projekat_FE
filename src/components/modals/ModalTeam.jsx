import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalTeam({ handleSave, team }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState(false);

  const save = () => {
    setError(false);
    if (!teamName.length) {
      setError(true);
    } else {
      handleSave(
        {
          name: teamName,
        },
        id
      );
      setShow(false);
    }
  };

  const handleShow = () => {
    setError(false);

    setId(null);
    setTeamName("");

    setShow(true);
  };
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (team) {
      handleShow();
      setId(team.id);
      setTeamName(team.name);
    }
  }, [team]);

  return (
    <>
      <Button variant="primary" id="btn-new" onClick={handleShow}>
        New team
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              {id && (
                <Row>
                  <Col>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" autoFocus value={id} disabled />
                  </Col>
                </Row>
              )}
              <Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={teamName}
                    onChange={(event) => setTeamName(event.target.value)}
                  />
                  {error && (
                    <Form.Control.Feedback type="invalid">
                      Please enter team name.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="button" id="btnSave" onClick={save}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTeam;
