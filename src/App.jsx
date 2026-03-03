import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import React from "react";
import { Login } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<div>Dashboard</div>} />
        <Route path="transactions" element={<div>Transactions</div>} />
        <Route path="accounts" element={<div>Accounts</div>} />
        <Route path="categories" element={<div>Categories</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
    </Routes>
  );
}
