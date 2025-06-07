"use client";

import { useState, useEffect } from "react";

const tabs = [
    { id: "home", label: "Home", link: "home" },
    { id: "services", label: "Services", link: "services" },
    { id: "about", label: "About", link: "about" },
    { id: "work", label: "Work", link: "work" },
    { id: "contact", label: "Contact", link: "contact" }
];

export default function Header() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number, sectionId: string) => {
        setActiveTab(index);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = tabs.findIndex(tab => tab.link === entry.target.id);
                    if (index !== -1) {
                        setActiveTab(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = tabs.map(tab => document.getElementById(tab.link));

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveTab(0); 
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="header-content z-50">
            <div className="sm:w-full max-w-[560px] w-[100%] mx-auto p-[8px] rounded-full header">
                <div className="relative flex justify-between items-center">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(index, tab.link)}
                            className={`relative z-50 font-poppins w-[130px] sm:text-[16px] text-[12px] text-center py-[8px] font-semibold cursor-pointer 
                            ${activeTab === index ? "text-black" : "header-button"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    <div
                        className="absolute top-0 h-full bg-white rounded-full header-button-cap transition-all duration-300"
                        style={{
                            width: `${100 / tabs.length}%`,
                            left: `${(100 / tabs.length) * activeTab}%`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}




// "use client";

// import { useState } from "react";

// const tabs = [
//     { id: "home", label: "Home", link: "home" },
//     { id: "services", label: "Services", link: "services" },
//     { id: "about", label: "About", link: "about" },
//     { id: "work", label: "Work", link: "work" },
//     { id: "contact", label: "Contact", link: "contact" }
// ];

// export default function Header() {
//     const [activeTab, setActiveTab] = useState(0);

//     const handleTabClick = (index: number, sectionId: string) => {
//         setActiveTab(index);

//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" })
//         }
//     };

//     return (
//         <div className="header-content">
//             <div className="w-full max-w-[560px] mx-auto p-[8px] rounded-full bg-black header">
//                 <div className="relative flex justify-between items-center">
//                     {tabs.map((tab, index) => (
//                         <button
//                             key={tab.id}
//                             onClick={() => handleTabClick(index, tab.link)}
//                             className={`relative z-50 font-poppins w-[130px] text-[16px] text-center py-[10px] font-semibold cursor-pointer
//                             ${activeTab === index
//                                     ? "text-black"
//                                     : "header-button"
//                                 }`}
//                         >
//                             {tab.label}
//                         </button>
//                     ))}
//                     <div
//                         className="absolute top-0 h-full bg-[#B771E5] rounded-full header-button-cap"
//                         style={{
//                             width: `${100 / tabs.length}%`,
//                             left: `${(100 / tabs.length) * activeTab}%`,
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
