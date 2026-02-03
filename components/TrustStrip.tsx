"use client";

import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
    const certifications = [
        {
            name: "National Council for Construction",
            acronym: "NCC",
            logo: "/logos/ncc.png",
        },
        {
            name: "Workers' Compensation Fund Control Board",
            acronym: "WCFCB",
            logo: "/logos/wcfcb.png",
        },
        {
            name: "Engineering Institution of Zambia",
            acronym: "EIZ",
            logo: "/logos/eiz.png",
        }
    ];

    const clients = [
        { name: "Client 1", logo: "https://placehold.co/120x60/png?text=Client+1" },
        { name: "Client 2", logo: "https://placehold.co/120x60/png?text=Client+2" },
        { name: "Client 3", logo: "https://placehold.co/120x60/png?text=Client+3" },
        { name: "Client 4", logo: "https://placehold.co/120x60/png?text=Client+4" },
        { name: "Client 5", logo: "https://placehold.co/120x60/png?text=Client+5" },
        { name: "Client 6", logo: "https://placehold.co/120x60/png?text=Client+6" },
    ];

    return (
        <section className="bg-white border-b border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">

                        {/* Certifications Section - Static */}
                        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                Accredited By
                            </h3>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="group relative hover:scale-105 transition-all duration-300">
                                        <Image
                                            src={cert.logo}
                                            alt={cert.name}
                                            width={100}
                                            height={50}
                                            className="h-12 w-auto object-contain"
                                        />
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-gray-500 font-medium whitespace-nowrap pointer-events-none bg-white px-2 py-1 shadow-sm rounded border border-gray-100">
                                            {cert.acronym}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider for Desktop */}
                        <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

                        {/* Clients Section - Infinite Scroll */}
                        <div className="flex-1 w-full overflow-hidden relative">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center lg:text-left">
                                Trusted By
                            </h3>

                            <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
                                <motion.div
                                    transition={{
                                        duration: 20,
                                        ease: 'linear',
                                        repeat: Infinity,
                                    }}
                                    initial={{ x: 0 }}
                                    animate={{ x: '-50%' }}
                                    className="flex flex-none gap-10 pr-10 items-center"
                                >
                                    {[...clients, ...clients].map((client, index) => (
                                        <div key={index} className="flex-shrink-0 hover:scale-105 transition-all duration-300">
                                            <Image
                                                src={client.logo}
                                                alt={client.name}
                                                width={100}
                                                height={50}
                                                className="h-10 w-auto object-contain"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}
