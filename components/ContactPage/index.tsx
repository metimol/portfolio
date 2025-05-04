import { useEffect, useRef } from 'react';
import styles from './ContactPage.module.scss';
import { splitText } from '@/utils/textUtils';
import { gsap } from '@/libs/gsap';
import Link from 'next/link';

export default function ContactSection() {
    const bannerHeadingRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        // Animate the banner heading
        if (bannerHeadingRef.current) {
            const headingSpans = bannerHeadingRef.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "105%", duration: 0.6, stagger: 0.1 }, 0.4);
        }

        // Animate the text before links
        if (textRef.current) {
            const headingSpans = textRef.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "115%", duration: 0.6, stagger: 0.001 }, 0.4);
        }

        // Animate links one by one using `fromTo`
        const links = document.querySelectorAll(`.${styles.linkSection} a`);
        if (links.length) {
            tl.fromTo(
                links,
                { opacity: 0, y: 20 }, // Starting values (links start from opacity 0 and y offset 20px)
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: "-.9" } // Ending values (links become visible with no y offset)
            );
        }

        // Play the animation
        tl.play();

        // Cleanup function to kill the timeline
        return () => {
            tl.kill();
        };
    }, []); // Empty dependency array to run once

    return (
        <>
            <section className={styles.contact}>
                <h1 ref={bannerHeadingRef}>{splitText("Contact")}</h1>
            </section>

            <section className={styles.linkSection}>
                <p ref={textRef}>{splitText("Contact me on")}</p>
                <div className={styles.wrapper}>
                    <Link href="mailto:mrzaidsaeed@gmail.com">Email</Link>
                    <Link href="https://www.instagram.com/zaidkhan3419/" target="_blank">Instagram</Link>
                    <Link href="https://www.facebook.com/z.khan3419/" target="_blank">Facebook</Link>
                    <Link href="https://www.linkedin.com/in/zaid-k-6a824310b/" target="_blank">Linkedin</Link>
                    <Link href="https://dribbble.com/zaidkhan3419" target="_blank">Dribble</Link>
                    <Link href="https://www.behance.net/zaidkhan3419" target="_blank">Behance</Link>
                    <Link href="https://www.framer.com/marketplace/creator/zaid-khan/" target="_blank">Framer</Link>
                </div>
            </section>
        </>
    );
}