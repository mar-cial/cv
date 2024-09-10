import PageHeader from "@/components/user/page-header";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <PageHeader
                title={
                    "I can build your application. We will work together to land your idea."
                }
            />

            <section>
                <header>
                    <h2 className="text-2xl font-bold">User dashboards</h2>
                </header>

                <article>
                    <p>
                        Tengo experiencia usando librerias externas para crear usuarios,
                        almacenarlos y permitirles crear historial. Podemos usar estos datos
                        para crear una experiencia personalizada al utilizar la aplicacion.
                        Podemos crear graficas dinamicas de cualquier dato coleccionado.
                    </p>

                    <div>
                        <Link href="/dashboard" className="text-orange-600 hover:underline">
                            Prepare un ejemplo de un user dashboard.
                        </Link>
                    </div>
                </article>
            </section>

            <section>
                <header>
                    <h2 className="text-2xl font-bold">API Integrations</h2>
                </header>

                <article>
                    <p>
                        We can consume any expernal APIs and manipulate data to be consumed,
                        used, stored and processed.
                    </p>
                    <p>
                        We will work with your internal or external libraries to reach the
                        objective.
                    </p>

                    <p>
                        <a href="/integrations" className="text-orange-600 hover:underline">
                            We prepared an example{" "}
                        </a>
                        of API integrations for you.
                    </p>
                </article>
            </section>

            <section>
                <header>
                    <h2 className="text-2xl font-bold">
                        User authentication and authorization
                    </h2>
                </header>
            </section>
        </main>
    );
}
