"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import Counter from "@/components/Counter";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section with Gradient */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Gradient */}
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900 opacity-90 z-10"></div>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/construction_hero_modern_site.png"
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Reveal width="100%">
                            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
                                Our Portfolio
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Projects That <br />
                                <span className="text-secondary">Define Excellence</span>
                            </h1>
                        </Reveal>
                        <Reveal width="100%" delay={0.2}>
                            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                                From industrial plants to solar installations, explore our track record of delivering world-class engineering solutions across Zambia.
                            </p>
                        </Reveal>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        {[
                            { value: 11, suffix: "+", label: "Completed Projects" },
                            { value: 4, suffix: "+", label: "Years Experience" },
                            { value: 8, suffix: "", label: "Service Categories" },
                            { value: 100, suffix: "%", label: "Client Satisfaction" },
                        ].map((stat, idx) => (
                            <Reveal key={idx} delay={0.3 + (idx * 0.1)} width="100%">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center h-full">
                                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-blue-200 text-sm">{stat.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Reveal key={project.id} width="100%" delay={index * 0.1} className="h-full">
                                <div
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-72 w-full overflow-hidden shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-1.5 bg-secondary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Hover Icon */}
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                                                <ArrowUpRight className="text-primary" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                Zambia
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                Completed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/construction_hero_modern_site.png')] opacity-5 bg-cover bg-center"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with our expertise in engineering and construction.
                        </p>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get a Free Quote
                                <ArrowUpRight size={18} />
                            </Link>
                            <Link
                                href="tel:+260966626579"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                Call Us Now
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
