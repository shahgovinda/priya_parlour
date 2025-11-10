"use client";
import React from 'react'
import { Marquee } from '../magicui/marquee';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'
import { InstagramEmbed } from 'react-social-media-embed';
const reviews = [
  {
    name: "Hiral Desai",
    username: "@HiralDesai",
    body: "Body waxing and facials done with great skill. Exceptional service.",
    img: "/hiral.png",
  },
  {
    name: "Karishma Sawlani",
    username: "@karishmasawlani",
    body: "Very well done, on time and great service! Understands my needs",
    img: "/karishma.png",
  },
{
    name: "Richa Chitroda",
    username: "@RichaChitroda",
     body: "Her work is always neat, professional, and done with great care,highly recommended her for anyone looking for reliable and excellent service!",
    img: "/richa.png",
  },
  {
    name: "Priyanka Shah",
    username: "@priyankashah",
    body: "What truly stood out was her ability to deliver a 'sweet' look that felt so authentic and bespoke. It wasn't just about the makeup – it was about creating a vibe that felt like me, only elevated.",
    img: "/piyanka.png",
  },
{
    name: "Sangita Mehta",
    username: "@SangitaMehta",
    body: "She provides the best professional parlor services at home. Highly convenient and excellent work",
    img: "/sangita.png",
  },
{
    name: "Ishita Manwani",
    username: "@IshitaManwani",
     body: "Very nice work. She’s a skilled professional with great service.",
    img: "/ishita.png",
  },
{
    name: "Sonam Mourya",
    username: "@SonamMourya",
     body: "Everyone must try.... The work is really very excellent💯💯",
    img: "/sonam.png",
  },

  {
    name: "Ila Nitin",
    username: "@IlaNitin",
     body: "Awesome wax on time, Facial massage i like most",
    img: "/illa.png",
  },
  {
    name: "Jagruti Shah",
    username: "@JagrutiShah",
     body: "Cut done done awesome, Facil massage is fantastic, Pedicure also,On time she is.",
    img: "/jagruti.png",
  },
{
    name: "Sarita Shah",
    username: "@saritashah",
     body: "I am so thrilled with the makeup services I received for my wedding. The artist was incredibly talented and made me feel beautiful and confident.",
    img: "/saru.png",
  },
  
  {
    name: "Foram Shah",
    username: "@foramshah",
    body: "Massage was good.",
    img: "/foramshah.png",
  },
   {
    name: "Snehal Shinde",
    username: "@SnehalShinde",
    body: "Facil massage is good I like most, Head msg point is also I like most.",
    img: "/snehal.png",
  },
 {
    name: "Hiri Patel",
    username: "@HiriPatel",
    body: "Nice wax done,Pedicure nice.",
    img: "/hiri.png",
  }, 
  {
    name: "Ami Modi",
    username: "@AmiModil",
    body: "Facial is awesom, Head massage was relaxing, On Time , Body waxing, Facials.",
    img: "/ami.png",
  },  

  {
    name: "Vaishnavi Patil",
    username: "@VaishnaviPatil",
    body: "Facial and mehendi service taken for function and it came out fantastic...Good Service at home.",
    img: "/vaishnavi.png",
  },  
{
    name: "Tannu Sharma",
    username: "@tannusharma",
    body: "I was very happy with the service😊👍, Plz visit atleast one time😊.",
    img: "/tannu.png",
  },  

  {
    name: "Gulfisha Khan",
    username: "@gulfishakhan",
    body: "I had a wonderful experience at this parlour! The staff were very friendly, professional, and made me feel completely comfortable. The services were done with great care and attention to detail..",
    img: "/gulphisa.png",
  }, 
 {
    name: "Deesha Vora",
    username: "@deeshavora",
    body: "Very reasonable pricing with excellent servie at home she provide.",
    img: "/deesha.png",
  }, 
  
];

const insta_urls = [
  "https://www.instagram.com/priyashah2812/p/DJ1gRR_zv_hqyB6_03eFICLduYQjZR8WlJgNQE0/",
  "https://www.instagram.com/priyashah2812/p/DLFpY2-val_n16N1vR0PSPwfHrDtwa3Quz7D1M0/",
  "https://www.instagram.com/priyashah2812/p/DQhJ6LCDzm5vFnSNVX01cX-ttYfffN4NMxo7I80/",



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
