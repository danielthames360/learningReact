import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Hello</h1>
    </motion.div>
  );
};
