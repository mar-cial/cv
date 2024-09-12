"use client";
import { incomeOutcomeData } from "@/data/incomeOutcome";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export function IncomeAndExpense() {
    const colors = ["#ea580c", "#343131"];

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <PieChart>
                <Pie
                    data={incomeOutcomeData}
                    nameKey="name"
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill={"#343131"}
                    paddingAngle={5}
                    label={(l) => {
                        return `$${parseFloat(l.value).toFixed(2)}`;
                    }}
                    labelLine={true}
                    stroke={"0"}
                >
                    {incomeOutcomeData.map((_, index) => {
                        return <Cell key={`ie-pie-chart-${index}`} fill={colors[index]} />;
                    })}
                </Pie>
                <Tooltip formatter={(d: string) => `$${parseFloat(d).toFixed(2)}`} />
                <Legend
                    formatter={(l: string) => `${l.charAt(0).toUpperCase() + l.slice(1)}`}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
