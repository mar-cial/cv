import { ResponsiveContainer, Sankey } from "recharts";

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
            value: 291741,
        },
    ],
};

export default function Sankeys() {
    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <Sankey></Sankey>
        </ResponsiveContainer>
    );
}
