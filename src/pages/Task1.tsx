import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export const Task1: React.FC = () => {
    const [index, setIndex] = useState<number>();
    const [nextNumber, setNextNumber] = useState<number>();

    const findNextNumber = (e: any) => {
        e.preventDefault();
        if(!index){
            alert('Please enter correct number');
        }
        else {
        index % 2 !== 0
          ? setNextNumber(index * index + 1)
          : setNextNumber(index * index - 1);
        }
    }

    return (
      <div>
        <h1>Find number</h1>
        <p>2,3,10,15,26,35,50,63,?</p>
        <h4>
          Required number : <span style={{color: 'red'}}>{nextNumber}</span>
        </h4>
        <Form>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Enter index</Form.Label>
            <Form.Control
              onChange={(e) => setIndex(parseInt(e.target.value))}
              type="number"
              placeholder="index"
            />
          </Form.Group>
          <Button onClick={findNextNumber} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}

