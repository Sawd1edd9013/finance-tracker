import React, { useState } from "react";
import { FormCard } from "../form/FormCard";
import { FormGroup } from "../form/FormGroup";
import { Input } from "../form/Input";

export const AccountForm = ({
  mode = "create",
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = useState({
    name: initialValues?.name ?? "",
    type: initialValues?.type ?? "",
    balance: initialValues?.balance ?? "",
  });

  const setField = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const title = mode === "edit" ? "Редактирование счета" : "Новый счет";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <div className="px-8 pt-4 pb-8">
      <FormCard title={title}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FormGroup label="Название">
            <Input
              type="text"
              placeholder="Например: Основная карта"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
            />
          </FormGroup>

          <FormGroup label="Тип счета">
            <select
              value={values.type}
              onChange={(e) => setField("type", e.target.value)}
              className="h-12 w-full px-4 text-lg rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            >
              <option value="">Выберите тип счета</option>
              <option value="debit">Дебетовая карта</option>
              <option value="cash">Наличные</option>
              <option value="deposit">Вклад</option>
            </select>
          </FormGroup>

          <FormGroup label="Баланс">
            <Input
              type="number"
              placeholder="Например: 124500"
              value={values.balance}
              onChange={(e) => setField("balance", e.target.value)}
            />
          </FormGroup>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-slate-300 rounded-md hover:bg-slate-100"
            >
              Отмена
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700"
            >
              Сохранить
            </button>
          </div>
        </form>
      </FormCard>
    </div>
  );
};
