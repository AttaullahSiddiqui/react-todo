import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const {addFunc} = props;

    const submitAddTodo = (e)=>{
        e.preventDefault();
        if(!title || !desc)return;
        addFunc({title,desc});
        setTitle("");
        setDesc("");
    }

  return (
    <div className="container">
      <h2 className="text-center my-3">AddTodo</h2>
      <Form onSubmit={submitAddTodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Button variant="success" type="submit" size="lg">
          Add
        </Button>
      </Form>
    </div>
  );
};
