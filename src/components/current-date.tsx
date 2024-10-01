"use client";

import { useState, useEffect } from "react";

export function CurrentDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const slicedString = currentTime.toLocaleString().slice(-11);

    return (
        <div>
            <span className="font-mono">Pacific Time - {slicedString}</span>
        </div>
    );
}
