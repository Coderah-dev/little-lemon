// import Image from "next/image";
// import aboutImg from "../../public/Chef-Antonio.png";
// import { typography } from "@/app/ui/fonts";

// export default function AboutChef() {
//   return (
//     <div className='relative w-full min-h-screen bg-background pb-14 md:pb-16 lg:pb-24'>
//       <div className='relative grid grid-cols-1 grid-rows-none lg:grid-rows-16 gap-2.5 pl-8 pr-8 py-10 md:grid-cols-6 md:gap-5 md:pl-12 md:pr-12 md:py-16 lg:grid-cols-12 lg:gap-5 lg:pr-[7.625rem] lg:pl-0 lg:pt-24 bg-[rgb(var(--primary))]'>
//         {/* <div className='col-span-1 row-span-2 lg:col-span-4 hidden md:hidden lg:visible' /> */}
//         <div className='relative col-span-1 row-start-auto row-end-auto aspect-[3/4] row-span-full md:col-span-6 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-end-16'>
//           <div className='relative h-full w-full overflow-hidden rounded-lg lg:rounded-r-xl lg:rounded-l-none'>
//             <Image
//               src={aboutImg}
//               alt='Restaurant Chef'
//               fill
//               className='object-fill'
//               priority
//             />
//           </div>
//         </div>
//         <h2
//           className={`${typography.h1} col-span-1 row-span-2 self-center md:col-span-6 lg:col-span-6 lg:col-start-7 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//           About Little Lemon
//         </h2>

//         <h3
//           className={`${typography.h2} col-span-1 row-span-2 self-center md:col-span-6 lg:col-span-6 lg:col-start-7 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//           Locally sourced, lovingly prepared, authentically Mediterranean.
//         </h3>

//         <div className='col-span-1 row-span-5 self-center md:col-span-6 lg:col-span-6 lg:col-start-7'>
//           {[
//             "Little Lemon is a family-owned Mediterranean restaurant, blending tradition with modern flavors. Our chefs craft dishes with fresh ingredients, inspired by classic Italian and Greek cuisine.",
//             "From handmade pastas to signature lemon-inspired recipes, we bring warmth, authenticity, and bold flavors to every plate.",
//             "Whether you're joining us for a family dinner, a romantic night out, or a special celebration, Little Lemon welcomes you with heartfelt hospitality.",
//           ].map((paragraph, index) => (
//             <p
//               key={index}
//               className={`${typography.body} mb-4 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import aboutImg from "../../public/Chef-Antonio.png";
import { typography } from "@/app/ui/fonts";
import { Button } from "./ui/button";

export default function AboutChef() {
  return (
    <div className='relative w-full min-h-screen bg-background pb-14 md:pb-16 lg:pb-24'>
      <div className='relative grid min-h-screen grid-cols-1 grid-rows-none lg:grid-rows-16 gap-2.5 pl-8 pr-8 py-10 md:grid-cols-6 md:gap-5 md:pr-12 md:pl-12 md:py-16 lg:grid-cols-12 lg:gap-5 lg:pr-[7.625rem] lg:pl-0 lg:pt-24 bg-[rgb(var(--primary))]'>
        {/* optional placeholder cell (keeps column alignment consistent) */}
        {/* <div className="col-span-1 row-span-2 lg:col-span-4 hidden md:hidden lg:visible" /> */}

        {/* Image (left on large screens) */}
        <div className='relative col-span-1 row-start-auto row-end-auto aspect-[3/4] row-span-full md:col-span-6 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-end-16'>
          <div className='relative h-full w-full overflow-hidden rounded-lg lg:rounded-r-xl lg:rounded-l-none'>
            <Image
              src={aboutImg}
              alt='Restaurant Chef'
              fill
              className='object-fill'
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className={`${typography.h1} col-span-1 row-span-2 self-center md:col-span-6 lg:col-span-6 lg:col-start-7
                      text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
          About Little Lemon
        </h2>

        {/* Subtitle */}
        <h3
          className={`${typography.h2} col-span-1 row-span-2 self-center md:col-span-6 lg:col-span-6 lg:col-start-7
                      text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
          Locally sourced, lovingly prepared, authentically Mediterranean.
        </h3>

        {/* Body text */}
        <div className='col-span-1 row-span-5 self-center md:col-span-6 lg:col-span-6 lg:col-start-7'>
          {[
            "Little Lemon is a family-owned Mediterranean restaurant, blending tradition with modern flavors. Our chefs craft dishes with fresh ingredients, inspired by classic Italian and Greek cuisine.",
            "From handmade pastas to signature lemon-inspired recipes, we bring warmth, authenticity, and bold flavors to every plate.",
            "Whether you're joining us for a family dinner, a romantic night out, or a special celebration, Little Lemon welcomes you with heartfelt hospitality.",
          ].map((paragraph, index) => (
            <p
              key={index}
              className={`${typography.body} mb-4 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
              {paragraph}
            </p>
          ))}
          <Button
            className={`
              bg-[#F4CE14] text-black
              flex justify-center items-center
              gap-2.5
              rounded-[16px]
              px-4 py-3
              sm:mt-16 md:mt-24 lg:mt-32
              w-full sm:w-[400px] md:w-[500px] lg:w-[590px]
              h-[60px] sm:h-[70px] md:h-[80px] lg:h-[87px]
              ${typography.cta}
              bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] 
              shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]
              transition-all duration-300 ease-in-out
            `}>
            Know More About The Chef
          </Button>
        </div>
      </div>
    </div>
  );
}
