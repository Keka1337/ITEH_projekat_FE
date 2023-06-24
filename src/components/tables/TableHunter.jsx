import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function TableHunter() {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">ID number</th>
          <th scope="col">Phone number</th>
          <th scope="col">Address</th>
          <th scope="col">Licence</th>
          <th scope="col">Team</th>
          <th scope="col">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TableHunter;
