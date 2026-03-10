import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AccountForm } from "../../components";

export const EditAccount = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    name: "Основная карта",
    type: "debit",
    balance: "124500",
  };

  return (
    <AccountForm
      mode="edit"
      initialValues={initialValues}
      onCancel={() => navigate("/accounts")}
      onSubmit={(values) => {
        console.log("edit account", id, values);
        navigate("/accounts");
      }}
    />
  );
};
