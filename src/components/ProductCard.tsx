import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isOnSale?: boolean;
  inStock: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  isOnSale = false, 
  inStock 
}: ProductCardProps) => {
  return (
    <div className="group card-gradient rounded-xl border shadow-sm card-hover overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isOnSale && (
            <Badge className="bg-sale text-white">
              Sale
            </Badge>
          )}
          {!inStock && (
            <Badge variant="destructive">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart - Appears on Hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            className="w-full btn-shadow" 
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'fill-accent text-accent' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-price">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;