"use client";

import { scatterData } from "@/data/scatter";
import { ScatterData } from "@/models/scatter";
import {
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";

export function ScatterCharting({ data }: { data: ScatterData[][] }) {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <ScatterChart data={data}>
                <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
                <XAxis dataKey="x" type="number" />
                <YAxis dataKey="y" type="number" />
                <ZAxis dataKey={"z"} type="number" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter name="Procedure A" data={scatterData[0]} fill={"#5ea985"} />
                <Scatter name="Procedure B" data={scatterData[1]} fill={"#3e7edd"} />
            </ScatterChart>
        </ResponsiveContainer>
    );
}
