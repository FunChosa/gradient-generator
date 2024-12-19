import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ colors, setColors, parts, setParts }) => {
  return (
    <div className="colors">
      <h2>Color #1</h2>
      <SketchPicker
        color={colors.start}
        onChange={(color) => setColors({ ...colors, start: color.hex })}
        width="300px"
        disableAlpha
        presetColors={[]}
      />
      <div className="slider">
        <p className="label" style={{ fontWeight: 500 }}>
          {parts.start}%
        </p>
        <div className="slider-bar" />
        <input
          type="range"
          min="0"
          max="100"
          style={{ width: "100%" }}
          defaultValue={parts.start}
          onChange={(e) =>
            setParts({ ...parts, start: `${e.currentTarget.value}` })
          }
        />
      </div>
      <h2>Color #2</h2>
      <SketchPicker
        color={colors.end}
        onChange={(color) => setColors({ ...colors, end: color.hex })}
        width="300px"
        disableAlpha
        presetColors={[]}
      />
      <div className="slider">
        <p className="label" style={{ fontWeight: 500 }}>
          {parts.end}%
        </p>
        <div className="slider-bar" />
        <input
          type="range"
          min="0"
          max="100"
          style={{ width: "100%" }}
          defaultValue={parts.end}
          onChange={(e) =>
            setParts({ ...parts, end: `${e.currentTarget.value}` })
          }
        />
      </div>
    </div>
  );
};

export default ColorPicker;
