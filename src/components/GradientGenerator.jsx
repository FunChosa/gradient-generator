import React, { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import DirectionPicker from "./DirectionPicker";
import Preview from "./Preview";
import { DIRECTIONS } from "../constants";

const GradientGenerator = () => {
  const [colors, setColors] = useState({
    start: "#FF0744",
    end: "#0018FF",
  });
  const [direction, setDirection] = useState(DIRECTIONS[0].name);
  const [gradientType, setGradientType] = useState("linear");
  const [gradientCss, setGradientCss] = useState(
    `${gradientType}-gradient(${direction}, ${colors.start}, ${colors.end})`
  );
  const [parts, setParts] = useState({
    start: "0",
    end: "100",
  });

  useEffect(() => {
    setGradientCss(
      `${gradientType}-gradient(${direction}, ${colors.start} ${parts.start}%, ${colors.end} ${parts.end}%)`
    );
  }, [colors, direction, parts, gradientType]);

  return (
    <>
      <div className="gradient-generator">
        <h1>Gradient Generator</h1>
        <div className="gradient-type">
          <button
            className={`${gradientType === "linear" ? "active" : ""}`}
            onClick={() => {
              setGradientType("linear");
              setDirection(DIRECTIONS[0].name);
            }}
          >
            Linear
          </button>
          <button
            className={`${gradientType === "radial" ? "active" : ""}`}
            onClick={() => {
              setGradientType("radial");
              setDirection("circle");
            }}
          >
            Radial
          </button>
        </div>
        <ColorPicker
          colors={colors}
          setColors={setColors}
          parts={parts}
          setParts={setParts}
        />
        {gradientType === "linear" && (
          <DirectionPicker
            directions={DIRECTIONS}
            currentDirection={direction}
            setDirection={setDirection}
          />
        )}
        <textarea
          type="text"
          value={gradientCss}
          className="gradient-css"
          onChange={(e) => {
            setGradientCss(e.target.value);
          }}
        />
        <button className="copy-btn">Copy</button>
      </div>
      <div className="preview-container">
        <Preview gradientCss={gradientCss} />
      </div>
    </>
  );
};

export default GradientGenerator;
