import React from "react";

export const StatCard = ({ title, value, hint }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="text-base text-slate-600">{title}</div>
      <div className="text-xl font-semibold text-slate-900 mt-1">{value}</div>
      {hint ? (
        <div className="text-base text-slate-500 mt-1">{hint}</div>
      ) : null}
    </div>
  );
};
