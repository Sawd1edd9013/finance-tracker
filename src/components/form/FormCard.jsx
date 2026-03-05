import React from "react";

export const FormCard = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto ${className}`}
    >
      {title ? (
        <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
      ) : null}

      {children}
    </div>
  );
};
