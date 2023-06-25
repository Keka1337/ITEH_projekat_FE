import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { BsPencil, BsSortAlphaDown } from "react-icons/bs";

function TableTeam({ data, handleEdit, userRole, handleSort }) {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">
            Name{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("name")}
            />
          </th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((team) => {
          return (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>
                {userRole === "ADMIN" && (
                  <BsPencil
                    className="edit-btn"
                    onClick={() => handleEdit(team.id)}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}

export default TableTeam;
