import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryForm } from "../../components";

export const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    name: "Продукты",
    type: "expense",
  };

  return (
    <CategoryForm
      mode="edit"
      initialValues={initialValues}
      onCancel={() => navigate("/categories")}
      onSubmit={(values) => {
        console.log("edit category", id, values);
        navigate("/categories");
      }}
    />
  );
};
