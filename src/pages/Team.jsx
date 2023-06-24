import TableTeam from "../components/tables/TableTeam";
import Search from "../components/Search";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import ModalTeam from "../components/modals/ModalTeam";
import PaginationComponent from "../components/PaginationComponent";
const Team = ({}) => {
  return (
    <div>
      <Row className="row-modal">
        <Col className="col-modal">
          <Search />
        </Col>
        <Col className="col-modal">
          <ModalTeam />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableTeam />
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </div>
  );
};

export default Team;
