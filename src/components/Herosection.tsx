"use client";
import React from 'react'

export default function Herosection() {
  return (
    <div className='sm:py-[200px] pt-[120px] pb-[80px] overflow-hidden hero-section'>
      <div className="container">
        <div>
          <div className='flex flex-wrap justify-between lg:gap-[50px] gap-0 w-full relative z-10'>
            <div className='sm:pl-[50px] sm:py-[50px] pl-[0px] pt-[0px] pb-[26px]'>
              <div className='flex items-center gap-2'>
                <h1 className='sm:text-[70px] text-[52px] font-bold text-white mb-2'>Hi! I’m</h1>
                <h1 className='sm:text-[70px] text-[52px] font-bold text-white mb-2'>Jatin</h1>
                {/* <div className='ml-[10px] mt-[-100px] jay-text'>
                  <h2 className='sm:text-[70px] text-[52px] font-bold'>Jay</h2>
                  <h2 className='sm:text-[70px] text-[52px] font-bold'>Jay</h2>
                </div> */}
              </div>
              <h3 className='text-[14px] font-semibold mr-1 text-theme leading-[14px]'>Creative</h3>


              <div className='text-animation mb-[50px] mt-[8px]'>
                <h3 id="resizing-h3">
                  <span>
                    <div className="stage">
                      <div className="cubespinner">
                        <div className="face1">Website Designer</div>
                        <div className="face2">Frontend Developer</div>
                        <div className="face3">UI/UX Designer</div>
                        <div className="face4">App Designer</div>
                      </div>
                    </div>
                  </span>
                </h3>
              </div>
              <p className='text-[16px] font-normal text-white sm:mt-[70px] mt-[54px]'>&quot;Life is too short for bad UX , I can help you to look better.&quot;</p>

              <a href="mailto:jatin.ti011@gmail.com" className="button rounded-[5px] py-[8px] px-[26px] text-white text-[16px] font-medium my-[10px] w-fit">Hire Me!</a>
            </div>
            {/* <div className='mb-[1px] mt-[-70px] lg:w-auto w-full flex lg:justify-end justify-center bannerSection'>
              <div className='bannerbottomdesign'>
                <div className='bannerContainer'>
                  <div className='bannerContent'>
                    <div className='bannerInnerImg'>
                    </div>
                    <div className='bannerInnerImg2'>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
