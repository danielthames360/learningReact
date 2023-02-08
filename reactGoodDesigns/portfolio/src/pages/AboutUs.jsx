import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { ServicesSection, AboutSection, FaqSection, ScrollTop } from "../components";

export const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
