
import { BlurFade } from '@/components/magicui/blur-fade'
import { CalendarRange, Tag, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blogs from '@/data/blogs.json'
import { Badge } from '@/components/ui/badge'

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <main className='bg-background pb-10'>
            <section className=" w-full h-50 md:h-70 flex items-center justify-center bg-[url('/ui/blog.jpg')] bg-cover bg-center">
                <h1 className=' text-5xl  lg:text-8xl font-bold carattere-font text-black mr-2'>Numa </h1><h1 className=' text-5xl md:4xl lg:text-8xl font-bold instrument-font text-black'> Blogs</h1>
            </section>

            <section className='lg:w-3/4 px-4 lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                <div className='col-span-2 flex flex-col gap-8 lg:gap-16'>

                    {children}

                </div>
                <div className=' border-amber-500 relative'>
                    <aside className='sticky top-20'>
                        <div>
                            <h1 className='text-4xl font-bold instrument-font'>Recent Posts</h1>
                            <div className='space-y-5 mt-5'>
                                {
                                    blogs.slice(0, 3).map(({ id, title, image, date, author, tag, excerpt }) => (
                                        <Link href={`/blog/${id}`} className='flex items-center gap-2 text-sm cursor-pointer' key={id}>
                                            <Image src={image} width={90} height={90} className='size-14 object-cover' alt="" />
                                            <div className='space-y-1'>
                                                <h4 className='text-'>{title}</h4>
                                                <p className='text-xs text-muted-foreground'>{date}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-4xl font-bold instrument-font'>Popular Topics</h1>
                            <div className='flex flex-wrap gap-3 mt-5'>
                                {
                                    ['facial', 'haircare', 'makeup', 'skincare', 'wellness', 'bridal'].map((tag) => (
                                        <Badge className='capitalize' key={tag}>{tag}</Badge>
                                    ))
                                }

                            </div>
                        </div>
                        {
                            blogs.slice(6, 7).map(({ id, title, image, date, author, tag, excerpt }) => (
                                <article className='hidden lg:flex flex-col gap-4 mt-10 ' key={id}>

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

                        <div>

                        </div>
                    </aside>
                </div>
            </section>

        </main>
    )
}

export default BlogLayout