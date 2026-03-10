import React from "react";

export const MiniList = ({ items = [], footerText, onFooterClick }) => {
  return (
    <div>
      <div className="space-y-2">
        {items.map((it, idx) => (
          <div key={idx} className="text-base text-slate-800">
            {it}
          </div>
        ))}
      </div>

      <div className="mt-3 text-right">
        <button
          onClick={onFooterClick}
          className="text-base text-slate-600 hover:text-slate-900 hover:underline"
        >
          {footerText}
        </button>
      </div>
    </div>
  );
};
