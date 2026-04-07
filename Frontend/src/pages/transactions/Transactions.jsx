import { PencilIcon, TrashIcon } from "../../components/icon";
import { PageHeader, FilterPanel, Table } from "../../components";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Transactions = () => {
  const navigate = useNavigate();

  const columns = [
    { key: "date", title: "Дата", align: "center" },
    { key: "account", title: "Счёт", align: "center" },
    { key: "category", title: "Категория", align: "center" },
    { key: "type", title: "Тип", align: "center" },
    { key: "amount", title: "Сумма", align: "center" },
    { key: "comment", title: "Комментарий", align: "center" },
    { key: "actions", title: "Действия", align: "center" },
  ];

  const data = [
    {
      id: 1,
      date: "12.06.2026",
      account: "Дебетовая карта",
      category: "Продукты",
      type: "Расход",
      amount: "4 500 ₽",
      comment: "Пятёрочка",
    },
  ];

  return (
    <div className="px-8 pt-4 pb-8">
      <PageHeader title="История операций" />

      <FilterPanel>
        <button
          onClick={() => navigate("/transactions/new")}
          className="self-end h-9 px-5 bg-gray-700 text-white rounded-md text-base hover:bg-slate-600"
        >
          + Добавить операцию
        </button>
      </FilterPanel>

      <Table
        columns={columns}
        data={data}
        rowKey={(row) => row.id}
        renderCell={(col, row) => {
          if (col.key !== "actions") return row[col.key];

          return (
            <div className="flex justify-center gap-3">
              <button
                onClick={() => navigate(`/transactions/${row.id}/edit`)}
                className="text-slate-900 hover:text-slate-800"
              >
                <PencilIcon />
              </button>

              <button className="text-slate-900 hover:text-red-600">
                <TrashIcon />
              </button>
            </div>
          );
        }}
      />
    </div>
  );
};
