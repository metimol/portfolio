import ContactSection from '@/components/ContactPage';
import BookCallSection from '@/components/HomePage/BookCallSection';
import Head from 'next/head';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Kael | Contact</title>
            </Head>
            <ContactSection />
            <BookCallSection />
        </>
    )
}