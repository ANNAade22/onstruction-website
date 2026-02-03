import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 px-4 md:px-6 bg-white">
            <div className="max-w-7xl mx-auto bg-primary text-white rounded-3xl p-6 md:p-10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gray-800 pb-8">

                    {/* Brand Section */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                                SILVERLINE
                            </span>
                            <span className="text-gray-400 text-xs font-semibold tracking-[0.3em] uppercase -mt-1">
                                Engineering Limited
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Building dreams with precision and excellence. <br />
                            Your trusted partner in construction.
                        </p>
                        <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                            <Mail size={16} />
                            <a href="mailto:info@silverlineng.com" className="text-sm">info@silverlineng.com</a>
                        </div>
                        <div className="flex gap-3 pt-2">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all"
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Section - Company */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-base font-medium">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['Privacy policy', 'Terms of service', 'Refund policy', 'Contact us'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Contact us' ? '/contact' : '#'} className="hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Section - Helpful resources */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-base font-medium">Helpful resources</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['Features', 'How to use', 'Pricing', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscription Section */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-base font-medium">News & Updates</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Enter your email address for receiving valuable newsletters.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                className="w-full bg-black/20 text-gray-100 py-3 pl-4 pr-32 rounded-lg border border-transparent focus:border-white/20 focus:outline-none text-sm placeholder:text-gray-400"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-semibold px-4 rounded-md text-xs md:text-sm hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 text-center text-gray-500 text-xs">
                    <p>© 2025 Silverline Engineering Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
