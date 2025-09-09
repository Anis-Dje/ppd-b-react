"use client"

import { Box, CheckSquare, Sun, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CategoryNav() {
  const categories = [
    {
      icon: Box,
      label: "New Products",
      href: "/new-products",
    },
    {
      icon: CheckSquare,
      label: "Best Sales",
      href: "/best-sales",
      badge: "Hot",
    },
    {
      icon: Sun,
      label: "Special Offers",
      href: "/special-offers",
    },
    {
      icon: Gift,
      label: "Fidelity Offers",
      href: "/fidelity-offers",
    },
  ]

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 py-3 overflow-x-auto">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.label} className="flex items-center gap-2 relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-700 hover:text-teal-600 whitespace-nowrap"
                >
                  <IconComponent className="h-4 w-4" />
                  {category.label}
                </Button>
                {category.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {category.badge}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
