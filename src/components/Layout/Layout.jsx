import { Link, Outlet } from "react-router-dom";
import { UserIcon, OutIcon } from "../icon";
import React from "react";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-200 px-8 py-8 flex flex-col">
        <h1 className="text-2xl font-bold">Finance Tracker</h1>

        <nav className="flex flex-col gap-6 text-xl mt-24">
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">История операций</Link>
          <Link to="/accounts">Счета</Link>
          <Link to="/categories">Категории</Link>
          <Link to="/settings">Настройки</Link>
        </nav>

        <div className="flex flex-col gap-3 text-lg mt-auto mb-10">
          <div className="flex items-center gap-2">
            <UserIcon />
            <span>Дарья</span>
          </div>

          <button className="flex items-center gap-2 text-left">
            <OutIcon />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 bg-gray-300 p-10">
        <Outlet />
      </main>
    </div>
  );
}
