import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../index.css";

function PaginationComponent({ setPage, page, maxNumberOfPage }) {
  return (
    <>
      <Pagination>
        <Pagination.Prev
          id="pagg-item"
          className={page === 0 ? "disabled" : ""}
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}
        />
        <Pagination.Next
          id="pagg-item"
          className={page === maxNumberOfPage - 1 ? "disabled" : ""}
          onClick={() => {
            if (maxNumberOfPage - 1 > page) {
              setPage(page + 1);
            }
          }}
        />
      </Pagination>
    </>
  );
}

export default PaginationComponent;
