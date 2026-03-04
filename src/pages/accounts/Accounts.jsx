import { PencilIcon, TrashIcon } from "../../components/icon";
import React from "react";

export const Accounts = () => {
  return (
    <div className="px-8 pt-4 pb-8">
      <h1 className="text-4xl font-semibold">Счета</h1>
      <div className="h-px bg-gray-500 mb-6 mt-4"></div>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-end mb-6">
          <button className="h-9 px-4 border border-slate-300 rounded-md text-base hover:bg-slate-100">
            + Добавить счет
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-base border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-slate-900">
                <th className="py-3 px-4 font-semibold text-left">Название</th>
                <th className="py-3 px-4 font-semibold text-left">Тип счета</th>
                <th className="py-3 px-4 font-semibold text-right">Баланс</th>
                <th className="py-3 px-4 font-semibold text-center">
                  Действия
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-slate-300 hover:bg-slate-50">
                <td className="py-3 px-4">Основная карта</td>
                <td className="py-3 px-4">Дебетовая карта</td>
                <td className="py-3 px-4 text-right">124 500 ₽</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-slate-500 hover:text-slate-800">
                      <PencilIcon />
                    </button>

                    <button className="text-slate-500 hover:text-red-600">
                      <TrashIcon />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-slate-300 hover:bg-slate-50">
                <td className="py-3 px-4">Накопительный вклад</td>
                <td className="py-3 px-4">Вклад</td>
                <td className="py-3 px-4 text-right">350 000 ₽</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-slate-500 hover:text-slate-800">
                      <PencilIcon />
                    </button>

                    <button className="text-slate-500 hover:text-red-600">
                      <TrashIcon />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-slate-300 hover:bg-slate-50">
                <td className="py-3 px-4">Наличные</td>
                <td className="py-3 px-4">Наличные</td>
                <td className="py-3 px-4 text-right">8 200 ₽</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-slate-500 hover:text-slate-800">
                      <PencilIcon />
                    </button>

                    <button className="text-slate-500 hover:text-red-600">
                      <TrashIcon />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
