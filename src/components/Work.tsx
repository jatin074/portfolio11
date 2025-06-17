"use client";

import React from 'react'
import EmblaSlider from './Slider';

export default function Work() {
    const firstImages = [
        "/images/work/work0.7.png",
        "/images/work/work0.8.png",
        "/images/work/work0.9.png",
        "/images/work/work0.91.png",
        "/images/work/work0.92.png",
        "/images/work/work0.93.png",
        "/images/work/work0.png",
        "/images/work/work1.0.png",
        "/images/work/work.png",
        "/images/work/work1.png",
        "/images/work/work6.png",
        "/images/work/work6.1.png",
        "/images/work/work2.jpg",
        "/images/work/work3.jpg",
        "/images/work/work4.jpg",
        "/images/work/work7.png"
    ];

    const secondImages = [
        "/images/work/work9.png",
        "/images/work/work10.png",
        "/images/work/work11.png",
        "/images/work/work12.png",
        "/images/work/work13.png",
        "/images/work/work14.png",
        "/images/work/work15.png",
        "/images/work/work16.png",
        "/images/work/work17.png",
        "/images/work/work18.png",
    ];
    return (
        <div className='pt-[70px] sm:py-[100px]'>
            <div className="container">
                <h3 data-text="work" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-white mb-[20px] pt-[12px] sm:pt-0 text-center reflection relative">
                    Recent <span className='text-theme'>work</span>
                </h3>
            </div>

            <section className="lg:mt-[140px] mt-[80px]">
                <EmblaSlider images={firstImages} direction="ltr" autoplayInterval={2500} />
            </section>

            <section className="lg:mt-[50px] mt-[30px]">
                <EmblaSlider images={secondImages} direction="rtl" autoplayInterval={2500} />
            </section>

        </div>
    )
}
