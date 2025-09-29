import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blogs from '@/data/blogs.json'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { IconBrandYoutube } from '@tabler/icons-react'


const Footer = () => {
    return (
        <footer className=' w-full bg-background border-t backdrop-blur-3xl'>
            <div className='container mx-auto py-4 px-7 lg:p-10 '>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-start">
                    <div className='flex flex-col gap-5'>
                        <Link href="/" className="text-4xl lg:text-4xl carattere-font font-bold ">Numa.</Link>
                        <p className='text-sm text-justify'>Ayesha Beauty Salon is perspiciatis omnis iste natus laundres veritatis et abster beatae vitae nunc sagittis interdum risusut accumsan.</p>
                        <div className='flex justify-between mt-10'>
                            <Button size={'icon'} className='rounded-full'><Instagram size={20} /></Button>
                            <Button size={'icon'} className='rounded-full'><Facebook size={20} /></Button>
                            <Button size={'icon'} className='rounded-full'><Twitter size={20} /></Button>
                            <Button size={'icon'} className='rounded-full'><Youtube size={20} /></Button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Contact Info</p>
                        <ul className='space-y-6'>
                            <li className='flex items-center gap-2 text-sm'><Clock size={15} /> 04:00 PM - 10:00 PM</li>
                            <li className='flex items-center gap-2 text-sm'><Phone size={15} /> +91 84520 17063</li>
                            <li className='flex items-center gap-2 text-sm'><MapPin size={15} />Saibaba Nagar,Borivali West, Mumbai 400092</li>
                            <li className='flex items-center gap-2 text-sm'><Mail size={15} />Numajayprakash456@gmail.com</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Recent Posts</p>
                        <div className='space-y-5 '>
                                {
                                    blogs.slice(0, 3).map(({ id, title, image, date }) => (
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
                    

                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Our Look Book</p>
                        <span className='grid grid-cols-3 gap-5'>
                            <Link href={"/look-book"} className='flex items-center  gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/bridal (1).jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/look-book"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/bridal (2).jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/look-book"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/girl.jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/look-book"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/bridal (3).jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/look-book"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/makeup.jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/look-book"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <Image src="/look-book/bridal (2).jpg" width={100} height={100} className='size-20 object-cover' alt="" />
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
                <p className='text-center border-t py-5 text-sm'>Crafted with ❤️ by Yuvraj Verma</p>
        </footer>
    )
}

export default Footer