import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Start from "./views/start";
import Hello from "./views/Hello";


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/about" element={<Hello />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
