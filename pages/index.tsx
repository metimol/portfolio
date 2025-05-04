import AboutSection from "@/components/HomePage/AboutSection";
import BookCallSection from "@/components/HomePage/BookCallSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ProjectSection from "@/components/HomePage/ProjectSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import Head from "next/head";

export default function HomePage() {

    return (
        <>
            <Head>
                <title>Vladyslav | Home</title>
            </Head>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ServiceSection />
            <BookCallSection />
        </>
    );
}
