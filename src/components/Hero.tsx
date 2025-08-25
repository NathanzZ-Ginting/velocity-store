import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-32 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="ml-2 text-white/90">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Shop the Future
              <br />
              <span className="text-accent">Today</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover premium products with lightning-fast delivery and unmatched quality. 
              Your ultimate shopping destination awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="btn-shadow group">
                <a href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="/products">
                  View Collections
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;