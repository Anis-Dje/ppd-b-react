import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { ProductCarousel } from "@/components/product-carousel"
import { mockProducts } from "@/lib/mock-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <ProductCarousel title="Smartphones" products={mockProducts.smartphones} />

          <ProductCarousel title="Laptops" products={mockProducts.laptops} />

          <ProductCarousel title="Accessories" products={mockProducts.accessories} />
        </div>
      </main>
    </div>
  )
}
