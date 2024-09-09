"use client";

import { performanceData } from "@/data/performance";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export function Performance() {
    return (
        <ResponsiveContainer width={"100%"} height={200}>
            <BarChart
                width={500}
                height={300}
                data={performanceData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sold" fill="#343131" />
                <Bar dataKey="expected" fill="#ea580c" />
            </BarChart>
        </ResponsiveContainer>
    );
}
