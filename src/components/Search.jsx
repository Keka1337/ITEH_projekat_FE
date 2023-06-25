import React, { useEffect, useMemo } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "../index.css";
import debouce from "lodash.debounce";

function Search({ search }) {
  const debouncedResults = useMemo(() => {
    return debouce(search, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <BsSearch />
      </InputGroup.Text>
      <Form.Control placeholder="Search" onChange={debouncedResults} />
    </InputGroup>
  );
}

export default Search;
