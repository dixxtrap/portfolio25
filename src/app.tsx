import { useState } from "preact/hooks";

import "./app.css";
import { motion } from "motion/react";
import { Header } from "./component/header";
import { img_header_1 } from "./utils/assets";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Projet } from "./pages/projects";
import { Skill } from "./pages/skills";
import { Service } from "./pages/services";
const baseVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8, // Stagger children by .3 seconds
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const childVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,

      // Stagger children by .3 seconds
    },
  },
  hidden: {
    opacity: 0,
    transition: {},
  },
};
export function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className={
        "h-screen w-screen overflow-hidden text-white bg-gradient-to-tr  from-gray-950  to-slate-900 bg-gra"
      }>
      <motion.div variants={baseVariant} initial={"hidden"} animate={"visible"}>
        {/* Header */}

        <motion.div variants={childVariant} key={"after_header"}>
          <div className={"bg-indigo-400/0 relative  h-screen w-full"}>
            {/* <motion.img src={img_header_1} className="absolute size-full z-[-0]" /> */}

            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projet" element={<Projet />} />
              <Route path="skill" element={<Skill />} />
              <Route path="service" element={<Service />} />
              <Route path="**" element={<Home />} />
            </Routes>
          </div>
        </motion.div>
        <motion.div variants={childVariant} key={"header"}>
          <Header />
        </motion.div>
      </motion.div>
    </div>
  );
}
