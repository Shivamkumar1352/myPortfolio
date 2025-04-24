import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ name, image, link }) => (
  <motion.div variants={fadeIn("up", "spring")}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div
        className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
      </div>
    </Tilt>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
