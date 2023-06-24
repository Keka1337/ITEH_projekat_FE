import TableVenison from "../components/tables/TableVenison";
import Search from "../components/Search";
import "../App.css";
import ModalVenison from "../components/modals/ModalVenison";
import { Col, Row } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
const Venison = ({}) => {
  return (
    <div>
      <Row className="row-modal">
        <Col className="col-modal">
          <Search />
        </Col>
        <Col className="col-modal">
          <ModalVenison />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableVenison />
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </div>
  );
};

export default Venison;
