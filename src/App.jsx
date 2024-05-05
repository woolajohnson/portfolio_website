import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={darkMode ? "dark" : ""}>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
