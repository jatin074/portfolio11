"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Tech() {
    // Motion values
    const xValue = useMotionValue(0);
    const yValue = useMotionValue(0);

    // Smooth animations
    const xFast = useSpring(xValue, { stiffness: 90, damping: 70 });
    const yFast = useSpring(yValue, { stiffness: 100, damping: 80 });

    const xSlow = useSpring(xValue, { stiffness: 50, damping: 30 });
    const ySlow = useSpring(yValue, { stiffness: 50, damping: 30 });

    // Mouse move event
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const xOffset = e.clientX - window.innerWidth / 2;
        const yOffset = e.clientY - window.innerHeight / 2;

        xValue.set(-xOffset * 0.05);
        yValue.set(-yOffset * 0.1);
    };

    return (
        <div
            className="relative w-full h-[100vh] overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                {/* Top Row (Fast) */}
                <motion.div
                    className="flex items-center justify-between w-[60%] mt-[-200px] absolute"
                    style={{ x: xFast, y: yFast }}
                >
                    <Image className="mt-[-100px]" src="/images/technologies/icon7.svg" alt="img" width={40} height={40} />
                    <Image className="mt-[40px]" src="/images/technologies/icon8.svg" alt="img" width={50} height={50} />
                    <Image className="mt-[-180px]" src="/images/technologies/icon9.svg" alt="img" width={50} height={50} />
                    <Image className="mt-[0px]" src="/images/technologies/icon10.svg" alt="img" width={50} height={50} />
                    <Image className="mt-[-150px]" src="/images/technologies/icon11.svg" alt="img" width={40} height={40} />
                </motion.div>

                {/* Bottom Row (Slow) */}
                <motion.div
                    className="flex items-center justify-between w-[60%] mt-[100px] absolute"
                    style={{ x: xSlow, y: ySlow }}
                >
                    <Image className="mb-[-50px]" src="/images/technologies/icon1.svg" alt="img" width={60} height={60} />
                    <Image className="mb-[-10px]" src="/images/technologies/icon2.svg" alt="img" width={40} height={40} />
                    <Image className="mb-[-70px]" src="/images/technologies/icon3.svg" alt="img" width={60} height={60} />
                    <Image className="mb-[-20px]" src="/images/technologies/icon4.svg" alt="img" width={40} height={40} />
                    <Image className="mb-[-50px]" src="/images/technologies/icon5.svg" alt="img" width={60} height={60} />
                    <Image className="mb-[-70px]" src="/images/technologies/icon6.svg" alt="img" width={60} height={60} />
                </motion.div>
            </div>
        </div>
    );
}

