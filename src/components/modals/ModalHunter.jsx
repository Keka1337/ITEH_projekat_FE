import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalHunter({ handleSave, teams, hunter }) {
  const [show, setShow] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [idNumberError, setIdNumberError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [licenceNumberError, setLicenceNumberError] = useState(false);
  const [teamError, setTeamError] = useState(false);

  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenceNumber, setLicenceNumber] = useState("");
  const [team, setTeam] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setIdNumberError(false);
    setPhoneNumberError(false);
    setLicenceNumberError(false);
    setTeamError(false);

    setId(null);
    setFirstName("");
    setLastName("");
    setIdNumber("");
    setPhoneNumber("");
    setLicenceNumber("");
    setTeam("");

    setShow(true);
  };

  const save = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setIdNumberError(false);
    setPhoneNumberError(false);
    setLicenceNumberError(false);
    setTeamError(false);

    let error = false;
    if (!firstName.length) {
      setFirstNameError(true);
      error = true;
    }

    if (!lastName.length) {
      setLastNameError(true);
      error = true;
    }

    if (!idNumber.length) {
      setIdNumberError(true);
      error = true;
    }

    if (!phoneNumber.length) {
      setPhoneNumberError(true);
      error = true;
    }

    if (!licenceNumber.length) {
      setLicenceNumberError(true);
      error = true;
    }

    if (!team.length) {
      setTeamError(true);
      error = true;
    }

    if (!error) {
      handleSave({
        id,
        name: firstName,
        lastname: lastName,
        jmbg: idNumber,
        phone: phoneNumber,
        team: {
          id: team,
        },
        licenceNum: licenceNumber,
      });
      setShow(false);
    }
  };

  useEffect(() => {
    if (hunter) {
      handleShow();
      setId(hunter.id);
      setFirstName(hunter.name);
      setLastName(hunter.lastname);
      setIdNumber(hunter.jmbg);
      setPhoneNumber(hunter.phone);
      setLicenceNumber(hunter.licenceNum);
      setTeam(hunter.team.id.toString());
    }
  }, [hunter]);

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
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  {firstNameError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter first name.
                    </Form.Control.Feedback>
                  )}
                </Col>
                <Col>
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  {lastNameError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter last name.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>ID number</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={idNumber}
                    disabled={id !== null}
                    onChange={(event) => setIdNumber(event.target.value)}
                  />
                  {idNumberError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter ID number.
                    </Form.Control.Feedback>
                  )}
                </Col>
                <Col>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                  {phoneNumberError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter phone number.
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Licence Number</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={licenceNumber}
                    disabled={id !== null}
                    onChange={(event) => setLicenceNumber(event.target.value)}
                  />
                  {licenceNumberError && (
                    <Form.Control.Feedback type="invalid">
                      Please enter licence number.
                    </Form.Control.Feedback>
                  )}
                </Col>
                <Col>
                  <Form.Label>Team</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setTeam(event.target.value)}
                    value={team}
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
                      Please select team.
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

export default ModalHunter;
