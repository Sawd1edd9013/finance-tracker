import React from "react";

export const Panel = ({ title, right, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-5 ${className}`}>
      {(title || right) && (
        <div className="flex items-center justify-between mb-3">
          {title ? (
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          ) : (
            <div />
          )}
          {right ? <div>{right}</div> : null}
        </div>
      )}

      {children}
    </div>
  );
};
