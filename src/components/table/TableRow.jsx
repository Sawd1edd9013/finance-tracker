import React from "react";

export const TableRow = ({ columns, row, rowIndex, renderCell }) => {
  return (
    <tr className="border-b border-slate-300 hover:bg-slate-50">
      {columns.map((col) => {
        const content =
          typeof renderCell === "function"
            ? renderCell(col, row, rowIndex)
            : row[col.key];

        return (
          <td
            key={col.key}
            className={[
              "py-3 px-4",
              col.align === "center"
                ? "text-center"
                : col.align === "right"
                  ? "text-right"
                  : "text-left",
              col.cellClassName || "",
            ].join(" ")}
          >
            {content}
          </td>
        );
      })}
    </tr>
  );
};
