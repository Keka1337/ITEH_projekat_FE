import { useState, useEffect } from "react";
import TableVenison from "../components/tables/TableVenison";
import Search from "../components/Search";
import "../App.css";
import ModalVenison from "../components/modals/ModalVenison";
import { Col, Row } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import { create, getAllPagination } from "../api/venison";
import Alert from "react-bootstrap/Alert";

const Venison = ({}) => {
  const [vensions, setVensions] = useState([]);
  const [page, setPage] = useState(0);
  const [maxNumberOfPage, setMaxNumberOfPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getAllVensions = async () => {
    const res = await getAllPagination(page, filter, sortBy);
    setVensions(res.content);
    setMaxNumberOfPage(Math.ceil(res.total / 5));
  };

  useEffect(() => {
    getAllVensions();
  }, [page, filter, sortBy]);

  const save = async (data) => {
    try {
      const res = await create(data);
      setSuccessMessage("Successfully created venison!");

      if (vensions.length < 5) {
        let vensionsOld = JSON.parse(JSON.stringify(vensions));
        vensionsOld.push(res);
        setVensions(vensionsOld);
      }
    } catch (e) {
      setErrorMessage("Venison cannot be created!");
    }
  };

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase());
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
        <Col className="col-modal">
          <Search search={handleSearch} />
        </Col>
        <Col className="col-modal">
          <ModalVenison handleSave={save} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableVenison data={vensions} handleSort={handleSort} />
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

export default Venison;
