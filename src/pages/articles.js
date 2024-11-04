import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/oudom-1.jpg";
import blog2 from "../../public/images/articles/astro-3.jpg";
import blog3 from "../../public/images/articles/astro-1.jpg";
import blog4 from "../../public/images/articles/blog-4.jpg";
import blog5 from "../../public/images/articles/astro-2.jpg";
import blog6 from "../../public/images/articles/blog-6.jpg";
import blog7 from "../../public/images/articles/blog-7.jpg";
import blog8 from "../../public/images/articles/th-1.jpg";
import blog9 from "../../public/images/articles/ev-4.jpg";
import blog10 from "../../public/images/articles/thaiplc-4.jpg";
import blog11 from "../../public/images/articles/ymac-1.jpg";
import blog12 from "../../public/images/articles/spv-1.jpg";
import blog13 from "../../public/images/articles/nanhua-1.jpg";
import blog14 from "../../public/images/articles/ev-2.jpg";
import blog15 from "../../public/images/articles/cr7.jpg";
import blog16 from "../../public/images/articles/tesla.jpg";
import blog17 from "../../public/images/articles/lol.jpg";
import blog18 from "../../public/images/articles/interstellar-1.jpg";

import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

// Modal Component to Show Additional Images
const Modal = ({ article, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    onClose();
  };

  if (!article) return null;

  return (
    <>
      {/* Clickable overlay to close the modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4"
        onClick={closeImageModal}
      >
        {/* Prevent clicks inside the modal content from closing the modal */}
        <div
          className="relative flex flex-row w-full max-w-4xl bg-white dark:bg-dark rounded-lg shadow-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar for additional images */}
          <div className="flex flex-col mr-4 gap-2">
            {article.additionalImages.map((image, index) => (
              <FramerImage
                key={index}
                src={image}
                alt={`${article.title} - Image ${index + 1}`}
                className="rounded-lg cursor-pointer"
                width={100}
                height={100}
                style={{ maxHeight: "100px", width: "auto", objectFit: "cover" }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          {/* Main content in modal */}
          <div className="flex-grow">
            <button
              onClick={closeImageModal}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800 dark:text-red-500"
              style={{ fontSize: "24px" }}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <div className="flex justify-center items-center">
              <FramerImage
                src={selectedImage || article.additionalImages[0]}
                alt="Selected Image"
                width={600}
                height={400}
                className="rounded-lg"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative w-auto max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800 dark:text-red-500"
              style={{ fontSize: "24px" }}
            >
              ✕
            </button>
            <FramerImage
              src={selectedImage}
              alt="Selected Image"
              width={600}
              height={400}
              className="rounded-lg"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

const FeaturedArticle = ({ img, title, summary, additionalImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Toggle the show more/less button
  const toggleShowMore = (e) => {
    e.stopPropagation(); // Prevent triggering the parent <li> onClick event
    setShowMore(!showMore);
  };

  return (
    <>
      <li
        className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl dark:bg-dark dark:border-light cursor-pointer"
        onClick={handleImageClick}
      >
        <div
          className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark -z-10"
        />
        <div className="inline-block rounded-lg overflow-hidden w-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="100vw"
            priority
          />
        </div>

        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>

        {/* Paragraph with line clamping */}
        <p className={`text-sm mb-2 ${!showMore ? "line-clamp-5" : ""}`} style={{ overflow: "hidden" }}>
          {summary}
        </p>

        {/* Button to toggle between showing more or less */}
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleShowMore}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </li>

      {/* Modal Section */}
      {isModalOpen && (
        <Modal
          article={{ title, additionalImages }}
          onClose={closeModal}
        />
      )}

      {/* Include the CSS-in-JS styles */}
      <style jsx>{`
        /* Limit the paragraph to 5 lines with ellipsis */
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5; /* Limit the number of lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="Browse through Oudom's Portfolio"
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Who Am I?"
              summary="My name is Oudom Thach, and I am from Cambodia. I am an fresh-grad engineer, a dreamer, and a relentless seeker of knowledge. I see myself not just as a product of my environment, but as a bridge between the present and the future—a future where technology, humanity, and exploration converge to shape a new narrative...

I am driven by an insatiable curiosity for understanding not only how things work but why they exist. My journey in engineering and robotics is more than a pursuit of technical mastery; it is a quest to create, innovate, and redefine what is possible. I have always been captivated by the way technology can elevate human life, not just through efficiency and power, but through empathy and connection. I want to create machines and systems that don’t replace human potential."
              additionalImages={[
                "/images/articles/astro-4.jpg",
                "/images/articles/oudom_8.jpg",
                "/images/articles/oudom-6.jpg",
                "/images/articles/thiaplc-1.jpg",
                "/images/articles/th-5.jpg",
                "/images/articles/jfkMoon.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog2}
              title="My Aspirations for the Future"
              summary="Looking ahead, I aspire to master the fields of robotics, AI, software engineering, and data science. My vision is to create advanced humanoid robots and autonomous systems that can integrate seamless motion, decision-making, and human-like interactions. I aim to bridge multiple disciplines—AI, robotics, mechanical design, and biomedical applications—to craft technologies that not only solve problems but elevate the human experience.

I dream of contributing to AGI and working on groundbreaking projects that explore the potential of intelligent systems in healthcare, environmental conservation, and more. I believe in leveraging AI and data science to make meaningful advancements that protect and restore the environment, improve sustainable practices, and address global challenges. My goal isn’t just to engineer machines but to create a legacy of innovation that elevates humanity while preserving and enhancing our planet.

In the longer term, I envision contributing to space exploration and planetary science. My dream is not just to work on robotics for Earth, but to imagine how these technologies can support humanity’s efforts beyond our planet—whether through lunar colonies, Mars missions, or deep space exploration. I also aspire to use data-driven insights and AI to find solutions for critical issues like climate change, renewable energy, and sustainable resource management.

Ultimately, I am driven by the idea of exploring new frontiers, both on Earth and beyond, and pushing the boundaries of what’s possible. My aspirations center around advancing the human race and creating a future where technology, humanity, and the environment are in harmony, allowing us to thrive and explore new horizons with purpose and resilience."

              additionalImages={[
                "/images/articles/blog2-1.jpg",
                "/images/articles/blog2-2.jpg",
                "/images/articles/astro-4.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog3}
              title="What Are My Passions?"
              summary="My passions center around the intersection of technology, robotics, and the quest for human progress. I’m driven by a fascination with intelligent systems—how machines think, learn, and interact with their surroundings. For me, building robots and AI isn’t just a technical pursuit; it’s a way to redefine our connection with technology and expand human potential. I aspire to create systems that enhance human lives, not merely through efficiency but through meaningful interaction.

Space exploration holds a special place in my heart, as the mysteries of the cosmos inspire me to push beyond known boundaries. I see space as the ultimate frontier, and my fascination extends from understanding alien life to exploring distant worlds. This drive isn’t just curiosity but a deeper yearning to contribute to humanity’s journey beyond Earth.

Beyond technology and space, I have a profound love for the environment and a deep respect for the interconnectedness of all life. I’m passionate about protecting and preserving the natural world—its animals, plants, and ecosystems—because I believe that advancing as a species means learning to live in harmony with the Earth. I’m fascinated by sustainable technologies and renewable energy solutions that not only propel us forward but also restore and nurture our planet. My interest in energy goes beyond technical efficiency; I see it as a key to fostering a balanced relationship between human progress and environmental well-being.

Ultimately, my passions are about envisioning a future where technology, humanity, exploration, and nature converge. I aim to use my love for robotics, AI, and sustainability to redefine progress and build a future where humanity, machines, and the environment thrive together, embracing new frontiers with purpose, empathy, and a deep sense of responsibility."
              additionalImages={[
                "/images/articles/blog3-1.jpg",
                "/images/articles/blog3-2.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog4}
              title="My Interests"
              summary="I am captivated by the fusion of technology and humanity, particularly in areas that involve advanced humanoid robots, prosthetics, and assistive robotics. My interest in these fields goes beyond their technical aspects; I am intrigued by their philosophical implications and how they can reshape the human experience. I find great satisfaction in prototyping and transforming abstract ideas into tangible, functioning systems.

Beyond robotics, I find joy in exploring different fields of engineering and computer science, from AI development to data science. I am deeply interested in AGI and the ethical questions surrounding advanced intelligent systems. For me, pushing technical boundaries is essential, but it is equally important to remain mindful of the human impact of every technological breakthrough.

I am drawn to career paths that allow me to contribute to large-scale projects in industries like biomedical engineering, space exploration, and sustainable technologies. This inclination towards understanding the nuances of each field reflects my desire to build a multidisciplinary foundation that is both technically robust and holistically balanced."
              additionalImages={[
                "/images/articles/blog4-1.jpg",
                "/images/articles/blog4-2.jpg",
                "/images/articles/blog4-3.jpg",
                "/images/articles/blog4-4.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog5}
              title="Space Exploration And Astronomy"
              summary="My love for space exploration and astronomy is deeply intertwined with a vision of humanity as wanderers, explorers of the vast cosmos, much like Carl Sagan once described. Sagan’s words resonate with me—his view of Earth as a 'pale blue dot,' a fragile speck suspended in the vastness of space, serves as a reminder of our place in the universe and the interconnectedness of all life. It instills in me a sense of wonder, responsibility, and humility.

            To explore space is to honor our intrinsic curiosity and spirit of adventure. For me, it’s not just about expanding our scientific understanding, but about embracing our nature as explorers, ever-driven to push beyond the frontiers of the known. I am inspired by the idea that we are all part of something larger—a cosmic journey that began long before us and will continue far beyond our existence. This perspective shapes my passion to contribute to humanity’s next steps into the cosmos, to explore new worlds, and to unravel the mysteries that have always called to us from the stars.

            I see space exploration not merely as a technical challenge but as a profound act of discovery, one that redefines what it means to be human. It’s about venturing into the unknown, propelled by our curiosity and the belief that understanding the universe is a way to understand ourselves. The pursuit of distant stars and alien worlds fuels my desire to create technologies that allow us to reach farther, explore deeper, and connect with the cosmos on a more profound level.

            Much like Sagan’s vision, I believe that space exploration is an endeavor that unites us, reminding us that we are all travelers on a small planet, journeying together through an infinite cosmos. My dream is to use my skills in robotics, AI, and engineering to be part of this grand voyage, to contribute to missions that push the boundaries of what we know, and to help shape a future where we explore the stars with a sense of awe, responsibility, and purpose."
              additionalImages={[
                "/images/articles/blog5-1.jpg",
                "/images/articles/blog5-2.jpg",
              ]}
            />


            <FeaturedArticle
              img={blog6}
              title="Love for the Environment, Plants, Animals, and Astrobiology"
              summary="My love for the environment stems from a deep sense of connection with the natural world and a recognition of its intricate beauty and complexity. I believe that advancing humanity means learning to coexist harmoniously with our planet, respecting the delicate ecosystems that sustain life. This reverence for the Earth drives my passion for exploring sustainable technologies and solutions that can help preserve and restore our environment. For me, working towards a better future is not just about technological advancements but about nurturing the world that has nurtured us.

Plants and animals have always fascinated me, not only for their biological intricacies but also for the interconnected roles they play in sustaining life on Earth. I am inspired by the resilience of nature and the diversity of life that thrives in every corner of our planet. This fascination motivates me to protect these ecosystems, support biodiversity, and find innovative ways to maintain a balance between technological progress and environmental preservation.

In addition to my love for the natural world on Earth, I am deeply intrigued by the potential for life beyond our planet, which is at the heart of my interest in astrobiology. The idea of discovering extraterrestrial life is not just a scientific pursuit; it is a philosophical exploration that challenges us to expand our understanding of life itself. Astrobiology represents the intersection of my passion for space and my curiosity about life’s origins and adaptability in extreme conditions. It is about seeking answers to profound questions that have captivated humanity for centuries and embracing the possibility that life, in some form, may exist elsewhere in the cosmos.

My love for the environment, plants, animals, and the exploration of life beyond Earth all converge in a vision of a future where humanity not only advances technologically but also deepens its connection to the natural world. I strive to contribute to this vision by working on projects that respect and protect our planet while pushing the boundaries of exploration and discovery. For me, the pursuit of knowledge and progress is inseparable from the responsibility to preserve and cherish the life around us, both on Earth and beyond."
              additionalImages={[
                "/images/articles/blog5-2.jpg",
                "/images/articles/blog5-3.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog7}
              title="My Part-Time Assistance at Le Lézard Bleu, Cambodia"
              summary="During my time at Le Lézard Bleu, a family-owned souvenir shop in Cambodia, I gained invaluable experiences that shaped both my character and skills. The shop was run by my aunt, who played a significant role in my life before her passing due to cancer. Losing her without the chance to say goodbye one last time was an emotional experience, leaving me with a deep sense of loss but also a stronger resolve to carry forward her legacy.

As a part-time assistant, I took on various responsibilities that helped me grow in resilience, communication, and empathy. One of my key roles involved customer support, where I engaged with visitors from diverse countries and backgrounds. It wasn’t just about answering questions or facilitating sales; it was about creating meaningful interactions and ensuring each customer felt heard and valued. I also assisted in translating for international visitors, bridging cultural and language gaps to enhance their experience at the shop.

In addition to customer interactions, I helped with sales assistance, advising customers on material selections and sharing the unique stories behind each item. This role required a genuine appreciation for the craftsmanship involved and attentiveness to customers' needs. It was through these tasks that I learned the importance of fostering authentic connections and building trust in every interaction.

Working at Le Lézard Bleu taught me to be adaptable, compassionate, and attentive, even in challenging situations. Despite the heartache of losing my aunt, I hold the lessons and memories from the shop close to my heart. They continue to inspire me in my journey towards becoming a better leader, communicator, and person who values meaningful connections and cultural understanding."
              additionalImages={[
                "/images/articles/blog-7.jpg",
                "/images/articles/le-2.jpg",
                "/images/articles/le-3.jpg",
                "/images/articles/le-4.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog8}
              title="My University Life"
              summary="I began my academic journey at the American University of Phnom Penh (AUPP) in Cambodia, pursuing a bachelor’s degree in Civil Engineering. My time at AUPP was brief but significant, as it laid the foundation for my understanding of engineering principles and introduced me to the diverse world of structural design and construction. Although my initial focus was on civil engineering, my interests and ambitions soon evolved.

During this period, I received a life-changing opportunity through The Royal Scholarship under Her Royal Highness Princess Maha Chakri Sirindhorn Education Project to the Kingdom of Cambodia, which allowed me to pursue a bachelor’s degree in Mechatronics Engineering. This prestigious scholarship opened the door for me to broaden my horizons beyond the initial field I had chosen. It was more than just financial support; it was an honor and a responsibility that shifted the direction of my academic and professional path. This transition allowed me to explore my passion for mechatronics and robotics, aligning more closely with my aspirations to work at the intersection of technology, humanity, and exploration.

The scholarship provided more than an education; it offered me a chance to grow, embrace new opportunities, and pursue a path where I could merge my love for engineering with my vision of creating meaningful advancements in technology and robotics. This experience taught me that change is not a deviation from the path but an expansion of it, leading me towards a future where my interests and ambitions converge."
              additionalImages={[
                "/images/articles/oudom-7.jpg",
                "/images/articles/oudom-8.jpg",
                "/images/articles/th-7.jpg",
                "/images/articles/th-6.jpg",
                "/images/articles/thaiplc-2.jpg",
                "/images/articles/thaiplc-3.jpg",
                "/images/articles/th-5.jpg",
                "/images/articles/th-2.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog9}
              title="My Life In Thailand"
              summary="Since my last visit to Cambodia in 2019, living in Thailand has been a defining chapter of my life, one that has shaped my character and worldview in profound ways. The distance from my family and friends wasn’t just a test of independence, but a journey into resilience and adaptability. Immersing myself in a culture so different from my own challenged me to step beyond my comfort zone and embrace new perspectives with humility. It taught me to be open-minded, adaptable, and to find value in every interaction, reminding me that growth often emerges from moments of discomfort and uncertainty.

This experience also deepened my understanding of the importance of human connections. Being far from those I care about made me more intentional in maintaining bonds and cherishing the moments I have with them. I realized that relationships are the foundation of my journey, offering support and grounding me even from a distance. The solitude in Thailand encouraged deeper self-reflection, helping me to refine my goals, clarify my values, and understand the kind of person I aspire to be. It has also broadened my empathy, allowing me to connect with others across cultural and linguistic barriers in meaningful ways.

Ultimately, my time in Thailand has taught me that while it’s important to stay true to myself, it’s equally essential to be open to change and new experiences. This chapter has not only prepared me to face challenges with resilience but has also inspired me to approach the world with curiosity, empathy, and purpose. It’s a journey of growth that continues to shape my aspirations and my vision for the future."
              additionalImages={[
                "/images/articles/oudom-2.jpg",
                "/images/articles/oudom-6.jpg",
                "/images/articles/ev-6.jpg",
                "/images/articles/ev-5.jpg",
                "/images/articles/th-4.jpg",
                "/images/articles/ev-3.jpg",
                "/images/articles/ev-1.jpg",
                "/images/articles/ev-2.jpg",
                "/images/articles/ev-7.jpg",
                "/images/articles/ev-8.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog10}
              title="Internship Experience at Thai PLC Center"
              summary="During my internship at the Thai PLC Center, I had the unique experience of being the only Cambodian intern, which gave me the opportunity to connect with people from diverse backgrounds and cultures. This environment not only broadened my perspective but also allowed me to build lasting friendships with other interns and colleagues, many of whom I still keep in touch with today.

Throughout the internship, I gained hands-on experience in various aspects of electrical systems and engineering processes, which deepened my understanding of the practical applications of my academic knowledge. My responsibilities ranged from learning and implementing safety protocols to assisting with assembly and maintenance tasks.

One of my key responsibilities involved working with Programmable Logic Controllers (PLCs), essential components in automation and industrial control systems. I learned how to program, configure, and troubleshoot PLCs, gaining valuable insights into their role in controlling machinery and optimizing industrial processes. This hands-on exposure not only sharpened my technical skills but also deepened my appreciation for the complexities of automation.

Additionally, I was responsible for preparing the Bill of Materials (BOM), where I meticulously documented and organized components required for various projects. This role taught me the importance of attention to detail and efficient planning in engineering tasks.

Collaborating with different departments at the center allowed me to enhance my teamwork and communication skills, as I worked closely with professionals from diverse backgrounds. This collaborative environment helped me understand the significance of interdisciplinary teamwork in achieving project goals.

My internship at Thai PLC Center was a pivotal experience that reinforced my technical abilities while teaching me the value of adaptability, precision, and effective collaboration. It gave me a clearer vision of how engineering solutions can be practically implemented and solidified my passion for pursuing a career in robotics, automation, and technology."
              additionalImages={[
                "/images/articles/thaiplc-1.jpg",
                "/images/articles/thaiplc-4.jpg",
                "/images/articles/thaiplc-5.jpg",
                "/images/articles/thaiplc-6.jpg",
                "/images/articles/thaiplc-7.jpg",
                "/images/articles/thaiplc-8.jpg",
                "/images/articles/thaiplc-9.jpg",
                "/images/articles/thaiplc-10.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog11}
              title="YMAC 2020 Experience With RMUTL x Singapore Polytechnic"
              summary="Participating in the Youth Model ASEAN Conference (YMAC) 2020 was a transformative experience that broadened my understanding of regional and global issues while honing my leadership and communication skills. The conference involved both online interactions with ASEAN candidates and teammates, and onsite activities with my Thai friends and fellow participants. This dual format provided a rich and immersive experience, allowing me to connect and collaborate with a diverse group of young leaders from across the ASEAN region.

The online sessions allowed me to engage with ASEAN candidates and teammates, creating an environment for meaningful cross-border collaboration. Despite being virtual, these interactions provided insights into the diverse cultures and perspectives within the ASEAN community, enhancing our discussions and debates. Working with international teammates remotely taught me the importance of clear communication, adaptability, and inclusivity in fostering mutual understanding and cooperation.

Onsite, the experience with my Thai friends and candidates brought a personal and collaborative dimension to the conference. Face-to-face interactions allowed us to solidify our teamwork and engage in more dynamic simulations of ASEAN meetings. We participated in debates, negotiations, and decision-making exercises that challenged us to navigate real-world complexities and represent our assigned countries’ interests effectively.

One of the key takeaways from YMAC 2020 was the importance of diplomacy, open-mindedness, and adaptability in achieving meaningful progress. The experience required me to think critically, communicate persuasively, and listen actively to differing viewpoints. Navigating diverse opinions and negotiating effectively enhanced my skills in leadership and cross-cultural collaboration.

YMAC 2020 was more than just a conference; it was a journey of growth, connection, and understanding. It provided me with the opportunity to engage with like-minded individuals who share a passion for leadership and regional development. The experience deepened my understanding of ASEAN’s challenges and strengthened my commitment to fostering collaboration and unity within the region. It inspired me to continue pursuing opportunities where I can contribute to positive change and engage with others to address global and regional issues."
              additionalImages={[
                "/images/articles/ymac-1.jpg",
                "/images/articles/ymac-2.jpg",
                "/images/articles/ymac-3.jpg",
                "/images/articles/ymac-4.jpg",
                "/images/articles/ymac-5.jpg",
                "/images/articles/ymac-6.jpg",
                "/images/articles/YMAC2020Color.jpg",
                "/images/articles/YMAC2022Color.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog12}
              title="SP Virtual Exchange 2020 With Singapore Polytechnic"
              summary="During the SP Virtual Exchange organized by Singapore Polytechnic, I had the opportunity to learn about ASEAN culture, economy, government, history, and languages alongside other international candidates. This experience deepened my understanding of the region’s diverse dynamics and interconnectedness. It was an enriching journey that broadened my knowledge of the complexities within ASEAN and highlighted the importance of cross-cultural communication and collaboration in navigating these diverse landscapes. Engaging with other participants allowed me to gain fresh perspectives and appreciate the shared challenges and opportunities that unite the ASEAN community."
              additionalImages={[
                "/images/articles/blog12-1.jpg",
                "/images/articles/blog12-2.jpg",
                "/images/articles/blog12-3.jpg",
                "/images/articles/blog12-4.jpg",
                "/images/articles/blog12-5.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog13}
              title="Design Thinking x Slow Movement With Nanhua University 2021"
              summary="In 2021, I participated in the Design Thinking x Slow Movement program with Nanhua University, Taiwan, where I learned to blend design thinking principles with the philosophy of the slow movement. This approach emphasized creating thoughtful and sustainable solutions by encouraging a deeper understanding of challenges and their broader impact. The program’s collaborative workshops helped me refine my problem-solving skills by focusing on empathy, creativity, and mindfulness. This experience reinforced my commitment to designing solutions that are not only innovative but also considerate of their impact on people, communities, and the environment."
              additionalImages={[
                "/images/articles/nanhua-1.jpg",
                "/images/articles/nanhua-2.jpg",
                "/images/articles/nanhua-3.jpg",
                "/images/articles/nanhua-4.jpg",
                "/images/articles/nanhua-5.jpg",
                "/images/articles/nanhua-6.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog14}
              title="My Hobbies"
              summary="My hobbies reflect a balance between physical activity, intellectual curiosity, and creativity. I enjoy long-distance running, which not only keeps me physically fit but also gives me time to reflect and clear my mind. Playing football (soccer) is another passion of mine, where I appreciate both the teamwork and strategy involved in the game. Gaming is a significant hobby for me, especially when it involves strategy and simulation. These types of games allow me to engage in complex problem-solving, resource management, and strategic thinking, which align closely with my love for engineering and exploration. They challenge me to think creatively and analytically, offering opportunities to explore virtual environments where I can test my skills and ideas.

When it comes to reading, I am deeply interested in exploring topics related to science, AI, biology, astrophysics, business, and history. These subjects not only fuel my intellectual curiosity but also provide me with insights into different aspects of the world and the universe. I find joy in expanding my knowledge and connecting ideas across disciplines, whether it’s understanding the intricacies of biology or contemplating the vastness of space."
              additionalImages={[
                "/images/profile/developer-pic-2.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog15}
              title="My Favorite Football Player"
              summary="Cristiano Ronaldo is my favorite football player and someone I deeply admire. He is my idol not just because of his exceptional talent on the field, but also because of his relentless work ethic, resilience, and dedication to self-improvement. Ronaldo’s journey from humble beginnings to becoming one of the greatest players in the world is a testament to his discipline and perseverance. He has consistently demonstrated that talent alone is not enough; it must be matched with hard work, focus, and an unyielding drive to achieve excellence.

What inspires me most about Ronaldo is his mindset and commitment to pushing beyond limits, both physically and mentally. He maintains a level of discipline and professionalism that serves as a powerful example of what it means to be dedicated to a craft. His ability to adapt, his constant pursuit of growth, and his never-give-up attitude resonate with me as I navigate my own journey. Ronaldo’s journey teaches me the value of persistence, resilience, and the importance of always striving for more, no matter how great the challenges may be."
              additionalImages={[
                "/images/articles/cr7-1.jpg",
                "/images/articles/cr7-2.jpg",
                "/images/articles/cr7-3.jpg",
                "/images/articles/cr7-4.jpg",
                "/images/articles/cr7-5.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog16}
              title="Inspirational Figures and the Journey of Exploration"
              summary="The fascination with space, exploration, and the mysteries of the cosmos has been deeply inspired by the works of Carl Sagan, whose words like We are wanderers and The Pale Blue Dot continually remind me of our shared journey through the vast universe. His vision of humanity as explorers aligns with my aspirations to contribute to space exploration and astrobiology. Alongside Sagan, figures like Albert Einstein and Stephen Hawking shaped my understanding of astrophysics and the pursuit of deeper truths. Their relentless curiosity and groundbreaking discoveries inspire me to push beyond known boundaries and seek answers to the profound questions that lie beyond our planet. The pioneering research of Sara Seager in exoplanets further ignited my passion for understanding life beyond Earth, fueling my curiosity about the existence of extraterrestrial life.

Delving into the realms of technology and artificial intelligence, the works of pioneers like Alan Turing and Nikola Tesla have been guiding influences. Turing’s foundational contributions to computer science and AI continue to shape my vision of intelligent systems, while Tesla’s innovative spirit and dedication to advancing humanity through technology resonate with my own drive to create impactful solutions. Additionally, I find inspiration in the lives of Charles Darwin and Richard Feynman, whose dedication to exploring life’s complexities and connecting scientific ideas across disciplines aligns with my approach to continuous learning and exploration. Their stories serve as reminders of the importance of curiosity, adaptability, and resilience in the pursuit of knowledge.

The courage to explore new frontiers is exemplified by Neil Armstrong and the Wright Brothers, whose achievements in aviation and space exploration stand as enduring symbols of human resilience and ambition. Their willingness to push beyond limits inspires my drive to explore both technological and physical realms. Similarly, Elon Musk’s vision for space exploration and sustainable innovation motivates me to pursue ambitious goals at the intersection of robotics, AI, and space. Beyond the world of science and engineering, Bruce Lee’s philosophy emphasizes the importance of self-discipline, adaptability, and continuous improvement—qualities I strive to embody in my journey. Together, these figures and their groundbreaking achievements have collectively shaped my vision of a future where technology, exploration, and humanity converge to elevate human potential."
              additionalImages={[
                "/images/articles/blog2-3.jpg",
                "/images/articles/blog2-2.jpg",
                "/images/articles/blog16-1.jpg",
                "/images/articles/blog16-2.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog17}
              title="Games I Enjoy"
              summary="In my free time, I enjoy playing League of Legends, which challenges me to think strategically, adapt quickly, and remain competitive. I also play games like Factorio, Oxygen Not Included, and RimWorld for their focus on resource management and system optimization, aligning with my love for engineering and problem-solving. Cities: Skylines and Stardew Valley allow me to explore urban planning and community building, while Kerbal Space Program fuels my fascination with space exploration. For intense action, Valorant sharpens my reflexes and strategic thinking, and Satisfactory offers creativity through large-scale automation and logistics. These games inspire and engage me with themes of strategy, creativity, and collaboration."
              additionalImages={[
                "/images/articles/blog17-1.jpg",
                "/images/articles/blog17-3.jpg",
                "/images/articles/blog17-4.jpg",
              ]}
            />

            <FeaturedArticle
              img={blog18}
              title="Favorite Movie:Interstellar"
              summary="My favorite movie is Interstellar. This film resonates deeply with my passion for space exploration and my curiosity about the mysteries of the universe. The way it portrays humanity’s resilience and determination to reach beyond Earth, driven by the need to explore new frontiers, aligns with my own aspirations. The themes of time, gravity, and the search for habitable worlds reflect my fascination with astrophysics and astrobiology, while the emotional journey of the characters serves as a powerful reminder of the human spirit’s capacity to endure and adapt in the face of uncertainty.

Central characters like Cooper and Dr. Brand embody the film’s deeper exploration of love and sacrifice. Cooper’s journey, driven by his love for his daughter Murph and his commitment to securing a future for humanity, illustrates how powerful and enduring the bonds of family can be. Dr. Brand’s unwavering belief in their mission and her connection to her father highlight how love can guide us even in the face of immense challenges. Their stories emphasize that love is not just an emotion but a motivation that propels us forward in our most critical moments.

Beyond its scientific concepts and space travel, Interstellar explores profound themes of love and family, which resonate with my belief in the importance of human connections. The film beautifully illustrates how love can transcend space and time, serving as a driving force behind the characters’ sacrifices and choices. This portrayal of family and love as motivations for exploration and survival highlights the human element in our pursuit of knowledge and discovery. It’s a reminder that even as we reach for the stars, the bonds we share with others are what ground us and give meaning to our journey.

Interstellar doesn’t just inspire me with its depiction of scientific challenges; it also fuels my desire to contribute to humanity’s exploration of the cosmos and its understanding of life beyond Earth. The movie’s emphasis on discovery, hope, and the drive to survive and thrive in new environments captures the essence of why I am drawn to space and technology. It serves as a reminder of the limitless possibilities that lie ahead if we continue to push the boundaries of what we know, driven not just by ambition but by love, hope, and the connections that define our humanity."
              additionalImages={[
                "/images/articles/blog18-1.jpg",
                "/images/articles/blog18-2.jpg",
                "/images/articles/blog18-3.jpg",
                "/images/articles/blog18-4.jpg",
              ]}
            />



          </ul>
          <ul className="flex flex-col items-center relative"></ul>
        </Layout>
      </main>
    </>
  );
}










