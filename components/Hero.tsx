"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: i * 0.15, ease: "easeOut" as const },
    }),
};

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center pt-32">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/construction_hero_modern_site_ljm6up`}
                    className="w-full h-full object-cover"
                >
                    <source src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/hero-video_so4stg`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Title & Description */}
                    <div className="space-y-6 text-left">
                        <div className="space-y-2">
                            <h1 className="font-bold text-white leading-tight">
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={0}
                                    >
                                        SILVERLINE
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={1}
                                    >
                                        ENGINEERING
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.span
                                        className="block text-5xl md:text-6xl xl:text-7xl"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={2}
                                    >
                                        LIMITED
                                    </motion.span>
                                </div>
                            </h1>
                        </div>

                        <motion.p
                            className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.
                        </motion.p>
                    </div>

                    {/* Right Side - CTAs & Testimonial */}
                    <div className="space-y-6 flex flex-col items-start lg:items-center">
                        <motion.div
                            className="flex flex-col w-full gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        >
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-colors text-lg w-full lg:w-auto"
                            >
                                Discuss Project
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-white/20 transition-colors text-lg w-full lg:w-auto"
                            >
                                View Our Work
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        >
                            <Link href="/#testimonials" className="cursor-pointer group block">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                    <div className="flex -space-x-2">
                                        <Image
                                            src="https://api.dicebear.com/7.x/avataaars/png?seed=client1&size=80"
                                            alt="Client testimonial"
                                            width={40}
                                            height={40}
                                            sizes="80px"
                                            className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                        />
                                        <Image
                                            src="https://api.dicebear.com/7.x/avataaars/png?seed=client2&size=80"
                                            alt="Client testimonial"
                                            width={40}
                                            height={40}
                                            sizes="80px"
                                            className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                        />
                                        <Image
                                            src="https://api.dicebear.com/7.x/avataaars/png?seed=client3&size=80"
                                            alt="Client testimonial"
                                            width={40}
                                            height={40}
                                            sizes="80px"
                                            className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-1">
                                            <span className="text-white font-bold">Excellent</span>
                                            <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                        </div>
                                        <p className="text-gray-300 text-xs">Based on client reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
