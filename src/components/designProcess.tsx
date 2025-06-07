'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


export default function DesignProcess() {
    const processImgRef1 = useRef(null);
    const processImgRef2 = useRef(null);
    const processImgRef3 = useRef(null);
    const processImgRef4 = useRef(null);

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import('scrollmagic/scrollmagic/uncompressed/ScrollMagic');

            const controller = new ScrollMagic.Controller();

            const scenes = [
                {
                    triggerElement: processImgRef1.current,
                    ref: processImgRef1,
                },
                {
                    triggerElement: processImgRef2.current,
                    ref: processImgRef2,
                },
                {
                    triggerElement: processImgRef3.current,
                    ref: processImgRef3,
                },
                {
                    triggerElement: processImgRef4.current,
                    ref: processImgRef4,
                },
            ];

            scenes.forEach(({ triggerElement, ref }) => {
                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.7,
                })
                    .setClassToggle(ref.current, 'scaleUp')
                    // .addIndicators()
                    .addTo(controller);

                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.3,
                })
                    .setClassToggle(ref.current, 'removeScale')
                    // .addIndicators()
                    .addTo(controller);
            });

            return () => {
                controller.destroy(true);
            };
        };

        initializeScrollMagic();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='processSection lg:px-[50px] relative z-10 md:pt-[50px]'>
                    <div>
                        <div className="d-flex flex-column justify-content-between mb-[70px]">
                            <h3 data-text="Process" className="md:text-[48px] text-[38px] font-semibold text-center mt-[40px] text-theme w-full reflection relative">
                                Design <span className='text-white'>Process</span>
                            </h3>
                        </div>
                        <div className='processScrollSection'>
                            <div className='subProcessPart'>
                                <h3 className='text-[32px] font-medium text-white'>01.</h3>
                                <div ref={processImgRef1} className='subProcessImg'>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/processImg1.svg"
                                        alt="Animated"
                                        className='sm:block hidden'
                                    />
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/img1.svg"
                                        alt="Animated"
                                        className='sm:hidden block'
                                    />
                                </div>
                                <h3 className='text-[32px] font-medium text-white'>Research</h3>
                                <h6 className='text-[18px] font-normal text-[#919EAB]'>Prioritize user needs, study competitors, and implement best practices to surpass expectations.</h6>
                            </div>

                            <div className='subProcessPart'>
                                <h3 className='text-[32px] font-medium text-white'>02.</h3>
                                <div ref={processImgRef2} className='subProcessImg'>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/processImg2.svg"
                                        alt="Animated"
                                        className='sm:block hidden'
                                    />
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/img2.svg"
                                        alt="Animated"
                                        className='sm:hidden block'
                                    />
                                </div>
                                <h3 className='text-[32px] font-medium text-white'>Design</h3>
                                <h6 className='text-[18px] font-normal text-[#919EAB]'>crafting the layout for maximum efficiency, intuitive navigation, and smooth interaction, focusing on aesthetics and user experience.</h6>
                            </div>

                            <div className='subProcessPart'>
                                <h3 className='text-[32px] font-medium text-white'>03.</h3>
                                <div ref={processImgRef3} className='subProcessImg'>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/processImg3.svg"
                                        alt="Animated"
                                        className='sm:block hidden'
                                    />
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/img3.svg"
                                        alt="Animated"
                                        className='sm:hidden block'
                                    />
                                </div>
                                <h3 className='text-[32px] font-medium text-white'>Develop</h3>
                                <h6 className='text-[18px] font-normal text-[#919EAB]'>I transform designs into clean, responsive code with smooth animations and seamless performance.</h6>
                            </div>

                            <div className='subProcessPart'>
                                <h3 className='text-[32px] font-medium text-white'>04.</h3>
                                <div ref={processImgRef4} className='subProcessImg'>
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/processImg4.svg"
                                        alt="Animated"
                                        className='sm:block hidden'
                                    />
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/images/process/img4.svg"
                                        alt="Animated"
                                        className='sm:hidden block'
                                    />
                                </div>
                                <h3 className='text-[32px] font-medium text-white'>Analysis</h3>
                                <h6 className='text-[18px] font-normal text-[#919EAB]'>Once the website was completed, we thoroughly tested and optimized it to resolve major user issues.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/images/bear-bg.png" alt="img" width={1440} height={400} layout='responsive' className='lg:mt-[-500px] md:mt-[-300px] sm:mt-[-200px] mt-[-100px]' />
        </div>
    );
}



