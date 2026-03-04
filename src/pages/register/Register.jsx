import { Link } from "react-router-dom";
import React from "react";

export const Register = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-semibold text-slate-800 mb-16">
        Finance Tracker
      </h1>

      <div className="w-full max-w-lg bg-white rounded-lg p-10 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-8">
          Регистрация
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-700">Имя пользователя</label>
            <input
              type="text"
              className="h-12 px-4 text-lg rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-700">Email</label>
            <input
              type="email"
              className="h-12 px-4 text-lg rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-700">Пароль</label>
            <input
              type="password"
              className="h-12 px-4 text-lg rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xl text-slate-700">Повтор пароля</label>
            <input
              type="password"
              className="h-12 px-4 text-lg rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition text-xl font-semibold"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="text-xl text-center text-slate-600 mt-6">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="text-slate-800 font-medium hover:underline"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
