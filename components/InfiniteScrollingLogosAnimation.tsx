"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const CompanyLogoData = [
    { src: '/logos/oryx.png', alt: 'Oryx Energies' },
    { src: '/logos/napoli.png', alt: 'Napoli Property' },
    { src: '/logos/reiz.png', alt: 'Real Estate Investments Zambia' },
    { src: '/logos/ministry.png', alt: 'Ministry of Education' },
    { src: '/logos/khalif.png', alt: 'Khalif Motors' },
    { src: '/logos/zra.png', alt: 'Zambia Revenue Authority' },
    { src: '/logos/undp.png', alt: 'UNDP' },
    { src: '/logos/engie.png', alt: 'Engie PowerCorner' },
    { src: '/logos/afroil.png', alt: 'Afroil' },
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
