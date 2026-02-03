"use client";

import { Home, Building2, Hammer, ClipboardCheck, Warehouse, BrickWall, Truck, Zap, Factory, Fuel, Sun } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const services = [
    {
        icon: Truck,
        title: "Plant & Equipment Hire",
        description: "Reliable heavy machinery rental including ADT dump trucks, dozers, excavators, and water bowsers for large-scale operations.",
        image: "/PHOTO%202/WhatsApp%20Image%202026-01-29%20at%209.46.55%20AM%20(1).jpeg",
    },
    {
        icon: Truck,
        title: "Logistics & Transportation",
        description: "Specialized transport solutions including abnormal load haulage and cross-border logistics for heavy industrial goods.",
        image: "/PHOTO%202/WhatsApp%20Image%202026-01-29%20at%209.46.55%20AM.jpeg",
    },
    {
        icon: Home,
        title: "Prefab & Pre-Engineered Buildings",
        description: "Supply and erection of prefab housing and pre-engineered buildings, offering rapid and durable construction solutions.",
        video: "/construction-video-1.mp4",
        image: "/PHOTO%202/WhatsApp%20Image%202026-01-29%20at%209.50.20%20AM.jpeg",
    },
    {
        icon: Hammer,
        title: "Mining Support Services",
        description: "Comprehensive mining infrastructure support, including heavy equipment supply and tailored civil works.",
        image: "/services/mining_support.jpg",
    },
    {
        icon: Building2,
        title: "Building Construction",
        description: "We construct residential, commercial, and industrial buildings using durable materials and modern engineering standards.",
        image: "/PHOTOS%201/PHOTOS/IMG_1259.jpg",
    },
    {
        icon: Warehouse,
        title: "Portal-Framed Structures Fabrication & Erection",
        description: "Design, fabrication, and erection of steel structures suitable for warehouses, factories, and industrial facilities.",
        image: "/PHOTOS%201/PHOTOS/IMG_1338.jpg",
    },
    {
        icon: BrickWall,
        title: "Concrete Works",
        description: "Execution of reinforced concrete foundations, slabs, beams, columns, and structural elements.",
        image: "/PHOTOS%201/PHOTOS/IMG_1272.jpg",
    },
    {
        icon: Truck,
        title: "All-Weather Roads Construction",
        description: "Construction of durable gravel and paved access roads suitable for farms, industries, and rural infrastructure.",
        image: "/PHOTOS%201/PHOTOS/DJI_0194.jpg",
    },
    {
        icon: Zap,
        title: "Off-Grid Power Construction",
        description: "Development of off-grid power systems and related infrastructure for remote sites and industrial operations.",
        image: "/PHOTOS%201/PHOTOS/DJI_0170.jpg",
    },
    {
        icon: Factory,
        title: "Substations Construction",
        description: "Civil and mechanical works for electrical substations, including foundations, plinths, cable trenches, and support structures.",
        image: "/PHOTOS%201/PHOTOS/DJI_0160.jpg",
    },
    {
        icon: Fuel,
        title: "Filling Stations Mechanical Works",
        description: "Installation and maintenance of fuel station mechanical systems including tanks, piping, and dispensing lines.",
        image: "/PHOTOS%201/PHOTOS/IMG_8002.jpg",
    },
    {
        icon: Sun,
        title: "Solar Works",
        description: "Installation of solar power systems, including solar panels, inverters, battery storage, and support structures.",
        image: "/PHOTOS%201/PHOTOS/DJI_0240.jpg",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a comprehensive range of construction services tailored to meet the unique needs of the Zambian market.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full overflow-hidden flex flex-col">
                                {(service.image || service.video) && (
                                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                        {service.video ? (
                                            <video
                                                src={service.video}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                muted
                                                loop
                                                autoPlay
                                                playsInline
                                                poster={service.image}
                                            />
                                        ) : (
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>
                                )}

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-6 text-primary group-hover:text-secondary transition-colors">
                                        <service.icon size={48} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
