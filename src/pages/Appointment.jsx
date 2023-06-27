import { useState, useEffect } from "react";
import TableAppointment from "../components/tables/TableAppointment";
import Search from "../components/Search";
import "../App.css";
import ModalAppointment from "../components/modals/ModalAppointment";
import { Row, Col } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import {
  create,
  deleteAppointment,
  getAllPagination,
} from "../api/appointment";
import { getAllTeams } from "../api/team";
import { getAllVensions } from "../api/venison";
import Alert from "react-bootstrap/Alert";

const Appointment = ({}) => {
  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(0);
  const [maxNumberOfPage, setMaxNumberOfPage] = useState(0);
  const [teams, setTeams] = useState([]);
  const [vensions, setVensions] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getAllAppointments = async () => {
    const res = await getAllPagination(page, sortBy);
    setAppointments(res.content);
    setMaxNumberOfPage(Math.ceil(res.total / 5));
  };

  const getTeams = async () => {
    const res = await getAllTeams();
    setTeams(res);
  };

  const getVensions = async () => {
    const res = await getAllVensions();
    setVensions(res);
  };

  useEffect(() => {
    getTeams();
    getVensions();
    setUserRole(localStorage.getItem("role"));
  }, []);

  useEffect(() => {
    getAllAppointments();
  }, [page, sortBy]);

  const save = async (data) => {
    try {
      const res = await create(data);
      setSuccessMessage("Successfully created appointment!");

      if (appointments.length < 5) {
        let appointmentsOld = JSON.parse(JSON.stringify(appointments));
        appointmentsOld.push(res);
        setAppointments(appointmentsOld);
      }
    } catch (e) {
      setErrorMessage("Appointment cannot be created!");
    }
  };

  const dateleHandler = async (id) => {
    try {
      await deleteAppointment(id);
      setSuccessMessage("Successfully deleted appointment!");

      let appointmentsOld = JSON.parse(JSON.stringify(appointments));
      appointmentsOld = appointmentsOld.filter(
        (appointmentOld) => appointmentOld.id !== id
      );
      setAppointments(appointmentsOld);
    } catch (e) {
      setErrorMessage("Appointment cannot be deleted!");
    }
  };

  const handleSort = (attr) => {
    if (sortBy === attr) {
      attr = "";
    }
    setSortBy(attr);
  };

  return (
    <div>
      <Row className="row-modal">
        <Col className="col-modal offset-md-6">
          <ModalAppointment
            handleSave={save}
            teams={teams}
            vensions={vensions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableAppointment
            data={appointments}
            dateleHandler={dateleHandler}
            userRole={userRole}
            handleSort={handleSort}
          />
        </Col>
      </Row>
      <Row>
        <PaginationComponent
          setPage={setPage}
          maxNumberOfPage={maxNumberOfPage}
          page={page}
        />
      </Row>
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage("")}
          dismissible
        >
          <Alert.Heading>{successMessage}</Alert.Heading>
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
          <Alert.Heading>{errorMessage}</Alert.Heading>
        </Alert>
      )}
    </div>
  );
};

export default Appointment;
