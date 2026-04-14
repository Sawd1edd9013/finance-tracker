import React, { useState, useEffect } from "react";
import { getAccounts, updateAccount } from "../../api/accounts";
import { useNavigate, useParams } from "react-router-dom";
import { AccountForm } from "../../components";

export const EditAccount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAccounts();
      const found = data.data.find((acc) => acc.id === id);
      setAccount(found);
    };

    fetch();
  }, [id]);

  if (!account) return null;

  return (
    <AccountForm
      mode="edit"
      initialValues={account}
      onCancel={() => navigate("/accounts")}
      onSubmit={async (values) => {
        try {
          await updateAccount(id, {
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
