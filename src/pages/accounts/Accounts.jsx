import { PencilIcon, TrashIcon } from "../../components/icon";
import { PageHeader, Table } from "../../components";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Accounts = () => {
  const navigate = useNavigate();
  const columns = [
    { key: "name", title: "Название", align: "left" },
    { key: "type", title: "Тип счета", align: "left" },
    { key: "balance", title: "Баланс", align: "right" },
    { key: "actions", title: "Действия", align: "center" },
  ];

  const data = [
    {
      id: 1,
      name: "Основная карта",
      type: "Дебетовая карта",
      balance: "124 500 ₽",
    },
    { id: 2, name: "Накопительный вклад", type: "Вклад", balance: "350 000 ₽" },
    { id: 3, name: "Наличные", type: "Наличные", balance: "8 200 ₽" },
  ];
  return (
    <div className="px-8 pt-4 pb-8">
      <PageHeader title="Счета" />
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/accounts/new")}
            className="h-9 px-4 border border-slate-300 rounded-md text-base hover:bg-slate-100"
          >
            + Добавить счет
          </button>
        </div>

        <Table
          columns={columns}
          data={data}
          rowKey={(row) => row.id}
          renderCell={(col, row) => {
            if (col.key !== "actions") return row[col.key];

            return (
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => navigate(`/accounts/${row.id}/edit`)}
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
    </div>
  );
};
