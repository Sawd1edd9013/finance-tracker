import React from "react";
import { useNavigate } from "react-router-dom";
import { AccountForm } from "../../components";

export const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <AccountForm
      mode="create"
      onCancel={() => navigate("/accounts")}
      onSubmit={(values) => {
        console.log("create account", values);
        navigate("/accounts");
      }}
    />
  );
};
