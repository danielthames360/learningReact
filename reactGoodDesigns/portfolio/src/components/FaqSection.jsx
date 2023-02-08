import { LayoutGroup } from "framer-motion";
import { Toggle } from "./Toggle";

export const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>{" "}
      </h2>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos amet repudiandae, quas.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos amet repudiandae, quas.
            </p>
          </div>
        </Toggle>

        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos amet repudiandae, quas.
            </p>
          </div>
        </Toggle>
    </div>
  );
};
