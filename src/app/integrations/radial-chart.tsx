"use client";
import { Comparison } from "@/models/predictions";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export function ComparisionChart({
    home,
    away,
    comparison,
}: {
    home: string;
    away: string;
    comparison: Comparison;
}) {
    const data = Object.entries(comparison).map(([key, value]) => ({
        name: key,
        home: parseFloat(value.home),
        away: parseFloat(value.away),
    }));

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <RadarChart data={data} outerRadius={100}>
                <PolarGrid opacity={0.5} />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={10} />
                <Radar
                    name={home}
                    stroke="#ea580c"
                    fill="#ea580c"
                    fillOpacity={0.8}
                    dataKey="home"
                />
                <Radar
                    name={away}
                    stroke="#1e3a8a"
                    fill="#1e3a8a"
                    fillOpacity={0.8}
                    dataKey="away"
                />
                <Tooltip />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}
