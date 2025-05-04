import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/libs/gsap';
import styles from './AwardSection.module.scss';
import { splitText } from '@/utils/textUtils';

const awardImages = [
    ['/images/awwards.webp', '/images/awwards.webp'],
    ['/images/awwards.webp', '/images/awwards.webp'],
    ['/images/awwards.webp', '/images/awwards.webp'],
    ['/images/awwards.webp', '/images/awwards.webp'],
];

export default function AwardSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const logosRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current || !headingRef.current || !logosRef.current) return; // Prevent running if not in page

        const cols = gsap.utils.toArray<HTMLElement>(`.${styles.col}`);

        // Image Scroll Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        })
            .to(cols[0], { yPercent: 10, ease: 'none' }, 0)
            .to(cols[1], { yPercent: -10, ease: 'none' }, 0)
            .to(cols[2], { yPercent: 10, ease: 'none' }, 0)
            .to(cols[3], { yPercent: -10, ease: 'none' }, 0);

        // Heading and Logos Animation
        const headingSpans = headingRef.current.querySelectorAll('span span');
        gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.awards} .${styles.text}`,
                start: 'top 70%',
            },
        })
            .from(headingSpans, { y: "110%", duration: 0.6, stagger: 0.01, ease: 'power2.out' }, 0)
            .from(
                logosRef.current?.children,
                { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
                0.4 // Delayed to allow heading animation to finish partially
            );

        // Cleanup on unmount
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <section className={styles.awards} ref={containerRef}>
            {/* Heading */}
            <div className={styles.text}>
                <div className={styles.wrapper}>
                    <h2 ref={headingRef}>
                        {splitText("I have already a variety of awards won")}
                    </h2>
                    <div className={styles.logos} ref={logosRef}>
                        <Image src='/images/awwardsLogo.svg' alt='awwards' width={100} height={50} />
                        <Image src='/images/cssdLogo.svg' alt='cssd' width={100} height={50} />
                    </div>
                </div>
                <div className={styles.border}></div>
            </div>

            {/* Award image container */}
            <div className={styles.container}>
                {awardImages.map((images, index) => (
                    <div key={index} className={styles.col}>
                        {images.map((src, imgIndex) => (
                            <Image key={imgIndex} src={src} width={500} height={500} alt={`Award ${index + 1}`} unoptimized />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}