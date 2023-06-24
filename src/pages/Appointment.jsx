import TableAppointment from "../components/tables/TableAppointment";
import Search from "../components/Search";
import "../App.css";
import ModalAppointment from "../components/modals/ModalAppointment";
import { Row, Col } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
const Appointment = ({}) => {
  return (
    <div>
      <Row className="row-modal">
        <Col className="col-modal">
          <Search />
        </Col>
        <Col className="col-modal">
          <ModalAppointment />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableAppointment />
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </div>
  );
};

export default Appointment;
