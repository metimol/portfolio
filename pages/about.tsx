import AboutDetailsSection from "@/components/AboutPage/AboutDetailsSection";
import AboutHeroSection from "@/components/AboutPage/AboutHeroSection";
import AwardSection from "@/components/HomePage/AwardSection";
import BookCallSection from "@/components/HomePage/BookCallSection";
import Head from "next/head";

export default function AboutPage() {

    return (
        <>
            <Head>
                <title>Kael | About</title>
            </Head>
            <AboutHeroSection />
            <AboutDetailsSection />
            <AwardSection />
            <BookCallSection />
        </>
    );
}