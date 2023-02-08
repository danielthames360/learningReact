import { images } from "../assets/img";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const ServicesSection = () => {

  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={images.clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={images.teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={images.diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={images.money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={images.home2} alt="" />
      </div>
    </div>
  );
};
