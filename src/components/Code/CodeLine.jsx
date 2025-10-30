import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.min.css";
import "highlight.js/styles/rainbow.css";

hljs.registerLanguage("javascript", javascript);
export default function CodeLine({ line = "", indent = 0 }) {
    const codeRef = useRef(null);
    const [isDark, setIsDark] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setIsDark(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (codeRef.current) hljs.highlightElement(codeRef.current);
    }, [line, isDark]);

    return (
        <div style={{ userSelect: 'all' }}>
            <pre
                style={{
                    margin: '0',
                    background: "transparent",
                    padding: 0,
                    fontSize: "13px",
                    fontFamily: "monospace",
                    whiteSpace: "pre",
                    display: 'flex'
                }}
                className={isDark ? "hljs-dark" : "hljs-light"}
            >
                <code
                    ref={codeRef}
                    className="language-javascript"
                    style={{
                        marginLeft: `${indent * 10}px`, padding: 0,
                        fontSize: "13px",
                        display: 'flex',
                        gap: "2px"
                    }}
                >
                    {line || " "}
                </code>
            </pre>
        </div>
    );
}
