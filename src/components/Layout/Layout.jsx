import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Finance Tracker</h1>

        <nav className="flex flex-col gap-3">
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">История операций</Link>
          <Link to="/accounts">Счета</Link>
          <Link to="/categories">Категории</Link>
          <Link to="/settings">Настройки</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-slate-600 p-10">
        <Outlet />
      </main>
    </div>
  );
}
