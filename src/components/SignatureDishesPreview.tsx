// components/SignatureDishesPreview.tsx
import Image from "next/image";
import { typography } from "@/app/ui/fonts";

type Dish = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
};

const sampleFeatured: Dish = {
  id: "featured-1",
  title: "Lemon Ricotta Pancakes",
  description:
    "Fluffy pancakes made with fresh ricotta and a hint of lemon zest, served with honey drizzle and seasonal berries.",
  price: "$12.50",
  imageSrc: "/Lemon ricotta.png",
  imageAlt: "Stack of lemon ricotta pancakes with berries",
};

const sampleList: Dish[] = [
  {
    id: "card-1",
    title: "Seafood Risotto with Saffron",
    description:
      "Creamy risotto cooked with fresh shrimp, mussels, and calamari, finished with saffron for a rich aroma.",
    price: "$18.95",
    imageSrc: "/seafood risotto.png",
    imageAlt: "Bowl of saffron seafood risotto",
  },
  {
    id: "card-2",
    title: "Burrata Cheese with Tomato Salad",
    description:
      "Creamy burrata paired with heirloom tomatoes, fresh basil, and a drizzle of balsamic glaze.",
    price: "$14.75",
    imageSrc: "/Burrate cheese with tomato salad2.png",
    imageAlt: "Plate of burrata cheese and tomato salad",
  },
];

export default function SignatureDishesPreview({
  featured = sampleFeatured,
  list = sampleList,
}: {
  featured?: Dish;
  list?: Dish[];
}) {
  return (
    <section
      aria-labelledby='signature-dishes-title'
      className='w-full bg-white py-12 px-6 sm:py-16 sm:px-8 lg:px-20'>
      {/* Section title */}
      <h2
        id='signature-dishes-title'
        className={`${typography.h1} text-black mb-8 sm:mb-12`}>
        Signature Dishes
      </h2>

      {/* Grid: mobile stacked -> md two columns */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        {/* -------------------- Left column: Featured -------------------- */}
        <article className='flex flex-col gap-4 row-span-full'>
          {/* Image container (aspect + rounded + overflow) */}
          <figure className='relative w-full aspect-square rounded-lg bg-gray-100 overflow-hidden'>
            <Image
              src={featured.imageSrc}
              alt={featured.imageAlt ?? featured.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 735px'
              className='object-cover'
              // If this is critical above-the-fold, consider enabling priority
              // priority
            />
          </figure>

          {/* Text block */}
          <div>
            <h3
              className={`${typography.h3} text-black break-words line-clamp-2`}>
              {featured.title}
            </h3>

            <p className={`${typography.body} text-gray-700 mt-2 line-clamp-3`}>
              {featured.description}
            </p>

            <div className='mt-3'>
              <span className={`${typography.small} text-black`}>
                {featured.price}
              </span>
            </div>
          </div>
        </article>

        {/* -------------------- Right column: Cards list -------------------- */}
        <ul className='flex flex-col gap-6'>
          {list.map((dish) => (
            <li key={dish.id}>
              <article className='flex flex-col gap-3'>
                <figure className='relative w-full aspect-[16/9] rounded-lg bg-gray-100 overflow-hidden'>
                  <Image
                    src={dish.imageSrc}
                    alt={dish.imageAlt ?? dish.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 515px'
                    className='object-cover'
                    loading='lazy'
                  />
                </figure>

                <div className='flex flex-col gap-1'>
                  <h3
                    className={`${typography.h3} text-black leading-snug break-words line-clamp-2`}>
                    {dish.title}
                  </h3>

                  <p className={`${typography.body} text-gray-700`}>
                    {dish.description}
                  </p>

                  <div className='mt-2'>
                    <span className={`${typography.small} text-black`}>
                      {dish.price}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* -------------------- CTA -------------------- */}
      <div className='flex justify-center mt-12'>
        <button
          type='button'
          aria-label='View more signature dishes'
          className={`
    ${typography.cta}
    inline-flex items-center justify-center
    bg-[#F4CE14] text-black
    rounded-2xl shadow-sm
    px-4 py-3
    w-full sm:w-[400px] md:w-[500px] lg:w-[590px]
    h-[60px] sm:h-[70px] md:h-[80px] lg:h-[87px]
    hover:bg-[rgb(var(--accent-dark))]
  `}>
          View More
        </button>
      </div>
    </section>
  );
}
