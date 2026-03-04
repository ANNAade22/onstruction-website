"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const Reveal = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    direction = "up"
}: RevealProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        // Initial state
        let x = 0;
        let y = 0;

        switch (direction) {
            case "up": y = 50; break;
            case "down": y = -50; break;
            case "left": x = 50; break;
            case "right": x = -50; break;
        }

        gsap.fromTo(
            element,
            { opacity: 0, x, y },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation starts when top of element hits 85% of viewport height
                    toggleActions: "play none none reverse", // Replays when scrolling back up? "play none none reverse" -> plays on enter, reverses on leave back up
                    // "play none none none" is better for "reveal once" but "reverse" is requested for dynamic feel sometimes. 
                    // Let's stick to "play none none none" for cleaner "reveal once" feel or "play none none reverse" if we want it to hide again.
                    // Standard premium feel usually creates it once.
                    // Let's use simpler config:
                }
            }
        );
    }, [delay, direction]);

    return (
        <div ref={ref} className={`${className}`} style={{ width, opacity: 0 }}>
            {children}
        </div>
    );
};
