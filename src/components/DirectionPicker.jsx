import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DirectionPicker = ({ directions, currentDirection, setDirection }) => {
  return (
    <ul>
      {directions.map((dir) => (
        <li
          key={dir.name}
          onClick={() => dir.name !== "center" && setDirection(dir.name)}
          className={`direction-btn ${
            dir.name === currentDirection ? "active" : ""
          }`}
        >
          {dir.name !== "center" && (
            <FaArrowRightLong
              style={{ transform: `rotate(${dir.rotate}deg)` }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DirectionPicker;
