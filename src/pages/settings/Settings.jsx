import { FormCard, FormGroup, Input } from "../../components/form";
import React from "react";

export const Settings = () => {
  return (
    <div className="px-8 pt-4 pb-8">
      <h1 className="text-4xl font-semibold">Настройки</h1>
      <div className="h-px bg-gray-500 mb-6 mt-4"></div>

      <FormCard title="Данные пользователя">
        <form className="flex flex-col gap-6">
          <FormGroup label="Имя">
            <Input type="text" placeholder="Введите имя" />
          </FormGroup>

          <FormGroup label="Email">
            <Input type="email" placeholder="Введите email" />
          </FormGroup>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="px-6 py-2 border border-slate-300 rounded-md hover:bg-slate-100"
            >
              Сохранить
            </button>
          </div>
        </form>
      </FormCard>
    </div>
  );
};
