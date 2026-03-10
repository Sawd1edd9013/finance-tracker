import React from "react";

export const PeriodSelector = () => {
  return (
    <div className="flex items-center justify-start gap-2 text-lg">
      <span className="text-slate-700 font-medium">Период:</span>

      <button className="h-8 px-3 text-base rounded-md border border-slate-300 bg-white hover:bg-slate-50">
        этот месяц
      </button>
      <button className="h-8 px-3 text-base rounded-md border border-slate-300 bg-white hover:bg-slate-50">
        прошлый месяц
      </button>
      <button className="h-8 px-3 text-base rounded-md border border-slate-300 bg-white hover:bg-slate-50">
        выбрать
      </button>
    </div>
  );
};
