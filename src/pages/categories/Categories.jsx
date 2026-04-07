import { PencilIcon, TrashIcon } from "../../components/icon";
import { PageHeader, Table } from "../../components";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Categories = () => {
  const navigate = useNavigate();
  const columns = [
    { key: "name", title: "Название", align: "left" },
    { key: "type", title: "Тип", align: "left" },
    { key: "actions", title: "Действия", align: "center" },
  ];

  const data = [
    { id: 1, name: "Продукты", type: "Расход" },
    { id: 2, name: "Зарплата", type: "Доход" },
    { id: 3, name: "Транспорт", type: "Расход" },
  ];
  return (
    <div className="px-8 pt-4 pb-8">
      <PageHeader title="Категории" />
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/categories/new")}
            className="h-9 px-4 border border-slate-300 rounded-md text-base hover:bg-slate-100"
          >
            + Добавить категорию
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
                  onClick={() => navigate(`/categories/${row.id}/edit`)}
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
