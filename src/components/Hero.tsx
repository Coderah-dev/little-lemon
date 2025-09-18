import React from "react";
import bgimg from "../../public/LittleLemonBg.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { typography } from "@/app/ui/fonts";

export default function Test1() {
  return (
    <div className='relative flex flex-col justify-center items-center w-full min-h-screen pt-8 md:pt-12 lg:pt-20 pb-14 md:pb-16 lg:pb-24 bg-[rgb(var(--primary))]'>
      {/* Background image */}
      <div className='absolute w-full h-full'>
        <Image
          src={bgimg}
          alt='background'
          fill
          priority // 👈 critical for LCP
          placeholder='blur' // 👈 avoids white flash
          sizes='100vw' // 👈 tells browser it spans full viewport
          className='object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-7rem),rgba(0,0,0,0)_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_calc(100%-2rem),rgba(0,0,0,0)_100%)]'
        />
      </div>

      <div className='relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-[7.625rem] py-6 sm:py-8 lg:py-5'>
        <div
          className='flex flex-col items-center justify-center bg-[rgba(var(--primary),0.8)] h-auto w-full sm:w-auto py-6 sm:py-8 px-4 sm:px-6 lg:h-[41.188rem] lg:w-[52.125rem] lg:px-[7.625rem] lg:py-5 rounded-2xl
                    space-y-4 sm:space-y-6 lg:space-y-10
                    '>
          {" "}
          {/* Mobile/Tablet rounded & spacing only */}
          <header className='space-y-3 sm:space-y-5 lg:space-y-10'>
            <h1
              className={`text-center ${typography.h1} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              Where Freshness Meets Flavor
            </h1>
            <h2
              className={`${typography.h2} text-center text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              Authentic Mediterranean dishes, made with love and locally sourced
              ingredients.
            </h2>
          </header>
          <p
            className={`${typography.body} text-center text-primary-foreground sm:mb-2.5 drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
            At Little Lemon, we believe good food brings people together. Our
            chefs craft each dish using fresh seasonal produce, balancing
            tradition with a modern twist. Whether it's a family dinner, a quick
            lunch, or a night out with friends, we're here to make every meal
            memorable.
          </p>
          <Button
            className={`
    bg-[#F4CE14] text-black
    flex justify-center items-center
    gap-2.5
    rounded-[16px]
    px-4 py-3
    w-full sm:w-[400px] md:w-[500px] lg:w-[590px]
    h-[60px] sm:h-[70px] md:h-[80px] lg:h-[87px]
    ${typography.cta}
    bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] 
    shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-in-out
  `}>
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
}
