import HomeCard from "@/components/home-card";
import { HomeGemini } from "@/components/home-gemini";
import HomeHeader from "@/components/home-header";
import HomeMap from "@/components/home-map";
import HomeTitle from "@/components/home-title";
import Timeline from "@/components/timeline";
import getSvgMap from "@/lib/world-svg-map";
import { Bot, Dumbbell, Newspaper, User2 } from "lucide-react";
import person1 from "@/../public/people/person1.jpg";
import person2 from "@/../public/people/person2.jpg";
import person3 from "@/../public/people/person3.jpg";
import person4 from "@/../public/people/person4.jpg";
import { Testimonial } from "@/components/ui/animated-testimonials";
import { HomeTestimonials } from "@/components/home-testimonials";
import HomePricing from "@/components/home-pricing";
const cards = [
  {
    title: "Register",
    description:
      "Register to get access to all the features of our platform, and become a part of our community.",
    href: "/auth/signin",
    icon: <User2 size={64} className="w-full mx-auto" />,
  },
  {
    title: "Read Posts",
    description:
      "Read posts to gain knowledge and insights about different topics written by professionals.",
    href: "/posts/approved",
    icon: <Newspaper size={64} className="w-full mx-auto" />,
  },
  {
    title: "Buy Trainings",
    description:
      "Buy trainings to improve get the full experience of our platform. We offer a wide range of trainings.",
    href: "/trainings/approved",
    icon: <Dumbbell size={64} className="w-full mx-auto" />,
  },
  {
    title: "Chat With Your Bro",
    description:
      "Engage in discussions with the most advanced AI regarding your health and fitness.",
    href: "/trainings/approved",
    icon: <Bot size={64} className="w-full mx-auto" />,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The training plans have completly redefined the standard for training. I feel more energetic and healthier than ever before.",
    name: "Sarah Chen",
    pleasure: "Passionate about jogging and exploring new trails",
    src: person1,
  },
  {
    quote:
      "The olans are easy to follow and the trainers are always there to help. I love the community and also the AI is very useful.",
    name: "Andrei Popescu",
    pleasure: "Loves cooking and experimenting with new flavors",
    src: person2,
  },
  {
    quote:
      "GymBroski has transformed my fitness journey. The personalized training plans and nutritional advice have made a world of difference.",
    name: "Marcus Johnson",
    pleasure: "Enjoys weightlifting and meal prepping",
    src: person3,
  },
  {
    quote:
      "The AI is a game-changer! It provides real-time feedback and keeps me motivated. I can't imagine my fitness journey without it.",
    name: "Jabbad Dutt",
    pleasure: "Avid cyclist and outdoor enthusiast",
    src: person4,
  },
];

export default function Home() {
  return (
    <main className="space-y-10 md:space-y-16">
      <HomeHeader />
      <div className="flex flex-wrap items-center justify-center gap-10 mt-15 overflow-hidden">
        {cards.map((item, i) => (
          <HomeCard key={i} index={i} {...item} />
        ))}
      </div>

      <HomeTitle />

      <Timeline />

      <HomeMap svgMap={getSvgMap()} />

      <HomeGemini />

      <HomeTestimonials testimonials={testimonials} />

      <HomePricing />
    </main>
  );
}
