import React from "react";
import { typography } from "@/app/ui/fonts";

export default function page() {
  return (
    <section className='relative w-full h-screen bg-[#495E57] py-12 md:py-20 lg:py-24'>
      <div className='container mx-auto px-4 md:px-6 lg:px-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Side - Text */}
          <div className='text-white space-y-4 md:space-y-6'>
            <h2
              className={`
                ${typography.h2} 
                text-[clamp(1.75rem,5vw,2.5rem)] 
                antialiased 
                text-white 
                drop-shadow-md
              `}>
              About Little Lemon
            </h2>
            <h3
              className={`
                ${typography.h3} 
                text-[clamp(1.25rem,4vw,2rem)] 
                antialiased 
                text-white 
                drop-shadow-md
              `}>
              Locally sourced, lovingly prepared, authentically Mediterranean.
            </h3>

            <div className='space-y-4'>
              {[
                "Little Lemon is a family-owned Mediterranean restaurant, blending tradition with modern flavors. Our chefs craft dishes with fresh ingredients, inspired by classic Italian and Greek cuisine.",
                "From handmade pastas to signature lemon-inspired recipes, we bring warmth, authenticity, and bold flavors to every plate.",
                "Whether you're joining us for a family dinner, a romantic night out, or a special celebration, Little Lemon welcomes you with heartfelt hospitality.",
              ].map((paragraph, index) => (
                <p
                  key={index}
                  className={`
                    ${typography.body} 
                    text-[clamp(0.875rem,3vw,1rem)] 
                    antialiased 
                    text-white 
                    drop-shadow-sm
                  `}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
        </div>
      </div>
    </section>
  );
}
