import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function TableVenison() {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Latin name</th>
          <th scope="col">Gender</th>
          <th scope="col">Maximum number</th>
          <th scope="col">From date</th>
          <th scope="col">To date</th>
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
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TableVenison;
