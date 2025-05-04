import Tag from '@/components/Tag';
import styles from './BookCallSection.module.scss';
import Button from '@/components/Button';
import { splitText } from '@/utils/textUtils';
import { useEffect, useRef } from 'react';
import { gsap } from '@/libs/gsap';

export default function BookCallSection() {

    const taglineRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const paragraphRef = useRef<HTMLDivElement | null>(null);
    const btnWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a timeline for the text div animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.BookCall} .${styles.container}`,
                    start: 'top 70%',
                    onEnter: () => tl.play(),
                },
            });

            // Animation sequence
            if (taglineRef.current) {
                tl.from(taglineRef.current, { y: 50, opacity: 0, duration: .8 }, 0);
            }

            if (headingRef.current) {
                const headingSpans = headingRef.current.querySelectorAll('span span');
                tl.from(headingSpans, { y: "115%", duration: .6, stagger: 0.003 }, 0.4);
            }

            if (paragraphRef.current) {
                const paragraphSpans = paragraphRef.current.querySelectorAll('span span');
                tl.from(paragraphSpans, { y: "115%", duration: .5, stagger: 0.002 }, 0.6);
            }

            if (btnWrapperRef.current) {
                tl.from(btnWrapperRef.current, { y: 50, opacity: 0, duration: 0.8 }, 0.8);
            }
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <>
            <section className={styles.BookCall}>
                <div className={styles.container}>
                    <div ref={taglineRef}>
                        <Tag text="Contact" />
                    </div>
                    <h2 ref={headingRef}>
                        {splitText("Let's Discuss Your Next Project")}
                    </h2>
                    <p ref={paragraphRef}>
                        {splitText("Have a question or ready to start working together? Reach out to me directly via Telegram for a quick response.")}
                    </p>
                    <div className={styles.btnSpace} ref={btnWrapperRef}>
                        <Button text="Message on Telegram" href="https://t.me/metimol" targetBlank={true} />
                    </div>
                </div>
            </section>
        </>
    )
}