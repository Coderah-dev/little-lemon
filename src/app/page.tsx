import Hero from "../components/Hero";
import AboutTheRestaurant from "@/components/AboutTheRestaurant";
import SignatureDishesPreview from "@/components/SignatureDishesPreview";
import Reservation from "@/components/Reservation";
import PhotoGallery from "@/components/PhotoGallery";
import KnowMoreSection from "@/components/KnowMore";
import AboutChef from "@/components/AboutChef";
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
