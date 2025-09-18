import Hero from "../components/Hero";
import {
  PhotoGallery,
  Reservation,
  KnowMoreSection,
  AboutChef,
  AboutTheRestaurant,
  SignatureDishesPreview,
} from "@/components/ClientWrapper";

// import { AboutLarge } from "@/components/AboutChefLarge";
// import { AboutSmallMedium } from "@/components/AboutChefSmallMedium";
// import Test1 from "@/components/TestMe";
// import AboutTheRestaurant1 from "@/components/AboutTheRestaurant1";

export default function Home() {
  return (
    <>
      {/* <Test1 /> */}
      {/* <AboutLarge />
      <AboutSmallMedium /> */}
      <Hero />
      <AboutTheRestaurant />
      <SignatureDishesPreview />
      <AboutChef />
      <PhotoGallery />
      <Reservation />
      <KnowMoreSection />
    </>
  );
}
