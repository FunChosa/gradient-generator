import React, { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import DirectionPicker from "./DirectionPicker";
import {
  DIRECTIONS,
  DEFAULT_COLORS,
  DEFAULT_PARTS,
  DEFAULT_TYPE,
} from "../constants";
import TypePicker from "./TypePicker";
import CssPicker from "./CssPicker";

const GradientGenerator = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [parts, setParts] = useState(DEFAULT_PARTS);
  const [direction, setDirection] = useState(DIRECTIONS[0].name);
  const [type, setType] = useState(DEFAULT_TYPE);
  const [copied, setCopied] = useState(false);

  const [gradientCss, setGradientCss] = useState(
    `${type}-gradient(${direction}, ${colors.start} ${parts.start}%, ${colors.end} ${parts.end}%)`
  );

  useEffect(() => {
    setGradientCss(
      `${type}-gradient(${direction}, ${colors.start} ${parts.start}%, ${colors.end} ${parts.end}%)`
    );
  }, [colors, direction, parts, type]);

  return (
    <>
      <div className="gradient-container">
        <h1>Gradient Generator</h1>
        <TypePicker
          DIRECTIONS={DIRECTIONS}
          type={type}
          setType={setType}
          setDirection={setDirection}
        />
        <ColorPicker
          colors={colors}
          setColors={setColors}
          parts={parts}
          setParts={setParts}
        />
        {type === "linear" && (
          <div className="gradient-direction">
            <h2>Direction</h2>
            <DirectionPicker
              directions={DIRECTIONS}
              currentDirection={direction}
              setDirection={setDirection}
            />
          </div>
        )}
        <CssPicker
          gradientCss={gradientCss}
          copied={copied}
          setCopied={setCopied}
        />
      </div>
      <div
        className="preview-container"
        style={{
          background: gradientCss,
        }}
      />
    </>
  );
};

export default GradientGenerator;
