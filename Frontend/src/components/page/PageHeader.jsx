import React from "react";

export const PageHeader = ({ title }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-black-900 mb-6">{title}</h1>

      <div className="border-b border-gray-900 mb-6"></div>
    </>
  );
};
