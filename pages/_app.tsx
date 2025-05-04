import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SmoothScrolling from "@/components/SmoothScrolling";
import "@/styles/globals.scss";  // Ensure this is your global SCSS import
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "@/components/Loader";
import { getAssetPath } from "@/utils/assetPath";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const scrollPositions = useRef<{ [key: string]: number }>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);

            const timeout = setTimeout(() => {
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 1000);

            return () => clearTimeout(timeout);
        }, 2000);
    }, []);

    return (
        <>
            <Head>
                <title>Kael — Crafting digital products with a focus on UI design and development</title>
                <meta name="description" content="Focused on crafting memorable digital experiences through ui design and creative development." />
                <meta name="author" content="Kael" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="UI Design, Web Developer, Digital Products, Creative Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href={getAssetPath('images/favicon.png')} />
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
                        {isLoading ? <Loader /> : (
                            <>
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
                            </>
                        )}
                    </SmoothScrolling>
                </motion.div>
            </AnimatePresence>
        </>
    );
}