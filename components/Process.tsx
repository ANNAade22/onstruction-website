"use client";

import { motion } from "framer-motion";
import { MessageSquare, Ruler, HardHat, Key } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Consultation",
        description: "We meet to discuss your vision, budget, and requirements to ensure we understand your goals perfectly."
    },
    {
        icon: Ruler,
        title: "Design & Planning",
        description: "Our engineers create detailed blueprints and project timelines, securing all necessary permits."
    },
    {
        icon: HardHat,
        title: "Construction",
        description: "Our skilled team executes the build using premium materials, with regular updates on progress."
    },
    {
        icon: Key,
        title: "Project Handover",
        description: "We conduct a final walkthrough and quality check before handing over the keys to your new facility."
    }
];

export default function Process() {
    return (
        <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
            {/* Background Pattern - Subtle for light mode */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 30, transition: { duration: 0 } },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How We Work</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 30, transition: { duration: 0 } },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                    >
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A transparent, step-by-step process ensures your project is delivered on time, within budget, and to the highest standards.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Lines for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-0.5 -z-10 transform -translate-y-1/2">
                        {/* We need 3 segments of connection */}
                        <div className="relative w-full h-full flex">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="flex-1 relative">
                                    {/* Base grey line */}
                                    <div className="absolute inset-0 bg-gray-200"></div>
                                    {/* Filling colored line */}
                                    <motion.div
                                        className="absolute inset-0 bg-secondary origin-left"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.1 }}
                                        variants={{
                                            hidden: { scaleX: 0, transition: { duration: 0 } },
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 0.8,
                                                    delay: (i * 1.6) + 1.0, // Start after Circle finishes (approx 1.0s)
                                                    ease: "easeInOut"
                                                }
                                            }
                                        }}
                                    ></motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0 } },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 1.6, // New interval
                                            ease: "backOut"
                                        }
                                    }
                                }}
                                className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10 bg-white"
                            >
                                {/* SVG Circle Progress */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                                    {/* Track Circle */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="46"
                                        fill="none"
                                        stroke="#f3f4f6" // gray-100
                                        strokeWidth="8"
                                    />
                                    {/* Animated Progress Circle */}
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="46"
                                        fill="none"
                                        stroke="#f97316" // secondary (orange)
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        className="text-secondary"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                        variants={{
                                            hidden: { pathLength: 0, transition: { duration: 0 } },
                                            visible: {
                                                pathLength: 1,
                                                transition: {
                                                    duration: 0.8,
                                                    delay: (index * 1.6) + 0.2, // Starts shortly after icon
                                                    ease: "easeInOut"
                                                }
                                            }
                                        }}
                                    />
                                </svg>

                                <step.icon size={32} className="text-secondary relative z-20" />

                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white z-30">
                                    {index + 1}
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, y: 20, transition: { duration: 0 } },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.5, delay: (index * 1.6) + 0.5 }
                                    }
                                }}
                            >
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-secondary transition-colors">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
