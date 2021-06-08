import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ComponentY = ({ num, componentNumber }: any) => {
  const [formText, setFormText] = useState("");

  const saveText = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h4 style={{ color: "gray" }}>
        Component Y{componentNumber}
        {num}
      </h4>
      <Form>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Enter name</Form.Label>
          <Form.Control
            onChange={(e) => setFormText(() => e.target.value)}
            type="text"
            placeholder="enter text"
          />
          <Button onClick={saveText} variant="primary" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

