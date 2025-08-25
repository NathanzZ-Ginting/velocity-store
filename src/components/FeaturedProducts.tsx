import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock data - will be replaced with real data from Supabase
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    isOnSale: true,
    inStock: true
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    inStock: true
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
    inStock: true
  },
  {
    id: "4",
    name: "Professional Camera",
    price: 899.99,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    inStock: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of premium products that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <a href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;