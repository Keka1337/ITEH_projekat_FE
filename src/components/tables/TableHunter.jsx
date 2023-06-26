import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { BsPencil, BsSortAlphaDown } from "react-icons/bs";

function TableHunter({ data, handleEdit, userRole, handleSort }) {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">
            Firstname{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("name")}
            />
          </th>
          <th scope="col">
            Lastname{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("lastname")}
            />
          </th>
          <th scope="col">
            ID number{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("jmbg")}
            />
          </th>
          <th scope="col">
            Phone number{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("phone")}
            />
          </th>
          <th scope="col">
            Licence number{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("licenceNum")}
            />
          </th>
          <th scope="col">Team</th>
          <th scope="col">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((hunter) => {
          return (
            <tr key={hunter.id}>
              <td>{hunter.name}</td>
              <td>{hunter.lastname}</td>
              <td>{hunter.jmbg}</td>
              <td>{hunter.phone}</td>
              <td>{hunter.licenceNum}</td>
              <td>{hunter.team.name}</td>
              <td>
                {userRole === "ADMIN" && (
                  <BsPencil
                    className="edit-btn"
                    onClick={() => handleEdit(hunter.id)}
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

export default TableHunter;
