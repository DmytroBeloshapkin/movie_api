import React from "react";

import "./styles.css";

const Swicher = () => {

    const [darkMode, setDarkMode] = React.useState(getInitialMode());

    React.useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode))
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();

        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }
    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <div className="toggle-container"> <span style={{color: darkMode ? "grey" : "yellow"}}>☀︎</span> <span className="toggle">
            <input
                checked={darkMode}
                onChange={() => setDarkMode(prevMode => !prevMode)}
                id="checkbox"
                className="checkbox"
                type="checkbox"/>
            <label htmlFor="checkbox"/>
                    </span>
                    <span style={{color: darkMode ? "slateblue" : "grey"}}>☾</span>
                </div>
            </nav>

        </div>
    );
}

export {Swicher};


