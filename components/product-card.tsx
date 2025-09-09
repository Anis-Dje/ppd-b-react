"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(price)
      .replace("DZD", "D.A")
  }

  const handleClick = () => {
    console.log("Navigate to product:", product.id)
    // In a real app: router.push(`/product/${product.id}`)
  }

  const displayPrice = product.salePrice || product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  return (
    <Card
      className="w-[200px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2 leading-tight">{product.title}</h3>

          {/* Price */}
          <div className="mb-3">
            <div className="text-lg font-bold text-teal-600">{formatPrice(displayPrice)}</div>
            {hasDiscount && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 line-through">{formatPrice(product.price)}</span>
                <span className="text-green-600 font-medium">New: {formatPrice(product.salePrice!)}</span>
              </div>
            )}
          </div>

          {/* Technical Specifications - Show on Hover */}
          {product.features && Object.keys(product.features).length > 0 && (
            <div
              className={`transition-all duration-300 ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
            >
              <div className="bg-gray-50 rounded p-3 mt-2">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Fiche Technique</h4>
                <ul className="space-y-1">
                  {Object.entries(product.features).map(([key, value]) => (
                    <li key={key} className="text-xs text-gray-600">
                      <span className="font-medium">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
