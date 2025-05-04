// /pages/project.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectsSection.module.scss';
import { projects } from '@/data/projectsData';
import { useEffect, useRef } from 'react';
import { gsap } from '@/libs/gsap';

export default function ProjectsSection() {
    const cardRefs = useRef<HTMLAnchorElement[]>([]);

    const addToRefs = (el: HTMLAnchorElement | null) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.from(cardRefs.current, {
            opacity: 0,
            y: "10%", // Move cards from below
            duration: 1.2,
            stagger: 0.1, // Stagger animation for each card
            ease: "power3.out",
            delay: 1,
        });
    }, [])

    return (
        <section className={styles.ProjectsSection}>
            <div className={styles.wrapper}>
                {projects.map((project) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.projectCard} ref={addToRefs}>
                        <Image
                            src={project.img}
                            alt={project.title}
                            width={500}
                            height={500}
                            unoptimized
                        />
                        <div className={styles.projectDetails}>
                            <div className={styles.title}>
                                <h3>{project.title}</h3>
                            </div>
                            <div className={styles.category}>
                                {project.category.map((cat, idx) => (
                                    <h5 key={idx}>{cat}</h5>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
