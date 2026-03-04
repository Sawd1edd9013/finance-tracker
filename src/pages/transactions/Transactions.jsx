import {
  ClockIcon,
  CheckIcon,
  CategoryIcon,
  CoinsIcon,
  ResetIcon,
  TrashIcon,
  PencilIcon,
} from "../../components/icon";
import React from "react";
export const Transactions = () => {
  return (
    <div className="px-8 pt-4 pb-8">
      <h1 className="text-4xl font-semibold text-black-900 mb-6">
        История операций
      </h1>

      <div className="border-b border-gray-900 mb-6"></div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-between mb-6">
          <div className="flex items-end gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <ClockIcon />
                <span className="text-base font-semibold mb-1">Период</span>
              </div>

              <div className="flex items-end gap-3">
                <input
                  type="date"
                  className="h-9 px-3 border border-slate-300 rounded-md text-base"
                />

                <span className="self-center text-slate-900 text-base">—</span>

                <input
                  type="date"
                  className="h-9 px-3 border border-slate-300 rounded-md text-base"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <CheckIcon />
                <span className="text-base font-semibold mb-1">Счет</span>
              </div>

              <select className="h-9 min-w-[120px] pl-3 pr-8 border border-slate-300 rounded-md text-base">
                <option>Все</option>
              </select>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <CategoryIcon />
                <span className="text-base min-w-[120px] font-semibold mb-1">
                  Категория
                </span>
              </div>

              <select className="h-9 pl-3 pr-8 border border-slate-300 rounded-md text-base">
                <option>Все</option>
              </select>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <CoinsIcon />
                <span className="text-base font-semibold mb-1">Тип</span>
              </div>

              <select className="h-9 min-w-[120px] pl-3 pr-8 border border-slate-300 rounded-md text-base">
                <option>Все</option>
              </select>
            </div>

            <button className="flex items-center gap-2 h-9 px-3 border border-slate-300 rounded-md text-base hover:bg-slate-100">
              <ResetIcon />
              Сбросить
            </button>
          </div>

          <button className="self-end h-9 px-5 bg-gray-700 text-white rounded-md text-base hover:bg-slate-600">
            + Добавить операцию
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-base border-collapse">
            <thead className="text-center">
              <tr className="border-b border-slate-300 text-slate-900">
                <th className="py-3 pr-4 font-semibold">Дата</th>
                <th className="py-3 px-4 font-semibold">Счёт</th>
                <th className="py-3 px-4 font-semibold">Категория</th>
                <th className="py-3 px-4 font-semibold">Тип</th>
                <th className="py-3 px-4 font-semibold ">Сумма</th>
                <th className="py-3 px-4 font-semibold">Комментарий</th>
                <th className="py-3 px-4 font-semibold text-center">
                  Действия
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-slate-300 hover:bg-slate-50 text-center">
                <td className="py-3 pr-4 ">12.06.2026</td>
                <td className="py-3 px-4">Дебетовая карта</td>
                <td className="py-3 px-4">Продукты</td>
                <td className="py-3 px-4">Расход</td>
                <td className="py-3 px-4">4 500 ₽</td>
                <td className="py-3 px-4">Пятёрочка</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
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
