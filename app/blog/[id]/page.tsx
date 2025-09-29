
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
                <div className='space-y-5 text-sm md:text-base text-justify text-muted-foreground '>
                    <p>
                        Hair cut sylers has nec sumo mediem in. Airtute sanctus volumus ei mel in latine tritani accusam vel. Veniam iracundia vel ex. Te odio comprehensam quote qui at case adipiscing, legere accusam sed te. Ea sint suscipit vim, mel quando impedit ea, nec ut modo labore. In eos eleifend interpretaris. Oratio abhorreant elaboraret est ei. Aeterno accusamus persequeris in est, te cum fugit placerat.
                    </p>
                    <p>
                        Eu elit mediocrem interesset his, cum nisl eruditi conceptam cu. Putent labitur habemus te pro, qui id noluisse suavitate, eum ut ridens oportere. Urbanitas intellegat efficiendi et vel, sed at integre legimus, vide theophrastus sea eu. Eos ex prima mazim, eu nobis soleat eam. Ne pro invidunt erroribus imperdiet, et ius suas mundi fuisset. At sint assueverit concludaturque ius, lucilius menandri vulputate ex has.
                    </p>
                    <p>
                        Eam ex modus percipit, est dicam animal moderatius at, homero equidem salutandi in mei. Ad sale aeterno tincidunt vel, ex case iracundia disputationi per, ut vocibus deseruisse honestatis vis. Eos no utamur docendi, tantas legere an pri, urbanitas rationibus no qui. Te adhuc eripuit consectetuer vim. Nam nulla latine admodum no, at nec suas iudico mucius.
                    </p>
                </div>
            </div>

        </section>

    )
}

export default Blog