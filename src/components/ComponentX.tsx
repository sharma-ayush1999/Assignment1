import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { ComponentY } from './ComponentY';

export const ComponentX = ({num}: any) => {

    const [componentName, setComponentName] = useState('Component X');
    const [showName, setShowName] = useState(false);
      const [mapArray, setmapArray] = useState<Object[]>([]);
      let count = 0;

      const addComponentY = () => {
        setmapArray([...mapArray, { id: count + 1 }]);
      };

      const changeComponentName = (e: any) => {
        e.preventDefault();
       setShowName(() => true);
      }


    return (
      <div>
        <h4 style={{color: "red"}}>
          {showName ? componentName : `ComponentX${num}`}
        </h4>
        <Form>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Enter name</Form.Label>
            <Form.Control
              onChange={(e) => setComponentName(() => e.target.value)}
              type="text"
              placeholder="component name"
            />
          </Form.Group>
          <Button onClick={changeComponentName} variant="primary" type="submit">
            Save
          </Button>
          <Button onClick={addComponentY} variant="success">
            +
          </Button>
        </Form>
        <ul>
          {mapArray?.map((item: any, index: number) => (
            <li key={index}>
              <ComponentY componentNumber={num} num={index} />
            </li>
          ))}
        </ul>
      </div>
    );
}

