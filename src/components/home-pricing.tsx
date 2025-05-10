"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function HomePricing() {
  return (
    <div className="space-y-16 px-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="text-lg md:text-5xl font-bold tracking-tighter pb-4 text-center"
      >
        Our Offering
      </motion.h1>

      <div className="mx-auto w-full max-w-3xl grid md:grid-cols-2 gap-7 min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className=" shadow-lg rounded-lg p-6 border-2 flex flex-col items-start justify-between px-6 py-7"
        >
          <h2 className="text-2xl md:text-4xl font-semibold">Free</h2>
          <div className="text-xl space-y-1">
            <h3>Your Benefits:</h3>
            <div className="flex items-center w-full justify-start gap-2">
              <CheckIcon />
              <p className="text-lg">Access posts</p>
            </div>
            <div className="flex items-center w-full justify-start gap-2">
              <CheckIcon />
              <p className="text-lg">Ability To Buy Plans</p>
            </div>
            <div className="flex items-center w-full justify-start gap-2">
              <CheckIcon />
              <p className="text-lg">Minimal Access To Bro</p>
            </div>
          </div>
          <Button className="w-full" variant="outline">
            Get Started
          </Button>
        </motion.div>
        <div className="relative w-full h-full scale-[1.05]">
          <div className="absolute inset-0 rounded-lg border-[3px] border-primary animate-pulse pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="shadow-lg rounded-lg p-6  flex flex-col items-start justify-between px-6 py-7 w-full h-full"
          >
            <div className="space-y-1">
              <h2 className="text-2xl md:text-4xl  font-semibold">
                Subscription
              </h2>
              <p className="font-semibold text-lg">
                Just <span className=" ml-2">€30</span>
              </p>
            </div>
            <div className="text-xl space-y-1">
              <h3>Your Benefits:</h3>
              <div className="flex items-center w-full justify-start gap-2">
                <CheckIcon />
                <p className="text-lg">Access posts</p>
              </div>
              <div className="flex items-center w-full justify-start gap-2">
                <CheckIcon />
                <p className="text-lg">Ability To Buy Plans</p>
              </div>
              <div className="flex items-center w-full justify-start gap-2">
                <CheckIcon />
                <p className="text-lg">Exercises Reviews Through Bro</p>
              </div>
              <div className="flex items-center w-full justify-start gap-2">
                <CheckIcon />
                <p className="text-lg">Full Chat With Bro</p>
              </div>
            </div>
            <Button className="w-full">Get Started</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);
