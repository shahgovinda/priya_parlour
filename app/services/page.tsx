"use client";
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { cn } from '@/lib/utils'
import React from 'react'
import {
  motion
} from "motion/react";
import BlurText from '@/components/BlurText';
import  Link from 'next/link';

type Service = {
  name: string;
  price: number | string; // number for fixed, string for "depend on length"
};

type Category = {
  category: string;
  services: Service[];
};

const services: Category[] = [
  {
    category: "Threading",
    services: [
      { name: "Eyebrow", price: 50 },
      { name: "Upperlip", price: 20 },
      { name: "Forehead", price: 20 },
      { name: "Chin", price: 30 },
      { name: "Face Thread", price: 200 },
    ],
  },
  {
    category: "Normal Waxing",
    services: [
      { name: "Full Hand", price: 300 },
      { name: "Full Leg", price: 500 },
      { name: "Underarms", price: 100 },
      { name: "Face Wax", price: 250 },
      { name: "B-Wax", price: 1000 },
    ],
  },
  {
    category: "Rica Waxing",
    services: [
      { name: "Full Hand", price: 400 },
      { name: "Full Leg", price: 600 },
      { name: "Underarms", price: 100 },
      { name: "Face Wax", price: 300 },
      { name: "Tummy", price: 300 },
      { name: "B-Wax", price: 1200 },
    ],
  },
  {
    category: "Facials & Cleanup",
    services: [
      { name: "Normal Cleanup", price: 500 },
      { name: "Fruit Clean-Up", price: 600 },
      { name: "Normal Bleach", price: 250 },
      { name: "Wella Bleach", price: 350 },
      { name: "Fruits Facial", price: 650 },
      { name: "Papaya", price: 700 },
      { name: "VLCC", price: 800 },
      { name: "Richfeel", price: 900 },
      { name: "Lotus", price: 1000 },
      { name: "Wine", price: 1000 },
      { name: "Cheryls", price: 1500 },
      { name: "Gold", price: 1500 },
      { name: "Diamond", price: 1500 },
      { name: "O3+", price: 2500 },
      { name: "Manicure", price: 350 },
      { name: "Pedicure", price: 800 },
      { name: "Leg Massage", price: 250 },
      { name: "Back Massage", price: 250 },
    ],
  },
  {
    category: "Hair",
    services: [
      { name: "Touch Up", price: 200 },
      { name: "Hair Oiling", price: 400 },
      { name: "Cut Strait", price: 150 },
      { name: "U Cut", price: 200 },
      { name: "Step Cut", price: 500 },
      { name: "Layer Cut", price: 500 },
      { name: "Hair Spa", price: "Depend on Length" },
      { name: "Highlights", price: "Depend on Hair" },
      { name: "Curls", price: "Depend on Length" },
      { name: "Ironing", price: "Depend on Length" },
      { name: "Makeup Normal", price: 1500 },
      { name: "Hair Style Start", price: 350 },
      { name: "Saree Draping", price: 300 },
    ],
  },
];

const page = () => {
  // Split categories into two columns for balanced layout
  const mid = Math.ceil(services.length / 2);
  const leftCategories = services.slice(0, mid);
  const rightCategories = services.slice(mid);

  return (
    <main className=''>
      <div className="container lg:px-40 lg:py-40 px-5 py-20 mx-auto ">
        <div className='flex flex-col items-center justify-center gap-5 '>
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="group relative flex  rounded-full px-5 py-1.5   ">
            <span
              className={cn(
                "absolute inset-0  h-full w-full animate-gradient  bg-gradient-to-r from-[#ffaa40]/90 via-[#e60076]/90 to-[#ffaa40]/90 bg-[length:300%_100%] hidden p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />

            <AnimatedGradientText className="text-7xl md:text-8xl lg:text-9xl  font-bold carattere-font">
              Services.
            </AnimatedGradientText>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" flex items-center justify-center rounded-full lg:w-[50rem]   ">

            <BlurText
              text={"Unveil the potential of your strands through our curated treatments."}
              delay={40}
              animateBy="words"
              direction="top"
              className="text-lg lg:text-2xl flex justify-center instrument-font font-bold"
            />
          </motion.div>
        </div>

        <section className='mt-40'>
          <div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-30">
              {/* Left column */}
              <div>
                {leftCategories.map((cat, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.5 }}

                    key={i} className="mb-8">
                    <h3 className="text-4xl font-bold instrument-font mb-4">{cat.category}</h3>
                    {cat.services.map((srv) => (
                      <div
                        key={srv.name}
                        className="flex group items-center justify-between w-full py-2 gap-4 hover:animate-gradient hover:bg-gradient-to-r from-[#ffaa40]/90 via-[#e60076]/90 to-[#ffaa40]/90 bg-[length:300%_100%] hover:px-4 transition-all duration-300 hover:text-white"
                      >
                        <span className="whitespace-nowrap">{srv.name}</span>
                        <div className="flex-1 group-hover:bg-white h-px bg-gray-500 mx-2" />
                        <span className="whitespace-nowrap">
                          {typeof srv.price === "number" ? `₹${srv.price}` : srv.price}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
              {/* Right column */}
              <div>
                {rightCategories.map((cat, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.5 }}
                    key={i} className="mb-8">
                    <h3 className="text-4xl font-bold instrument-font mb-4">{cat.category}</h3>
                    {cat.services.map((srv) => (
                      <div
                        key={srv.name}
                        className="flex group items-center justify-between w-full py-2 gap-4 hover:animate-gradient hover:bg-gradient-to-r from-[#ffaa40]/90 via-[#e60076]/90 to-[#ffaa40]/90 bg-[length:300%_100%] hover:px-4 transition-all duration-300 hover:text-white"
                      >
                        <span className="whitespace-nowrap">{srv.name}</span>
                        <div className="flex-1 group-hover:bg-white h-px bg-gray-500 mx-2" />
                        <span className="whitespace-nowrap">
                          {typeof srv.price === "number" ? `₹${srv.price}` : srv.price}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
            <Link href="/beauticians" className='text-center gap-5 group '>
              <p className="text-xl text-muted-foreground instrument-font group-hover:text-pink-500 transition-colors">Next</p>
              <p className="text-7xl text-muted-foreground  md:text-8xl lg:text-9xl  font-bold carattere-font group-hover:text-foreground transition-colors">Beauticians</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page
