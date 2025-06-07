'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Experience() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const renderCard = (
        type: 'education' | 'work',
        title: string,
        icon: string,
        items: { title: string; subtitle: string; year: string }[],
        index: number
    ) => (
        <div
            className='experience-card lg:max-w-[610px] sm:py-[30px] py-[20px] relative transition-all duration-500 rounded-2xl overflow-hidden'
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow Background */}
            <div
                className='absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500'
                style={{
                    background:
                        hoverIndex === index
                            ? `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(162, 0, 255, 0.4), transparent 80%)`
                            : 'transparent',
                    opacity: hoverIndex === index ? 1 : 0,
                    zIndex: 1,
                }}
            />
            {/* Outer Glow */}
            <div
                className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] rounded-2xl pointer-events-none transition-opacity duration-500"
                style={{
                    boxShadow:
                        hoverIndex === index
                            ? `0px 0px 40px 10px rgba(161, 0, 253, 0.6)`
                            : 'none',
                    opacity: hoverIndex === index ? 1 : 0,
                    zIndex: 0,
                }}
            />

            <div className='relative z-10'>
                <div className='flex items-center xl:gap-[65px] md:gap-[40px] sm:gap-[30px] gap-[12px] md:px-[50px] sm:px-[30px] px-[12px] pb-[10px]'>
                    <Image src={icon} width={110} height={110} alt="icon" className='sm:h-[80px] h-[40px] sm:w-[110px] w-[60px]' />
                    <h3 className='font-semibold text-white md:text-[30px] sm:text-[24px] text-[20px]'>{title}</h3>
                </div>
                <hr className='w-[90%] h-[1px] bg-white opacity-[0.3] mx-auto' />
                <div className='sm:mt-[30px] mt-[10px]'>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className='py-[10px] flex items-center justify-between sm:px-[30px] px-[16px] gap-4'
                        >
                            <div>
                                <h3 className='sm:text-[18px] text-[16px] font-normal text-white'>{item.title}</h3>
                                <p className='sm:text-[16px] text-[14px] font-medium text-theme'>{item.subtitle}</p>
                            </div>
                            <p className='sm:text-[16px] text-[14px] font-medium text-white rounded-lg sm:min-w-[107px] min-w-[84px]'>{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className='relative z-10 overflow-hidden'>
            <div className='container'>
                <div className='pt-[70px] sm:px-[70px] rounded-[20px]  border-theme'>
                <h3 data-text="Experience" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-[#ffffff] text-center reflection relative sm:mb-[30px]">
                    My Education & <span className='text-theme'>Work Experience</span>
                </h3>
                <Image src="/images/experience/object2.svg" width={170} height={170} className='before-effect' alt="icon" />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[40px] relative sm:py-[100px] pt-[70px] w-full experience-content'>
                    {renderCard(
                        'education',
                        'My Education',
                        '/images/experience/cap.svg',
                        [
                            { title: 'Apollo Institute of Engineering', subtitle: 'Bachelor’s Degree', year: '2018 - 2022' },
                            { title: 'Ui/Ux', subtitle: 'Certified ui/ux designer', year: '2022 - 2023' },
                        ],
                        0
                    )}
                    {renderCard(
                        'work',
                        'Work Experience',
                        '/images/experience/office.svg',
                        [
                            { title: 'CloseDigit LLP', subtitle: 'Frontend Engineer', year: '2022 - 2024' },
                            { title: 'Self-Employed', subtitle: 'Web Designer & Developer', year: '2024 -' },
                        ],
                        1
                    )}
                </div>
                </div>
            </div>
        </div>
    );
}