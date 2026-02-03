"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleLines = textRef.current?.querySelectorAll("h1");
            const description = textRef.current?.querySelector("p");
            const cta = textRef.current?.querySelector(".cta-container");
            const testimonial = textRef.current?.querySelector(".testimonial-card");

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (titleLines && titleLines.length > 0) {
                // Initial set
                gsap.set(".hero-text-line", { y: 100, opacity: 0 });

                tl.to(".hero-text-line",
                    { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
                );
            }

            if (description) {
                tl.fromTo(description,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.5"
                );
            }

            if (cta) {
                tl.fromTo(cta,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5 },
                    "-=0.3"
                );
            }

            if (testimonial) {
                tl.fromTo(testimonial,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.5"
                );
            }

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center pt-32">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/construction_hero_modern_site.png"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
                <div ref={textRef} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Title & Description */}
                    <div className="space-y-6 text-left">
                        <div className="space-y-2">
                            <div className="overflow-hidden">
                                <h1 className="hero-text-line text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                    SILVERLINE
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="hero-text-line text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                    ENGINEERING
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="hero-text-line text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                    LIMITED
                                </h1>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed opacity-0">
                            Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.
                        </p>
                    </div>

                    {/* Right Side - CTAs & Testimonial */}
                    <div className="space-y-6 flex flex-col items-start lg:items-center">
                        <div className="cta-container flex flex-col w-full gap-4 opacity-0">
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
                        </div>

                        {/* Testimonial Badge */}
                        <Link href="/#testimonials" className="testimonial-card opacity-0 cursor-pointer group">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="flex -space-x-2">
                                    <Image
                                        src="/client-1.png"
                                        alt="Client testimonial"
                                        width={40}
                                        height={40}
                                        unoptimized
                                        className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                    />
                                    <Image
                                        src="/client-2.png"
                                        alt="Client testimonial"
                                        width={40}
                                        height={40}
                                        unoptimized
                                        className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                    />
                                    <Image
                                        src="/client-3.png"
                                        alt="Client testimonial"
                                        width={40}
                                        height={40}
                                        unoptimized
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
                    </div>

                </div>
            </div>
        </section>
    );
}
