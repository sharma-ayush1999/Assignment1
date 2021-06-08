import React from 'react'
import { Form } from 'react-bootstrap';

export const AddPhoneNumber = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>
        </Form>
      </div>
    );
}

