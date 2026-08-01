import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full sm:w-[80%] lg:w-[60%] mx-auto flex flex-col items-start sm:items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize dark:text-light font-bold text-xl sm:text-2xl">
          {type}
        </h3>
        <span className="font-medium capitalize dark:text-light text-dark/75 text-sm sm:text-base">
          {time} {place}
        </span>
        <p className="font-medium dark:text-light w-full text-sm sm:text-base">
          {info}
        </p>
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
    <div className="my-20 sm:my-32 lg:my-64">
      {/* এই অংশে শিক্ষাগত ইতিহাসের time line দেখানো হয় */}
      <h2 className="font-bold text-5xl sm:text-6xl lg:text-8xl dark:text-light mb-10 sm:mb-20 lg:mb-32 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-full sm:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-3 sm:left-9 top-0 w-[3px] sm:w-[4px] h-full dark:bg-light bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            type=" secondary school"
            time=" 2016 - 2021 |"
            place="Jagannathpur Haji Ershad Mia High School"
            info="Secondary school covers grades 12-16 (ages 11-15) and bridges primary education with higher education or vocational training. The curriculum includes core subjects and electives, with a focus on exams and extracurricular activities. It prepares students for adulthood and future career paths."
          />
          <Details
            type=" Higher secondary school"
            time=" 2022 - 2023 |"
            place="Kakortala Janata Collage "
            info="Higher secondary school typically covers grades 17-19 (ages 18-20) and serves as a bridge between secondary education and higher education or vocational training. It offers specialized courses in science, arts, and commerce to prepare students for university entrance exams or job opportunities. The curriculum is more focused and rigorous, helping students develop critical thinking and advanced knowledge."
          />
          <Details
            type="MERN stack Devoloper"
            time="2024-Present |"
            place="Creative  it Institue"
            info="MERN Stack Development Course
MongoDB: Learn how to use MongoDB for database management.

Express.js: Understand how to build server-side applications with Express.js.

React.js: Master front-end development with React.js.

Node.js: Get hands-on experience with Node.jsfor server-side programming.

Comprehensive Curriculum: Covers all essential aspects of full-stack development.

Hands-On Learning: Practical projects and assignments.

Creative IT Institute
Top-Ranked: One of the leading IT institutes in Asia.

Expert Faculty: Experienced instructors guiding you through the course."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
