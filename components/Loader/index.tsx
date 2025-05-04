import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "@/libs/gsap";

export default function Loader() {
    const percentageRef = useRef<HTMLSpanElement>(null);
    const router = useRouter();

    useEffect(() => {
        const obj = { count: 0 };

        const tl = gsap.timeline({
            defaults: { ease: "power1.out" },
            onUpdate: () => {
                if (percentageRef.current) {
                    percentageRef.current.textContent = `${Math.floor(obj.count)}`;
                }
            },
            onComplete: () => {
                tl.to(".counter span", {
                    y: "-110%",
                    duration: 1.2,
                    ease: "power4.inOut",
                })
                    .to(".intro", {
                        y: "-100%",
                        duration: 1.5,
                        ease: "power4.inOut",
                        onComplete: () => {
                            document.querySelector(".intro")?.classList.add("hidden");
                        },
                    }, "-=0.5")
            },
        });

        tl.to(obj, {
            count: 100,
            duration: 6,
        });

        const handlePageLoad = () => {
            if (obj.count === 100) {
                tl.play();
            }
        };

        window.addEventListener("load", handlePageLoad);

        return () => {
            window.removeEventListener("load", handlePageLoad);
            tl.kill();
            gsap.killTweensOf(".intro");
        };
    }, [router.events]);

    return (
        <section className="intro">
            <div className="counter">
                <span ref={percentageRef}>0</span>
            </div>
        </section>
    );
}