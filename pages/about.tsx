import AboutDetailsSection from "@/components/AboutPage/AboutDetailsSection";
import AboutHeroSection from "@/components/AboutPage/AboutHeroSection";
import BookCallSection from "@/components/HomePage/BookCallSection";
import Head from "next/head";

export default function AboutPage() {

    return (
        <>
            <Head>
                <title>Vladyslav | About</title>
            </Head>
            <AboutHeroSection />
            <AboutDetailsSection />
            <BookCallSection />
        </>
    );
}