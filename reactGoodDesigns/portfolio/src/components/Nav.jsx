import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigator = useNavigate();

  return (
    <nav className="nav">
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#" onClick={() => navigator("/")}>
            1.- About Us
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigator("/work")}>
            2.- Our Work
          </a>
        </li>
        {/* <li>
          <a href="#" onClick={() => navigator("contact")}>
            3.- Contact Us
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
