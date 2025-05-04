import { splitText } from '@/utils/textUtils';
import { useRef, useEffect } from 'react';
import { gsap } from '@/libs/gsap';
import styles from './ProjectHeroSection.module.scss';

export default function ProjectHeroSection() {
    const bannerHeadingRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the banner heading
        if (bannerHeadingRef.current) {
            const headingSpans = bannerHeadingRef.current.querySelectorAll('span span');
            tl.from(headingSpans, { y: "105%", duration: 0.6, stagger: 0.1 }, 0.4);
        }

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <>
            <section className={styles.projectHero}>
                {/* big heading */}
                <h1 ref={bannerHeadingRef}>
                    {splitText("projects")}
                </h1>
            </section>
        </>
    )
}
