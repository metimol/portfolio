import { useEffect, useRef } from "react";
import { gsap } from "@/libs/gsap";
import styles from "./AboutSection.module.scss";
import Button from "@/components/Button";
import Tag from "@/components/Tag";

export default function AboutSection() {
    const aboutTextRef = useRef<HTMLHeadingElement | null>(null);
    const taglineRef = useRef<HTMLDivElement | null>(null);
    const btnWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const aboutText = aboutTextRef.current;
        const tagline = taglineRef.current;
        const buttonWrapper = btnWrapperRef.current;

        // Animate the aboutText (already implemented)
        if (aboutText) {
            const text = aboutText.textContent?.trim() || "";
            const hasProcessed = aboutText.querySelector(".letter");

            if (!hasProcessed) {
                aboutText.innerHTML = text
                    .split(" ")
                    .map(word =>
                        `<span class="word" style="will-change: opacity; display: inline-block;">${word.split("").map(letter => `<span class="letter" style="will-change: opacity; display: inline-block;">${letter}</span>`).join("")}</span>`
                    )
                    .join(" ") + " ";

                const letters = aboutText.querySelectorAll(".letter");
                gsap.set(letters, { opacity: 0.2 });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: aboutText,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }).to(letters, {
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.02,
                    ease: "power2.out",
                });
            }
        }

        // Animate tagline and button using a helper function
        const animateElement = (element: HTMLElement | null, trigger: HTMLElement | null, start: string, end: string, fromProps: gsap.TweenVars) => {
            if (element) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger,
                        start,
                        end,
                        once: true,
                    },
                }).from(element, fromProps);
            }
        };

        animateElement(tagline, tagline, "top 90%", "top 50%", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
        animateElement(buttonWrapper, tagline, "top 50%", "top 30%", { y: 50, opacity: 0, duration: 1, ease: "power2.out" });

    }, []);

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div ref={taglineRef}>
                    <Tag text="About" />
                </div>
                <h2 className={styles.aboutText} ref={aboutTextRef}>
                    I'm a Python backend developer with expertise in AI model integration and deployment. I specialize in creating efficient, scalable solutions that leverage machine learning capabilities for real-world applications.
                </h2>
                <div className={styles.btnSpace} ref={btnWrapperRef}>
                    <Button text="More About Me" href="/about" />
                </div>
            </div>
        </section>
    );
}