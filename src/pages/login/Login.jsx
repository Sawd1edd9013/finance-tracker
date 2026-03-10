import { Link } from "react-router-dom";
import { FormCard, FormGroup, Input } from "../../components";
import React from "react";

export const Login = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-semibold text-slate-800 mb-16">
        Finance Tracker
      </h1>

      <FormCard title="Вход" className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-8"></h2>

        <form className="space-y-6">
          <FormGroup label="Email">
            <Input
              type="email"
              placeholder="example@mail.com"
              className="h-12 text-xl"
            />
          </FormGroup>
          <FormGroup label="Пароль">
            <Input
              type="password"
              placeholder="••••••••"
              className="h-12 text-xl"
            />
          </FormGroup>
          <button
            type="submit"
            className="text-xl w-full h-12 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition text-base font-semibold"
          >
            Войти
          </button>
        </form>
        <p className="text-xl text-center text-slate-600 mt-6">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-slate-800 font-medium hover:underline"
          >
            Зарегистрироваться
          </Link>
        </p>
      </FormCard>
    </div>
  );
};
