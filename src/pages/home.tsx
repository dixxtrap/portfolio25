import React from "react";
import { motion } from "motion/react";
import {
  img_header_1,
  img_me_1,
  img_planet_1,
  svg_planet_1,
  svg_planet_2,
  svg_planet_3,
} from "../utils/assets";
import { Transition } from "motion";
import {
  discordPath,
  facebookPath,
  linkedInPath,
  twitterPath,
  whatsappPath,
} from "../component/icon/icon_conf";
import { RsIcon } from "../component/icon/rs_icon";
import { Page } from "./page";

const baseVariant = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transitioon: {
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
};
export const Home = () => {
  return (
    <Page bg={img_header_1}>
      <motion.img
          src={img_me_1}
          initial={{ y: "-100vh", zIndex: 3, transition: { scale: 1 } }}
          animate={{
            y: 0,

            boxShadow: "-8px 18px 18px white , -1px 1px 1px ",
            transition: {
              ease: "easeInOut",
              damping: 22,
              bounce: 0.8,
              scale: 1,
              stiffness: 120,
              duration: 0.9,
              delay: 0.9,
            } as Transition,
          }}
          whileHover={{
            scale: 0.8,
            zIndex: 11,
            margionRight: "180px",
            transition: {
              type: "spring",
              bounce: 0.8,
              bounceDamping: 12,
              bounceStiffness: 200,
            } as Transition,
          }}
          className={
            " ring-sky-100 absolute left-[80vw] top-[50vh] backdrop-blur-xl size-24 rounded-full  ring-1 shadow-stone-400"
          }
          alt=""
        />
      {/* red planet */}
      <motion.img
        initial={{ y: "100vh" }}
        animate={{
          y: 0,
          transition: {
            ease: "easeInOut",
            damping: 22,
            bounce: 0.8,
            scale: 1,
            stiffness: 120,
            duration: 0.9,
            delay: 1.9,
          } as Transition,
        }}
        className={"absolute left-[60vw] z-10 top-[20vh] h-[20vh]"}
        src={svg_planet_1}
      />
      {/* Cyan */}
      <motion.img
        initial={{ y: "100vh" }}
        animate={{
          y: 0,
          transition: {
            ease: "easeInOut",
            damping: 22,
            bounce: 0.8,
            scale: 1,
            stiffness: 120,
            duration: 0.9,
            delay: 1.2,
          } as Transition,
        }}
        className={"absolute -left-[10vw]  top-[40vh] z-10 h-[55vh]"}
        src={svg_planet_3}
      />
      {/* Red Planet */}
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{
          y: 0,
          transition: {
            ease: "easeInOut",
            damping: 22,
            bounce: 0.8,
            scale: 1,
            stiffness: 120,
            duration: 0.9,
            delay: 1.9,
          } as Transition,
        }}
        className={"absolute  h-[30vh]"}
        src={svg_planet_2}
      />
      <motion.div
        variants={baseVariant}
        initial={"hidden"}
        animate={"visible"}
        className={"flex grow w-full justify-between px-20  items-center"}>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{
            y: 0,
            boxShadow: "1px 2px 2px white, -1px -2px 2px white",
            transition: {
              type: "spring",
              duration: 0.9,
              damping: 22,
              stiffness: 300,
            } as Transition,
          }}
          className={
            "backdrop-blur-lg p-5 ring-2 ring-inset ring-white rounded-md  max-w-[600px]"
          }>
          <span className={"  font-bold text-xl mb-5"}>
            Hello I am Djiga Salane<br></br>
            <span className={"text-4xl text-sky-200  text-pretty"}>
              Full Stack Developper
            </span>
          </span>
          <br></br>
          <span className={"text-xl font-serif"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            asperiores vero et necessitatibus laudantium ut corrupti dolorem,
            molestias ipsa, delectus natus eaque similique vel iure nihil
            maiores reiciendis deleniti. Commodi. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tempora, ipsa iure quasi at
            repellendus fugit quos dignissimos facere pariatur! Sit totam porro
            ullam suscipit quae expedita, commodi provident vitae perferendis.
          </span>
        </motion.div>
        <div></div>
      </motion.div>
      <div className={"flex z-20 w-full justify-between lg:px-20 pb-12"}>
        <div className={"flex gap-3 items-center w-full "}>
          <div className={"w-[300px] flex gap-3"}>
            <motion.button
              initial={{ background: "#fff0" }}
              whileHover={{
                background: "#fff",
                color: "#000",
              }}
              className={
                " basis-1/2 font-bold font-serif ring-2 ring-slate-400 rounded-lg py-2 backdrop-blur-lg"
              }>
              Hire Me
            </motion.button>
            <motion.button
              className={
                " basis-1/2 font-bold font-serif ring-2 ring-slate-400 rounded-lg py-2 backdrop-blur-lg"
              }>
              Let's Talk
            </motion.button>
          </div>
          <div className={"grow"}></div>
          <div className={"flex gap-3"}>
            {[twitterPath, discordPath, linkedInPath, facebookPath].map(
              (e, i) => (
                <RsIcon path={e} index={i} />
              )
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};
