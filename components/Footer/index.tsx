import Link from 'next/link';
import styles from './Footer.module.scss';

// address
const contactInfo = (
    <p>
        Prinsengracht 123, <br />
        1016 GV Amsterdam, <br />
        The Netherlands
    </p>
);

// Navigation links
const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
].map(({ text, href }) => (
    <Link key={text} href={href}>{text}</Link>
));

// Social links
const socialLinks = [
    { text: 'Instagram', href: 'https://www.instagram.com/zaidkhan3419' },
    { text: 'Linkedin', href: 'https://www.linkedin.com/in/zaid-k-6a824310b' },
    { text: 'Dribble', href: 'https://dribbble.com/zaidkhan3419' },
    { text: 'Framer', href: 'https://www.framer.com/marketplace/creator/zaid-khan/' },
].map(({ text, href }) => (
    <Link key={text} href={href} target="_blank" rel="noopener noreferrer">{text}</Link>
));

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.col}>
                        {contactInfo}
                        <Link href='mailto:mrzaidsaeed@gmail.com'>hello@kaeldonovan.com</Link>
                    </div>
                    <div className={styles.linksCol}>
                        {navigationLinks}
                    </div>
                </div>
                <div className={styles.border} />
                <div className={styles.copyrights}>
                    <div className={styles.col}>
                        <p>© All rights reserved / 2024</p>
                    </div>
                    <div className={styles.linksCol}>
                        {socialLinks}
                    </div>
                </div>
            </div>
            <h2 className={styles.bigText}>Kael Donovan</h2>
        </footer>
    );
};

export default Footer;