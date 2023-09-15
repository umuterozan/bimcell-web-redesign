import DescriptionSection from "@/components/home/DescriptionSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import StepsSection from "@/components/home/StepsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <DescriptionSection />
      <ProductsSection />
      <FaqSection />
    </>
  )
}