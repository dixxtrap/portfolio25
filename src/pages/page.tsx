import { motion } from "motion/react";
import { ReactNode } from "react";

export const Page = ({
  bg,
  children,
}: {
  bg: string;
  children?: ReactNode;
}) => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        transition: { duration: 0.4 },
      }}
      animate={{
        x: 0,
        transition: { duration: 0.4 },
      }}
      exit={{ x: "100vw", transition: { duration: 0.4 } }}
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundSize: "auto 100%",
      }}
      className={`z-10 w-screen h-screen  items-center justify-center flex flex-col rounded-md  bg-no-repeat`}>
      {children}
    </motion.div>
  );
};

