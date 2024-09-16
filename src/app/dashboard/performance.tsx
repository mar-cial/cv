"use client";

import { PerformanceData } from "@/data/performance";
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

export function Performance({ data }: { data: PerformanceData[] }) {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <BarChart width={100} height={100} data={data}>
                <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend
                    formatter={(l: string) => `${l.charAt(0).toUpperCase() + l.slice(1)}`}
                />
                <Bar dataKey="expected" fill="#343131" />
                <Bar dataKey="sold" fill="#3e7edd" />
            </BarChart>
        </ResponsiveContainer>
    );
}
