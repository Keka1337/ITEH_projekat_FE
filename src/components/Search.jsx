import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "../index.css";

function Search() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <BsSearch />
      </InputGroup.Text>
      <Form.Control placeholder="Search" />
    </InputGroup>
  );
}

export default Search;
