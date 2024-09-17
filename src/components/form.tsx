export function Form({ form }: { form: string }) {
    return form
        .slice(-5)
        .split("")
        .map((char, index) =>
            char === "W" ? (
                <div
                    key={index}
                    className="flex justify-center items-center w-6 text-sm bg-emerald-500 rounded-md"
                >
                    {char}
                </div>
            ) : char === "L" ? (
                <div
                    key={index}
                    className="flex justify-center items-center w-6 text-sm bg-red-500 rounded-md"
                >
                    <div>{char}</div>
                </div>
            ) : (
                <div
                    key={index}
                    className="flex justify-center items-center w-6 text-sm rounded-md bg-zinc-500"
                >
                    {char}
                </div>
            ),
        );
}
