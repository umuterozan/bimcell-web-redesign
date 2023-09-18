import ProductsLayoutSection from "@/components/products/ProductsLayoutSection";
import TitleSection from "@/components/products/TitleSection";

export default function ProductsLayout({ children}: { children: React.ReactNode }) {
  return (
    <>
      <TitleSection />
      <ProductsLayoutSection>
        {children}
      </ProductsLayoutSection>
    </>
  )
}