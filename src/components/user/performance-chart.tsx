"use client";

import {
    CartesianGrid,
    LineChart,
    ResponsiveContainer,
    XAxis,
    Line,
    Tooltip,
    YAxis,
} from "recharts";
import { Data } from "./performance-container";

export default function PerformanceChart({ data }: { data: Data[] }) {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeOpacity={0.1} />
                <Line type="monotone" dataKey="uv" stroke="#FB923C" strokeWidth={2} />
                <Line type="monotone" dataKey="pv" stroke="#005aff" strokeWidth={2} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}
