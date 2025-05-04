import Image from 'next/image';
import styles from './AboutHeroSection.module.scss';
import { splitText } from '@/utils/textUtils';
import { useRef, useEffect } from 'react';
import { gsap } from '@/libs/gsap';
import { getAssetPath } from '@/utils/assetPath';

export default function AboutHeroSection() {
    const bannerHeadingRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const heading2Ref = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the banner heading
        if (bannerHeadingRef.current) {
            const headingSpans = bannerHeadingRef.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "105%", duration: 0.6, stagger: 0.1 }, 0.4);
        }

        // Animate the first heading
        if (headingRef.current) {
            const headingSpans = headingRef.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "115%", duration: 0.6, stagger: 0.005 }, 0.8);
        }

        // Animate the second heading
        if (heading2Ref.current) {
            const headingSpans = heading2Ref.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "115%", duration: 0.6, stagger: 0.005 }, 1.2);
        }

        // Animate the image with a clip-path from top to bottom
        if (imageRef.current) {
            tl.from(imageRef.current, {
                clipPath: 'inset(100% 0% 0% 0%)', // Starts with the image fully clipped (hidden)
                duration: 1.5,
                ease: 'power4.inOut',
            }, 1); // Adjust the timing as needed
        }

        // Play the timeline when the component mounts
        tl.play();

        return () => {
            tl.kill();
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <section className={styles.aboutHero}>
            {/* big heading */}
            <h1 ref={bannerHeadingRef}>
                {splitText("about")}
            </h1>

            {/* Wrapper */}
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h2 ref={headingRef}>
                        {splitText("Over 3 years of experience building robust backend systems, APIs, and web scraping solutions.")}
                    </h2>
                    <h2 ref={heading2Ref}>
                        {splitText("Passionate about creating efficient, scalable architectures that power modern applications and handle complex data processing tasks.")}
                    </h2>
                </div>

                <div className={styles.image} ref={imageRef}>
                    <Image src={getAssetPath('images/about.jpeg')} alt='Vladyslav Horobtsov' width={500} height={500} unoptimized />
                </div>
            </div>
        </section>
    );
}