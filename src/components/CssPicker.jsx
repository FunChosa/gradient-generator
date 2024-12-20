import React from "react";
import { FaRegCopy } from "react-icons/fa";

const CssPicker = ({ gradientCss, copied, setCopied }) => {
  return (
    <>
      <h2>Gradient CSS</h2>
      <div className="gradient-css">{gradientCss}</div>
      <button
        className="copy-btn"
        onClick={() => {
          navigator.clipboard.writeText(gradientCss);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        style={{
          backgroundColor: copied
            ? "var(--primary-color)"
            : "var(--background-color)",
        }}
      >
        {copied ? "Copied!" : "Copy"} <FaRegCopy />
      </button>
    </>
  );
};

export default CssPicker;
