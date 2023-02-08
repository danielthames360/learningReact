import { motion } from "framer-motion";
import { images } from "../assets/img";
import { titleAnimate, photoAnimate, fade } from "../animation";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnimate}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>true.</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>

      <div className="image">
        <motion.img
          variants={photoAnimate}
          src={images.home1}
          alt="Guy with a camera"
        />
      </div>
      <Wave />
    </div>
  );
};
