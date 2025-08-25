import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProfileCompletionBanner from "@/components/ProfileCompletionBanner";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {user && <ProfileCompletionBanner />}
      <Hero />
      
      {/* Search Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Product</h2>
            <p className="text-muted-foreground">Search from thousands of products</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              placeholder="Search for products..." 
              className="w-full"
            />
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
