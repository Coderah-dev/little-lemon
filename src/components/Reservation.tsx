import Image from "next/image";
import restaurant from "../../public/italy.png";
import { typography } from "@/app/ui/fonts";
import { Button } from "./ui/button";

export default function AboutTheRestaurant() {
  return (
    <div className='relative w-full min-h-screen bg-background pb-14 md:pb-16 lg:pb-24'>
      <div className='relative grid min-h-screen grid-cols-1 grid-rows-none lg:grid-rows-16 gap-2.5 pl-8 pr-8 py-10 md:grid-cols-6 md:gap-5 md:pl-12 md:pr-12 md:py-16 lg:grid-cols-12 lg:gap-5 lg:pl-[7.625rem] lg:pr-0 lg:pt-24 bg-[rgb(var(--primary))]'>
        <div className='col-span-1 row-span-2 lg:col-span-4 hidden md:hidden lg:visible' />

        <h2
          className={`${typography.h1} col-span-1 row-span-2 self-center md:col-span-6 lg:col-span-6 text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]`}>
          Reservation
        </h2>
        <div
          className='col-span-1 row-span-8 md:col-span-6 lg:col-span-6 
  flex flex-col justify-between 
  text-primary-foreground drop-shadow-[8px_8px_8px_rgba(0,0,0,0.25)]'>
          {/* Book a Table */}
          <div>
            <h3 className={typography.h2}>Book a Table</h3>
            <p className={typography.body}>
              Your table is waiting. Whether you’re planning a relaxed weeknight
              dinner, a lively family gathering, or a romantic evening for two,
              Little Lemon makes every meal feel like a celebration. Reserve in
              advance to enjoy a seamless dining experience with dishes crafted
              from the freshest local ingredients, paired with our signature
              Mediterranean warmth.
            </p>
          </div>

          {/* Special Events */}
          <div className='mb-4'>
            <h3 className={typography.h2}>Special Events</h3>
            <p className={typography.body}>
              From birthdays to anniversaries, corporate dinners to intimate
              gatherings — we love being part of your milestones. Our chef
              curates customized menus, while our team ensures every detail is
              handled with care. Let Little Lemon turn your celebration into an
              unforgettable evening filled with flavor, laughter, and warmth.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 w-full'>
            <Button
              className={`${typography.cta} flex-1 min-w-[150px] h-[60px] flex items-center justify-center 
    rounded-2xl text-accent-foreground 
    bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-dark))] 
    shadow-[inset_0_12px_25px_rgba(0,0,0,0.25)]`}>
              Book Now
            </Button>

            <Button
              className={`${typography.cta} flex-1 min-w-[150px] h-[60px] flex items-center justify-center 
    rounded-2xl text-black 
    bg-white hover:bg-gray-100 shadow-md`}>
              Plan an Event
            </Button>
          </div>
        </div>

        <div className='relative col-span-1 row-start-auto row-end-auto order-12 aspect-[3/4] row-span-full md:col-span-6 lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-end-16'>
          <div className='relative h-full w-full overflow-hidden rounded-lg lg:rounded-l-xl lg:rounded-r-none'>
            <Image
              src={restaurant}
              alt='Restaurant Chef'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
