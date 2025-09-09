export interface Product {
  id: string
  title: string
  price: number
  salePrice?: number
  image: string
  category: string
  manufacturer?: string
  features?: Record<string, string>
  badge?: string
}

export interface ProductFeatures {
  Display?: string
  Processor?: string
  "Rear Camera"?: string
  Battery?: string
  Graphics?: string
  [key: string]: string | undefined
}
