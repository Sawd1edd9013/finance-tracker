import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { AuthFromError, Input, Button, H2 } from "../../components";
import { Navigate } from "react-router-dom";
import { setUser } from "../../actions";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constans";
import { useResetForm } from "../../hooks";

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы, цифры и _",
    )
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %",
    )
    .min(6, "Неверно заполнен пароль. Минимум 6 символа")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
  passcheck: yup
    .string()
    .required("Заполнител повтор пароля")
    .oneOf([yup.ref("password"), null], "Повтор пароля не совпадает"),
});

const RegistrationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(regFormSchema),
  });

  const [serverError, setserverError] = useState(null);

  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, res }) => {
      if (error) {
        setserverError(`Ошибка запроса: ${error}`);
        return;
      }

      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    });
  };
  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onChange: () => setserverError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () => setserverError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Проверка пароля..."
          {...register("passcheck", {
            onChange: () => setserverError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Зарегистрироваться
        </Button>
        {errorMessage && <AuthFromError>{errorMessage}</AuthFromError>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
