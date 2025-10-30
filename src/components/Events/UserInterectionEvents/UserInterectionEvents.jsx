import { useEffect } from "react";
import CodeLine from "../../Code/CodeLine";

const code = {
    click: [
        { line: `const btn = document.querySelector('#click-btn');`, indent: '0' },
        { line: `const counter = document.querySelector('#click-count');`, indent: '0' },
        { line: `const handleClick = () => {`, indent: '0' },
        { line: `counter.textContent = (counter.textContent | 0) + 1;`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `btn?.addEventListener('click', handleClick);`, indent: '0' },
        { line: `// triggers on release, mousedown must be on the same element`, indent: '0' },
    ],
    dblclick: [
        { line: `const btn = document.querySelector('#dblclick-btn');`, indent: '0' },
        { line: `const counter = document.querySelector('#dblclick-count');`, indent: '0' },
        { line: `const handleDblClick = () => {`, indent: '0' },
        { line: `counter.textContent = (counter.textContent | 0) + 1;`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `btn?.addEventListener('dblclick', handleDblClick);`, indent: '0' },
    ],
    mousedown: [
        { line: `const btn = document.querySelector('#mousedown-btn');`, indent: '0' },
        { line: `const counter = document.querySelector('#mousedown-count');`, indent: '0' },
        { line: `const handleMouseDown = () => {`, indent: '0' },
        { line: `counter.textContent = (counter.textContent | 0) + 1;`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `btn?.addEventListener('mousedown', handleMouseDown);`, indent: '0' },
        { line: `// triggers on press`, indent: '0' },
    ],
    mouseup: [
        { line: `const btn = document.querySelector('#mouseup-btn');`, indent: '0' },
        { line: `const counter = document.querySelector('#mouseup-count');`, indent: '0' },
        { line: `const handleMouseUp = () => {`, indent: '0' },
        { line: `counter.textContent = (counter.textContent | 0) + 1;`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `btn?.addEventListener( 'mouseup', handleMouseUp );`, indent: '0' },
        { line: `// triggers on release, mousedown could be from anywhere`, indent: '0' },
    ],
    mousemove: [
        { line: `const bgDiv = document.getElementById('mousemove-demo');`, indent: '0' },
        { line: `const handleMouseMove = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('mousemove', handleMouseMove);`, indent: '0' },
        { line: `// triggers on cursor's movement while inside element bounds`, indent: '0' },
    ],
    mouseenter: [
        { line: `const bgDiv = document.getElementById('mouseenter-demo');`, indent: '0' },
        { line: `const handleMouseEnter = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('mouseenter', handleMouseEnter);`, indent: '0' },
        { line: `// triggers when the cursor first enters the element (simple hover)`, indent: '0' },
    ],
    mouseleave: [
        { line: `const bgDiv = document.getElementById('mouseleave-demo');`, indent: '0' },
        { line: `const handleMouseLeave = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('mouseleave', handleMouseLeave);`, indent: '0' },
        { line: `// triggers when the cursor fully leaves the element (simple hover)`, indent: '0' },
    ],
    mouseover: [
        { line: `const bgDiv = document.getElementById('mouseover-demo');`, indent: '0' },
        { line: `const handleMouseOver = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('mouseover', handleMouseOver);`, indent: '0' },
        { line: `// triggers repeatedly when moving over the element and its children (nested hover)`, indent: '0' },
    ],
    mouseout: [
        { line: `const bgDiv = document.getElementById('mouseout-demo');`, indent: '0' },
        { line: `const handleMouseOut = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('mouseout', handleMouseOut);`, indent: '0' },
        { line: `// triggers when cursor leaves the element or any of its children (nested hover)`, indent: '0' },
    ],
    contextmenu: [
        { line: `const bgDiv = document.getElementById('contextmenu-demo');`, indent: '0' },
        { line: `const handleContextMenu = (e) => {`, indent: '0' },
        { line: `e.preventDefault();`, indent: '1' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('contextmenu', handleContextMenu);`, indent: '0' },
        { line: `// triggers when right click`, indent: '0' },
    ],
    wheel: [
        { line: `const bgDiv = document.getElementById('wheel-demo');`, indent: '0' },
        { line: `const handleWheel = () => {`, indent: '0' },
        { line: `bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);`, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('wheel', handleWheel);`, indent: '0' },
        { line: `// triggers when mouse wheel/ trackpad scroll`, indent: '0' },
    ],
    keydown: [
        { line: `const kdCount = document.getElementById('keydown-count');`, indent: '0' },
        { line: `const kdInput = document.getElementById('keydown-input');`, indent: '0' },
        { line: `const handleKeyDown = (e) => {`, indent: '0' },
        { line: 'kdCount.textContent = `Input: "${e.key}"`', indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `kdInput?.addEventListener('keydown', handleKeyDown);`, indent: '0' },
        { line: `// triggers when a key is pressed`, indent: '0' },
    ],
    keyup: [
        { line: `const kuCount = document.getElementById('keyup-count');`, indent: '0' },
        { line: `const kuInput = document.getElementById('keyup-input');`, indent: '0' },
        { line: `const handleKeyUp = (e) => {`, indent: '0' },
        { line: 'kuCount.textContent = `Input: "${e.key}"`', indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `kuInput?.addEventListener('keyup', handleKeyUp);`, indent: '0' },
        { line: `// triggers when a key is released`, indent: '0' },
    ],
    touchstart: [
        { line: `const bgDiv = document.getElementById('touchstart-demo');`, indent: '0' },
        { line: `const countSpan = document.getElementById('touchstart-count');`, indent: '0' },
        { line: `let count = 0;`, indent: '0' },
        { line: `const handleTouchStart = (e) => {`, indent: '0' },
        { line: `count += e.touches.length;`, indent: '1' },
        { line: `if (countSpan) {`, indent: '1' },
        { line: 'countSpan.textContent = `Total Touches: ${count}`', indent: '2' },
        { line: `}; `, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('touchstart', handleTouchStart);`, indent: '0' },
        { line: `// triggers when one or more fingers touch the element.`, indent: '0' },
    ],
    touchmove: [
        { line: `const bgDiv = document.getElementById('touchmove-demo');`, indent: '0' },
        { line: `const countSpan = document.getElementById('touchmove-count');`, indent: '0' },
        { line: `let count = 0;`, indent: '0' },
        { line: `const handleTouchMove = (e) => {`, indent: '0' },
        { line: `count += e.touches.length;`, indent: '1' },
        { line: `if (countSpan) {`, indent: '1' },
        { line: 'countSpan.textContent = `Total Touches: ${count}`', indent: '2' },
        { line: `}; `, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('touchmove', handleTouchMove);`, indent: '0' },
        { line: `// triggers when moving one or more fingers across the element-area.`, indent: '0' },
    ],
    touchend: [
        { line: `const bgDiv = document.getElementById('touchend-demo');`, indent: '0' },
        { line: `const countSpan = document.getElementById('touchend-count');`, indent: '0' },
        { line: `let count = 0;`, indent: '0' },
        { line: `const handleTouchEnd = (e) => {`, indent: '0' },
        { line: `count += e.changedTouches.length;`, indent: '1' },
        { line: `if (countSpan) {`, indent: '1' },
        { line: 'countSpan.textContent = `Total Touches: ${count}`', indent: '2' },
        { line: `}; `, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('touchend', handleTouchEnd);`, indent: '0' },
        { line: `// triggers when a finger is lifted off the element.`, indent: '0' },
    ],
    touchcancel: [
        { line: `const bgDiv = document.getElementById('touchcancel-demo');`, indent: '0' },
        { line: `const countSpan = document.getElementById('touchcancel-count');`, indent: '0' },
        { line: `let count = 0;`, indent: '0' },
        { line: `const handleTouchCancel = (e) => {`, indent: '0' },
        { line: `count += e.changedTouches.length;`, indent: '1' },
        { line: `if (countSpan) {`, indent: '1' },
        { line: 'countSpan.textContent = `Total Touches: ${count}`', indent: '2' },
        { line: `}; `, indent: '1' },
        { line: `}; `, indent: '0' },
        { line: `bgDiv?.addEventListener('touchcancel', handleTouchCancel);`, indent: '0' },
        { line: `// triggers when the touch is aborted`, indent: '0' },
        { line: `// or canceled by the system,`, indent: '0' },
        { line: `// not by the user lifting the finger intentionally.`, indent: '0' },
    ],
}
export default function UserInteractionEvents() {

    useEffect(() => {
        const btn = document.querySelector('#click-btn');
        const counter = document.querySelector('#click-count');

        const handleClick = () => {
            counter.textContent = (counter.textContent | 0) + 1;
        };

        btn?.addEventListener('click', handleClick);

        return () => {
            btn?.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        const btn = document.querySelector('#dblclick-btn');
        const counter = document.querySelector('#dblclick-count');

        const handleDblClick = () => {
            counter.textContent = (counter.textContent | 0) + 1;
        };

        btn?.addEventListener('dblclick', handleDblClick);

        return () => {
            btn?.removeEventListener('dblclick', handleDblClick);
        };
    }, []);

    useEffect(() => {
        const btn = document.querySelector('#mousedown-btn');
        const counter = document.querySelector('#mousedown-count');

        const handleMouseDown = () => {
            counter.textContent = (counter.textContent | 0) + 1;
        };

        btn?.addEventListener('mousedown', handleMouseDown);

        return () => {
            btn?.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    useEffect(() => {
        const btn = document.querySelector('#mouseup-btn');
        const counter = document.querySelector('#mouseup-count');

        const handleMouseUp = () => {
            counter.textContent = (counter.textContent | 0) + 1;
        };

        btn?.addEventListener('mouseup', handleMouseUp);

        return () => {
            btn?.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('mousemove-demo');

        const handleMouseMove = () => {
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('mousemove', handleMouseMove);

        return () => {
            bgDiv?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('mouseenter-demo');

        const handleMouseEnter = () => {
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            bgDiv?.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('mouseleave-demo');

        const handleMouseLeave = () => {
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            bgDiv?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('mouseover-demo');

        const handleMouseOver = () => {
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('mouseover', handleMouseOver);

        return () => {
            bgDiv?.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('mouseout-demo');

        const handleMouseOut = () => {
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('mouseout', handleMouseOut);

        return () => {
            bgDiv?.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('contextmenu-demo');

        const handleContextMenu = (e) => {
            e.preventDefault();
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('contextmenu', handleContextMenu);

        return () => {
            bgDiv?.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('wheel-demo');

        const handleWheel = (e) => {
            e.preventDefault();
            bgDiv.style.background = "#" + Math.random().toString(16).slice(-6);
        };

        bgDiv?.addEventListener('wheel', handleWheel);

        return () => {
            bgDiv?.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        const kdCount = document.getElementById('keydown-count');
        const kdInput = document.getElementById('keydown-input');

        const handleKeyDown = (e) => {
            kdCount.textContent = `Input: "${e.key}"`;
        };

        kdInput?.addEventListener('keydown', handleKeyDown);

        return () => {
            kdInput?.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const kdCount = document.getElementById('keyup-count');
        const kdInput = document.getElementById('keyup-input');

        const handleKeyUp = (e) => {
            kdCount.textContent = `Input: "${e.key}"`;
        };

        kdInput?.addEventListener('keyup', handleKeyUp);

        return () => {
            kdInput?.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('touchstart-demo');
        const countSpan = document.getElementById('touchstart-count');
        let count = 0;

        const handleTouchStart = (e) => {
            count += e.touches.length;
            if (countSpan) {
                countSpan.textContent = `Total Touches: ${count}`;
            }
        };

        bgDiv?.addEventListener('touchstart', handleTouchStart);

        return () => {
            bgDiv?.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('touchmove-demo');
        const countSpan = document.getElementById('touchmove-count');
        let count = 0;

        const handleTouchMove = (e) => {
            e.preventDefault();
            count += e.touches.length;
            if (countSpan) {
                countSpan.textContent = `Total Touches: ${count}`;
            }
        };

        bgDiv?.addEventListener('touchmove', handleTouchMove);

        return () => {
            bgDiv?.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('touchend-demo');
        const countSpan = document.getElementById('touchend-count');
        let count = 0;

        const handleTouchEnd = (e) => {
            count += e.changedTouches.length;
            if (countSpan) {
                countSpan.textContent = `Total Touches: ${count}`;
            }
        };

        bgDiv?.addEventListener('touchend', handleTouchEnd);

        return () => {
            bgDiv?.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    useEffect(() => {
        const bgDiv = document.getElementById('touchcancel-demo');
        const countSpan = document.getElementById('touchcancel-count');
        let count = 0;

        const handleTouchCancel = (e) => {
            count += e.changedTouches.length;
            if (countSpan) {
                countSpan.textContent = `Total Touches: ${count}`;
            }
        };

        bgDiv?.addEventListener('touchcancel', handleTouchCancel);

        return () => {
            bgDiv?.removeEventListener('touchcancel', handleTouchCancel);
        };
    }, []);


    return (
        <div className="event-section">

            <div className="event-wrapper" id="id_click">
                <pre className="event-name">
                    "click"
                </pre>

                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.click?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>

                    <div className="event-demo">
                        <span id="click-count">0</span>
                        <button id="click-btn"
                            style={{
                                width: 'fit-content',
                                padding: '4px 8px',
                                border: "none",
                                borderRadius: '10dvw',
                                color: 'var(--text-primary)',
                                background: "var(--bg-primary)"
                            }}
                        >
                            Add 1
                        </button>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_dblclick">
                <pre className="event-name">
                    "dblclick"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.dblclick?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div className="event-demo">
                        <span id="dblclick-count">0</span>
                        <button id="dblclick-btn"
                            style={{
                                width: 'fit-content',
                                padding: '4px 8px',
                                border: "none",
                                borderRadius: '10dvw',
                                color: 'var(--text-primary)',
                                background: "var(--bg-primary)",
                            }}
                        >
                            Add 1
                        </button>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mousedown">
                <pre className="event-name">
                    "mousedown"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mousedown?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div className="event-demo">
                        <span id="mousedown-count">0</span>
                        <button id="mousedown-btn"
                            style={{
                                width: 'fit-content',
                                padding: '4px 8px',
                                border: "none",
                                borderRadius: '10dvw',
                                color: 'var(--text-primary)',
                                background: "var(--bg-primary)"
                            }}
                        >
                            Add 1
                        </button>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mouseup">
                <pre className="event-name">
                    "mouseup"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mouseup?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div className="event-demo">
                        <span id="mouseup-count">0</span>
                        <button id="mouseup-btn"
                            style={{
                                width: 'fit-content',
                                padding: '4px 8px',
                                border: "none",
                                borderRadius: '10dvw',
                                color: 'var(--text-primary)',
                                background: "var(--bg-primary)"
                            }}
                        >
                            Add 1
                        </button>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mousemove">
                <pre className="event-name">
                    "mousemove"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mousemove?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        style={{
                            marginTop: '2px',
                            border: '1px solid magenta', padding: '4px 1rem'
                        }}
                        className="event-demo"
                        id="mousemove-demo" >
                        Parent
                        <span
                            style={{
                                marginTop: '2px',
                                border: '1px solid magenta',
                                padding: '4px 1rem',
                            }}>
                            children
                        </span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mouseenter">
                <pre className="event-name">
                    "mouseenter"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mouseenter?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        style={{
                            marginTop: '2px',
                            border: '1px solid magenta', padding: '4px 1rem'
                        }}
                        className="event-demo"
                        id="mouseenter-demo" >
                        Parent
                        <span
                            style={{
                                marginTop: '2px',
                                border: '1px solid magenta',
                                padding: '4px 1rem',
                            }}>
                            children
                        </span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mouseleave">
                <pre className="event-name">
                    "mouseleave"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mouseleave?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        style={{
                            marginTop: '2px',
                            border: '1px solid magenta', padding: '4px 1rem'
                        }}
                        className="event-demo"
                        id="mouseleave-demo" >
                        Parent
                        <span
                            style={{
                                marginTop: '2px',
                                border: '1px solid magenta',
                                padding: '4px 1rem',
                            }}>
                            children
                        </span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mouseover">
                <pre className="event-name">
                    "mouseover"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mouseover?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        style={{ marginTop: '2px', border: '1px solid magenta', padding: '4px 1rem' }}
                        className="event-demo" id="mouseover-demo" >
                        Parent
                        <span style={{ marginTop: '2px', border: '1px solid magenta', padding: '4px 1rem' }}>
                            children
                        </span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_mouseout">
                <pre className="event-name">
                    "mouseout"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.mouseout?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        style={{ marginTop: '2px', border: '1px solid magenta', padding: '4px 1rem' }}
                        className="event-demo" id="mouseout-demo" >
                        <span>
                            Parent
                        </span>
                        <span style={{ marginTop: '2px', border: '1px solid magenta', padding: '4px 1rem' }}>
                            children
                        </span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_contextmenu">
                <pre className="event-name">
                    "contextmenu"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.contextmenu?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div className="event-demo" id="contextmenu-demo">
                        Right Click
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_wheel">
                <pre className="event-name">
                    "wheel"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.wheel?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div className="event-demo" id="wheel-demo">
                        <span id="wheel-count" style={{ color: "var(--text-primary)" }}>Scroll Inside This Block</span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_keydown">
                <pre className="event-name">
                    "keydown"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.keydown?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="keydown-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <span id="keydown-count" style={{ color: "var(--text-primary)" }}>Input: ""</span>
                        <input
                            name="kd-input"
                            style={{
                                minHeight: '20px',
                                padding: '2px 8px',
                                fontSize: '1rem'
                            }}
                            placeholder="any keyboard input" id="keydown-input" />
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_keyup">
                <pre className="event-name">
                    "keyup"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.keyup?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="keyup-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <span id="keyup-count" style={{ color: "var(--text-primary)" }}>Input: ""</span>
                        <input
                            name="ku-input"
                            style={{
                                minHeight: '20px',
                                padding: '2px 8px',
                                fontSize: '1rem'
                            }}
                            placeholder="any keyboard input"
                            id="keyup-input" />
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_touchstart">
                <pre className="event-name">
                    "touchstart"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.touchstart?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="touchstart-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            minHeight: '100px'
                        }}
                    >
                        <span id="touchstart-count" style={{ color: "var(--text-primary)" }}>Total Touches: 0</span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_touchmove">
                <pre className="event-name">
                    "touchmove"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.touchmove?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="touchmove-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            minHeight: '100px'
                        }}
                    >
                        <span id="touchmove-count" style={{ color: "var(--text-primary)" }}>Total Touches: 0</span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_touchend">
                <pre className="event-name">
                    "touchend"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.touchend?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="touchend-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            minHeight: '100px'
                        }}
                    >
                        <span id="touchend-count" style={{ color: "var(--text-primary)" }}>Total Touches: 0</span>
                    </div>
                </div>
            </div>

            <div className="event-wrapper" id="id_touchcancel">
                <pre className="event-name">
                    "touchcancel"
                </pre>
                <div className="event-example">
                    <code className="event-code">
                        {
                            code?.touchcancel?.map((i, _) => {
                                return (
                                    <div
                                        key={_}
                                    >
                                        {_ ? <br /> : ''}
                                        <CodeLine key={_} line={i.line} indent={i.indent | 0} />

                                    </div>
                                )
                            })
                        }
                    </code>
                    <div
                        className="event-demo"
                        id="touchcancel-demo"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            minHeight: '100px'
                        }}
                    >
                        <span id="touchcancel-count" style={{ color: "var(--text-primary)" }}>Total Touches: 0</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
