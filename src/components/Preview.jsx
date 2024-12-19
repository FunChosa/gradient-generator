import React from "react";

const Preview = ({ gradientCss }) => {
  return (
    <div
      style={{
        background: gradientCss,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Preview;
