"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials, Testimonial } from "./ui/animated-testimonials";

export type TypeTestimonials = `testimonial${1 | 2 | 3 | 4}`;
export interface HomeTestimonialsTexts {
  testimonials: Record<TypeTestimonials, Omit<Testimonial, "src">>;
}

interface Props {
  testimonials: Testimonial[];
}

const HomeTestimonials = ({ testimonials }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1
        className={`text-3xl md:text-5xl font-bold text-center tracking-tighter mb-6`}
      >
        See What Our Customers Are Saying
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </motion.section>
  );
};

export { HomeTestimonials };
