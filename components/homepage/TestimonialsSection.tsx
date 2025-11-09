"use client";
import React from 'react'
import { Marquee } from '../magicui/marquee';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'
import { InstagramEmbed } from 'react-social-media-embed';
const reviews = [
  {
    name: "Emily",
    username: "@emilybeauty",
    body: "I recently got a facial at this parlour and it was amazing! My skin feels so smooth and refreshed.",
    img: "/makeup.jpg",
  },
  {
    name: "Sarah",
    username: "@sarahstyles",
    body: "I've been going to this parlour for my haircuts and I'm always impressed with the service. The stylists are so talented!",
    img: "hero.jpg",
  },
  {
    name: "Jen",
    username: "@jenmakeup",
    body: "I got my makeup done for a wedding at this parlour and it was stunning! The makeup artist was so skilled and listened to exactly what I wanted.",
    img: "/girl.jpg",
  },
  {
    name: "Kate",
    username: "@katebeauty",
    body: "I've been going to this parlour for my nail appointments and I'm always happy with the result. The nail technicians are so friendly and talented!",
    img: "/bridal/bridal (1).jpg",
  },
  {
    name: "Mia",
    username: "@miabeauty",
    body: "I recently got a massage at this parlour and it was heavenly! The therapist was so skilled and relaxing.",
    img: "/bridal/bridal (2).jpg",
  },
  {
    name: "Lily",
    username: "@lilybeauty",
    body: "I've been going to this parlour for my waxing appointments and I'm always impressed with the service. The technicians are so professional and gentle!",
    img: "/bridal/bridal (3).jpg",
  },
];

const insta_urls = [
  "https://www.instagram.com/p/DNSZ0GxtFbj/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/DPGMoDvDJci/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/C0b53-Gg5Mv/?utm_source=ig_web_copy_link",



];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-84 cursor-pointer overflow-hidden rounded- border p-8",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover size-10" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-2xl instrument-font font-bold dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text- md:text-lg">{body}</blockquote>
    </figure>
  );
};

const TestimonialsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 mb-20">
        <p className="text-2xl font-bold text-pink-600 carattere-font">Testimonials</p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-center instrument-font font-bold">
          What clients <span className="carattere-font">
            {/* highlighter not working */}
            Say
          </span> about us
        </motion.div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      <p className="text-2xl font-bold text-pink-600 mt-10 text-center carattere-font">Instagram</p>
      <div className=' container mx-auto mt-5 flex flex-wrap gap-10 justify-center items-center'>
        {insta_urls.map((url, index) => (
          <InstagramEmbed key={index} url={url} width={400} />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection