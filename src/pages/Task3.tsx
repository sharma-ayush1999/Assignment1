import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddPhoneNumber } from "../components/AddPhoneNumber";

export const Task3: React.FC = () => {
  const [mapArray, setmapArray] = useState<Object[]>([{ phoneNumber: '' }]);
  const [phoneArray, setPhoneArray] = useState<any[]>([]);
  let count = 0;

  const AddPhoneNumberInput = () => {
    count = count + 1;
    setmapArray([...mapArray, { id: count }]);
  };

  const savePhoneNumbers = (childData: string) => {
   setPhoneArray([...phoneArray, {[`phoneNumber`]: childData}]);
 };

  return (
    <div>
      <h4>Add Phone Number</h4>
      <ul>
        {mapArray?.map((item: any, index: number) => (
          <li key={index}>
            <AddPhoneNumber parentCallback={savePhoneNumbers} />
          </li>
        ))}
      </ul>
      <Button onClick={AddPhoneNumberInput} variant="secondary">
        Add Another Phone Number
      </Button>
      <Button onClick={() => console.log(phoneArray)} variant="success">Submit</Button>
    </div>
  );
};
