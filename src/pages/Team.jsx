import { useState, useEffect } from "react";
import TableTeam from "../components/tables/TableTeam";
import Search from "../components/Search";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import ModalTeam from "../components/modals/ModalTeam";
import PaginationComponent from "../components/PaginationComponent";
import { create, getAllPagination, getTeam, edit } from "../api/team";
import Alert from "react-bootstrap/Alert";

const Team = ({}) => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(0);
  const [maxNumberOfPage, setMaxNumberOfPage] = useState(0);
  const [team, setTeam] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getAllTeams = async () => {
    const res = await getAllPagination(page, filter, sortBy);
    setTeams(res.content);
    setMaxNumberOfPage(Math.ceil(res.total / 5));
  };

  useEffect(() => {
    setUserRole(localStorage.getItem("role"));
  }, []);

  useEffect(() => {
    getAllTeams();
  }, [page, filter, sortBy]);

  const save = async (data) => {
    if (data.id) {
      try {
        const res = await edit(data);
        setSuccessMessage("Successfully updated team!");

        let teamsOld = JSON.parse(JSON.stringify(teams));
        teamsOld = teamsOld.map((teamOld) => {
          if (teamOld.id === data.id) {
            return res;
          }

          return teamOld;
        });
        setTeams(teamsOld);
      } catch (e) {
        setErrorMessage("Team cannot be updated!");
      }
    } else {
      try {
        const res = await create(data);
        setSuccessMessage("Successfully created team!");

        if (teams.length < 5) {
          let teamsOld = JSON.parse(JSON.stringify(teams));
          teamsOld.push(res);
          setTeams(teamsOld);
        }
      } catch (e) {
        setErrorMessage("Team cannot be created!");
      }
    }
  };

  const handleEdit = async (id) => {
    const res = await getTeam(id);
    setTeam(res);
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
          <ModalTeam handleSave={save} team={team} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableTeam
            data={teams}
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

export default Team;
