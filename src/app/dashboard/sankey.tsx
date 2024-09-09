"use client";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";

const data0 = {
    nodes: [
        {
            name: "Visit",
        },
        {
            name: "Direct-Favourite",
        },
        {
            name: "Page-Click",
        },
        {
            name: "Detail-Favourite",
        },
        {
            name: "Lost",
        },
    ],
    links: [
        {
            source: 0,
            target: 1,
            value: 3728.3,
        },
        {
            source: 0,
            target: 2,
            value: 354170,
        },
        {
            source: 2,
            target: 3,
            value: 62429,
        },
        {
            source: 2,
            target: 4,
            value: 291711,
        },
    ],
};

export default function SankeyGraph() {
    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <Sankey
                data={data0}
                height={300}
                nodePadding={100}
                link={{ stroke: "#ea580c" }}
                node={{}}
            >
                <Tooltip />
            </Sankey>
        </ResponsiveContainer>
    );
}
