import React from "react";
import { Table } from "../../../components";
import { useNavigate } from "react-router-dom";

export const RecentTable = () => {
  const navigate = useNavigate();
  const columns = [
    { key: "date", title: "Дата", align: "left" },
    { key: "category", title: "Категория", align: "left" },
    { key: "type", title: "Тип", align: "left" },
    { key: "amount", title: "Сумма", align: "right" },
  ];

  const data = [
    {
      id: 1,
      date: "12.06.2026",
      category: "Продукты",
      type: "Расход",
      amount: "4 500 ₽",
    },
    {
      id: 2,
      date: "12.06.2026",
      category: "Транспорт",
      type: "Расход",
      amount: "350 ₽",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        data={data}
        rowKey={(r) => r.id}
        renderCell={(col, row) => row[col.key]}
      />

      <div className="mt-3 text-right">
        <button
          onClick={() => navigate("/transactions")}
          className="text-sm text-slate-600 hover:text-slate-900 hover:underline"
        >
          Перейти к истории →
        </button>
      </div>
    </div>
  );
};
