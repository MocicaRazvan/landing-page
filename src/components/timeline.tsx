"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BookIcon, Bot, Briefcase, PersonStanding } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const timeLine = [
  {
    date: "Prepare",
    title: "Be aware",
    text: `Realize your problems and target them. Don't be afraid to make changes that make you uncomfortable.`,
    icon: <BookIcon />,
  },
  {
    date: "",
    title: "Get comfortable with being afraid",
    text: `It's normal to feel overwhelmed and insecure about getting started. Don't let these feelings stop you.`,
    icon: <BookIcon />,
  },
  {
    date: "",
    title: "Make a plan",
    text: `Plan ahead and be very structured. Make realistic targets and do things your way. Don't let others decide your journey.`,
    icon: <BookIcon />,
  },
  {
    date: "Start working",
    title: "Step by step",
    text: `Be patient and know that life is a marathon, not a sprint. Don't seek quick fixes; be happy with every little progress.`,
    icon: <PersonStanding />,
  },
  {
    date: "",
    title: "Work your ass off",
    text: `Working hard pays off. Every change requires sacrifices, so be prepared to make some. In the end, you'll thank yourself.`,
    icon: <PersonStanding />,
  },
  {
    date: "",
    title: "Become comfortable with your new life",
    text: `Over time, everything you thought was too hard will become trivial. When this happens, pat yourself on the back and see your progress.`,
    icon: <PersonStanding />,
  },
  {
    date: "Be Friendly With Your Bro",
    title: "Use the most advanced AI for fitness",
    text: `Get the most from our platform by using the AI for trainings and questions. Don't be afarid to ask him, he won't bite.`,
    icon: <Bot />,
  },
  {
    date: "Stay consistent",
    title: "Don't let the results slow you down",
    text: `Don't get too comfortable and think you can't lose what you've achieved. This is where the difference between the sprint and the marathon is made.`,
    icon: <Briefcase />,
  },
];
export default function Timeline() {
  return (
    <div className="w-full h-full space-y-10 md:space-y-14">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="md:text-[4rem] text-4xl tracking-tighter font-bold text-center"
      >
        There are just few simple steps untill success
      </motion.h1>
      <VerticalTimeline lineColor="var(--foreground)">
        {timeLine.map(({ date, title, text, icon }, i) => (
          <TimelineElement
            key={title}
            date={date}
            title={title}
            text={text}
            icon={icon}
            index={i}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}

function TimelineElement({
  date,
  title,
  text,
  icon,
  index,
}: (typeof timeLine)[number] & { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div ref={ref}>
      <VerticalTimelineElement
        className={cn("vertical-timeline-element--work", "!mb-10")}
        date={date}
        iconStyle={{
          boxShadow: "none",
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
        icon={icon}
        visible={isInView}
        position={index % 2 === 0 ? "left" : "right"}
        contentArrowStyle={{
          borderRight: "7px solid  var(--foreground)",
        }}
        contentStyle={{
          backgroundColor: "var(--border)",
          color: "var(--card-foreground)",
          borderRadius: "var(--radius)",
          fontSize: "1.2rem",
        }}
        textClassName={"!text-foreground !font-bold !text-xl"}
        dateClassName={"!text-foreground !font-bold !text-xl"}
      >
        <h3 className="!text-foreground">{title}</h3>
        <p className="!text-foreground">{text}</p>
      </VerticalTimelineElement>
    </div>
  );
}
