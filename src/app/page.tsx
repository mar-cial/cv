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
                <p>
                    Hello. My name is Cesar, and I am a full stack developer. I have a
                    couple years of experience deploying features to thousands of users.
                </p>

                <p>
                    Tengo que escribir de esto maldita sea. Que es lo que quiero decir.
                    Quiero decirle que tengo la habilidad para desarrollar lo que yo
                    quiera. Que es lo que quiero pasar. Que es lo que quiero decir. Quiero
                    que las personas confien en mi. Confien en mi habilidad para
                    programar. Tengo que ensenar lo que he hecho, y lo que se puede hacer.
                    Vamos a hacer secciones y tambien vamos a hacer componentes para
                    ensenarlo.
                </p>
            </section>

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
                    <header>
                        <h3>ASDF</h3>
                    </header>
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
