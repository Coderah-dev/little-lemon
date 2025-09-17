"use client";

import Image from "next/image";
import aboutImg from "../../public/restaurant-chef.png";
import { typography } from "@/app/ui/fonts";

export default function AboutTheRestaurant() {
  return (
    <section className='w-full min-h-screen bg-background pb-14 md:pb-16 lg:pb-24'>
      <div className='mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-[7.625rem] py-14 md:py-16 lg:py-24 bg-[rgb(var(--primary))]'>
        {/* Text Content */}
        <div className='flex flex-col justify-center space-y-6 md:col-span-1'>
          <header className='space-y-4'>
            <h2
              className={`${typography.h1} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              About Little Lemon
            </h2>
            <h3
              className={`${typography.h2} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              Locally sourced, lovingly prepared, authentically Mediterranean.
            </h3>
          </header>

          <div className='space-y-4'>
            <p
              className={`${typography.body} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              Little Lemon is a family-owned Mediterranean restaurant, blending
              tradition with modern flavors. Our chefs craft dishes with fresh
              ingredients, inspired by classic Italian and Greek cuisine.
            </p>
            <p
              className={`${typography.body} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              From handmade pastas to signature lemon-inspired recipes, we bring
              warmth, authenticity, and bold flavors to every plate.
            </p>
            <p
              className={`${typography.body} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              Whether you're joining us for a family dinner, a romantic night
              out, or a special celebration, Little Lemon welcomes you with
              heartfelt hospitality.
            </p>
          </div>
        </div>

        {/* Image */}
        <figure className='relative w-full aspect-[3/4] md:aspect-[4/5] rounded-lg lg:rounded-l-xl overflow-hidden md:col-span-1'>
          <Image
            src={aboutImg}
            alt='Restaurant Chef'
            fill
            className='object-cover'
            priority
          />
          <figcaption className='sr-only'>
            Interior or dish at Little Lemon
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
