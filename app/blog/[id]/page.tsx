
import { use } from "react";
import blogs from '@/data/blogs.json'
import { CalendarRange, Tag, UserRound } from 'lucide-react'
import Image from 'next/image'



interface Blog {
    id: number;
    title: string;
    date: string;
    author: string;
    tag: string;
    image: string;
    content?: string;
}

const contentInnerHtml: string = '[&_h1]:text-3xl ' +
    ' [&_h1]:font-bold ' +
    '[&_h1]:mb-3 ' +
    ' [&_h2]:text-2xl ' +
    '[&_h2]:font-semibold ' +
    '[&_h2]:mb-2 ' +
    '[&_p]:text-normal ' +
    ' [&_img]:mx-auto ' +
    '[&_img]:my-4 '

const Blog = ({params}: {params: Promise<{ id: string }>}) => {
    const { id } = use(params);
    const blog = blogs.find((blog: Blog) => blog.id.toString() === id);

    if (!blog) {
        return (
            <section className='mb-10'>
                <div className='space-y-10'>
                    <h1 className='text-3xl font-bold instrument-font'>Blog not found</h1>
                    <p className='text-muted-foreground'>Sorry, the blog post you are looking for does not exist.</p>
                </div>
            </section>
        )
    }
    return (

        <section className='mb-10'>

            <div className='space-y-5 lg:space-y-10'>
                <h1 className='text-2xl lg:text-5xl font-bold instrument-font'>{blog.title}</h1>
                <div className='flex gap-6 md:text-sm text-[10px] text-muted-foreground'>
                    <p className='flex items-center gap-2  whitespace-nowrap'><CalendarRange />{blog.date}</p>
                    <p className='flex items-center gap-2  whitespace-nowrap'><UserRound />{blog.author}</p>
                    <p className='flex items-center gap-2  whitespace-nowrap'><Tag />{blog.tag}</p>
                </div>
                <div className="aspect-[16/9] w-full relative  overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className='object-cover' />
                </div>
                <div 
                    className={`${contentInnerHtml} space-y-5 text-sm md:text-base text-justify text-muted-foreground`}
                    dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
            </div>

        </section>

    )
}

export default Blog