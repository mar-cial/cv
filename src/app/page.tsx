import { FaRegMap } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { DM_Serif_Display } from "next/font/google"

import Image from "next/image";
import cesar from '@/app/cesar.jpg'

const main = DM_Serif_Display({
    weight: "400",
    subsets: ['latin']
})

export default async function Home() {
    return (
        <main className="min-h-screen p-8 container max-w-screen-sm mx-auto flex flex-col gap-4 text-justify">
            <header>
                <div className="py-2 grid md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <h1 className={`${main.className} text-5xl`}>Cesar Marcial</h1>
                        <p>Builder of cool products</p>
                        <a
                            href="https://maps.app.goo.gl/acC1tUQSkSkAcpzE9"
                            className="hover:underline flex gap-1 items-center">
                            <FaRegMap /> Mexicali, Baja California, Mexico. PST
                        </a>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center md:justify-end items-center pb-4">
                        <Image src={cesar} alt="My face" className="w-32 h-32 rounded-lg" />
                    </div>
                </div>

                <div className="flex">
                    <a className="p-2 border border-zinc-700 rounded-md hover:bg-zinc-800" href="mailto:cesarmarcialq@gmail.com">
                        <MdMailOutline />
                    </a>
                </div>
            </header>

            <section>
                <header>
                    <h2 className={`${main.className} text-2xl`}>About me</h2>
                </header>

                <article className="flex flex-col gap-1">
                    <p>
                        Hey there! My name is César (pronounced SEE-zər, like the <a className="hover:underline font-semibold" href="https://en.wikipedia.org/wiki/Caesar_(Planet_of_the_Apes)">chimpanzee</a>).
                        I am a software developer with over a year of experience developing products for startups.
                    </p>
                    <p>
                        Straight up, I'm a fun and easy going guy who doesn't take things too seriously (that sounded like a dating app bio),
                        but I am responsible for my code, committed to my projects, and deeply, deeply interested in
                        software development.
                    </p>
                </article>
            </section>

            <section>
                <header>
                    <h2 className={`${main.className} text-2xl`}>Work experience</h2>
                </header>

                <section>
                    <article>
                        <header className="pb-4">
                            <div className="flex justify-between items-center">
                                <h3 className={`${main.className} text-xl`}>Cabra Sports - Remote</h3>
                                <span className={`${main.className}`}>Aug 2023 - Current</span>
                            </div>
                            <p>Full stack product developer using Javascript.</p>
                        </header>

                        <div className="flex flex-col gap-1">
                            <p className="gap-1">
                                <a href="https://cabragaming.com" target="_blank" className="font-main font-semibold after:content-['↗'] hover:underline">Cabra Gaming&thinsp;</a>&thinsp;
                                is a gaming platform where you can participate in "Quinielas", betting on your favorite NFL and
                                futbol teams of the week and winning prizes if you get it right.
                            </p>
                            <p>
                                I developed, planned, designed, etc. the whole Cabra Sports web application. I used Typescript for the
                                front and back, Next 13 as the framework and Redis (specifically Upstash Redis) for data persistence.
                            </p>
                            <div>
                                <p>Some features of the app are:</p>
                                <ul className="list-disc list-inside">
                                    <li>User authentication/authorization</li>
                                    <li>Pick selection and submission</li>
                                    <li>Live leaderboards for each round</li>
                                    <li>Scoring system and evaluation</li>
                                </ul>
                            </div>
                            <p>
                                Our website went live after 2 months of development, and so far we've gotten 700 registered users and a little over a thousand picks with a
                                lot of great features to come!
                            </p>
                        </div>
                    </article>
                </section>

                <section>
                    <article>
                        <header className="py-4">
                            <div className="flex justify-between items-center">
                                <h3 className={`${main.className} text-xl`}>Suma Wealth - Remote</h3>
                                <span className={`${main.className}`}>Jun 2022 - Feb 2023</span>
                            </div>
                            <p>Mostly front end development using Javascript.</p>
                        </header>

                        <div className="flex flex-col gap-1">
                            <p className="gap-1">
                                <a href="https://sumawealth.com/" target="_blank" className="font-main font-semibold after:content-['↗'] hover:underline">Suma Wealth&thinsp;</a>
                                &thinsp; is a financial assistance platform for young latinos that want to control their finances.</p>
                            <p>
                                The things I appreciate the most about my time with Suma is that I was introduced to CI/CD concepts and management of Heroku dynos and
                                the usage of Redis. As a front end developer, I was not extremely exposed to the back end side of the app. But exposed, I was. I
                                learned to work with other people with VCS and the general things to learn when working in a tech startup. It was a lot of fun and a lot of learning.
                            </p>
                            <div>
                                <p>Some features I worked on</p>
                                <ul className="list-disc list-inside">
                                    <li>Heroku dynos management</li>
                                    <li>Unit tests development with Jest</li>
                                    <li>A lot of UI. A lot.</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
            <section>
                <header>
                    <h2 className={`${main.className} text-2xl`}>Education</h2>
                </header>
                <p>Not relevant anymore, if you ask me. First I learn what I need to get the job done and on my free time I learn what I want!</p>
            </section>

            <section className="flex flex-col gap-2">
                <header>
                    <h2 className={`${main.className} text-2xl`}>Skills</h2>
                    <p>
                        I refuse to include buzzwords, but I have used anything you can expect from someone that developed
                        and launched a non trivial web application to production.
                    </p>
                    <p>As for actual hard skills:</p>
                </header>
                <article>
                    <h4>
                        I am GOOD using these languages. Not GREAT, but GOOD, above DECENT.
                    </h4>
                    <ul className="list-disc list-inside">
                        <li>Typescript</li>
                        <li>Javascript</li>
                    </ul>
                </article>

                <article>
                    <h4>
                        I am DECENT at these ones. I need to look at the docs a lot, but I can get the job done.
                    </h4>
                    <ul className="list-disc list-inside">
                        <li>Go</li>
                        <li>Redis</li>
                    </ul>
                </article>
            </section>
        </main>
    )
}
