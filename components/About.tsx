import { Award, Users, Briefcase, Clock } from "lucide-react";

const stats = [
    { icon: Clock, label: "Years Experience", value: "4+" },
    { icon: Briefcase, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Qualified Workers", value: "50+" },
    { icon: Award, label: "Awards Won", value: "3+" },
];

import { Reveal } from "./Reveal";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
        </section>
    );
}
