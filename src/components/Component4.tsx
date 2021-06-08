import React, { useContext } from "react";
import { TextContext } from "../pages/Task4";

export const Component4 = () => {
    const textContext = useContext(TextContext);
    return <div style={{ wordBreak: "break-word" }}>{textContext.state}</div>;
};
