"use client";
import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import BlurText from '@/components/BlurText';
import { Crown } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import Link from 'next/link';
import Image from 'next/image';
const Bridal = () => {
    const services = [
        {
            title: "Bridal Makeup",
            description: "Complete bridal look with trial session, featuring long-lasting, photo-ready makeup that enhances your natural beauty.",
            price: "From ₹350",
            features: ["Trial session included", "6+ hour wear", "Touch-up kit", "False lashes"]

        },
        {
            title: "Bridal Party",
            description: "Coordinated makeup for your entire bridal party, ensuring everyone looks stunning and camera-ready.",
            price: "From ₹150 per person",
            features: ["Coordinated looks", "On-location service", "Group discounts", "Timeline planning"]
        },
        {
            title: "Special Events",
            description: "Elegant makeup for engagement parties, rehearsal dinners, and other wedding-related celebrations.",
            price: "From ₹200",
            features: ["Event-appropriate looks", "Quick touch-ups", "Professional products", "Travel included"]
        }
    ];
    // const CorouselContent = () => {
    //     return (
    //         <div className='p-2 '>
    //             <Image src="/bridal/bridal (1).jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />
    //         </div>
    //     )
    // }
    const data = [
        {
            category: "Bridal Look",
            title: "Classic Red Bridal",
            src: "/bridal/bridal (1).jpg",
            content: <Image src="/bridal/bridal (1).jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        },
        {
            category: "Bridal Look",
            title: "Elegant Pastel Bride",
            src: "/bridal/bridal (2).jpg",
            content: <Image src="/bridal/bridal (2).jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        },
        {
            category: "Bridal Look",
            title: "Royal Gold Glam",
            src: "/bridal/bridal (3).jpg",
            content: <Image src="/bridal/bridal (3).jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        },
        {
            category: "Bridal Look",
            title: "Traditional Green Saree",
            src: "/look-book/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse.jpg",
            content: <Image src="/look-book/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse.jpg"
                width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        },
        {
            category: "Bridal Look",
            title: "Outdoor Day Bride",
            src: "/look-book/pretty-lady-orange-dress-holding-umbrella-thinking-nature-daytime.jpg",
            content: <Image src="/look-book/pretty-lady-orange-dress-holding-umbrella-thinking-nature-daytime.jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        },
        {
            category: "Bridal Look",
            title: "Fashion Portrait Bridal",
            src: "/look-book/fashion-portrait-stylish-woman-colorful-print-long-sleeve-top-pink-shorts-beach-tropical-background.jpg",
            content: <Image src="/look-book/fashion-portrait-stylish-woman-colorful-print-long-sleeve-top-pink-shorts-beach-tropical-background.jpg" width={600} height={500} alt="Bridal Look" className='w-full object-cover' />

        }
    ];
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));
    return (
        <main >
            <section className="lg:px-40 lg:py-40 px-10 py-20 mx-auto ">
                <div className='flex lg:flex-row flex-col items-center justify-between gap-3 '>
                    <BlurFade delay={0.5} className='' blur="15px" inView>
                        <img
                            className=" size-110 object-cover hidden lg:block"
                            src={"https://t3.ftcdn.net/jpg/15/41/31/64/240_F_1541316486_qLy2gEMRJSdLycVOmmTm3CRbPCTi3xKy.jpg"}
                        />
                    </BlurFade>
                    <div className=' flex flex-col  items-center justify-center gap-7 '>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="group relative flex rounded-full">
                            {/* <p className='absolute -top-4 left-10 -rotate-18 text-4xl text-orange-500'>👑</p> */}
                            {/* <Crown className="absolute top-0 left-15 -rotate-18 size-6 text-orange-500" /> */}
                            <AnimatedGradientText className="text-7xl md:text-8xl lg:text-9xl font-bold text-center carattere-font">
                                Bridal Makeup.
                            </AnimatedGradientText>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className=" flex items-center justify-center rounded-full lg:w-[50rem]   ">

                            <BlurText
                                text={"Whether it is your wedding day, anniversary, graduation, prom, fashion shoot, photo shoot, or any other special occasion, let us take care of your hair and makeup needs. We will create the look of your desire, be it the latest runway trends or a traditional look."}
                                delay={40}
                                animateBy="words"
                                direction="top"
                                className="text-lg lg:text-2xl flex justify-center instrument-font font-bold"
                            />
                        </motion.div>
                        <div className='flex gap-5'>
                            <Link href="/book-appointment">
                                <Button size={"sm"}>Book An Apppointment</Button>
                            </Link>
                            <Link href="/look-book">
                                <Button size={"sm"} variant={"destructive"} >View Gallery</Button>
                            </Link>

                        </div>
                    </div>
                    <BlurFade delay={0.5} className='mt-9 lg:mt-0' blur="15px" inView>
                        <img
                            className=" size-110 object-cover"
                            src={"https://as1.ftcdn.net/v2/jpg/07/98/06/72/1000_F_798067228_bNqNBU1O2gYuYAha7ZdIc1ErwMreyUYo.jpg"}
                        />
                    </BlurFade>
                </div>
            </section>

            <section className='container lg:px-40 lg:py-40 px-5 py-20 mx-auto '>
                <div>


                    <div className='flex flex-col items-center justify-center gap-5 '>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl instrument-font text-center font-bold">
                            Our Services for the <span className="carattere-font">
                                {/* highlighter not working */}
                                Bride
                            </span>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 gap-15 md:grid-cols-3  mt-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                // animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className=" border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] focus-within:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] dark:focus-within:bg-gray-50/[.15] flex gap-6 p-10 flex-col justify-center items-start  cursor-default"
                            >
                                <h3 className="text-5xl text-pink-500 font-bold instrument-font">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-justify">{service.description}</p>
                                <p className="text-xl instrument-font font-bold">{service.price}</p>
                                <ul className="list-disc text-sm list-inside">
                                    {service.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                    <div className='mt-20'>
                        <div className="w-full h-full py-20">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                // animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl instrument-font text-center font-bold">
                                View <span className="carattere-font">
                                    {/* highlighter not working */}
                                    Gallery
                                </span>
                            </motion.div>
                            <Carousel items={cards} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Bridal