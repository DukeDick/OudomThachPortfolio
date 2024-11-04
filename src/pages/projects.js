// Updated Project.js
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import proj1 from "../../public/images/projects/RMUTL-Attendance-System.jpg";
import proj2 from "../../public/images/projects/thai-plc-intern.jpg";
import proj3 from "../../public/images/projects/F1.jpg";
import proj4 from "../../public/images/projects/ocean-plastic.jpg";
import proj5 from "../../public/images/projects/exoplanet.jpg";
import proj6 from "../../public/images/projects/coral-reef.jpg";
import proj7 from "../../public/images/projects/f16.jpg";
import proj8 from "../../public/images/projects/rip-current.jpg";
import proj9 from "../../public/images/projects/stars.jpg";
import proj10 from "../../public/images/projects/human.jpg";
import proj11 from "../../public/images/projects/breastcancer.jpg";
import proj12 from "../../public/images/projects/fashion.jpg";
import proj13 from "../../public/images/projects/bobcat.jpg";
import proj14 from "../../public/images/projects/arm.jpg";
import proj15 from "../../public/images/projects/mangrove.jpg";
import proj16 from "../../public/images/projects/ros.jpg";
import proj17 from "../../public/images/projects/kotlin.jpg";
import proj18 from "../../public/images/projects/youtube.jpg";


const FramerImage = motion(Image);

const Modal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(project.img);

    const handleImageClick = (image) => {
        setActiveImage(image);
    };

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={onClose} // Close modal when clicking on the background
        >
            <div
                className="relative w-full max-w-3xl lg:max-w-2xl md:max-w-xl sm:max-w-lg bg-white dark:bg-dark rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-300"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <div className="mb-4">
                    <FramerImage
                        src={activeImage}
                        alt={project.title}
                        className="rounded-lg w-full h-auto object-contain"
                        style={{ maxHeight: "400px" }}
                        width={800} // Main image width
                        height={400} // Main image height
                    />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {project.additionalImages.map((image, index) => (
                        <FramerImage
                            key={index}
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="rounded-lg cursor-pointer"
                            style={{ maxHeight: "120px", width: "100%", objectFit: "cover" }}
                            width={120} // Thumbnail width
                            height={120} // Thumbnail height
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const Project = ({ title, type, img, additionalImages }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <article
                onClick={handleImageClick}
                className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4 cursor-pointer"
            >
                <div className="absolute top-0 -right-3 -z-10 h-full w-full rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 xs:rounded-[1.5rem]" />
                <div className="w-full cursor-pointer overflow-hidden rounded-lg">
                    <FramerImage
                        src={img}
                        alt={title}
                        className="h-auto w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="mt-4 flex w-full flex-col items-start justify-between">
                    <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
                        {type}
                    </span>
                    <h2
                        className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl sm:text-lg break-words leading-tight"
                        style={{ maxWidth: '100%' }}
                    >
                        {title}
                    </h2>
                    <button className="text-primary dark:text-primaryDark mt-2 underline">See More</button>
                </div>
            </article>
            {isModalOpen && (
                <Modal project={{ title, img, additionalImages }} onClose={closeModal} />
            )}
        </>
    );
};

export default function Projects() {
    const projects = [
        {
            type: "Python Project On Computer And Raspberry Pi",
            title: "Development of face detection system and managing class entry check-ins through the use of Graphical User Interface",
            img: proj1,
            additionalImages: [
            "/images/additional/RMUTL-1.jpg",
            "/images/additional/RMUTL-2.jpg",
            "/images/additional/RMUTL-3.jpg",
            "/images/additional/RMUTL-4.jpg",
            ],
        },
        {
            type: "Electrical/PLC/Mechanical Design",
            title: "Monitoring Energy Usage Using V-BOX",
            img: proj2,
            additionalImages: [
            "/images/additional/thai-intern1.jpg",
            "/images/additional/thai-intern2.jpg",
            "/images/additional/thai-intern3.jpg",
            "/images/additional/thai-intern4.jpg",
            "/images/additional/thai-intern5.jpg",
            ],
        },
        {
            type: "Mechanical Design",
            title: "Formula 1 Design Concept Solidworks",
            img: proj3,
            additionalImages: [
            "/images/additional/f1-1.jpg",
            "/images/additional/f1-2.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "Underwater Ocean Plastic Detection",
            img: proj4,
            additionalImages: [
            "/images/additional/ocean-plastic1.jpg",
            "/images/additional/ocean-plastic2.jpg",
            "/images/additional/ocean-plastic3.jpg",
            "/images/additional/ocean-plastic4.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "Exoplanets Hunting Using Machine Learning",
            img: proj5,
            additionalImages: [
            "/images/additional/stars1.jpg",
            "/images/additional/stars2.jpg",
            "/images/additional/stars3.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "Coral Reefs Bleaching Detection",
            img: proj6,
            additionalImages: [
            "/images/additional/coral-reef-1.jpg",
            "/images/additional/coral-reef-2.jpg",
            "/images/additional/coral-reef-3.jpg",
            ],
        },
        {
            type: "Mechanical Design",
            title: "F-16 Fighting Falcon Model Design",
            img: proj7,
            additionalImages: [
            "/images/additional/f16-1.jpg",
            "/images/additional/f16-2.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "RIP Current Risk Detection",
            img: proj8,
            additionalImages: [
            "/images/additional/rip-current-1.jpg",
            "/images/additional/rip-current-2.jpg",
            "/images/additional/rip-current-3.jpg",
            "/images/additional/rip-current-4.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "ML Model For Predicting Stars, Galaxies And Quasars",
            img: proj9,
            additionalImages: [
            "/images/additional/stars1.jpg",
            "/images/additional/stars2.jpg",
            "/images/additional/stars3.jpg",
            ],
        },
        {
            type: "Data Science",
            title: "Human Resource Analysis",
            img: proj10,
            additionalImages: [
            "/images/additional/human1.jpg",
            "/images/additional/human2.jpg",
            "/images/additional/human3.jpg",
            "/images/additional/human4.jpg",
            "/images/additional/human5.jpg",
            ],
        },
        {
            type: "Data Science",
            title: "Breast Cancer Detection",
            img: proj11,
            additionalImages: [
            "/images/additional/breastcancer-1.jpg",
            "/images/additional/breastcancer-2.jpg",
            "/images/additional/breastcancer-3.jpg",
            ],
        },
        {
            type: "Data Science",
            title: "Fashion Class Classification",
            img: proj12,
            additionalImages: [
            "/images/additional/fashion-1.jpg",
            "/images/additional/fashion-2.jpg",
            "/images/additional/fashion-3.jpg",
            "/images/additional/fashion-4.jpg",
            ],
        },
        {
            type: "Mechanical Design",
            title: "BobCat Design Model Design",
            img: proj13,
            additionalImages: [
            "/images/additional/bobcat1.jpg",
            "/images/additional/bobcat2.jpg",
            "/images/additional/bobcat3.jpg",
            ],
        },
        {
            type: "Mechanical Design",
            title: "Robotic Arm Model Design",
            img: proj14,
            additionalImages: [
            "/images/additional/arm-1.jpg",
            "/images/additional/arm-2.jpg",
            ],
        },
        {
            type: "Machine Learning",
            title: "Mangrove Species Classification",
            img: proj15,
            additionalImages: [
            "/images/additional/mangrove-1.jpg",
            "/images/additional/mangrove-2.jpg",
            "/images/additional/mangrove-3.jpg",
            "/images/additional/mangrove-4.jpg",
            ],
        },
        {
            type: "ROS Gazebo Simulation",
            title: "Gazebo Simulation Nav2 Stack with ROS2",
            img: proj16,
            additionalImages: [],
        },
        {
            type: "Mobile Development",
            title: "Grocery List App Using Kotlin",
            img: proj17,
            additionalImages: [],
        },
        {
            type: "Large Language Model (LLM)",
            title: "Youtube Script Writing Tool Using LLM",
            img: proj18,
            additionalImages: [],
        },
    ];

    return (
        <>
            <Head>
                <title>Oudom Thach Personal Portfolio</title>
                <meta
                    name="description"
                    content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
                />
            </Head>

            <TransitionEffect />
            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        {projects.map((project, index) => (
                            <div key={index} className="col-span-6 sm:col-span-12">
                                <Project
                                    type={project.type}
                                    title={project.title}
                                    img={project.img}
                                    additionalImages={project.additionalImages}
                                />
                            </div>
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}





