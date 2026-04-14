import React from "react";
import { useNavigate } from "react-router-dom";
import { AccountForm } from "../../components";
import { createAccount } from "../../api/accounts";

export const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <AccountForm
      mode="create"
      onCancel={() => navigate("/accounts")}
      onSubmit={async (values) => {
        try {
          await createAccount({
            name: values.name,
            type: values.type,
            balance: Number(values.balance),
          });

          navigate("/accounts");
        } catch (e) {
          console.error(e);
        }
      }}
    />
  );
};
