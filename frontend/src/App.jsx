import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectLanding from "./views/ProjectLanding";
import Start from "./views/Home";
import Cornelia from "./views/Cornelia";
import Lucas from "./views/Lucas";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                {/* Navbar */}
                <Navbar />
                <main className="app-main">
                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<Start />} />
                        <Route path="/Cornelia" element={<Cornelia />} />
                        <Route path="/Lucas" element={<Lucas/>}/>
                        <Route path="/projects" element={<ProjectLanding />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
