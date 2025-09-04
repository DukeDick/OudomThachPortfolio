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
                <title>Oudom Thach | About Me</title>
                <meta
                    name="description"
                    content="Learn more about Oudom Thach, a Mechatronics Engineering graduate and current M.S. in Computer Science (AI) candidate. Passionate about AI, machine learning, data analytics, and advanced robotics, building innovative solutions to solve real-world problems."
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
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I’m Oudom, a fresh graduate Mechatronics Engineer from Cambodia and currently pursuing my{" "}
                                <span className="font-semibold">Master’s in Computer Science</span> with a specialization in{" "}
                                <span className="font-semibold">Artificial Intelligence</span>. I have a strong foundation in
                                mechanical design, software engineering, and automation, and I’m driven to push the boundaries
                                of what’s possible in robotics and intelligent systems. I’m particularly interested in
                                <span className="font-semibold"> artificial intelligence, machine learning, data analytics, and advanced robotics</span>,
                                aiming to integrate these fields to build smarter and more capable systems.
                            </p>
                            <p className="my-4 font-medium">
                                I believe engineering is not just about building machines. It’s about solving real-world challenges,
                                enhancing human capabilities, and creating advanced, user-friendly technologies that make a meaningful impact.
                            </p>
                            <p className="font-medium">
                                Whether I’m working on humanoid robots, AI-driven projects, or mechanical prototypes, I bring dedication,
                                precision, creativity, and a problem-solving mindset to every task. As I seek job opportunities, I’m committed
                                to delivering my best in everything I do and contributing to groundbreaking projects in fields like robotics,
                                AI, data science, and intelligent systems.
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
                                alt="Oudom Thach"
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
