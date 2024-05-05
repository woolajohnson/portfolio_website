import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={darkMode ? "dark" : ""}>
            {/* <div className="dark"> */}
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Home />
            <About />
            <Projects />
        </div>
    );
};

export default App;
