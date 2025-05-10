"use client";

import { motion } from "motion/react";

interface Props {
  index: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function HomeCard({ index, title, description, icon }: Props) {
  const slideInAnimationVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        type: "spring",
        stiffnes: 80,
      },
    }),
  };
  return (
    <div className="mt-15 max-w-[15rem] h-90 w-72">
      <motion.div
        key={index}
        variants={slideInAnimationVariants}
        className="h-full w-full pb-5"
        initial="initial"
        whileInView="animate"
        custom={index}
        viewport={{
          // once: true,
          amount: 0.5,
        }}
      >
        <div className="border rounded-lg py-5 px-3.5 flex flex-col justify-between items-center gap-10 h-full w-full hover:shadow-lg transition-all duration-300 shadow-foreground hover:shadow-foreground/40 hover:scale-[1.025] ">
          <h1 className="text-2xl tracking-tighter font-bold text-center">
            {title}
          </h1>
          <div className="w-full"> {icon}</div>
          <p className=" text-center font-semibold">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
