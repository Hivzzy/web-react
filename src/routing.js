import React from "react";
import DashboardLayout from "./components/layout/layoutDashboard";
import Dashboard from "./pages/user/Dashboard";
import { Routes, Route } from "react-router-dom";
import BackgroundLayout from "./components/layout/layoutBackground";

function UserLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

function Routing({ onThemeChange, darkMode }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserLayout>
            <BackgroundLayout onThemeChange={onThemeChange} darkMode={darkMode}  />
            <DashboardLayout>
              <Dashboard onThemeChange={onThemeChange} darkMode={darkMode} />
            </DashboardLayout>
          </UserLayout>
        }
      />
    </Routes>
  );
}

export default Routing;
