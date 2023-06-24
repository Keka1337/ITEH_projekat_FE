import TableHunter from "../components/tables/TableHunter";
import Search from "../components/Search";
import ModalHunter from "../components/modals/ModalHunter";
import "../index.css";
import { Col, Row } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
const Hunter = ({}) => {
  return (
    <div>
      <Row className="row-modal">
        <Col className="col-modal">
          <Search />
        </Col>
        <Col className="col-modal">
          <ModalHunter />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableHunter />
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </div>
  );
};

export default Hunter;
