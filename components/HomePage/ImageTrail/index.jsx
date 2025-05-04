import React, { useEffect, useRef } from 'react';
import styles from './ImageTrail.module.scss';
import { getAssetPath } from '@/utils/assetPath';

const lerp = (a, b, n) => (1 - n) * a + n * b;
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

export default function ImageTrail() {
    const trailRef = useRef(null);
    const cursor = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const getCursorPos = (ev) => {
            cursor.current = { x: ev.clientX, y: ev.clientY };
        };

        const handleResize = () => {
            winsize.current = { width: window.innerWidth, height: window.innerHeight };
        };

        const winsize = { width: window.innerWidth, height: window.innerHeight };
        window.addEventListener("mousemove", getCursorPos);
        window.addEventListener("resize", handleResize);

        class ImageTrailEffect {
            constructor(el) {
                this.DOM = { el };
                this.totalTrailElements = 9;
                // Initialize imgTransforms as a plain array
                this.imgTransforms = Array.from({ length: this.totalTrailElements }, () => ({ x: 0, y: 0, rx: 0, ry: 0, rz: 0 }));
                this.layout();
                requestAnimationFrame(() => this.render());
            }

            layout() {
                const bgImage = /(?:\(['"]?)(.*?)(?:['"]?\))/.exec(this.DOM.el.style.backgroundImage)[1];
                this.DOM.el.style.backgroundImage = 'none';
                this.DOM.el.innerHTML = Array.from({ length: this.totalTrailElements }, (_, i) => {
                    const opacityVal = i === this.totalTrailElements - 1 ? 1 : (i + 1) / this.totalTrailElements;
                    return `<img class="trail__img" src="${bgImage}" style="opacity: ${opacityVal}"/>`;
                }).join('');
                this.DOM.trailElems = this.DOM.el.querySelectorAll('.trail__img');
            }

            render() {
                this.imgTransforms.forEach((transform, i) => {
                    const amt = 0.02 * i + 0.05;
                    transform.x = lerp(transform.x, map(cursor.current.x, 0, winsize.width, -200, 200), amt);
                    transform.y = lerp(transform.y, map(cursor.current.y, 0, winsize.height, -70, 70), amt);
                    transform.rz = lerp(transform.rz, map(cursor.current.x, 0, winsize.width, -10, 10), amt);
                    this.DOM.trailElems[i].style.transform = `translate(${transform.x}px, ${transform.y}px) rotateZ(${transform.rz}deg)`;
                });
                requestAnimationFrame(() => this.render());
            }
        }

        new ImageTrailEffect(trailRef.current);

        return () => {
            window.removeEventListener("mousemove", getCursorPos);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className={styles.content}>
                <div 
                    ref={trailRef} 
                    className={styles.trail} 
                    style={{ backgroundImage: `url(${getAssetPath('images/heroimg2.png')})` }} 
                />
            </div>
        </>
    );
}