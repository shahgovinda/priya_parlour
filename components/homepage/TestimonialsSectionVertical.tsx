
import React from 'react'
import { Marquee } from '../magicui/marquee';

import { InstagramEmbed } from 'react-social-media-embed';

const insta_urls = [
"https://www.instagram.com/p/DNSZ0GxtFbj/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DPGMoDvDJci/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/C0b53-Gg5Mv/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DNVfKhuAwGX/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DNSZ0GxtFbj/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DPGMoDvDJci/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/C0b53-Gg5Mv/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DNVfKhuAwGX/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DNSZ0GxtFbj/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DPGMoDvDJci/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/C0b53-Gg5Mv/?utm_source=ig_web_copy_link",
"https://www.instagram.com/p/DNVfKhuAwGX/?utm_source=ig_web_copy_link",
];


 
const ReviewCard = ({
  url,
  
}: {
  url: string;
  
}) => {
  return (
    <InstagramEmbed url={url} width={400} />
  );
};

const TestimonialsSectionVertical = () => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center gap-5 mb-20">
                <p className="text-2xl font-bold text-pink-600 carattere-font">Testimonials</p>
                <div
                    // initial={{ opacity: 0, y: -20 }}
                    // // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl text-center instrument-font font-bold">
                    What clients <span className="carattere-font">
                        {/* highlighter not working */}
                        Say
                    </span> about us
                </div>
            </div>
            <div className="relative h-[1000px] flex w-full flex-row items- justify-end overflow-hidden">
                <Marquee pauseOnHover vertical repeat={20} className="[--duration:40s]">
                    {insta_urls.map((post,index) => (
                        <ReviewCard key={index} url={post} />
                    ))}
                </Marquee>
               
              
              
            </div>
        </div>
    )
}

export default TestimonialsSectionVertical