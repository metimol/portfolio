import BookCallSection from "@/components/HomePage/BookCallSection";
import ProjectHeroSection from "@/components/ProjectPage/ProjectHeroSection";
import ProjectsSection from "@/components/ProjectPage/ProjectsSection";
import Head from "next/head";

export default function ProjectPage() {

    return (
        <>
            <Head>
                <title>Kael | Projects</title>
            </Head>
            <ProjectHeroSection />
            <ProjectsSection />
            <BookCallSection />
        </>
    );
}