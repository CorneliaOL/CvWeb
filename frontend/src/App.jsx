import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Cornelia from "./views/Cornelia";
import Lucas from "./views/Lucas";
import Projects from "./views/ProjectLanding";
import Navbar from "./components/Navbar";
import "./App.css"; // Ensure CSS is imported for background styles

const App = () => {
  const location = useLocation();

  // Determine the background class based on the route
  const getBackgroundClass = (pathname) => {
    switch (pathname) {
      case "/cornelia":
        return "cornelia-bg";
      case "/lucas":
        return "lucas-bg";
      case "/projects":
        return "projects-bg";
      default:
        return "default-bg";
    }
  };

  return (
    <div className={`app-container ${getBackgroundClass(location.pathname)}`}>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cornelia" element={<Cornelia />} />
          <Route path="/lucas" element={<Lucas />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
