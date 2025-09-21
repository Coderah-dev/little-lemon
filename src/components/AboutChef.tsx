import Image from "next/image";
import aboutImg from "../../public/Chef-Antonio.png";
import { typography } from "@/app/ui/fonts";
import { Button } from "./ui/button";

export default function AboutChef() {
  return (
    <div className='relative w-full min-h-screen bg-background pb-14 md:pb-16 lg:pb-24'>
      <div
        className='lg:grid-rows-auto
          relative grid min-h-screen
          grid-cols-1 md:grid-cols-6 lg:grid-cols-12
          gap-2.5 md:gap-5
          pl-8 pr-8 py-10 md:pl-12 md:pr-12 md:py-16 lg:pl-0 lg:pr-[7.625rem] lg:pt-24
          bg-[rgb(var(--primary))]
        '>
        {/* Image */}
        <div className='aspect-[3/4] col-span-1 md:col-span-6 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-end-16'>
          <div className='relative h-full w-full overflow-hidden rounded-lg lg:rounded-r-xl lg:rounded-l-none'>
            <Image
              src={aboutImg}
              alt='Restaurant Chef'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className={`
            ${typography.h1}
            col-span-1 md:col-span-6 lg:col-span-5 lg:col-start-8
            text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]
          `}>
          Meet Our Chef
        </h2>

        {/* Subtitle */}
        <h3
          className={`
            ${typography.h2}
            col-span-1 md:col-span-6 lg:col-span-5 lg:col-start-8
            text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]
          `}>
          A journey of flavors, family, and passion.
        </h3>

        {/* Body + Button */}
        <div className='col-span-1 md:col-span-6 lg:col-span-5 lg:col-start-8'>
          {[
            "For Chef Antonio, cooking has always been about family. He grew up in a small coastal town, where evenings were filled with the aroma of simmering stews and the laughter of loved ones gathered around the table.",
            "Those childhood memories inspired him to dedicate his life to food. At Little Lemon, he weaves together the flavors of his heritage with fresh, local ingredients — creating dishes that feel both timeless and new.",
            "When you dine with us, you’re not just tasting a meal. You’re sharing in Antonio’s story, one that celebrates tradition, creativity, and the joy of bringing people together.",
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
              w-full (sm:w-[400px]) (md:w-[500px]) (lg:w-[590px])
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
