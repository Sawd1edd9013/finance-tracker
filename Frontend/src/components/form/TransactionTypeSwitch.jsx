import React from "react";

export const TransactionTypeSwitch = ({
  value = "income",
  onChange,
  className = "",
}) => {
  const isIncome = value === "income";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={() => onChange?.("income")}
        className={`px-4 py-2 rounded-full border text-sm font-medium transition
          ${isIncome ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"}
        `}
      >
        Доход
      </button>

      <button
        type="button"
        onClick={() => onChange?.("expense")}
        className={`px-4 py-2 rounded-full border text-sm font-medium transition
          ${!isIncome ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"}
        `}
      >
        Расход
      </button>
    </div>
  );
};
