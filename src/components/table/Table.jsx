import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export const Table = ({
  columns = [],
  data = [],
  rowKey = (row, index) => row?.id ?? index,
  renderCell,
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-base border-collapse">
        <TableHeader columns={columns} />

        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowKey(row, rowIndex)}
              columns={columns}
              row={row}
              rowIndex={rowIndex}
              renderCell={renderCell}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
