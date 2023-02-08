import { images } from "../assets/img";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimate,
  line,
  slider,
  sliderContainer,
} from "../animation";
import { ScrollTop } from "../components";

export const OurWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <div className="work">
        <motion.div variants={sliderContainer} className="">
          <motion.div
            variants={slider}
            className="frame frame--yellow"
          ></motion.div>
          <motion.div
            variants={slider}
            className="frame frame--pink"
          ></motion.div>
          <motion.div
            variants={slider}
            className="frame frame--sky"
          ></motion.div>
          <motion.div
            variants={slider}
            className="frame frame--green"
          ></motion.div>
        </motion.div>
        <div className="movie">
          <motion.h2 variants={fade}>The athlete</motion.h2>
          <motion.div variants={line} className="line"></motion.div>
          <div className="imageContainer">
            <motion.img
              variants={photoAnimate}
              src={images.athleteSmall}
              alt="athlete"
            />
          </div>
        </div>
        <div className="movie">
          <h2>The Racer</h2>
          <div className="line"></div>
          <img src={images.theRacerSmall} alt="racer" />
        </div>
        <div className="movie">
          <h2>Good Times</h2>
          <div className="line"></div>
          <img src={images.goodTimesSmall} alt="goodTimes" />
        </div>
        <ScrollTop />
      </div>
    </motion.div>
  );
};
