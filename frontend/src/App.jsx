import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import { Transactions } from "./components/Transactions.jsx";
import { Budgets } from "./components/Budgets.jsx";
import { Goals } from "./components/Goals.jsx";
import { Reports } from "./components/Reports.jsx";
import { Settings } from "./components/Settings.jsx";
import { Admin } from "./components/Admin.jsx";
import { Navigation } from "./components/Navigation.jsx";

function Layout({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/register"];
  const isNoNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {user && !isNoNavbar && <Navigation />}
      {children}
    </div>
  );
}

function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/transactions" element={user ? <Transactions /> : <Navigate to="/login" />} />
            <Route path="/budgets" element={user ? <Budgets /> : <Navigate to="/login" />} />
            <Route path="/goals" element={user ? <Goals /> : <Navigate to="/login" />} />
            <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
            <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
            <Route path="/admin" element={user?.role === "admin" ? <Admin /> : <Navigate to="/dashboard" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
