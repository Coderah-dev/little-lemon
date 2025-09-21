import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { typography } from "@/app/ui/fonts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import restaurant from "../../public/italy.png";
import aboutChef from "../../public/Chef-Antonio.png";
import aboutRest from "../../public/restaurant-chef.png";
import LemonRicotta from "../../public/Lemon ricotta.png";
import SeafoodRisotto from "../../public/seafood risotto.png";
import BurrataSalad from "../../public/Burrate cheese with tomato salad2.png";

const photos = [
  {
    src: LemonRicotta,
    alt: "Stack of lemon ricotta pancakes with berries",
    title: "Lemon Ricotta Pancakes",
    description:
      "Fluffy ricotta pancakes kissed with a hint of lemon zest, drizzled with golden honey and topped with fresh seasonal berries — a bright start to your day.",
  },
  {
    src: SeafoodRisotto,
    alt: "Bowl of saffron seafood risotto",
    title: "Seafood Risotto with Saffron",
    description:
      "Creamy saffron-infused risotto loaded with fresh shrimp, mussels, and calamari — a rich, aromatic taste of the Mediterranean sea.",
  },
  {
    src: BurrataSalad,
    alt: "Plate of burrata cheese and tomato salad",
    title: "Burrata & Heirloom Tomato Salad",
    description:
      "Creamy burrata meets vibrant heirloom tomatoes, fresh basil, and a delicate balsamic glaze — a refreshing, flavorful delight.",
  },
  {
    src: aboutRest,
    alt: "Restaurant interior with warm lighting",
    title: "Cozy Dining Ambiance",
    description:
      "Step into our warm, inviting space where Mediterranean flavors and heartfelt service create memorable moments.",
  },
  {
    src: aboutChef,
    alt: "Chef Antonio preparing a dish",
    title: "Chef Antonio in Action",
    description:
      "Our passionate chef brings tradition and creativity to every dish, ensuring each plate tells a story of flavor and care.",
  },
  {
    src: restaurant,
    alt: "Exterior of Little Lemon restaurant",
    title: "The Heart of Little Lemon",
    description:
      "A glimpse of our charming restaurant, where authentic Mediterranean cuisine and a welcoming atmosphere await every guest.",
  },
];

export default function PhotoGallery() {
  return (
    <section className='w-full bg-white py-16'>
      {/* Left-aligned Heading, Paragraph & Button with 120px offset */}
      <div className='flex flex-col space-y-6 md:space-y-8 px-6 md:px-[120px]'>
        <h1 className={`${typography.h1} text-left`}>Explore Our Gallery</h1>
        <p
          className={`${typography.body} text-gray-700 text-left max-w-full md:max-w-4xl`}>
          Step into the heart of Little Lemon and let your senses come alive.
          Our gallery captures the vibrant colors, fresh ingredients, and
          handcrafted dishes that define our Mediterranean menu. From
          golden-crusted breads and colorful salads to perfectly seasoned pastas
          and desserts that delight, every photo tells a story of passion,
          flavor, and tradition. Experience the warmth of our dining space, the
          artistry of our chefs, and the joyful moments shared around every
          table. Whether you’re here to explore our signature dishes or to feel
          the welcoming atmosphere, this gallery is a glimpse into what makes
          Little Lemon truly special. Let your eyes wander before your taste
          buds follow, and imagine the flavors waiting for you.
        </p>
        <Button
          size='lg'
          className={`${typography.cta} bg-[#F4CE14] text-black rounded-2xl px-6 py-2 shadow-md w-max hover:bg-[rgb(var(--accent-dark))]`}>
          See More
        </Button>
      </div>

      {/* Full-width Carousel with Custom Arrows */}
      <div className='relative w-full mt-12'>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className='w-full'>
          <CarouselContent className='flex gap-6 px-4 md:px-8'>
            {photos.map((photo, i) => (
              <CarouselItem
                key={i}
                className='md:basis-1/2 lg:basis-1/3'>
                <Card className='flex flex-col gap-4 rounded-xl overflow-hidden shadow-md'>
                  <CardContent className='p-0'>
                    <div className='relative aspect-[4/3] w-full'>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className='object-cover rounded-t-xl'
                        // ✅ Optimize delivery
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        // ✅ Only first visible image gets priority
                        priority={i === 0}
                        // ✅ Others explicitly lazy load
                        loading={i === 0 ? "eager" : "lazy"}
                        placeholder='blur'
                      />
                    </div>
                    <div className='flex flex-col gap-2 p-4'>
                      <h2 className={`${typography.h3} text-black`}>
                        {photo.title}
                      </h2>
                      <p className={`${typography.body} text-gray-500`}>
                        {photo.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Arrows */}
          <CarouselPrevious className='absolute top-1/2 left-4 -translate-y-1/2 z-10'>
            <div className='bg-[#F4CE14] p-2 rounded-full shadow-md hover:bg-yellow-400 transition'>
              <ChevronLeft
                size={24}
                className='text-black'
              />
            </div>
          </CarouselPrevious>
          <CarouselNext className='absolute top-1/2 right-4 -translate-y-1/2 z-10'>
            <div className='bg-[#F4CE14] p-2 rounded-full shadow-md hover:bg-yellow-400 transition'>
              <ChevronRight
                size={24}
                className='text-black'
              />
            </div>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
