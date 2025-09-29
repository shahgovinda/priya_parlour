
import { CalendarRange, Tag, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import blogs from '@/data/blogs.json'

const BlogsPage = () => {
    return (
        <>
            {
                blogs.map(({ id, title, image, date, author, tag, excerpt }) => (
                    <article className=' flex flex-col gap-4 bg-card' key={id}>

                        <div className="aspect-[16/9] w-full relative  overflow-hidden">
                            <Image src={image} alt="" fill className='object-cover' />
                        </div>
                        <Link href={`/blog/${id}`} className='p-5 space-y-4 group'>
                            <h1 className='text-2xl md:text-4xl font-bold instrument-font group-hover:underline'>{title}</h1>
                            <div className='flex gap-6 md:text-sm text-[10px] text-muted-foreground'>
                                <p className='flex items-center gap-2  whitespace-nowrap'><CalendarRange />{date}</p>
                                <p className='flex items-center gap-2  whitespace-nowrap'><UserRound />{author}</p>
                                
                            </div>
                            <p className='text-sm font-light text-secondary-foreground/50 line-clamp-3'>{excerpt}</p>
                        </Link>

                    </article>
                ))
            }

        </>
    )
}

export default BlogsPage