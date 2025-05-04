import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import { gsap } from '@/libs/gsap';
import styles from './Nav.module.scss';

// Define your links and paths
const links = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigationMenuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const router = useRouter(); // Get the router instance

    // Menu Animation
    useEffect(() => {
        const links = linksRef.current?.children;

        // Create a GSAP timeline
        const timeline = gsap.timeline();

        if (menuOpen) {
            // Open menu animation
            timeline
                .to(navigationMenuRef.current, {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 0.8,
                    ease: 'power4.inOut',
                    autoAlpha: 1,
                })
                .fromTo(
                    links ? Array.from(links).map(link => link.firstChild) : [], // Safely handle undefined
                    { y: '-100%' }, // Start from below and invisible
                    {
                        y: '0%', // Move to original position
                        duration: 0.8,
                        stagger: 0.05,
                        ease: 'power4.inOut',
                    },
                    '-=0.3' // Start the link animation 0.5 seconds earlier
                );
        } else {
            // Close menu animation
            timeline
                .to(
                    links ? Array.from(links).map(link => link.firstChild) : [], // Safely handle undefined
                    {
                        y: '-100%', // Move up
                        duration: 0.8,
                        stagger: 0.05,
                        ease: 'power4.inOut',
                    }
                )
                .to(navigationMenuRef.current, {
                    clipPath: 'inset(0% 0% 100% 0%)', // Hide menu
                    duration: 0.8,
                    ease: 'power4.inOut',
                }, '-=0.3'); // Start the menu hiding 0.5 seconds after link animation starts
        }

        // Cleanup function to kill the timeline on unmount
        return () => {
            timeline.kill();
        };
    }, [menuOpen]);

    // Close menu on route change
    useEffect(() => {
        const handleRouteChange = () => {
            setMenuOpen(false); // Close the menu when navigating to a new page
        };

        // Listen for route changes
        router.events.on('routeChangeStart', handleRouteChange);

        // Cleanup the event listener on unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <nav className={styles.nav}>
                <Link href='/' className={styles.logo}>
                    <span>Vladyslav Horobtsov</span>
                </Link>
                <div className={styles.menu_Toggle} onClick={() => setMenuOpen(prev => !prev)}>
                    <div className={styles.bar}></div>
                    <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
                </div>
                <Link href='/contact' className={styles.link}>
                    <span>Contact</span>
                </Link>
            </nav>
            <div ref={navigationMenuRef} className={styles.navigationMenu}>
                <ul ref={linksRef}>
                    {links.map(({ name, path }) => (
                        <li key={name}>
                            <Link href={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}