import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalAppointment({ handleSave, teams, vensions }) {
  const [show, setShow] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [teamError, setTeamError] = useState(false);
  const [vensionError, setVensionError] = useState(false);
  // const [commentError, setCommentError] = useState(false);
  const [date, setDate] = useState(null);
  const [team, setTeam] = useState(null);
  const [vension, setVension] = useState(null);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setDateError(false);
    setTeamError(false);
    setVensionError(false);
    setDate(null);
    setTeam(null);
    setVension(null);
    setComment(null);
    setShow(true);
  };

  const save = () => {
    setDateError(false);
    setTeamError(false);
    setVensionError(false);

    let error = false;
    if (!date || !date.length) {
      setDateError(true);
      error = true;
    }

    if (!team || !team.length) {
      setTeamError(true);
      error = true;
    }

    if (!vension || !vension.length) {
      setVensionError(true);
      error = true;
    }

    // if (comment.length === "") {
    //   setCommentError(true);
    //   error = true;
    // }

    if (!error) {
      handleSave({
        date: date,
        venison: {
          id: vension,
        },
        team: {
          id: team,
        },
        comment: comment,
      });
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="primary" id="btn-new" onClick={handleShow}>
        New appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(event) => setDate(event.target.value)}
                  />
                  {dateError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter date.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Venison</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setVension(event.target.value)}
                  >
                    <option value="">Select venison</option>
                    {vensions.map((vension) => {
                      return (
                        <option key={vension.id} value={vension.id}>
                          {vension.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  {vensionError && (
                    <Form.Control.Feedback type="invalid">
                      Please select Vension.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Team</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setTeam(event.target.value)}
                  >
                    <option value="">Select team</option>
                    {teams.map((team) => {
                      return (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  {teamError && (
                    <Form.Control.Feedback type="invalid">
                      Please select Team.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(event) => setComment(event.target.value)}
                  />
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

export default ModalAppointment;
