import React from "react";
import { TransactionForm } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

export const EditTransaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    type: "expense",
    date: "2026-06-12",
    accountId: "1",
    categoryId: "1",
    amount: "4500",
    comment: "Пятёрочка",
  };

  return (
    <TransactionForm
      mode="edit"
      initialValues={initialValues}
      onCancel={() => navigate("/transactions")}
      onSubmit={(values) => {
        console.log("edit", id, values);
        navigate("/transactions");
      }}
    />
  );
};
