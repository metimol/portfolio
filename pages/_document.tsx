import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Script id="set-base-path" strategy="beforeInteractive">
                    {`
                    // Set the CSS variable --base-path depending on the environment
                    (function() {
                        const isProduction = window.location.hostname === "metimol.github.io";
                        document.documentElement.style.setProperty('--base-path', isProduction ? '/portfolio' : '');
                    })();
                    `}
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html >
    );
}