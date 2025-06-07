
import React from 'react'

export default function About() {
    return (
        <div className='sm:pt-[70px] pt-[30px] sm:pb-[50px] relative z-10'>
            <div className="container">
                <div>
                    <h3 data-text="About" className="md:text-[48px] text-[38px] font-semibold text-white mb-[40px] text-center reflection relative bg-[url(/images/outline.svg)] bg-no-repeat bg-contain bg-center">
                        About <span className='text-theme'>Me</span>
                    </h3>
                    <p className='sm:text-[18px] text-[16px] font-light sm:leading-[32px] leading-[24px] text-white lg:w-[70%] w-[100%] mx-auto text-justify'>I&apos;m a creative Web Designer and Frontend Developer with a strong passion for design. I start by bringing ideas to life in Figma, crafting web designs that are both visually stunning and user-friendly. From there, I transform these designs into clean, responsive code, ensuring seamless performance across all devices. I specialize in implementing creative scroll animations and interactive elements that enhance the user experience. My goal is to build websites that are not only beautiful but also intuitive and engaging. Let&apos;s bring your vision to life!</p>
                </div>
            </div>
        </div>
    )
}
