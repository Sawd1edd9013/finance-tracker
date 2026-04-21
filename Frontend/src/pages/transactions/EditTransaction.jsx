import { TransactionForm } from "../../components";
import { useEditTransaction } from "./hooks/useEditTransaction";
import React from "react";

export const EditTransaction = () => {
  const { transaction, error, handleSubmit, onCancel } = useEditTransaction();

  return (
    <div className="px-8 pt-4 pb-8">
      {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

      {transaction && (
        <TransactionForm
          mode="edit"
          initialValues={transaction}
          onCancel={onCancel}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
