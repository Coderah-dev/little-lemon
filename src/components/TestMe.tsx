import React from "react";
import bgimg from "../../public/LittleLemonBg.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { typography } from "@/app/ui/fonts";

export default function Test1() {
  return (
    <div className='relative flex flex-col justify-end items-center w-full min-h-screen pb-24 bg-[rgb(var(--primary))]'>
      {/* Background image */}
      <div className='absolute w-full h-full'>
        <Image
          src={bgimg}
          alt='good'
          fill
          priority
          className='object-cover'
        />
      </div>
      <div className='relative z-20 flex items-center justify-center min-h-screen px-2.5 py-2.5'>
        <div className='flex flex-col items-center justify-between bg-[rgba(var(--primary),0.8)] h-auto w-auto py-3 px-1.5 rounded-sm lg:h-[41.188rem] lg:w-[52.125rem] lg:px-[7.625rem] lg:py-5 lg:rounded-2xl'>
          <header className='mb-5'>
            <h1
              className={`text-center mb-2.5 lg:mb-14 ${typography.h1} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
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
            className='bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] text-accent-foreground
            w-full sm:w-auto h-auto lg:py-3 lg:px-4 lg:w-[36.875rem] lg:h-20 lg:rounded-2xl
            shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]'>
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
}
