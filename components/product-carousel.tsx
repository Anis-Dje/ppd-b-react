"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import type { Product } from "@/types/product"

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -220, // Card width (200px) + gap (20px)
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 220, // Card width (200px) + gap (20px)
        behavior: "smooth",
      })
    }
  }

  if (!products || products.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <p className="text-gray-500">No products found in this category.</p>
      </section>
    )
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="relative">
        {/* Left Arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Right Arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
          onClick={scrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Product Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
