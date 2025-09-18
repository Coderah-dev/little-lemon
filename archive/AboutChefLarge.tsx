// import Image from "next/image";
// import aboutImg from "../../public/Chef-Antonio.png";
// import { typography } from "@/app/ui/fonts";
// import { Button } from "./ui/button";

// export function AboutLarge() {
//   return (
//     <div className='hidden lg:block w-full min-h-screen bg-background pb-24'>
//       <div className='relative grid min-h-screen grid-cols-12 grid-rows-16 gap-5 lg:pl-0 lg:pr-[7.625rem] lg:pt-24 bg-[rgb(var(--primary))]'>
//         {/* Image on the LEFT */}
//         <div className='relative col-start-1 col-span-5 row-start-1 row-end-16 h-full w-full overflow-hidden rounded-r-xl rounded-l-none'>
//           <Image
//             src={aboutImg}
//             alt='Chef preparing food'
//             fill
//             className='object-cover'
//             priority
//           />
//         </div>

//         {/* Headings on the RIGHT */}
//         <h2
//           className={`${typography.h1} col-start-7 col-span-6 row-span-2 self-center text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//           Meet Our Chef
//         </h2>

//         <h3
//           className={`${typography.h2} col-start-7 col-span-6 row-span-2 self-center text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//           A journey of flavors, family, and passion.
//         </h3>

//         {/* Storytelling Paragraphs + Button */}
//         <div className='col-start-7 col-span-6 row-span-7 self-center flex flex-col'>
//           <div className='mb-6'>
//             {[
//               "For Chef Antonio, cooking has always been about family. He grew up in a small coastal town, where evenings were filled with the aroma of simmering stews and the laughter of loved ones gathered around the table.",
//               "Those childhood memories inspired him to dedicate his life to food. At Little Lemon, he weaves together the flavors of his heritage with fresh, local ingredients — creating dishes that feel both timeless and new.",
//               "When you dine with us, you’re not just tasting a meal. You’re sharing in Antonio’s story, one that celebrates tradition, creativity, and the joy of bringing people together.",
//             ].map((paragraph, index) => (
//               <p
//                 key={index}
//                 className={`${typography.body} mb-4 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           {/* <Button
//             className='bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] text-accent-foreground
//               w-full sm:w-auto h-auto lg:py-3 lg:px-4 lg:w-[36.875rem] lg:h-20 lg:rounded-2xl
//               shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]'>
//             Know More About The Chef
//           </Button> */}
//           <Button
//             className={`
//               bg-[#F4CE14] text-black
//               flex justify-center items-center
//               gap-2.5
//               rounded-[16px]
//               px-4 py-3
//               w-full sm:w-[400px] md:w-[500px] lg:w-[590px]
//               h-[60px] sm:h-[70px] md:h-[80px] lg:h-[87px]
//               ${typography.cta}
//               bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))]
//               shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]
//               transition-all duration-300 ease-in-out
//             `}>
//             Know More About The Chef
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
