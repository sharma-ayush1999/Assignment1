import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ComponentX } from "../components/ComponentX";

export const Task2 = () => {
  const [mapArray, setmapArray] = useState<Object[]>([]);
  let count = 0;

  const addComponentX = () => {
    setmapArray([...mapArray, { id: count + 1 }]);
  };
  return (
    <div>
      <Button onClick={addComponentX} variant="success">
        Add component X
      </Button>
      <ol>
      {mapArray?.map((item: any, index: number) => (

        <li key={index}>
          <ComponentX num={index} />
        </li>
      ))}
      </ol>
    </div>
  );
};
