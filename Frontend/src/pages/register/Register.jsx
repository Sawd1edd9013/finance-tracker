import { Link, useNavigate } from "react-router-dom";
import { FormCard, FormGroup, Input } from "../../components";
import React, { useState } from "react";
import { registerUser } from "../../api/auth";

export const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");

  const setField = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (values.password !== values.repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    try {
      await registerUser({ login: values.login, password: values.password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-semibold text-slate-800 mb-16">
        Finance Tracker
      </h1>

      <FormCard title="Регистрация" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormGroup label="Логин">
            <Input
              type="text"
              placeholder="Введите логин"
              value={values.login}
              onChange={(e) => setField("login", e.target.value)}
              className="h-12 text-lg"
            />
          </FormGroup>

          <FormGroup label="Пароль">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={values.password}
              onChange={(e) => setField("password", e.target.value)}
              className="h-12 text-lg"
            />
          </FormGroup>

          <FormGroup label="Повтор пароля">
            <Input
              type="password"
              placeholder="Повторите пароль"
              value={values.repeatPassword}
              onChange={(e) => setField("repeatPassword", e.target.value)}
              className="h-12 text-lg"
            />
          </FormGroup>

          {error ? <div className="text-sm text-red-600">{error}</div> : null}

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
      </FormCard>
    </div>
  );
};
