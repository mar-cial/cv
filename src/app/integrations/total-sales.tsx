"use client";

import {
    Cell,
    Legend,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    {
        name: "Q1",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8",
    },
    {
        name: "Q2",
        uv: 31.47,
        pv: 3200,
        fill: "#8884d8",
    },
];

export function TotalSales() {
    return (
        <section>
            <ResponsiveContainer width={"100%"} height={200}>
                <RadialBarChart
                    width={730}
                    height={250}
                    innerRadius="80%"
                    outerRadius="100%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    cx="50%"
                    cy="50%"
                >
                    <RadialBar label={{ fill: "#666" }} background dataKey="uv">
                        {data.map((q, index) => (
                            <Cell key={`total-sales-bar-${index}`} />
                        ))}
                    </RadialBar>
                </RadialBarChart>
            </ResponsiveContainer>
        </section>
    );
}
