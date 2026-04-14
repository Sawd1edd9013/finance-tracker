import { PencilIcon, TrashIcon } from "../../components/icon";
import { PageHeader, Table } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccounts, deleteAccount } from "../../api/accounts";
import { ACCOUNT_TYPE_LABELS } from "../../constans/accountTypeLabels";
import React from "react";

export const Accounts = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const columns = [
    { key: "name", title: "Название", align: "left" },
    { key: "type", title: "Тип счета", align: "left" },
    { key: "balance", title: "Баланс", align: "right" },
    { key: "actions", title: "Действия", align: "center" },
  ];

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAccount(id);

      // обновляем список
      const data = await getAccounts();
      setAccounts(data.data);
    } catch (e) {
      console.error(e);
    }
  };

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
          data={accounts}
          rowKey={(row) => row.id}
          renderCell={(col, row) => {
            if (col.key === "type") {
              return ACCOUNT_TYPE_LABELS[row.type] || row.type;
            }

            if (col.key !== "actions") return row[col.key];

            return (
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => navigate(`/accounts/${row.id}/edit`)}
                  className="text-slate-900 hover:text-slate-800"
                >
                  <PencilIcon />
                </button>
                <button
                  onClick={() => handleDelete(row.id)}
                  className="text-slate-900 hover:text-red-600"
                >
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
