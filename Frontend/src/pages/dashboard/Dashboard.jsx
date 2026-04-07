import {
  RecentTable,
  MiniList,
  ChartStub,
  Panel,
  StatCard,
  PeriodSelector,
} from "./components";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="px-8 pt-4 pb-8">
      <div className="mb-4">
        <PeriodSelector />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <StatCard title="Баланс" value="124 500 ₽" hint="+4.2% за месяц" />
        <StatCard
          title="Доходы"
          value="85 000 ₽"
          hint="+12% к прошлому месяцу"
        />
        <StatCard
          title="Расходы"
          value="60 000 ₽"
          hint="-5% к прошлому месяцу"
        />
        <StatCard
          title="Чистый результат"
          value="25 000 ₽"
          hint="+8% к прошлому месяцу"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Panel title="Счета">
          <MiniList
            items={[
              "Основная карта — 124 500 ₽",
              "Накопительный вклад — 350 000 ₽",
              "Наличные — 8 200 ₽",
            ]}
            footerText="Перейти ко всем →"
            onFooterClick={() => navigate("/accounts")}
          />
        </Panel>

        <Panel title="Категории">
          <MiniList
            items={[
              "Продукты — Расход",
              "Зарплата — Доход",
              "Транспорт — Расход",
            ]}
            footerText="Перейти ко всем →"
            onFooterClick={() => navigate("/categories")}
          />
        </Panel>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Panel title="Динамика по дням">
          <ChartStub title="График (линия)" />
        </Panel>

        <Panel title="Структура расходов">
          <ChartStub title="График (круг)" />
        </Panel>
      </div>

      <Panel>
        <RecentTable />
      </Panel>
    </div>
  );
};
