import {
  ClockIcon,
  CheckIcon,
  CategoryIcon,
  CoinsIcon,
  ResetIcon,
} from "../icon";
import React from "react";

export const FilterPanel = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between mb-6">
        <div className="flex items-end gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <ClockIcon />
              <span className="text-base font-semibold mb-1">Период</span>
            </div>

            <div className="flex items-end gap-3">
              <input
                type="date"
                className="h-9 px-3 border border-slate-300 rounded-md text-base"
              />

              <span className="self-center text-slate-900 text-base">—</span>

              <input
                type="date"
                className="h-9 px-3 border border-slate-300 rounded-md text-base"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <CheckIcon />
              <span className="text-base font-semibold mb-1">Счет</span>
            </div>

            <select className="h-9 min-w-[120px] pl-3 pr-8 border border-slate-300 rounded-md text-base">
              <option>Все</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <CategoryIcon />
              <span className="text-base font-semibold mb-1">Категория</span>
            </div>

            <select className="h-9 pl-3 pr-8 border border-slate-300 rounded-md text-base">
              <option>Все</option>
            </select>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <CoinsIcon />
              <span className="text-base font-semibold mb-1">Тип</span>
            </div>

            <select className="h-9 min-w-[120px] pl-3 pr-8 border border-slate-300 rounded-md text-base">
              <option>Все</option>
            </select>
          </div>

          <button className="flex items-center gap-2 h-9 px-3 border border-slate-300 rounded-md text-base hover:bg-slate-100">
            <ResetIcon />
            Сбросить
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};
