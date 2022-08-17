import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddMovie = () => {
  return (
    <div className="container mt-5">
      <h1>Rate Your Favourite Movie</h1>
      <p>Fill out the below form and rate your experience</p>
      <div className="mt-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Favourite Movie</Form.Label>
            <Form.Control type="text" placeholder="Enter movie name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Movie Rating</Form.Label>
            <Form.Select>
              <option>1 Star</option>
              <option>2 Star</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddMovie;
