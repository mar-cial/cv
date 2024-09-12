"use client";

import { performanceData } from "@/data/performance";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export function Performance() {
    return (
        <ResponsiveContainer width={"100%"} height={200}>
            <BarChart width={100} height={100} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend
                    formatter={(l: string) => `${l.charAt(0).toUpperCase() + l.slice(1)}`}
                />
                <Bar dataKey="sold" fill="#343131" />
                <Bar dataKey="expected" fill="#ea580c" />
            </BarChart>
        </ResponsiveContainer>
    );
}
