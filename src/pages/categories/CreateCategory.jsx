import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryForm } from "../../components";

export const CreateCategory = () => {
  const navigate = useNavigate();

  return (
    <CategoryForm
      mode="create"
      onCancel={() => navigate("/categories")}
      onSubmit={(values) => {
        console.log("create category", values);
        navigate("/categories");
      }}
    />
  );
};
