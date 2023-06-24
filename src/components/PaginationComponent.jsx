import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../index.css";

function PaginationComponent() {
  return (
    <>
      <Pagination>
        <Pagination.Prev id="pagg-item" />
        <Pagination.Next id="pagg-item" />
      </Pagination>
    </>
  );
}

export default PaginationComponent;
