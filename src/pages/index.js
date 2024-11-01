import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import dragonSvg from "../../public/images/svgs/dragon.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Personal Portfolio</title>
                <meta
                    name="description"
                    content="Explore my journey as a fresh graduate in Mechatronics Engineering, showcasing innovative projects and technical articles on robotics, AI, and automation. Discover my latest projects in robotics design, software integration, and control systems, highlighting my skills as an aspiring engineer with a passion for creating impactful solutions in mechatronics and beyond."
                />
            </Head>

            <TransitionEffect />
            <article className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}>
                <Layout className="!pt-0 md:!pt-2 sm:!pt-9">
                    <div className="flex w-full items-start justify-between md:flex-col">
                        {/* Profile Image Section */}
                        <div className="w-1/3 md:w-full flex justify-center">
                            <Image
                                src={profilePic}
                                alt="Oudom Thach"
                                className="h-auto w-full rounded-xl"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        <div className="flex justify-center items-center w-1/6 md:w-2/3 mx-4 lg:mx-10 mt-8">
                            <Image
                                src={dragonSvg}
                                alt="Decorative Dragon"
                                className="w-2/3 h-auto object-contain" // Further reduced width
                                priority
                            />
                        </div>

                        {/* Text Content Section */}
                        <div className="flex w-1/2 flex-col items-center self-center lg:w-full">
                            <AnimatedText
                                text="Hello there! My name is Oudom Thach"
                                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            {/* Split the paragraph into two sections for better readability */}
                            <p className="mb-6 mt-4 text-base font-medium md:text-sm sm:!text-xs">
                                As a fresh graduate in Mechatronics Engineering from Cambodia, I specialize in creating innovative solutions that integrate mechanical systems, electronics, and intelligent control. Explore my latest projects and articles, where I combine my expertise in robotics, automation, and software development to design cutting-edge technologies that push the boundaries of engineering. I am actively seeking job opportunities to apply my skills and contribute to impactful projects.
                            </p>
                            <p className="mb-4 text-base font-medium md:text-sm sm:!text-xs">
                                I am detail-oriented, adaptable, and passionate about learning new technologies. My background in multidisciplinary engineering allows me to approach challenges with creativity and determination, striving to make a positive impact in every project I undertake.
                            </p>

                            <div className="mt-2 flex items-center self-start lg:self-center">
                                <Link
                                    href="/dummy.pdf"
                                    target="_blank"
                                    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                        capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                                        dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                        md:p-2 md:px-4 md:text-base
                                        `}
                                    download
                                >
                                    Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                                </Link>

                                {/* Updated Contact Link */}
                                <Link href="mailto:oudom.thachreal2000[at]gmail.com"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'mailto:' + 'oudom.thachreal2000' + '@gmail.com';
                                    }}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
                    <Image className="relative h-auto w-full" src={lightBulb} alt="Oudom Thach" />
                </div>
            </article>
        </>
    );
}




