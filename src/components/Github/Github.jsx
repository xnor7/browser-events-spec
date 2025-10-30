import { useEffect, useMemo, useState } from "react";

export default function GithubIcon() {
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


    const icon = useMemo(() => {
        return !(theme === "dark")
            ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>

    }, [theme])
    return (
        <button onClick={() => {
            window.open(
                "https://github.com/xnor7/browser-events-spec",
                "_blank",
                "noopener,noreferrer"
            );
        }} style={{ ...absoluteThemeBtn }}>
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
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    border: "none",
    outline: "none",
    zIndex: '101',
    cursor: "pointer"
}