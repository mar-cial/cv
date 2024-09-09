type PerformanceData = {
    name: string;
    sold: number;
    expected: number;
};

export const performanceData: PerformanceData[] = [
    { name: "Product A", sold: 1200, expected: 1000 },
    { name: "Product B", sold: 800, expected: 1200 },
    { name: "Product C", sold: 1500, expected: 1300 },
    { name: "Product D", sold: 300, expected: 500 },
    { name: "Product E", sold: 2000, expected: 1800 },
    { name: "Product F", sold: 950, expected: 1000 },
    { name: "Product G", sold: 1100, expected: 1100 },
    { name: "Product H", sold: 600, expected: 800 },
    { name: "Product I", sold: 1800, expected: 1500 },
    { name: "Product J", sold: 400, expected: 600 },
];
