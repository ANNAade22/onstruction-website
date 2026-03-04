import { Award, Users, Briefcase, Clock, ShieldCheck, HardHat, FileCheck, AlertTriangle } from "lucide-react";

const stats = [
    { icon: Clock, label: "Years Experience", value: "4+" },
    { icon: Briefcase, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Qualified Workers", value: "50+" },
    { icon: Award, label: "Awards Won", value: "3+" },
];

const safetyPoints = [
    {
        icon: ShieldCheck,
        title: "Zero Incident Target",
        description: "Committed to zero workplace incidents"
    },
    {
        icon: HardHat,
        title: "Certified Personnel",
        description: "Fully trained & certified workforce"
    },
    {
        icon: FileCheck,
        title: "Compliance First",
        description: "Full regulatory compliance"
    },
    {
        icon: AlertTriangle,
        title: "Risk Management",
        description: "Proactive hazard identification"
    }
];

import { Reveal } from "./Reveal";

export default function About() {
    return (
        <section id="about" className="py-12 bg-white">
            {/* About Company Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Our Company</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
                            Mission: To deliver world class engineering solutions with integrity, innovation, and professionalism, ensuring client satisfaction through quality workmanship and timely execution.
                        </p>
                        <p className="text-primary font-bold text-xl">
                            Quality • Safety • Integrity • Innovation • Professionalism
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow h-full">
                                <div className="p-4 bg-white rounded-full shadow-sm mb-4 text-secondary">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Health & Safety Commitment Section */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 20px,
                            rgba(234, 179, 8, 0.1) 20px,
                            rgba(234, 179, 8, 0.1) 40px
                        )`
                    }}></div>
                </div>

                {/* Yellow Safety Stripe Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal width="100%">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-4">
                                <ShieldCheck className="text-yellow-400" size={24} />
                                <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm">
                                    Health & Safety Commitment
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                Safety is Our <span className="text-yellow-400">Top Priority</span>
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                                We maintain the highest standards of health and safety across all our projects,
                                meeting and exceeding industry requirements for mining and large-scale operations.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {safetyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-full mb-4 group-hover:bg-yellow-500/30 transition-colors">
                                        <point.icon className="text-yellow-400" size={28} />
                                    </div>
                                    <h3 className="text-white font-bold text-sm md:text-base mb-1">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm">
                                <span className="text-yellow-400 font-semibold">✓ Mining Industry Approved</span>
                                <span className="mx-3 text-gray-600">|</span>
                                <span className="text-yellow-400 font-semibold">✓ WCFCB Registered</span>
                                <span className="mx-3 text-gray-600">|</span>
                                <span className="text-yellow-400 font-semibold">✓ Regular Safety Audits</span>
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Yellow Safety Stripe Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
            </div>
        </section>
    );
}
