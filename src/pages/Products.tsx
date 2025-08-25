import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";

// Mock products data
const allProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    isOnSale: true,
    inStock: true,
    category: "audio"
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    inStock: true,
    category: "wearables"
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    isOnSale: true,
    inStock: true,
    category: "computers"
  },
  {
    id: "4",
    name: "Professional Camera",
    price: 899.99,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    inStock: false,
    category: "photography"
  },
  {
    id: "5",
    name: "Wireless Earbuds Pro",
    price: 179.99,
    rating: 4.5,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop",
    inStock: true,
    category: "audio"
  },
  {
    id: "6",
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    isOnSale: true,
    inStock: true,
    category: "electronics"
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "audio", label: "Audio" },
  { value: "computers", label: "Computers" },
  { value: "photography", label: "Photography" },
  { value: "wearables", label: "Wearables" }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "under-200") matchesPrice = product.price < 200;
    else if (priceRange === "200-500") matchesPrice = product.price >= 200 && product.price <= 500;
    else if (priceRange === "500-1000") matchesPrice = product.price >= 500 && product.price <= 1000;
    else if (priceRange === "over-1000") matchesPrice = product.price > 1000;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const activeFilters = [
    selectedCategory !== "all" && { type: "category", value: selectedCategory, label: categories.find(c => c.value === selectedCategory)?.label },
    priceRange !== "all" && { type: "price", value: priceRange, label: `Price: ${priceRange.replace("-", " - $")}` }
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
            <p className="text-muted-foreground">
              Discover our complete collection of premium products
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-200">Under $200</SelectItem>
                    <SelectItem value="200-500">$200 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1000</SelectItem>
                    <SelectItem value="over-1000">Over $1000</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {activeFilters.map((filter, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {filter.label}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => {
                        if (filter.type === "category") setSelectedCategory("all");
                        if (filter.type === "price") setPriceRange("all");
                      }}
                    />
                  </Badge>
                ))}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange("all");
                  }}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No products found matching your criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;