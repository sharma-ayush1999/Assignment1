import React, { createContext, useReducer } from "react";
import { Component1 } from "../components/Component1";
import { Component2 } from "../components/Component2";
import { Component3 } from "../components/Component3";
import { Component4 } from "../components/Component4";
import { Component5 } from "../components/Component5";

export const TextContext = createContext<any>("");

const initialState = "";
const reducer = ( state: any, action: any) => {
  switch (action.type) {
    case "changeText":
      return action.data;
    default:
      return initialState;
  }
};
export const Task4: React.FC = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <TextContext.Provider
      value={{
        state, dispatch
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ background: "#000", color: "#fff", width: '5vw', minWidth: '5vw', minHeight: '5vw' }}>
            <Component1 />
          </div>
          <div style={{ background: "#000", color: "#fff", width: '5vw', minWidth: '5vw', minHeight: '5vw' }}>
            <Component2 />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Component3 />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ background: "#000", color: "#fff", width: '5vw', minWidth: '5vw', minHeight: '5vw' }}>
            <Component4 />
          </div>
          <div style={{ background: "#000", color: "#fff", width: '5vw', minWidth: '5vw', minHeight: '5vw' }}>
            <Component5 />
          </div>
        </div>
      </div>
    </TextContext.Provider>
  );
};
