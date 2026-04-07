import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300 ${className}`}
    />
  );
};
