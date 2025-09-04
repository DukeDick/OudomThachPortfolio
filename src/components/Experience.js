import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <span className="capitalize text-primary dark:text-primaryDark">
            @{company}
          </span>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
          origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

          <Details
            position="International Cultural Candidate YMAC 2020"
            company="Rajamangala University of Technology Lanna And Singapore Polytechnic"
            time="From 31st October to 23th December, 2020"
            address="Mueang Chiang Mai, Chiang Mai, Thailand"
            work="Participated in a cultural program called Youth Model ASEAN Conference (YMAC), where I collaborated with students from various ASEAN countries. Through this experience, I learned how to work effectively with international candidates, manage virtual meetings, and handle key documents. Additionally, the program focused on finding innovative solutions to challenges faced by communities during the COVID-19 pandemic. We utilized Design Thinking principles to implement sustainable actions that could make a positive impact."
          />

          <Details
            position="International Cultural Candidate SP Virtual 2020"
            company="Rajamangala University of Technology Lanna And Singapore Polytechnic"
            time="From 22th December 2020 to 12th February 2021"
            address="Mueang Chiang Mai, Chiang Mai, Thailand"
            work="During the SP Virtual Exchange 2020, I had the opportunity to learn and collaborate with both international and ASEAN students. The program provided valuable insights into ASEAN and international laws, the history and economies of various countries, and the diverse cultures and ways of living of different ethnic groups. We explored the challenges faced by communities during the COVID-19 pandemic and discussed strategies to effectively address these issues."
          />

          <Details
            position="International Cultural Candidate Design Thinking x Slow Movement 2021"
            company="Rajamangala University of Technology Lanna And Nanhua University"
            time="From 20th November to 12th December, 2021"
            address="Mueang Chiang Mai, Chiang Mai, Thailand"
            work="International Cultural Candidate for the Design Thinking x Slow Movement 2021 program, organized by Rajamangala University of Technology Lanna in collaboration with Nanhua University, I participated in activities focused on applying the principles of Design Thinking to promote sustainable living and mindful practices. The program emphasized cross-cultural collaboration, allowing me to exchange ideas and work closely with participants from diverse backgrounds to develop innovative solutions addressing real-world challenges.During the program, I created a mock website for community use and produced example campaign videos to promote local products and enhance their visibility. My contributions focused on finding solutions to support elderly communities during the COVID-19 pandemic, aiming to ease their daily challenges and improve their quality of life."
          />

          <Details
            position="Product And PLC Engineering Intern"
            company="Thai PLC Center"
            time="From 1st June to October 17th, 2023"
            address="Bang Pa-in District, Phra Nakhon Si Ayutthaya, Thailand"
            work="During my internship at Thai PLC Center, I gained extensive hands-on experience working with Programmable Logic Controllers (PLCs) and developed a solid foundation in product design and inspection to ensure quality assurance standards were met. My key responsibilities included performing electrical wiring tasks, assembling various product components, and coordinating the shipment of finished goods to clients. I was also involved in creating and managing comprehensive Bills of Materials (BOM) for each project, which required attention to detail and accuracy. In addition to these technical tasks, I collaborated closely with the sales team to align product specifications with customer requirements and contributed to developing detailed electrical wiring diagrams to support project implementations. This internship provided me with a well-rounded understanding of the engineering and business aspects of the company, while enhancing my technical, collaborative, and problem-solving skills in a dynamic work environment."
          />

          <Details
            position="AI Engineer Intern"
            company="AI FARM ROBOTICS and FACTORY AI CO., LTD"
            time="March 2025 - June 2025"
            address="Phnom Penh, Cambodia"
            work="Fine-tuning Whisper Large V2 for speech recognition to control a robot dog using Khmer and English languages. Collected 5,750 voice data samples from different people to avoid overfitting in WAV files before processing for training. Compared different speech recognition and translation models such as Whisper Small, Medium, Large V2, and Turbo. Implemented a user interface as an input system using HTML, CSS, and JavaScript to send data to a local server for the fine-tuned model to process speech. Integrated UDP and UART protocols on ESP32 to control the Mini Dynamo One robot dog. Developed a micro-ROS system on ESP32 for UDP and UART communication with the Mini Dynamo One robot, integrated with ROS 2."
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
