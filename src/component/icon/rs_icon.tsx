import { motion } from "motion/react";
import { icon_conf } from "./icon_conf";

export const RsIcon = ({ path, index }: { path: string; index: number }) => {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      jsx={true}
      initial={{}}
      animate={{}}
      className="rs icon "
      xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,

          transition: {
            duration: 0.4,
            delay: index * 0.4,
          },
        }}
        d={path}
        {...icon_conf}
      />
    </motion.svg>
  );
};
