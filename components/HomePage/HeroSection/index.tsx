import { useEffect, useRef } from "react";
import { gsap } from "@/libs/gsap";
import styles from './HeroSection.module.scss';
import ImageTrailEffect from "@/components/HomePage/ImageTrail";

export default function HeroSection() {
    const marqueeRef = useRef<HTMLDivElement | null>(null);
    const marqueeTextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Marquee animation
        const marqueeElement = marqueeRef.current;
        const marqueeTextElement = marqueeTextRef.current;

        if (marqueeElement && marqueeTextElement) {
            // Duplicate the content to ensure smooth looping
            marqueeTextElement.innerHTML += marqueeTextElement.innerHTML;

            // Create the infinite marquee animation
            gsap.to(marqueeTextElement, {
                xPercent: -100, // Move by 100% of the element's width
                ease: "none",
                duration: 450, // Adjust the speed of the marquee
                repeat: -1, // Infinite loop
                modifiers: {
                    xPercent: gsap.utils.wrap(-100, 0), // Wrap the xPercent value to create a continuous effect
                },
            });
        }

    }, []);

    return (
        <section className={styles.hero}>
            <ImageTrailEffect />
            <div className={styles.marquee} ref={marqueeRef}>
                <div className={styles.content} ref={marqueeTextRef}>
                    &nbsp;Kael Donovan - Kael Donovan - Kael Donovan - Kael Donovan -
                    Kael Donovan - Kael Donovan - Kael Donovan - Kael Donovan -
                    Kael Donovan - Kael Donovan - Kael Donovan - Kael Donovan -
                    Kael Donovan - Kael Donovan - Kael Donovan - Kael Donovan -
                    Kael Donovan - Kael Donovan - Kael Donovan - Kael Donovan -
                </div>
            </div>
            <h5 className={styles.tagline}>
                an independent creative Designer & Developer based in Netherlands
            </h5>
        </section>
    );
}