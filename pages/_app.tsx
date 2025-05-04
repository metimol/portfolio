import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SmoothScrolling from "@/components/SmoothScrolling";
import "@/styles/globals.scss";  // Ensure this is your global SCSS import
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const scrollPositions = useRef<{ [key: string]: number }>({});

    // Scroll position management
    useEffect(() => {
        const saveScrollPosition = (url: string) => {
            scrollPositions.current[url] = window.scrollY;
        };

        const restoreScrollPosition = (url: string) => {
            const savedPosition = scrollPositions.current[url] || 0;
            window.scrollTo(0, savedPosition);
        };

        router.events.on("routeChangeStart", saveScrollPosition);
        router.events.on("routeChangeComplete", restoreScrollPosition);

        return () => {
            router.events.off("routeChangeStart", saveScrollPosition);
            router.events.off("routeChangeComplete", restoreScrollPosition);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
                <meta
                    name="description"
                    content="Experienced web developer and designer specializing in creating modern, responsive websites with clean, efficient code and stunning visuals. Let's build something amazing together."
                />
                <meta name="author" content="Zaid khan" />
                <meta property="og:title" content="Kael Donovan | Web Developer & Designer Portfolio" />
                <meta
                    property="og:description"
                    content="Discover my web development and design portfolio. I craft beautiful, responsive websites that bring ideas to life."
                />
                <meta property="og:url" content="https://kael-donovan.vercel.app/" />
                <meta property="og:type" content="website" />
            </Head>

            <Loader />
            <AnimatePresence mode="wait">
                <motion.div key={router.asPath}>
                    {/* Slide-in animation */}
                    <motion.div
                        className="slide-in"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        onAnimationComplete={() => window.scrollTo(0, 0)}
                    />

                    {/* Slide-out animation */}
                    <motion.div
                        className="slide-out"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <SmoothScrolling>
                        <Nav />
                        <motion.main
                            key="main-content"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}  // Fade out the main content on exit
                            transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Component {...pageProps} />
                        </motion.main>
                        <Footer />
                    </SmoothScrolling>
                </motion.div>
            </AnimatePresence>
        </>
    );
}