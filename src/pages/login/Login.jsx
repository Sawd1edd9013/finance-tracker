import { Link } from "react-router-dom";
import React from "react";

export const Login = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-semibold text-slate-800 mb-16">
        Finance Tracker
      </h1>

      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-lg p-10 shadow-sm">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-8">
          Вход
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-600">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="h-12 px-3 text-xl rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-600">Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              className="h-12 px-3 text-xl rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
          <button
            type="submit"
            className="text-lg w-full h-12 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition text-base font-semibold"
          >
            Войти
          </button>
        </form>
        <p className="text-lg text-center text-slate-600 mt-6">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-slate-800 font-medium hover:underline"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};
