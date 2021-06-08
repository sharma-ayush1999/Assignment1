import React, { useContext } from "react";
import { TextContext } from "../pages/Task4";


export const Component3 = () => {
    const textContext = useContext(TextContext);
    return <div><input type="text" onChange={(e) => {
        textContext.dispatch({type: 'changeText',data: e.target.value});
        }} /></div>;
};
