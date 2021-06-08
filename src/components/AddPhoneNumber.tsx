import React from 'react'
import { Form } from 'react-bootstrap';

export const AddPhoneNumber = ({ parentCallback }: any) => {
  const passPhoneNumber = (event: any) => {
    parentCallback(event.target.value);
    event.preventDefault();
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onFocus={() => console.log(1)} onBlur={passPhoneNumber} type="text" name="phone" placeholder="phone number" />
        </Form.Group>
      </Form>
    </div>
  );
};

