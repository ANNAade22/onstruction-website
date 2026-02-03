"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const CompanyLogoData = [
    { src: '/logos/acme.svg', alt: 'Acme Logo' },
    { src: '/logos/quantum.svg', alt: 'Quantum Logo' },
    { src: '/logos/echo.svg', alt: 'Echo Logo' },
    { src: '/logos/celestial.svg', alt: 'Celestial Logo' },
    { src: '/logos/pulse.svg', alt: 'Pulse Logo' },
    { src: '/logos/apex.svg', alt: 'Apex Logo' },
];

const InfiniteScrollingLogosAnimation = () => {
    return (
        <div className="w-full py-10 bg-white border-b border-gray-100">

            <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
                <motion.div
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '-50%' }}
                    className="flex flex-none gap-24 pr-24 items-center"
                >
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {CompanyLogoData.map(({ src, alt }) => (
                                <div key={`${alt}-${index}`} className="relative h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={100}
                                        height={40}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteScrollingLogosAnimation;
