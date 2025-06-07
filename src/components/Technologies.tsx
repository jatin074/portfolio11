"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Technologies() {
    const xValue = useMotionValue(0);
    const yValue = useMotionValue(0);

    const xFast = useSpring(xValue, { stiffness: 200, damping: 120 });
    const yFast = useSpring(yValue, { stiffness: 200, damping: 120 });

    const xSlow = useSpring(xValue, { stiffness: 30, damping: 20 });
    const ySlow = useSpring(yValue, { stiffness: 30, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const xOffset = e.clientX - window.innerWidth / 2;
        const yOffset = e.clientY - window.innerHeight / 2;

        xValue.set(-xOffset * 0.07);
        yValue.set(-yOffset * 0.1);
    };
    return (
        <div className="relative z-10 overflow-hidden pt-[50px]">
            <div className="container">
                <h3 data-text="Technologies" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-white text-center reflection relative pt-[12px] sm:pt-0">
                Tools & <span className="text-theme">Technologies</span>
                </h3>
            </div>


            <div
                className="relative w-full overflow-hidden lg:py-[200px] md:py-[120px] sm:py-[80px] py-[40px]"
                onMouseMove={handleMouseMove}
            >
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    {/* Top Row (Fast) */}
                    <motion.div
                        className="flex items-center justify-between w-[60%] mt-[-200px] absolute sm:opacity-100 opacity-50"
                        style={{ x: xFast, y: yFast }}
                    >
                        <Image className="sm:mt-[-100px] mt-[-50px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" src="/images/technologies/icon7.svg" alt="img" width={50} height={50} />
                        <Image className="sm:mt-[-20px] mt-[-10px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" src="/images/technologies/icon5.svg" alt="img" width={50} height={50} />
                        <Image className="sm:mt-[-180px] mt-[-70px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" src="/images/technologies/icon4.svg" alt="img" width={50} height={50} />
                        <Image className="sm:mt-[0px] mt-[-50px] sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]" src="/images/technologies/icon10.svg" alt="img" width={70} height={70} />
                        <Image className="sm:mt-[-150px] mt-[-70px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" src="/images/technologies/icon8.svg" alt="img" width={50} height={50} />
                    </motion.div>

                    {/* Bottom Row (Slow) */}
                    <motion.div
                        className="flex items-center justify-between w-[60%] mt-[200px] absolute sm:opacity-100 opacity-50"
                        style={{ x: xSlow, y: ySlow }}
                    >
                        <Image className="mb-[-50px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" src="/images/technologies/icon1.svg" alt="img" width={60} height={60} />
                        <Image className="mb-[-10px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" src="/images/technologies/icon2.svg" alt="img" width={50} height={60} />
                        <Image className="mb-[-70px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" src="/images/technologies/icon3.svg" alt="img" width={60} height={60} />
                        <Image className="mb-[-50px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" src="/images/technologies/icon11.svg" alt="img" width={60} height={60} />
                        <Image className="mb-[-70px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" src="/images/technologies/icon6.svg" alt="img" width={60} height={60} />
                    </motion.div>

                    <div className=" relative z-20">
                       <div className="container">
                       <p className='sm:text-[18px] text-[16px] font-light sm:leading-[32px] leading-[26px] text-center mx-auto text-white lg:w-[70%] w-[100%]'>I have expertise in a wide range of tools and technologies, including Figma, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, jQuery, WordPress, Shopify, and various React npm packages. With a strong foundation in frontend development and web design.</p>
                       <p className='sm:text-[18px] text-[16px] font-light sm:leading-[32px] leading-[26px] text-center mx-auto text-white lg:w-[70%] w-[100%]'>My goal is to build visually stunning and high-performing digital experiences that seamlessly blend creativity with functionality. I focus on UI/UX, smooth animations, and performance optimization to deliver engaging and user-friendly solutions across all devices.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
