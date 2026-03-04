import React from "react";

export const Icon = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 text-slate-900 -mt-0.5${className}`}
    >
      {children}
    </span>
  );
};
