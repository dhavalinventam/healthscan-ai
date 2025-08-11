import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Upload from "./pages/Upload";
import ReportResultPage from "./pages/ReportResult";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function AppRoutes() {
  const location = useLocation();
  const hideChrome = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app-wrapper">
      {!hideChrome && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/report-result" element={<ReportResultPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
