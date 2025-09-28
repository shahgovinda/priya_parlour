import BlurText from "@/components/BlurText";
import Section3 from "@/components/homepage/Section3";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ServicesMenu } from "@/components/homepage/ServiceMenu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import { CometCard } from "@/components/ui/comet-card";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import Link from "next/link";

export default function Home() {
    return (
        <main className="z-10">

            <section>
                
            </section>
            <section className=" flex items-center justify-center   ">

                <div className="grid grid-cols-1 gap-15 md:grid-cols-2 container lg:px-40 lg:py-40 px-5 py-20 mx-auto  border-red-500">
                    <div className=" flex gap-4 flex-col justify-center items-start">
                        <p className="text-3xl text-pink-500 font-bold carattere-font">
                            Priya
                        </p>
                        <BlurText
                            text="Explore a Hand Picked edit of skincare and makeup, guided by trust not trends."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-5xl instrument-font font-bold"
                        />
                        <Link href="/book-appointment">
                            <Button>Book Appointment Now</Button>
                        </Link>
                    </div>
                    <div className=" flex items-center justify-center w-full h-[500px] overflow-hidden">
                        <BlurFade delay={0.5} blur="10px" inView>
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg"
                                alt="Priya"
                            />
                        </BlurFade>
                    </div>

                </div>
            </section>

            <section className=" ">
                <div className="container lg:px-40 lg:py-40 px-5 py-20 grid grid-cols-1 lg:grid-cols-3 gap-30 mx-auto ">
                    <div className="flex flex-col gap-5  items-center w-full lg:items-start ">
                        <div className="flex flex-col items-center lg:flex-row gap-8 ">
                            <div className="inline-flex border -space-x-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>

                            </div>
                            <p className="text-muted-foreground text-sm">200+ Satisfied Clients All Over Mumbai</p>
                        </div>
                        <Link href="/book-an-appointment">
                            <Button className="w-full ">Book an Appointment</Button>
                        </Link>
                    </div>
                    <div className="lg:col-span-2 flex flex-col lg:flex-row items-center justify-between text-7xl gap-12 lg:text-8xl">
                        <span>
                            <span className="flex item-center gap-2">
                                <NumberTicker
                                    value={5}
                                    className="whitespace-pre-wrap  instrument-font font-bold tracking-tighter text-black dark:text-white"
                                />
                                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
                            </span>
                            <p className="text-muted-foreground text-sm">Years of Experience</p>
                        </span>
                        <span>
                            <span className="flex item-center gap-2">
                                <NumberTicker
                                    value={200}
                                    className="whitespace-pre-wrap  instrument-font font-bold tracking-tighter text-black dark:text-white"
                                />
                                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
                            </span>
                            <p className="text-muted-foreground text-sm">Happy Customers</p>
                        </span>
                        <span>
                            <span className="flex item-center gap-2">
                                <NumberTicker
                                    value={40}
                                    className="whitespace-pre-wrap  instrument-font font-bold tracking-tighter text-black dark:text-white"
                                />
                                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
                            </span>
                            <p className="text-muted-foreground text-sm">Varieties of Services</p>
                        </span>
                    </div>
                </div>
            </section>

            <section className=" py-40 ">
                <Section3 />
            </section>

            <section className=" border-yellow-600 py-30 ">
                <ServicesMenu />
            </section>

            <section className=" border-yellow-600 py-30 ">
                <TestimonialsSection />
            </section>
        </main>
    );
}
