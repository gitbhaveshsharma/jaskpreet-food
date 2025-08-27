"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, X } from "lucide-react"

interface ProductFiltersProps {
  filters: {
    search: string
    category: string
    dietary: string
    spiceLevel: string
  }
  onFiltersChange: (filters: any) => void
  categories: Array<{ id: string; name: string }>
  totalProducts: number
}

export function ProductFilters({ filters, onFiltersChange, categories, totalProducts }: ProductFiltersProps) {
  const updateFilter = (key: string, value: string) => {
    // Handle "all" selection by setting empty string
    const filterValue = value === "all" ? "" : value
    onFiltersChange({ ...filters, [key]: filterValue })
  }

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: "",
      dietary: "",
      spiceLevel: "",
    })
  }

  const hasActiveFilters = filters.search || filters.category || filters.dietary || filters.spiceLevel

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{totalProducts} products found</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Products</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search by name or description..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dietary */}
        <div className="space-y-2">
          <Label>Dietary Preference</Label>
          <Select value={filters.dietary} onValueChange={(value) => updateFilter("dietary", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="veg">
                <div className="flex items-center space-x-2">
                  <div className="veg-indicator"></div>
                  <span>Vegetarian</span>
                </div>
              </SelectItem>
              <SelectItem value="non-veg">
                <div className="flex items-center space-x-2">
                  <div className="non-veg-indicator"></div>
                  <span>Non-Vegetarian</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Spice Level */}
        <div className="space-y-2">
          <Label>Spice Level</Label>
          <Select value={filters.spiceLevel} onValueChange={(value) => updateFilter("spiceLevel", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="mild">Mild</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hot">Hot</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
