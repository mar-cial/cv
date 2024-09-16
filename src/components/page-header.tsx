export default function PageHeader({ title }: { title: string }) {
    return (
        <header className="py-8">
            <h1 className="text-4xl">{title}</h1>
        </header>
    );
}
