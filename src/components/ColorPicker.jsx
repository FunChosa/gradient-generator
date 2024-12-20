import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ colors, setColors, parts, setParts }) => {
  const colorsArray = [
    {
      title: "Color #1",
      value: "start",
      color: colors.start,
      parts: parts.start,
    },
    {
      title: "Color #2",
      value: "end",
      color: colors.end,
      parts: parts.end,
    },
  ];

  return (
    <div className="gradient-colors">
      {colorsArray.map((el) => (
        <React.Fragment key={el.value}>
          <h2>{el.title}</h2>
          <SketchPicker
            color={el.color}
            onChange={(color) =>
              setColors({ ...colors, [el.value]: color.hex })
            }
            width="300px"
            disableAlpha
            presetColors={[]}
          />
          <div className="slider">
            <p className="label">{el.parts}%</p>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue={el.parts}
              onChange={(e) =>
                setParts({ ...parts, [el.value]: `${e.currentTarget.value}` })
              }
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ColorPicker;
