import { useEffect, useRef } from 'react';
import styles from './AboutDetailsSection.module.scss';
import { splitText } from '@/utils/textUtils';
import { gsap, ScrollTrigger } from '@/libs/gsap';
import Tag from '@/components/Tag';

// Setup Animation for all text
const animateText = (ref: React.RefObject<HTMLElement>, startOffset: string = '70%', yValue: string = '115%', stagger: number = 0.003) => {
    const elements = ref.current?.querySelectorAll('span span');
    if (!elements) return;

    gsap.from(elements, {
        scrollTrigger: {
            trigger: ref.current,
            start: `top ${startOffset}`,
            once: true, // Ensures ScrollTrigger is killed once the animation has occurred.
        },
        y: yValue,
        stagger: stagger,
    });
};

// Prepare data for rendering
const tools = [
    'Python', 'FastAPI', 'Django', 'Flask', 'C++', 
    'Go', 'Java', 'MySQL', 'SQLite', 'Redis', 
    'Docker', 'AI/ML', 'HTML/CSS', 'JavaScript', 'Git'
];
const experiences = [
    {
        position: "Backend Developer",
        company: "BlackWave Studio",
        period: "Dec 2024 - present"
    },
    {
        position: "Full-Stack Developer",
        company: "Freelance",
        period: "Sep 2022 - Dec 2024"
    }
];

export default function AboutDetailsSection() {
    const headingRef = useRef<HTMLDivElement | null>(null);
    const toolRef = useRef<HTMLDivElement | null>(null);
    const taglineRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const experienceTaglineRef = useRef<HTMLDivElement | null>(null); // Reference for experience tagline

    useEffect(() => {
        // Animate heading text
        if (headingRef.current) animateText(headingRef);

        // Animate tagline text for Tools
        const tagline = taglineRef.current;
        if (tagline) {
            gsap.from(tagline, {
                scrollTrigger: {
                    trigger: tagline,
                    start: 'top 80%',
                    once: true, // Ensures this animation triggers only once
                },
                opacity: 0,
                y: 50,
            });
        }

        // Animate all tool text
        if (toolRef.current) animateText(toolRef, '80%');

        // Animate experience tagline
        const experienceTagline = experienceTaglineRef.current;
        if (experienceTagline) {
            gsap.from(experienceTagline, {
                scrollTrigger: {
                    trigger: experienceTagline,
                    start: 'top 80%',
                    once: true, // Ensures this animation triggers only once
                },
                opacity: 0,
                y: 50,
            });
        }

        // Animate experience section with splitText
        if (experienceRef.current) animateText(experienceRef, '80%');

        // Cleanup ScrollTriggers when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all scroll triggers
        };
    }, []);

    return (
        <section className={styles.aboutDetails}>
            <h2 ref={headingRef}>
                {splitText("I specialize in building scalable backend systems in Python, focusing on AI model deployment, efficient data processing pipelines, and robust APIs. With expertise in frameworks like FastAPI, Django, and Flask, I create high-performance applications that leverage cutting-edge AI capabilities while maintaining security, reliability and scalability.")}
            </h2>

            {/* Toolbox */}
            <div className={styles.Toolbox}>
                <div className={styles.tagline} ref={taglineRef}>
                    <Tag text="Skills & Tools" />
                </div>
                <div className={styles.wrapper} ref={toolRef}>
                    {tools.map((tool, idx) => (
                        <h3 key={idx}>{splitText(tool)}</h3>
                    ))}
                </div>
            </div>

            {/* Experience */}
            <div className={styles.Experience} ref={experienceRef}>
                <div className={styles.tagline} ref={experienceTaglineRef}>
                    <Tag text="Experience" />
                </div>
                <div className={styles.wrapper}>
                    {experiences.map((exp, idx) => (
                        <div key={idx}>
                            <h3>{splitText(exp.position)}</h3>
                            <h4>{splitText(exp.company)}</h4>
                            <h4>{splitText(exp.period)}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
