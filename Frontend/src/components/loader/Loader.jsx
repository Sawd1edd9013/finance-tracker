import React from "react";

export const Loader = ({ text = "Загрузка..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      <span className="h-8 w-8 rounded-full border-4 border-slate-200 border-t-slate-700 animate-spin" />
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
};
