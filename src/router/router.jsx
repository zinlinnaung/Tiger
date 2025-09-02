import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Added Navigate
import Layout from "../components/Layout.jsx/Layout";
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingPage";
import Home from "../pages/Home";
import QrCodeGenerator from "../components/QrCodeGenerator";
import LoginPage from "../pages/LoginPage";
import ExcelUploadPage from "../components/upload/UploadPage";
import EnatDashboard from "../components/Enat/EnatDashboard";
import FerrovitDashboard from "../components/Ferrovit/FerrovitDashboard";
import GlucomealDashboard from "../components/Glucomeal/GlucomealDashboard";
import FormComponent from "../FormComponent";
import EditPage from "../components/EditPage";

export const RouterComponent = () => {
  return (
    <Routes>
      {/* Redirect default path "/" to "/code" */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route index element={<DashboardPage />} /> {/* Admin Dashboard */}
        <Route path="settings" element={<SettingsPage />} />{" "}
        <Route path="upload" element={<ExcelUploadPage />} />{" "}
        <Route path="enat" element={<EnatDashboard />} />
        <Route path="glucomeal" element={<GlucomealDashboard />} />
        <Route path="ferrovit" element={<FerrovitDashboard />} />
        {/* Upload Page */}
        {/* Add more routes here */}
      </Route>
      <Route path="/" element={<Navigate to="/form" replace />} />

      {/* Wrap all dashboard routes in Layout */}

      <Route path="/form" element={<FormComponent />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
};
