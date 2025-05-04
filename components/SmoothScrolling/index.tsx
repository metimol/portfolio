"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

// Define props type for children
interface SmoothScrollingProps {
    children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
    return (
        <ReactLenis root options={{ lerp: 0.15, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}
