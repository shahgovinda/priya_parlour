"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Constant } from '@/lib/constants'
import { ArrowUpRight, CalendarRange, Tag, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import blogs from '@/data/blogs.json'
import { Button } from '../ui/button'
const BlogSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-5 mb-10">
                <p className="text-2xl font-bold text-pink-600 carattere-font">{Constant.SiteName} Blogs</p>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl text-center instrument-font font-bold">
                    Read Our Recent <span className="carattere-font">
                        {/* highlighter not working */}
                        Blogs
                    </span>
                </motion.div>
            </div>
            <div className='container lg:px-40  px-5  mx-auto '>


                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {
                        blogs.slice(4, 7).map(({ id, title, image, date, author, tag }) => (
                            <article className='flex flex-col gap-4 mt-10 ' key={id}>

                                <div className="aspect-[16/9] w-full relative  overflow-hidden">
                                    <Image src={image} alt="" fill className='object-cover' />
                                </div>
                                <Link href={`/blog/${id}`} className='space-y-4 group'>
                                    <h1 className='text-xl font-bold instrument-font group-hover:underline'>{title}</h1>
                                    <div className='flex gap-6 text-xs text-secondary-foreground/70 whitespace-nowrap'>
                                        <p className='flex items-center gap-2'><CalendarRange />{date}</p>
                                        <p className='flex items-center gap-2 '><UserRound />{author}</p>
                                        <p className='flex items-center gap-2 '><Tag />{tag}</p>
                                    </div>

                                </Link>

                            </article>
                        ))
                    }
                </div>
                <Link href="/blog" className='flex items-center mt-10 justify-center'>
                    <Button variant={"ghost"}>Read More <ArrowUpRight /></Button>
                </Link>
            </div>
        </div>
    )
}

export default BlogSection