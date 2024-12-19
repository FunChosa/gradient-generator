import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DirectionPicker = ({ directions, currentDirection, setDirection }) => {
  return (
    <ul>
      {directions.map((dir) => (
        <li
          key={dir.name}
          onClick={() => setDirection(dir.name)}
          className={`direction ${
            dir.name === currentDirection ? "active" : ""
          }`}
        >
          <FaArrowRightLong style={{ transform: `rotate(${dir.rotate}deg)` }} />
        </li>
      ))}
    </ul>
  );
};

export default DirectionPicker;
