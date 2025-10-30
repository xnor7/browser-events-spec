export default function Header({ state, text = 'Browser Events' }) {
    const handleClick = () => {
        state?.set?.(p => !p);
    }
    return (
        <header id="header" >
            <div onClick={handleClick} style={{ display: 'flex', cursor: "pointer", userSelect: "none", alignItems: 'center', gap: "0.5rem" }} >
                <pre style={{ fontSize: '1rem', fontFamily: "GSC" }} >{text}</pre>
                <div style={{
                    width: '6px',
                    height: '6px',
                    borderBottom: "1px solid",
                    borderLeft: "1px solid",
                    borderColor: "var(--text-primary)",
                    transform: state?.get ? "rotate(-45deg) translate(-1px, 3px) scale(-1,-1)" : "rotate(-45deg) translate(0, -1px)"
                }} >
                </div>
            </div>
        </header>
    )
}