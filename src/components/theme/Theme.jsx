import { useEffect, useMemo, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("system");

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        const mediaQuery = !localTheme ? window.matchMedia("(prefers-color-scheme: dark)") : localTheme;
        setTheme(!localTheme ? (mediaQuery.matches ? "dark" : "light") : localTheme);
        const handleChange = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };
        if (!localTheme) {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };



    const icon = useMemo(() => {
        return (theme === "dark")
            ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eclipse-icon lucide-eclipse"><circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 1 0 10 10" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0000ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>

    }, [theme])
    return (
        <button onClick={toggleTheme} style={{ ...absoluteThemeBtn }}>
            {icon}
        </button>
    );
}

const absoluteThemeBtn = {
    position: "fixed",
    top: "0.9rem",
    right: "1rem",
    background: "transparent",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "24px",
    width: "0",
    // height: "24px",
    height: "0",
    borderRadius: "50%",
    border: "none",
    outline: "none",
    zIndex: '101',

}