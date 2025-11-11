"use client";
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble';
import BlurText from '@/components/BlurText';
import { BlurFade } from '@/components/magicui/blur-fade';
import Link from 'next/link';
import { Constant } from '@/lib/constants';

const page = () => {
    return (
        <div className="container lg:px-40 lg:py-40 px-5 py-20  mx-auto ">

            <div className='flex flex-col items-center justify-center gap-6 '>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="group relative flex  rounded-full px-5 py-1.5   ">


                    <AnimatedGradientText className="text-7xl md:text-8xl lg:text-9xl font-bold carattere-font">
                        Our Story
                    </AnimatedGradientText>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" flex items-center justify-center rounded-full lg:w-[50rem]">
                    <BlurText
                        text={"A transformative experience that goes beyond hair, encompassing a life beautifully lived."}
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="text-lg lg:text-2xl flex justify-center text-center instrument-font font-bold"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className=" flex items-center justify-center rounded-full lg:w-[70rem] mt-5">
                    <p className="text-sm leading-7 font-light flex justify-center text-center ">At {Constant.SiteName} Parlour, located in Saibaba Nagar, Borivali West, offers top-quality beauty and makeup services.With over 10 years of experience, we ensure professional care and stunning results every time..</p>
                </motion.div>
            </div>
            <div className=''>
                <div className="hidden md:grid grid-cols-3 gap-20 py-5 my-30">
                    <BlurFade delay={0.5} className=' h-[30rem]' blur="15px" inView>
                        <img
                            className="rounded-[180px] h-full  object-cover"
                            src="https://static.wixstatic.com/media/1179bf_5b7ca5a2a23d4176889219bfb6f06515~mv2.jpg/v1/crop/x_0,y_696,w_1200,h_1679/fill/w_337,h_471,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/678cf2b835f627cf11b276ba97d8f4db.jpg"
                        />
                    </BlurFade>
                    <BlurFade delay={0.5} className='h-[30rem]' blur="15px" inView>
                        <img
                            className="rounded-[180px] mt-20 object-cover"
                            src={"/pcycle.jpg"} />
                    </BlurFade>
                    <BlurFade delay={0.5} className='h-[30rem] ' blur="15px" inView>
                        <img
                            className="rounded-[180px]  object-cover"
                            src="https://static.wixstatic.com/media/1179bf_2a62114bd51548189bdce14980bb4dea~mv2.jpg/v1/crop/x_0,y_112,w_564,h_789/fill/w_337,h_471,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ec6450733e0a5cbcb4dcd6a4a526dbe.jpg"
                        />
                    </BlurFade>
                </div>
                <div className="grid grid-cols-1 gap-20 md:grid-cols-2 py-20 ">
                    <div className='flex justify-center'>
                        <h1 className='text-5xl font-bold instrument-font'>
                            10 Years of Experience and <span>Exellence</span>
                        </h1>
                    </div>
                    <div>
                        <h3 className='text-justify text-sm font-light'>Welcome to {Constant.SiteName} Parlour! We’ve served over 200 happy clients with 50+ beauty and makeup services, ensuring comfort, quality, and satisfaction. Have special skin needs? For all your grooming needs, reach us and we would be glad to help. Book us now!</h3>
                    </div>
                </div>
                <Link href="/beauticians" className='text-center gap-5 group '>
                    <p className="text-xl text-muted-foreground instrument-font focus-within:text-pink-500 group-hover:text-pink-500 transition-colors">Next</p>
                    <p className="text-7xl text-muted-foreground  md:text-8xl lg:text-9xl  font-bold carattere-font group-hover:text-foreground transition-colors">Beauticians</p>
                </Link>
            </div>
        </div>
    )
}

export default page
