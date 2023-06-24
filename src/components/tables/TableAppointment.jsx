import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function TableAppointment() {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Venison</th>
          <th scope="col">Team</th>
          <th scope="col">Comment</th>
          <th scope="col">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
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

export default TableAppointment;
