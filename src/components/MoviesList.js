import React from "react";

import Form from "react-bootstrap/Form";
import MoviesTable from "./MoviesTable";

const MoviesList = () => {
  return (
    <div className="container mt-5">
      <h1>Favorite Movie List</h1>
      <p>List of favorite movies chosen by the users </p>
      <div className="mt-3 row justify-content-between">
        <div className="col-3">
          <Form.Control type="text" placeholder="Search" />
        </div>
        <div className="col-2">
          <Form.Select>
            <option>1 Star</option>
            <option>2 Star</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </Form.Select>
        </div>
      </div>
      <div className="mt-5">
        <MoviesTable />
      </div>
    </div>
  );
};

export default MoviesList;
