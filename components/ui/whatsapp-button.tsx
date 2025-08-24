"use client";

import React, { useEffect, useRef, useState } from "react";

export default function WhatsAppButton(): React.JSX.Element {
    const phone = "919876543210";
    const message = encodeURIComponent(
        "Hello Jaskpreet Food, I would like to enquire about your products."
    );
    const href = `https://wa.me/${phone}?text=${message}`;

    const [showTip, setShowTip] = useState(false);
    const hoverTimerRef = useRef<number | null>(null);

    const onMouseEnter = () => {
        hoverTimerRef.current = window.setTimeout(() => setShowTip(true), 500);
    };
    const onMouseLeave = () => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        setShowTip(false);
        hoverTimerRef.current = null;
    };

    const handleClick = () => {
        // Use window.open to avoid showing href on hover
        window.open(href, "_blank", "noopener,noreferrer");
    };

    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        };
    }, []);

    return (
        <div
            className="fixed right-6 bottom-6 z-50"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <button
                type="button"
                aria-label="Chat with Jaskpreet Food on WhatsApp"
                // title="Chat with us on WhatsApp"
                onClick={handleClick}
                onFocus={() => setShowTip(true)}
                onBlur={() => setShowTip(false)}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-lg ring-0 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-colors"
            >
                {/* WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                    <path fill="white" d="M20.52 3.48A11.86 11.86 0 0012 .75C6.21.75 1.5 5.46 1.5 11.25c0 1.98.52 3.92 1.5 5.64L.75 23.25l6.63-2.13c1.66.9 3.57 1.35 5.52 1.35 5.79 0 10.5-4.71 10.5-10.5 0-3.03-1.18-5.86-3.93-8.19zM12 21.75c-1.72 0-3.41-.44-4.88-1.28l-.35-.2-3.94 1.27 1.28-3.83-.23-.37A8.94 8.94 0 013 11.25C3 6.48 6.87 2.75 12 2.75c2.4 0 4.68.94 6.38 2.64A8.92 8.92 0 0121.75 11.25c0 4.83-3.87 10.5-9.75 10.5z" />
                    <path fill="white" d="M17.3 14.02c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.45.13-.6.13-.12.29-.34.44-.51.15-.17.2-.29.3-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.77.37-.27.29-1.03 1.01-1.03 2.45 0 1.44 1.05 2.83 1.2 3.03.15.2 2.08 3.36 5.03 4.72 2.95 1.36 2.95.91 3.48.86.54-.05 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
                </svg>
            </button>

            {/* Tooltip */}
            <div
                role="tooltip"
                aria-hidden={!showTip}
                className={[
                    "pointer-events-none absolute right-16 bottom-1/2 translate-y-1/2",
                    "rounded-md bg-gray-900 text-white text-sm px-3 py-2 shadow-md",
                    "transition-opacity transition-transform duration-200 ease-out",
                    showTip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2",
                ].join(" ")}
            >
                Chat with us on WhatsApp
                <span
                    aria-hidden="true"
                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-900"
                />
            </div>
        </div>
    );
}
