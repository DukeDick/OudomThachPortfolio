import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            }),
        [springValue, value]
    );

    return <span ref={ref} />;
}

export default function About() {
    return (
        <>
            <Head>
                <title>Minimal Portfolio Built with Nextjs | About Page</title>
                <meta
                    name="description"
                    content="Learn more about CodeBucks, a Next.js developer with a passion for creating innovative solutions. Discover tips for building a developer portfolio and insights on full-stack development, front-end development, and back-end development."
                />
            </Head>
            <TransitionEffect />
            <main className={`flex w-full flex-col items-center justify-center dark:text-light`}>
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />

                    <div className="grid w-full grid-cols-12 gap-12 sm:gap-8 items-center justify-center px-8 lg:px-16">
                        {/* Biography Section */}
                        <div className="col-span-6 flex flex-col items-start justify-center md:col-span-12">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                BIOGRAPHY
                            </h2>
                            <p className="font-medium">
                                Hi, I am Oudom, a fresh graduate Mechatronics Engineer with a deep passion for robotics, AI, and innovative technology solutions. With a strong foundation in mechanical design, software engineering, and automation, I am driven to push the boundaries of what’s possible in the world of robotics and intelligent systems.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that engineering is about more than just building machines—it’s about solving real-world challenges, enhancing human capabilities, and creating advanced, user-friendly technologies that can make a meaningful impact.
                            </p>
                            <p className="font-medium">
                                Whether I’m working on humanoid robots, AI-driven projects, or mechanical prototypes, I bring dedication, precision, creativity, and a strong problem-solving mindset to every task. As I seek job opportunities, I am committed to giving my very best in everything I do and am eager to contribute to groundbreaking projects in fields like mechanical engineering, AI, data science, and other related areas.
                            </p>
                        </div>

                        {/* Profile Image Section */}
                        <div
                            className="relative col-span-6 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark md:col-span-12"
                        >
                            <div
                                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"
                            />
                            <Image
                                className="h-auto w-full rounded-2xl"
                                src={profile}
                                alt="Oudom"
                                sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                priority
                            />
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
}


