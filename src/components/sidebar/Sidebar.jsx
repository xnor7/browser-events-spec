const l2_count = 'abcdefghijklmnopqrstuvwxyz'

const renderEvents = (obj, level = 1) => {
    return Object.entries(obj).map(([category, value], i) => {
        const isLevel1 = level === 1;
        const isLevel2 = level === 2;
        const count = isLevel1 ? "- " : `↳ `;
        const summaryStyle = {
            fontSize: isLevel1 ? '1rem' : '0.9rem',
            paddingLeft: `${level * 10}px`
        };

        const divStyle = {
            marginLeft: `${level * 25}px`
        };

        if (Array.isArray(value)) {
            return (
                <details key={category}>
                    <summary style={summaryStyle}>
                        <div style={{ fontSize: "12px", fontFamily: "FC" }}>
                            {count}
                            <span style={{ textTransform: 'capitalize' }}>
                                {category}
                            </span>
                        </div>
                    </summary>

                    <div style={divStyle}>
                        <ul>
                            {value.map((eventName, i) => (
                                <li key={eventName} style={{ display: 'flex' }}>
                                    <pre style={{ userSelect: 'none' }}>
                                        {`# `}
                                    </pre>
                                    <span>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                color: 'unset'
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const target = document.getElementById(`id_${eventName}`);
                                                if (target) {
                                                    const yOffset = -80; // negative value = offset from top (e.g., fixed header)
                                                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                    window.scrollTo({ top: y, behavior: "smooth" });
                                                }
                                            }}
                                        >
                                            {eventName}
                                        </a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            );
        } else if (typeof value === "object") {
            return (
                <details key={category}>
                    <summary style={summaryStyle}>
                        <div style={{ fontSize: "12px", fontFamily: "FC" }}>
                            {count}
                            <span>
                                {category}
                            </span>
                        </div>
                    </summary>
                    {renderEvents(value, level + 1)}
                </details>
            );
        }
    });
};


export default function Sidebar({ state }) {
    if (!state?.get) {
        return ('')
    }
    return (
        <aside id="sidebar">
            <div className="event-items"
                style={{
                    opacity: state?.get ? '1' : '0',
                    ...(!state?.get ? { display: 'unset' } : {}),
                    transitionBehavior: 'allow-discrete',
                    transformOrigin: 'left'
                }}>
                {renderEvents(events)}
            </div>

        </aside>
    );
}



const events = {
    "User Interaction Events": {
        "Mouse": [
            "click",
            "dblclick",
            "mousedown",
            "mouseup",
            "mousemove",
            "mouseenter",
            "mouseleave",
            "mouseover",
            "mouseout",
            "contextmenu",
            "wheel"
        ],
        "Keyboard": [
            "keydown",
            "keyup",
        ],
        "Touch & Pointer": [
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointercancel",
            "pointerover",
            "pointerout",
            "pointerenter",
            "pointerleave",
            "gotpointercapture",
            "lostpointercapture"
        ]
    },
    "Form & Input Events": [
        "input",
        "change",
        "submit",
        "reset",
        "focus",
        "blur",
        "focusin",
        "focusout",
        "invalid",
        "select"
    ],
    "Window & Document Events": [
        "load",
        "beforeunload",
        "unload",
        "resize",
        "scroll",
        "visibilitychange",
        "hashchange",
        "popstate",
        "fullscreenchange",
        "orientationchange",
        "pageshow",
        "pagehide",
    ],
    "Clipboard & Composition Events": [
        "copy",
        "cut",
        "paste",
        "beforecopy",
        "beforecut",
        "beforepaste",
        "compositionstart",
        "compositionupdate",
        "compositionend"
    ],
    "Drag & Drop Events": [
        "dragstart",
        "dragenter",
        "dragover",
        "dragleave",
        "drop",
        "dragend"
    ],
    "Media Events": [
        "play",
        "pause",
        "ended",
        "volumechange",
        "seeking",
        "seeked",
        "timeupdate",
        "loadeddata",
        "error",
        "stalled",
        "canplay",
        "canplaythrough",
        "waiting",
        "emptied"
    ],
    "Animation & Transition Events": [
        "animationstart",
        "animationiteration",
        "animationend",
        "transitionstart",
        "transitionend",
        "transitioncancel"
    ],
    "Network & Connectivity Events": [
        "online",
        "offline",
        "fetch",
        "error",
        "abort"
    ],
    "Storage & History Events": [
        "storage",
        "popstate",
        "hashchange"
    ],
    "Workers & Messaging Events": [
        "message",
        "messageerror",
        "connect",
        "disconnect"
    ],
    "Gamepad, Device, and Sensor Events": [
        "gamepadconnected",
        "gamepaddisconnected",
        "deviceorientation",
        "devicemotion",
        "pointerlockchange",
        "compassneedscalibration"
    ],
    "Web API‑specific Events": {
        "Service Worker": [
            "install",
            "activate",
            "push",
            "sync"
        ],
        "WebSocket/EventSource": [
            "open",
            "message",
            "error",
            "close"
        ],
        "WebRTC": [
            "icecandidate",
            "track",
            "negotiationneeded"
        ],
        "Payment Request API": [
            "shippingaddresschange",
            "shippingoptionchange",
            "paymentmethodchange"
        ]
    },
    "Promise & Error Events": [
        "unhandledrejection",
        "rejectionhandled",
        "error"
    ],
    "Print & Page Lifecycle Events": [
        "beforeprint",
        "afterprint",
        "pageshow",
        "pagehide"
    ]
}