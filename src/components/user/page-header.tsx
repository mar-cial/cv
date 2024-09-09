export default function PageHeader({ title }: { title: string }) {
    return (
        <header className="py-4">
            <h1 className="text-3xl font-bold">{title}</h1>
        </header>
    );
}
