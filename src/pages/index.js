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
        <title>Oudom Thach — AI & Robotics Portfolio</title>
        <meta
          name="description"
          content="Oudom Thach — Mechatronics graduate and M.S. in Computer Science (AI) candidate. Projects in machine learning, data analytics, computer vision, robotics, and full-stack deployment. Open to opportunities to create real-world impact for Cambodia and forward-thinking companies."
        />
      </Head>

      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
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
                className="w-2/3 h-auto object-contain"
                priority
              />
            </div>

            {/* Text Content Section */}
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Hi, I'm Oudom. Welcome to My Portfolio Website"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              {/* Pill highlights */}
              <div className="mt-3 mb-2 flex flex-wrap gap-2 self-start lg:self-center">
                {[
                  "Machine Learning",
                  "Data Analytics",
                  "Data Science",
                  "Computer Vision",
                  "Robotics",
                  "Full-stack ML Deployment",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs font-medium dark:border-light/30 dark:text-light/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Intro paragraphs */}
              <p className="mb-6 mt-4 text-base font-medium md:text-sm sm:!text-xs">
                I’m a Mechatronics Engineering graduate from Cambodia, currently
                pursuing a{" "}
                <span className="font-semibold">
                  Master of Science in Computer Science
                </span>{" "}
                with a focus on{" "}
                <span className="font-semibold">Artificial Intelligence</span>.
                My work sits at the intersection of{" "}
                <span className="font-semibold">
                  machine learning, data analytics, and robotics
                </span>
                —building end-to-end systems that learn from data and act in the
                physical world.
              </p>

              <p className="mb-6 text-base font-medium md:text-sm sm:!text-xs">
                I design and deploy{" "}
                <span className="font-semibold">ML pipelines</span> (from data
                prep to model training and evaluation), develop{" "}
                <span className="font-semibold">computer vision</span> solutions,
                and integrate AI into{" "}
                <span className="font-semibold">robotic platforms</span>. I also
                ship <span className="font-semibold">full-stack</span> prototypes
                (Flask / Gradio / Hugging Face) to get models into users’ hands
                quickly.
              </p>

              <p className="mb-4 text-base font-medium md:text-sm sm:!text-xs">
                I’m <span className="font-semibold">open to new opportunities</span>
                —internships, research, and entry-level roles—where I can
                contribute at maximum potential, learn fast, and deliver
                measurable impact for both{" "}
                <span className="font-semibold">Cambodia</span> and the companies
                I collaborate with. Detail-oriented, adaptable, and driven, I
                enjoy solving challenging problems with clear, data-backed
                solutions.
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
                  aria-label="Download resume"
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:oudom.thachreal2000@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  aria-label="Contact Oudom via email"
                >
                  Contact
                </Link>

                <Link
                  href="/projects"
                  className="ml-4 rounded-lg border-2 border-dark px-5 py-2 text-lg font-semibold capitalize text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark md:text-base"
                  aria-label="View projects"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Light bulb icon"
          />
        </div>
      </article>
    </>
  );
}
