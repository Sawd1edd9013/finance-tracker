import React from "react";

export const TableHeader = ({ columns = [] }) => {
  return (
    <thead>
      <tr className="border-b border-slate-300 text-gray-900">
        {columns.map((col) => (
          <th
            key={col.key}
            className={[
              "py-3 px-4 font-semibold",
              col.align === "center"
                ? "text-center"
                : col.align === "right"
                  ? "text-right"
                  : "text-left",
              col.headerClassName || "",
            ].join(" ")}
          >
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};
