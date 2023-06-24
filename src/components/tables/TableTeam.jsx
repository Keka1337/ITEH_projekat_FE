import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function TableTeam() {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Members</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TableTeam;
