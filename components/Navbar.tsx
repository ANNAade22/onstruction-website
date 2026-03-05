"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, useTransform, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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

    const { scrollY } = useScroll();
    const containerPadding = useTransform(scrollY, [0, 100], [12, 8]);
    const containerWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
    const navPaddingTop = useTransform(scrollY, [0, 100], [24, 8]);

    // Track which section is currently in view
    useEffect(() => {
        if (pathname !== "/") return;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId === "hero") {
                        setActiveSection("/");
                    } else if (sectionId) {
                        setActiveSection(`/#${sectionId}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        });

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <motion.nav
            className="fixed w-full z-50 px-4 transition-all will-change-transform"
            style={{ paddingTop: navPaddingTop }}
        >
            <div className="max-w-7xl mx-auto flex justify-center">
                <motion.div
                    className="bg-white backdrop-blur-lg rounded-full border border-gray-200 shadow-md hover:shadow-lg px-6 md:px-8 py-3 flex justify-between items-center transition-all will-change-transform"
                    style={{
                        paddingTop: containerPadding,
                        paddingBottom: containerPadding,
                        width: containerWidth,
                    }}
                >
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
                            let isActive = false;
                            if (pathname === "/") {
                                isActive = activeSection === item.href;
                            } else {
                                isActive = pathname === item.href;
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 group overflow-hidden ${isActive ? "text-white" : "text-gray-600 hover:text-white"}`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span
                                        className={`absolute inset-0 bg-primary rounded-full transition-transform duration-300 ease-out ${isActive ? "scale-100" : "scale-0 group-hover:scale-100"}`}
                                    />
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
                </motion.div>

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
        </motion.nav>
    );
}
