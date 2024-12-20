import React from "react";

const TypePicker = ({ DIRECTIONS, type, setType, setDirection }) => {
  return (
    <div className="gradient-type">
      <button
        className={`type-btn ${type === "linear" ? "active" : ""}`}
        onClick={() => {
          setType("linear");
          setDirection(DIRECTIONS[0].name);
        }}
      >
        Linear
      </button>
      <button
        className={`type-btn ${type === "radial" ? "active" : ""}`}
        onClick={() => {
          setType("radial");
          setDirection("circle");
        }}
      >
        Radial
      </button>
    </div>
  );
};

export default TypePicker;
