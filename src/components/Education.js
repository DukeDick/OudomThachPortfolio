import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, focus, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>

        {/* Display focus if provided */}
        {focus && (
          <p className="italic text-dark/80 dark:text-light/70 text-base sm:text-sm mb-2">
            Focus: {focus}
          </p>
        )}

        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>

        {info && <p className="font-medium w-full md:text-sm">{info}</p>}
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">

          <Details
            type="High School Grade 9-12"
            time="2015-2018"
            place="Home Of Khmer Phnom Penh"
          />

          <Details
            type="Homeschool High School Diploma"
            time="2015-2018"
            place="Keystone National High School Bloomsburg, Pennsylvania"
          />

          <Details
            type="Bachelor of Science in Civil Engineering"
            time="2020-2020"
            place="American University of Phnom Penh (AUPP)"
          />

          <Details
            type="Bachelor of Engineering in Mechatronics Engineering"
            focus="Robotics, Computer Vision, IoT, Data Analysis, Electronics, and Mechanical Systems"
            time="2019-2024"
            place="Rajamangala University of Technology Lanna Chiang Mai"
          />

          <Details
            type="Master of Science in Computer Science with AI Specialization"
            focus="Digital Image Processing, Natural Language Processing, Deep Learning, Generative AI, Reinforcement Learning, Advanced Programming, Advanced Software Engineering, and Data Mining"
            time="2025 - 2027 (Expected, Part-Time Evening Classes)"
            place="American University of Phnom Penh"
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
