"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("/");
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track which section is currently in view
    useEffect(() => {
        // Only run on homepage
        if (pathname !== '/') return;

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section crosses the middle of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    // Map section IDs to their href format
                    if (sectionId === 'hero') {
                        setActiveSection('/');
                    } else if (sectionId) {
                        setActiveSection(`/#${sectionId}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "100 top",
                    scrub: true,
                },
                paddingTop: "0.5rem", // py-2
                paddingBottom: "0.5rem",
                width: "95%",
                // backgroundColor: "rgba(255, 255, 255, 0.95)", // Removed to prevent color interpolation issues
                duration: 0.3
            });

            // Animate separate padding for nav wrapper if needed
            gsap.to(navRef.current, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "100 top",
                    scrub: true,
                },
                paddingTop: "0.5rem",
                duration: 0.3
            });

        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav ref={navRef} className="fixed w-full z-50 pt-6 px-4 transition-all will-change-transform">
            <div className="max-w-7xl mx-auto flex justify-center">
                <div ref={containerRef} className="bg-white backdrop-blur-lg rounded-full border border-gray-200 shadow-md hover:shadow-lg px-6 md:px-8 py-3 flex justify-between items-center w-full transition-all will-change-transform">

                    {/* Branding */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="relative">
                            <Image
                                src="/silverline_s_logo.png"
                                alt="Silverline Logo"
                                width={36}
                                height={36}
                                className="h-9 w-auto object-contain transition-transform group-hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-tight font-[var(--font-outfit)]">
                            <span className="text-primary text-lg font-bold tracking-tight">SILVERLINE</span>
                            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase -mt-0.5">Limited</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => {
                            // Check active state based on pathname or active section
                            let isActive = false;
                            if (pathname === '/') {
                                // On homepage, use section-based detection
                                isActive = activeSection === item.href;
                            } else {
                                // On other pages, check pathname
                                isActive = pathname === item.href;
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 group overflow-hidden ${isActive
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-white'
                                        }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className={`absolute inset-0 bg-primary rounded-full transition-transform duration-300 ease-out ${isActive
                                        ? 'scale-100'
                                        : 'scale-0 group-hover:scale-100'
                                        }`}></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 text-sm"
                        >
                            Get a Quote
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-black focus:outline-none p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full px-4 mt-2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-4 py-3 rounded-xl text-base font-medium bg-primary text-white hover:bg-secondary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
