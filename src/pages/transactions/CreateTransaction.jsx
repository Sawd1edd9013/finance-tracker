import React from "react";
import { TransactionForm } from "../../components";
import { useNavigate } from "react-router-dom";

export const CreateTransaction = () => {
  const navigate = useNavigate();

  return (
    <TransactionForm
      mode="create"
      onCancel={() => navigate("/transactions")}
      onSubmit={(values) => {
        console.log("create", values);
        navigate("/transactions");
      }}
    />
  );
};
