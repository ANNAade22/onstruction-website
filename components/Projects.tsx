import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "./Reveal";

export default function Projects() {
    return (
        <section id="projects" className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <Reveal width="100%">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                        </Reveal>
                        <Reveal width="100%" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore some of our recent landmark projects that demonstrate our commitment to quality and innovation.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <Reveal key={project.id} delay={index * 0.1} width="100%">
                                <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-100 flex flex-col h-full">
                                    <div className="relative h-40 w-full overflow-hidden shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal width="100%" delay={0.1}>
                        <div className="text-center mt-6">
                            <Link
                                href="/projects"
                                className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-colors"
                            >
                                View All Projects
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
