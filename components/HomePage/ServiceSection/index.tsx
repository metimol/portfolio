import { useEffect, useRef } from 'react';
import ServiceCard from './card';
import styles from './ServiceSection.module.scss';
import { gsap, ScrollTrigger } from '@/libs/gsap';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { splitText } from '@/utils/textUtils';

// Define the Service interface
interface Service {
    title: string;
    numbering: string;
    listItems: string[];
}

// Define the services data
const services: Service[] = [
    {
        title: "Python Development",
        numbering: "01",
        listItems: ["FastAPI", "Django", "Flask", "Data Processing", "Automation"],
    },
    {
        title: "AI & ML Integration",
        numbering: "02",
        listItems: ["AI Model Deployment", "API Integration", "Data Pipeline Design", "ML Operations", "Fine-tuning"],
    },
    {
        title: "Web Scraping",
        numbering: "03",
        listItems: ["BeautifulSoup", "Scrapy", "Selenium", "Data Extraction", "Automation"],
    },
    {
        title: "Backend Systems",
        numbering: "04",
        listItems: ["API Design", "Database Architecture", "Authentication", "Performance Optimization", "Scalable Solutions"],
    },
];

// Define the ServiceSection component
export default function ServiceSection() {
    const container = useRef<HTMLElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const taglineRef = useRef<HTMLDivElement | null>(null);
    const btnWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Heading animation timeline
        const headingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.services} .${styles.heading}`,
                start: 'top 70%',
            },
        });

        // Tagline animation
        if (taglineRef.current) {
            headingTimeline.from(taglineRef.current, { y: 50, opacity: 0, duration: 0.8 }, 0);
        }

        // Heading text animation
        if (headingRef.current) {
            const headingSpans = headingRef.current.querySelectorAll('span span');
            headingTimeline.from(headingSpans, { y: '110%', duration: 0.6, stagger: 0.01 }, 0.4);
        }

        // Button wrapper animation
        if (btnWrapperRef.current) {
            headingTimeline.from(btnWrapperRef.current, { y: 50, opacity: 0, duration: 0.8 }, 0.8);
        }

        // Cards animations
        const positions = [13, 37.7, 62.4, 87];
        const rotations = [-15, -7.5, 7.5, 15];
        const totalScrollHeight = window.innerHeight * 3;

        const cardTriggers = cardRefs.current.map((card, index) => {
            if (card) {
                // Spread and rotate cards
                gsap.to(card, {
                    left: `${positions[index]}%`,
                    top: '50%',
                    yPercent: -50,
                    rotation: rotations[index],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'top top',
                        end: () => `+=${window.innerHeight}`,
                        scrub: 1,
                    },
                });

                // Flip card animation
                const frontEl = card.querySelector('.flipCardFrontA');
                const backEl = card.querySelector('.flipCardBackB');
                if (frontEl && backEl) {
                    const staggerOffset = index * 0.05;
                    const startOffset = 1 / 3 + staggerOffset;
                    const endOffset = 2 / 3 + staggerOffset;

                    return ScrollTrigger.create({
                        trigger: container.current,
                        start: 'top top',
                        end: () => `+=${totalScrollHeight}`,
                        scrub: 1,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            if (progress >= startOffset && progress <= endOffset) {
                                const animationProgress = (progress - startOffset) / (1 / 3);
                                const frontRotation = -180 * animationProgress;
                                const backRotation = 180 - 180 * animationProgress;

                                gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.out' });
                                gsap.to(backEl, { rotateY: backRotation, ease: 'power1.out' });
                                gsap.to(card, {
                                    rotate: rotations[index] * (1 - animationProgress),
                                    yPercent: -50,
                                    top: '50%',
                                    ease: 'none',
                                });
                            }

                            // Ensure card is straight when animation completes
                            if (progress >= endOffset) {
                                gsap.to(card, { rotate: 0, ease: 'none' });
                            }
                        },
                    });
                }
            }
        });

        // Pin section during scroll
        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top',
            end: () => `+=${totalScrollHeight}`,
            pin: true,
            pinSpacing: true,
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            cardTriggers.forEach(trigger => trigger?.kill()); // Clean up only specific triggers
        };
    }, []);

    return (
        <section className={styles.services}>
            {/* heading */}
            <div className={styles.heading}>
                <div ref={taglineRef}>
                    <Tag text='capabilities' />
                </div>
                <div className={styles.headingWrapper}>
                    <h1 ref={headingRef}>
                        {splitText("Robust Backend Solutions for Modern Applications")}
                    </h1>
                    <div ref={btnWrapperRef}>
                        <Button text="Get in touch" href="/contact" />
                    </div>
                </div>
            </div>

            {/* Services cards */}
            <section className={styles.wrapper} ref={container}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el; // Ensure ref is set correctly
                        }}
                        title={service.title}
                        numbering={service.numbering}
                        listItems={service.listItems}
                    />
                ))}
            </section>

            {/* Services cards for small devices */}
            <div className={styles.mobileWrapper}>
                {services.map((service) => (
                    <div className={styles.card} key={service.numbering}>
                        <h3 className={styles.title}>{service.title}</h3>
                        <ul>
                            {service.listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <h2 className={styles.numbering}>{service.numbering}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}
