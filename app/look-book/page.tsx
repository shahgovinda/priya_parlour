
import React from 'react'
import fs from 'fs';
import path from 'path';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { BlurFade } from '@/components/magicui/blur-fade';

const LookBook = () => {

    const imagesDir = path.join(process.cwd(), 'public/look-book');
    const images = fs.readdirSync(imagesDir).map((file) => {
        return {
            src: `/look-book/${file}`,
            width: 232,
            height: 290,
            alt: file.replace(/^\.\/|\.jpg|\.jpeg|\.png$/g, ''),
        };
    });



    return (
        <main className='container lg:px-20 lg:py-20 px-5 py-5 mx-auto'>

            <div className='flex items-center justify-center'>

                <AnimatedGradientText className="text-7xl md:text-8xl text-center py-10 lg:text-9xl font-bold carattere-font">
                    Look Book
                </AnimatedGradientText>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-20 space-y-4">
                {images.map((img, i) => (
                    <BlurFade key={i} delay={2} className='' blur="20px" inView>
                        <img src={img.src} className="mb-4 w-full rounded- "  />
                    </BlurFade>
                ))}
            </div>
        </main>
    )
}

export default LookBook;