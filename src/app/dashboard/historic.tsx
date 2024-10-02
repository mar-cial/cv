"use client";
import { BLUE, GREEN } from "@/data/colors";
import { HistoricData } from "@/models/historic";
import {
    LineChart,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Line,
    Tooltip,
} from "recharts";

export function HistoricChart({ data }: { data: HistoricData[] }) {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
                <XAxis dataKey={"name"} opacity={0.5} />
                <YAxis opacity={0.5} />
                <Line type="monotone" stroke={BLUE} dataKey="a" strokeWidth={6} />
                <Line type="monotone" stroke={GREEN} dataKey="b" strokeWidth={6} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}
