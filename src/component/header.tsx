import { AnimatePresence, motion, Transition } from "motion/react";
import { useState } from "preact/hooks";
import { NavLink } from "react-router";
const navRouteLink = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/service",
  },
  {
    label: "Skills",
    path: "/skill",
  },
  {
    label: "Projet",
    path: "/projet",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const baseVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4, // Stagger children by .3 seconds
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
  visible: (index: number) => ({
    x: 0,
    fontSize: "18px",
    transition: {
      delay: index * 0.2,
      type: "spring",
      damping: 20,
      duration: 0.4,

      stiffness: 120,
    } as Transition,
  }),
  hidden: {
    x: "100vw",
  },
};
export const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      className={
        "w-full z-50 h-16 backdrop-blur-sm bg-slate-700/5 fixed top-0 flex place-content-between items-center px-12"
      }>
      <span className={"font-bold"}>Portfolio</span>

      <motion.div
        variants={baseVariant}
        initial={"hidden"}
        key={"list-ul"}
        animate={"visible"}
        className={"flex flex-row gap-5"}>
        {navRouteLink.map((e, i) => (
          <motion.p
            key={e.label}
            custom={i}
            variants={childVariant}
            initial={"hidden"}
            animate={"visible"}
            whileHover={{
              scale: 1.3,
              textShadow: "0px 0px 8px white ",
              boxShadow: "-0px -2px -10px white ",
              transaition: {
                type: "spring",
                duration: 0.1,
                damping: 10,
                stiffness: 120,
              } as Transition,
            }}
            // transition: {
            //   duration: 1.5,

            //   // Stagger children by .3 seconds
            // },
            className={"font-serif  px-3 ring-white rounded-md"}>
            <NavLink to={e.path}> {e.label}</NavLink>
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
