import React from "react";
import { Component1 } from "../components/Component1";
import { Component2 } from "../components/Component2";
import { Component3 } from "../components/Component3";
import { Component4 } from "../components/Component4";
import { Component5 } from "../components/Component5";

export const Task4: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ background: "#000", color: "#fff" }}>
          <Component1 />
        </div>
        <div style={{ background: "#000", color: "#fff" }}>
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
        <div style={{ background: "#000", color: "#fff" }}>
          <Component3 />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ background: "#000", color: "#fff" }}>
          <Component4 />
        </div>
        <div style={{ background: "#000", color: "#fff" }}>
          <Component5 />
        </div>
      </div>
    </div>
  );
};
