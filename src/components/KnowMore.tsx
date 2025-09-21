import React from "react";
import { Button } from "./ui/button";
import { typography } from "@/app/ui/fonts";

export default function KnowMoreSection() {
  return (
    <section className='w-full bg-[rgb(var(--neutral-100))]'>
      {/* Container */}
      <div className='w-full h-[236px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[7.625rem] py-6 sm:py-8 lg:py-5 flex flex-col lg:flex-row items-center justify-between'>
        {/* Heading */}
        <h2
          className={`${typography.h2} text-[rgb(var(--neutral-800))] text-center lg:text-left mb-4 lg:mb-0`}>
          Curious to Experience More?
        </h2>

        {/* Buttons */}
        <div className='flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-6 lg:gap-6 mt-4 lg:mt-0'>
          {/* Newsletter Button */}
          <Button
            className={`
               text-black
              flex justify-center items-center
              gap-2.5
              rounded-[16px]
              px-8 py-5
              w-fit
              h-fit
              ${typography.cta}
              bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] 
              transition-all duration-300 ease-in-out
            `}>
            Join the Newsletter
          </Button>
          <Button
            className={`
               text-black
              flex justify-center items-center
              gap-2.5
              rounded-[16px]
             px-8 py-5
              w-fit
              h-fit
              ${typography.cta}
              bg-gray-200 hover:bg-gray-400 
              transition-all duration-300 ease-in-out
            `}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
