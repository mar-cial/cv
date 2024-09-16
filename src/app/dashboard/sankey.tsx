"use client";
import { Legend, ResponsiveContainer, Sankey, Tooltip } from "recharts";

const data0 = {
    nodes: [
        { name: "Visit" },
        { name: "Page-Click" },
        { name: "Add to Cart" },
        { name: "Purchase" },
        { name: "Return" },
        { name: "Review" },
    ],
    links: [
        // From "Visit"
        { source: 0, target: 1, value: 5000 },
        { source: 1, target: 2, value: 3000 },
        { source: 1, target: 3, value: 2000 },
        { source: 3, target: 4, value: 900 },
        { source: 3, target: 5, value: 1100 },
    ],
};

export default function SankeyGraph() {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <Sankey
                data={data0}
                nodePadding={90}
                link={{ stroke: "#3e7edd", opacity: 1 }}
                node={{ fill: "#5ea985" }}
            >
                <Tooltip />
            </Sankey>
        </ResponsiveContainer>
    );
}
