"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
       <div className="services-section">
         <div className="container">
            <div className="md:p-[60px] sm:p-[30px] px:[16px] py-[24px]  sm:rounded-[20px] rounded-[12px] relative z-10 overflow-hidden">
                <h3 data-text="Services" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold sm:text-theme text-white mt-[10px] text-center reflection relative pt-[12px] sm:pt-0">
                Services <span className="text-white ml-2">I Provide</span> 
                </h3>
                <div className="sm:mt-[100px] mt-[50px] flex items-center flex-wrap lg:flex-nowrap justify-center sm:!gap-[80px] !gap-[40px]">
                    {/* UI/UX Design */}
                    <GlowingCard
                        index={0}
                        hoveredCard={hoveredCard}
                        setHoveredCard={setHoveredCard}
                        title="Ui/Ux Design"
                        description="Crafting intuitive and engaging user interfaces for a seamless experience."
                        imgSrc="/images/services/uiux.png"
                        glowColors={["rgba(59, 130, 246, 0.3)", "rgba(99, 102, 241, 0.3)"]}
                    />

                    {/* Web & App Design */}
                    <GlowingCard
                        index={1}
                        hoveredCard={hoveredCard}
                        setHoveredCard={setHoveredCard}
                        title="Web & App Design"
                        description="Creating modern, visually stunning websites and apps tailored to your brand."
                        imgSrc="/images/services/web-design.png"
                        glowColors={["#B83CFF4D", "rgba(217, 70, 239, 0.3)"]}
                    />

                    {/* Web Development */}
                    <GlowingCard
                        index={2}
                        hoveredCard={hoveredCard}
                        setHoveredCard={setHoveredCard}
                        title="Web Development"
                        description="Building clean, responsive code for high-performance websites."
                        imgSrc="/images/services/web-dev.png"
                        glowColors={["rgba(249, 115, 22, 0.3)", "rgba(245, 158, 11, 0.3)"]}
                    />
                </div>
            </div>
        </div>
       </div>
    );
}

// Reusable Card with Gradient Glow Effect
const GlowingCard = ({
    index,
    hoveredCard,
    setHoveredCard,
    title,
    description,
    imgSrc,
    glowColors,
}: {
    index: number;
    hoveredCard: number | null;
    setHoveredCard: (index: number | null) => void;
    title: string;
    description: string;
    imgSrc: string;
    glowColors: string[];
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const glowX = useTransform(x, (val) => `${val - 175}px`);
    const glowY = useTransform(y, (val) => `${val - 175}px`);

    return (
        <motion.div
            className="relative rounded-[12px] py-[24px] px-[30px] max-w-[300px] w-full sm:min-h-[300px] flex flex-col items-center justify-center gap-[8px] bg-[#00000047] overflow-hidden card-content"
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - left);
                y.set(e.clientY - top);
                setHoveredCard(index);
            }}
            onMouseLeave={() => setHoveredCard(null)}
        >
            {/* Gradient Glow Effect */}
            {hoveredCard === index && (
                <motion.div
                    className="absolute w-[350px] h-[350px] rounded-full blur-[100px] bg-[#1a1a1a]"
                    style={{
                        background: `radial-gradient(circle, ${glowColors[0]} 30%, ${glowColors[1]} 70%)`,
                        top: glowY,
                        left: glowX,
                    }}
                />
            )}

            <Image src={imgSrc} alt="icon img" width={50} height={50} />
            <h4 className="text-white font-semibold sm:text-[24px] text-[20px] text-center sm:mt-[20px]">
                {title}
            </h4>
            <h6 className="text-[16px] font-normal text-[#919EAB] text-center">
                {description}
            </h6>
        </motion.div>
    );
};




// import React from 'react'
// import Image from 'next/image'

// export default function Services() {
//     return (
//         <div className='container'>
//             <div className='p-[60px] top-btm-border'>
//                 <h3 className='text-[48px] font-semibold text-gradient-btm mt-[40px]'>Services I Provide</h3>
//                 <div className='mt-[110px] flex items-center justify-center gap-[80px]'>
//                     <div className='card-content border border-white rounded-[16px] py-[24px] px-[30px] max-w-[300px] w-[100%] min-h-[300px] flex flex-col items-center justify-center gap-[8px] bg-[#00000047]'>
//                         <Image src='/images/services/uiux.png' alt='icon img' width={50} height={50} />
//                         <h4 className='text-gradient-btm font-semibold text-[24px] text-center mt-[20px]'>Ui/Ux Design</h4>
//                         <h6 className='text-[16px] font-normal text-white text-center'>Crafting intuitive and engaging user interfaces for a seamless experience.</h6>
//                     </div>
//                     <div className='card-content border border-white rounded-[16px] py-[24px] px-[30px] max-w-[300px] w-[100%] min-h-[300px] flex flex-col items-center justify-center gap-[8px] bg-[#00000047]'>
//                         <Image src='/images/services/web-design.png' alt='icon img' width={50} height={50} />
//                         <h4 className='text-gradient-btm font-semibold text-[24px] text-center mt-[20px]'>Web & App Design</h4>
//                         <h6 className='text-[16px] font-normal text-white text-center'> Creating modern, visually stunning websites and apps tailored to your brand.</h6>
//                     </div>
//                     <div className='card-content border border-white rounded-[16px] py-[24px] px-[30px] max-w-[300px] w-[100%] min-h-[300px] flex flex-col items-center justify-center gap-[8px] bg-[#00000047]'>
//                         <Image src='/images/services/web-dev.png' alt='icon img' width={50} height={50} />
//                         <h4 className='text-gradient-btm font-semibold text-[24px] text-center mt-[20px]'>Web Development</h4>
//                         <h6 className='text-[16px] font-normal text-white text-center'>Building clean, responsive code for high-performance websites.</h6>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
