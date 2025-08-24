export interface Product {
  id: string
  name: string
  category: string
  dietary: "veg" | "non-veg"
  spiceLevel: "mild" | "medium" | "hot"
  packSizes: string[]
  shelfLife: string
  storage: string
  features: string[]
  image: string
  badges: string[]
  shortDesc: string
  specSheet: string
}
