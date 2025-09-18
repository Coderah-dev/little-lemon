// import Image from "next/image";
// import aboutImg from "../../public/Chef-Antonio.png";
// import { typography } from "@/app/ui/fonts";

// export function AboutSmallMedium() {
//   return (
//     <div className='block lg:hidden w-full min-h-screen bg-background pb-16'>
//       <div className='mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-14 md:py-16 bg-[rgb(var(--primary))]'>
//         {/* Image on the LEFT */}
//         <div className='relative w-full aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden md:col-span-1'>
//           <Image
//             src={aboutImg}
//             alt='Restaurant Chef'
//             fill
//             className='object-cover'
//             priority
//           />
//         </div>

//         {/* Text on the RIGHT */}
//         <div className='flex flex-col justify-center space-y-6 md:col-span-1 text-left'>
//           <header className='space-y-4'>
//             <h2
//               className={`${typography.h1} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//               Meet Our Chef
//             </h2>
//             <h3
//               className={`${typography.h2} text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
//               A journey of flavors, family, and passion.
//             </h3>
//           </header>

//           <div className='space-y-4 max-w-prose'>
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
//         </div>
//       </div>
//     </div>
//   );
// }
