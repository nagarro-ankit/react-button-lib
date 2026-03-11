import React from "react";

const Button = ({ label = "Click Me" }) => {
  return (
    <button
      style={{
        padding: "10px 16px",
        background: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
};

export default Button;