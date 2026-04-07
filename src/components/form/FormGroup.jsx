import React from "react";

export const FormGroup = ({ label, children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label ? <label className="text-base font-medium">{label}</label> : null}
      {children}
    </div>
  );
};
