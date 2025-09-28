import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// ❌ DO NOT REMOVE THE COMMENTED CODE

const Footer = () => {
    return (
        <footer className=' w-full bg-background backdrop-blur-3xl'>
            <div className='container mx-auto py-4 px-7 lg:p-10 '>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-start">
                    <div className='flex flex-col gap-5'>
                        <Link href="/" className="text-4xl lg:text-4xl carattere-font font-bold ">priya.</Link>
                        {/* <p className='text-sm text-justify'>Ayesha Beauty Salon is perspiciatis omnis iste natus laundres veritatis et abster beatae vitae nunc sagittis interdum risusut accumsan.</p> */}
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Contact Info</p>
                        <ul className='space-y-6'>
                            <li className='flex items-center gap-2 text-sm'><Clock size={15} /> 04:00 PM - 10:00 PM</li>
                            <li className='flex items-center gap-2 text-sm'><Phone size={15} /> +91 84520 17063</li>
                            <li className='flex items-center gap-2 text-sm'><MapPin size={15} />Saibaba Nagar,Borivali West, Mumbai 400092</li>
                            <li className='flex items-center gap-2 text-sm'><Mail size={15} />priyajayprakash456@gmail.com</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Recent Posts</p>
                        <ul className='space-y-5'>
                            <li className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-14 object-cover' alt="" />
                                <div className='space-y-1'>
                                    <h4 className='text-'>Trendy HairStyles of 2023</h4>
                                    <p className='text-xs text-muted-foreground'>Jan 12, 2023</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-14 object-cover' alt="" />
                                <div className='space-y-1'>
                                    <h4 className='text-'>Trendy HairStyles of 2023</h4>
                                    <p className='text-xs text-muted-foreground'>Jan 12, 2023</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-14 object-cover' alt="" />
                                <div className='space-y-1'>
                                    <h4 className='text-'>Trendy HairStyles of 2023</h4>
                                    <p className='text-xs text-muted-foreground'>Jan 12, 2023</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                    <div className='flex flex-col gap-5'>
                        <p className="text-xl instrument-font ">Our Look Book</p>
                        <span className='grid grid-cols-3 gap-5'>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
                            </Link>
                            <Link href={"/"} className='flex items-center gap-2 text-sm cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg" className='size-20 object-cover' alt="" />
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