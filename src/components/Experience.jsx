"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg">
          {position}
          &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
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
        Experiences
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px] 
        "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Team Leader"
            company="DappsFactory"
            companyLink="www.dappsfactory.io"
            time="2022-Present"
            address="Buenos Aires, Argentina"
            work="Led a team of talented developers and designers
             to create cutting-edge dapps for various industries and sectors,
            using blockchain, IA, nextjs, and aws technologies. Oversaw the entire development lifecycle,
            from ideation to deployment and testing.
             Ensured the quality, security, and usability of the products and delivered them on time and within budget."
          />
          <Details
            position="Software Developer"
            company="ActionFintech"
            companyLink="www.actionfintech.com"
            time="2020-2022"
            address="Buenos Aires, Argentina"
            work="Worked on a team responsible for 
            building innovative solutions for blockchain, using IA to enhance the security 
            and performance of the network and developing new applications with the latest
            nextjs versions and aws services."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
