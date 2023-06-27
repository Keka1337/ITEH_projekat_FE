import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { BsTrash, BsSortAlphaDown } from "react-icons/bs";

function TableAppointment({ data, dateleHandler, userRole, handleSort }) {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">
            Date{" "}
            <BsSortAlphaDown
              className="sort-btn"
              onClick={() => handleSort("date")}
            />
          </th>
          <th scope="col">Venison</th>
          <th scope="col">Team</th>
          <th scope="col">Comment</th>
          <th scope="col">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((appointment) => {
          return (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.venisonName}</td>
              <td>{appointment.teamName}</td>
              <td>{appointment.comment}</td>
              <td>
                {userRole === "ADMIN" && (
                  <BsTrash
                    className="delete-btn"
                    onClick={() => {
                      dateleHandler(appointment.id);
                    }}
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

export default TableAppointment;
