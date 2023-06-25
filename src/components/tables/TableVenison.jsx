import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { BsSortAlphaDown } from "react-icons/bs";

function TableVenison({ data, handleSort }) {
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
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((vension) => {
          return (
            <tr key={vension.id}>
              <td>{vension.name}</td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}

export default TableVenison;
