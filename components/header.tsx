"use client"

import type React from "react"

import { Search, ShoppingBag, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context in real app

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <ShoppingCart className="h-6 w-6 text-teal-500" />
            <span>
              <span className="text-teal-500">Tech</span>
              <span className="text-gray-900">Market</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-4 pr-12 rounded-full bg-gray-800 text-white placeholder:text-gray-400 border-none focus:ring-2 focus:ring-teal-500"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-10 w-10 rounded-full bg-teal-500 hover:bg-teal-600 p-0"
              >
                <Search className="h-5 w-5 text-white" />
              </Button>
            </form>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden sm:inline">Product Cart</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">{isLoggedIn ? "My Profile" : "User Account"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
