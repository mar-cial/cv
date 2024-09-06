"use client";

import { Transaction } from "@/models/transaction";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type Props = {
    transactions: Transaction[];
    type: string;
};

export function TransactionPie({ transactions }: Props) {
    const incomeAmount = transactions
        .filter((t) => t.type === "income")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expenseAmount = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const data = [
        {
            label: "income",
            amount: incomeAmount,
        },
        {
            label: "expense",
            amount: expenseAmount,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Legend
                    formatter={(v) => `${v.charAt(0).toUpperCase()}${v.slice(1)}`}
                />
                <Tooltip formatter={(value: any) => `$${value.toFixed(2)}`} />
                <Pie
                    data={data}
                    dataKey="amount"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={6}
                    label={(v) => {
                        return `$${v.value.toFixed(2)}`;
                    }}
                    labelLine={true}
                >
                    <Cell
                        stroke="0"
                        name={data[0].label}
                        key={data[0].label}
                        fill="#FB923C"
                    />
                    <Cell
                        stroke="0"
                        name={data[1].label}
                        key={data[1].label}
                        fill="#005aff"
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
