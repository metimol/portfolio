import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './DribbleSection.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';
import { splitText } from '@/utils/textUtils';

gsap.registerPlugin(ScrollTrigger);

const animations = [
    { left: { x: -800, rotation: -30, y: 100 }, right: { x: 800, rotation: 30, y: 100 } },
    { left: { x: -900, rotation: -20, y: -150 }, right: { x: 900, rotation: 20, y: -150 } },
    { left: { x: -400, rotation: -35, y: -400 }, right: { x: 400, rotation: 35, y: -400 } },
];

export default function DribbleSection() {
    const rowsRef = useRef<HTMLDivElement[]>([]);
    const taglineRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const btnWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Images animation
            rowsRef.current.forEach((row, index) => {
                if (!row) return;

                const [leftImg, rightImg] = row.children as unknown as HTMLImageElement[]; // Safely cast children

                const triggerSettings = {
                    trigger: `.${styles.dribble}`,
                    start: 'top center',
                    end: '150% bottom',
                    scrub: true,
                };

                // Animate left image
                gsap.fromTo(leftImg, { x: 0, rotation: 0, y: 0 }, { ...animations[index]?.left, duration: 1, scrollTrigger: triggerSettings });

                // Animate right image
                gsap.fromTo(rightImg, { x: 0, rotation: 0, y: 0 }, { ...animations[index]?.right, duration: 1, scrollTrigger: triggerSettings });
            });

            // Create a timeline for the text div animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.dribble} .${styles.text}`,
                    start: 'top 70%',
                    onEnter: () => tl.play(),
                },
            });

            // Animation sequence
            if (taglineRef.current) {
                tl.from(taglineRef.current, { y: 50, opacity: 0, duration: .8 }, 0);
            }

            if (imageRef.current) {
                tl.from(imageRef.current, { y: 50, opacity: 0, duration: .8 }, 0.2);
            }

            if (headingRef.current) {
                const headingSpans = headingRef.current.querySelectorAll('span span');
                tl.from(headingSpans, { y: "120%", duration: .6, stagger: 0.003 }, 0.4);
            }

            if (btnWrapperRef.current) {
                tl.from(btnWrapperRef.current, { y: 50, opacity: 0, duration: 0.8 }, 0.8);
            }
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <section className={styles.dribble}>
            {/* text */}
            <div className={styles.text}>
                <div ref={taglineRef}>
                    <Tag text='Follow on' />
                </div>
                <Image src={getAssetPath('images/dribble.webp')} alt='dribble' width={100} height={50} ref={imageRef} />
                <h5 ref={headingRef}>
                    {splitText("Energizing the digital landscape, our creativity shines in bespoke websites.")}
                </h5>
                <div className={styles.btnSpace} ref={btnWrapperRef}>
                    <Button text="View Dribble" href="https://dribbble.com/zaidkhan3419" targetBlank={true} />
                </div>
            </div>

            {/* animated images */}
            <div className={styles.container}>
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        className={styles.row}
                        ref={(el) => {
                            if (el) {
                                rowsRef.current[index] = el; // Assign the element to the ref if it is not null
                            }
                        }}
                        key={index}
                    >
                        <Image src={getAssetPath(`images/dribble${index * 2 + 1}.jpeg`)} width={500} height={500} alt='dribble' unoptimized />
                        <Image src={getAssetPath(`images/dribble${index * 2 + 2}.jpeg`)} width={500} height={500} alt='dribble' unoptimized />
                    </div>
                ))}
            </div>
        </section>
    );
}