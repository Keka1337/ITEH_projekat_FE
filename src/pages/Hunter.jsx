import { useState, useEffect } from "react";
import TableHunter from "../components/tables/TableHunter";
import Search from "../components/Search";
import ModalHunter from "../components/modals/ModalHunter";
import "../index.css";
import { Col, Row } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import { getAllTeams } from "../api/team";
import { create, getAllPagination, getHunter, edit } from "../api/hunter";
import Alert from "react-bootstrap/Alert";

const Hunter = ({}) => {
  const [hunters, setHunters] = useState([]);
  const [hunter, setHunter] = useState(null);
  const [page, setPage] = useState(0);
  const [maxNumberOfPage, setMaxNumberOfPage] = useState(0);
  const [teams, setTeams] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getAllHunters = async () => {
    const res = await getAllPagination(page, filter, sortBy);
    setHunters(res.content);
    setMaxNumberOfPage(Math.ceil(res.total / 5));
  };

  const getTeams = async () => {
    const res = await getAllTeams();
    setTeams(res);
  };

  useEffect(() => {
    getTeams();
    setUserRole(localStorage.getItem("role"));
  }, []);

  useEffect(() => {
    getAllHunters();
  }, [page, filter, sortBy]);

  const save = async (data) => {
    if (data.id) {
      try {
        const res = await edit(data);
        setSuccessMessage("Successfully updated hunter!");

        let huntersOld = JSON.parse(JSON.stringify(hunters));
        huntersOld = huntersOld.map((hunterOld) => {
          if (hunterOld.id === data.id) {
            return res;
          }

          return hunterOld;
        });

        setHunters(huntersOld);
      } catch (e) {
        setErrorMessage("Hunter cannot be updated!");
      }
    } else {
      try {
        const res = await create(data);
        setSuccessMessage("Successfully created hunter!");
        if (hunters.length < 5) {
          let huntersOld = JSON.parse(JSON.stringify(hunters));
          huntersOld.push(res);
          setHunters(huntersOld);
        }
      } catch (e) {
        setErrorMessage("Hunter cannot be created!");
      }
    }
  };

  const handleEdit = async (id) => {
    const res = await getHunter(id);
    setHunter(res);
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
          <ModalHunter handleSave={save} teams={teams} hunter={hunter} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableHunter
            data={hunters}
            handleEdit={handleEdit}
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

export default Hunter;
