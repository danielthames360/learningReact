import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components";
import { AboutUs, ContactUs, OurWork } from "./pages";
import { AnimatePresence } from "framer-motion"; 

export const App = () => {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
