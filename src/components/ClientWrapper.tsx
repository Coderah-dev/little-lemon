"use client";

import dynamic from "next/dynamic";

// Only loaded on the client (ssr: false)
export const AboutTheRestaurant = dynamic(
  () => import("@/components/AboutTheRestaurant"),
  {
    ssr: false,
  }
);

export const SignatureDishesPreview = dynamic(
  () => import("@/components/SignatureDishesPreview"),
  {
    ssr: false,
  }
);

export const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), {
  ssr: false,
});

export const Reservation = dynamic(() => import("@/components/Reservation"), {
  ssr: false,
});

export const KnowMoreSection = dynamic(() => import("@/components/KnowMore"), {
  ssr: false,
});

export const AboutChef = dynamic(() => import("@/components/AboutChef"), {
  ssr: false,
});
