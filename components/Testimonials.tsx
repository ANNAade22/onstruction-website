import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
    {
        name: "John Phiri",
        role: "Property Dealer",
        content: "Zambia Construction Co. delivered our office complex ahead of schedule and under budget. Their attention to detail is unmatched in the region."
    },
    {
        name: "Sarah Mwape",
        role: "Homeowner",
        content: "Building my dream home with them was a seamless experience. The team was professional, transparent, and the quality of finish is world-class."
    },
    {
        name: "Michael Banda",
        role: "CEO, TechZambia",
        content: "We trust them with all our infrastructure needs. Reliable, safety-conscious, and always professional. Highly recommended."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                                <Quote className="text-secondary mb-4" size={40} />
                                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.content}&quot;</p>
                                <div>
                                    <h4 className="font-bold text-xl text-primary">{testimonial.name}</h4>
                                    <p className="text-secondary font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
