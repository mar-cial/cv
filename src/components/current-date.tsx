"use client";
import { useState, useEffect } from "react";

export function CurrentDate() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const slicedString = currentTime
        ?.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
        .slice(-11);

    return (
        <div>
            <span className="font-mono">
                Pacific Time - {slicedString || "Loading"}
            </span>
        </div>
    );
}
