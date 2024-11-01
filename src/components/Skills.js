import React from "react";

const Skills = () => {
    const technicalSkills = [
        "Mechatronics",
        "Mechanics Design",
        "PCB Design",
        "Python",
        "MySQL",
        "C++",
        "Website Development",
        "Data Science",
        "PLC",
        "Machine Learning",
        "Natural Language Processing",
        "LLM",
        "Kotlin"
    ];

    const softSkills = [
        "Team Collaboration",
        "Problem-Solving",
        "Leadership",
        "Time Management",
        "Adaptability",
        "Communication",
        "Creativity",
        "Attention to Detail",
        "Critical Thinking",
        "Empathy"
    ];

    const toolsUsed = [
        "SolidWorks",
        "Fusion 360",
        "MATLAB",
        "AutoCAD",
        "Altium Designer",
        "ANSYS",
        "Mastercam",
        "PLC Programming Tools",
        "ROS",
        "LabVIEW",
        "Canvas",
        "Power BI",
        "Microsoft Office"
    ];

    const languages = [
        { language: "Khmer/Cambodian", proficiency: "Native" },
        { language: "English", proficiency: "Fluent" },
        { language: "Thai", proficiency: "Fluent" },
        { language: "French", proficiency: "Beginner" },
        { language: "Vietnamese", proficiency: "Beginner (understand alphabets and pronunciation)" }
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-32 w-full px-4 md:px-0">
            <h2 className="font-bold text-6xl mb-12 w-full text-center md:text-5xl">
                Skills
            </h2>
            <div className="flex flex-col items-center justify-center w-full max-w-4xl bg-light dark:bg-dark p-10 rounded-lg shadow-lg">
                {/* Technical Skills List */}
                <div className="w-full mb-12">
                    <h3 className="font-semibold text-2xl mb-6 text-center">Technical Skills</h3>
                    <ul className="text-lg md:text-md list-disc list-inside p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
                        {technicalSkills.map((skill, index) => (
                            <li
                                key={index}
                                className="py-2 hover:text-primary transition-colors duration-300 text-left w-full max-w-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Soft Skills List */}
                <div className="w-full mb-12">
                    <h3 className="font-semibold text-2xl mb-6 text-center">Soft Skills</h3>
                    <ul className="text-lg md:text-md list-disc list-inside p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
                        {softSkills.map((skill, index) => (
                            <li
                                key={index}
                                className="py-2 hover:text-primary transition-colors duration-300 text-left w-full max-w-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools Used List */}
                <div className="w-full mb-12">
                    <h3 className="font-semibold text-2xl mb-6 text-center">Tools Used</h3>
                    <ul className="text-lg md:text-md list-disc list-inside p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
                        {toolsUsed.map((tool, index) => (
                            <li
                                key={index}
                                className="py-2 hover:text-primary transition-colors duration-300 text-left w-full max-w-sm"
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Languages List */}
                <div className="w-full mb-12">
                    <h3 className="font-semibold text-2xl mb-6 text-center">Languages</h3>
                    <ul className="text-lg md:text-md list-disc list-inside p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
                        {languages.map((lang, index) => (
                            <li
                                key={index}
                                className="py-2 hover:text-primary transition-colors duration-300 text-left w-full max-w-sm"
                            >
                                {lang.language} - {lang.proficiency}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;



