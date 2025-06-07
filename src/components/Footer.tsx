import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='relative footer'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className='sm:col-span-5 col-span-12'>
                        <h3 className="text-[20px] font-medium text-white">Thanks for visiting! <br />Let’s build something amazing together!</h3>
                        {/* <h3 className="sm:text-[62px] text-[40px] font-normal text-theme font-wild_card">Jay</h3> */}
                    </div>
                    <div className='lg:col-span-2 sm:col-span-3 col-span-6'>
                        <h6 className='text-white text-[18px] sm:mb-[20px] mb-[10px] mt-[30px] sm:mt-0 font-medium'>Navigation</h6>
                        <ul>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href='#home' className='text-white font-normal sm:text-[16px] text-[14px]'>Home</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href='#services' className='text-white font-normal sm:text-[16px] text-[14px]'>Services</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href='#about' className='text-white font-normal sm:text-[16px] text-[14px]'>About</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href='#work' className='text-white font-normal sm:text-[16px] text-[14px]'>Work</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href='#contact' className='text-white font-normal sm:text-[16px] text-[14px]'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-3 col-span-6'>
                        <h6 className='text-white text-[18px] sm:mb-[20px] mb-[10px] mt-[30px] sm:mt-0 font-medium'>Services</h6>
                        <ul>
                            <li className=' lg:mb-[14px] mb-[6px]'>
                                <div className='text-white font-normal sm:text-[16px] text-[14px]'>Website Design</div>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <div className='text-white font-normal sm:text-[16px] text-[14px]'>Web Development</div>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <div className='text-white font-normal sm:text-[16px] text-[14px]'>UI/UX Designer</div>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <div className='text-white font-normal sm:text-[16px] text-[14px]'>App Designer</div>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <div className='text-white font-normal sm:text-[16px] text-[14px]'>Wordpress Development</div>
                            </li>
                        </ul>
                    </div>
                    <div className='sm:col-span-3 col-span-12'>
                        <h6 className='text-white text-[18px] sm:mb-[20px] mb-[10px] mt-[30px] sm:mt-0 font-medium'>Contact</h6>
                        <ul>
                            <li className=' lg:mb-[14px] mb-[6px]'>
                                <a href="tel:+918401111886" className='text-white font-normal sm:text-[16px] text-[14px] flex items-center gap-4'><div className='sm:text-[16px] text-[14px] text-white'><FaPhoneAlt /></div> +91 8401111886</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <a href="mailto:jatin.ti011@gmail.com" className='text-white font-normal sm:text-[16px] text-[14px] flex items-center gap-4'><div className='text-[18px] text-white'><MdEmail /></div>jatin.ti011@gmail.com</a>
                            </li>
                            <li className='lg:mb-[14px] mb-[6px]'>
                                <div  className='text-white font-normal sm:text-[16px] text-[14px] flex items-center gap-4'><div className='text-[18px] text-white'><FaLocationDot /></div>Ahmedabad ,Gujarat India</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <p className='text-center text-[14px] font-normal text-[#ffffff] sm:mt-[70px] mt-[30px] sm:py-[20px] py-[16px]'>©2024 All rights reserved.</p>
        </div>
    )
}
