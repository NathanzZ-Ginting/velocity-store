import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Laptop, Camera, Watch, Home } from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    description: "Latest gadgets and tech",
    count: "1,234 items",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
    description: "Premium sound experience",
    count: "567 items",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "computers",
    name: "Computers",
    icon: Laptop,
    description: "Powerful computing solutions",
    count: "890 items",
    color: "from-green-500 to-green-600"
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
    description: "Capture every moment",
    count: "345 items",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
    description: "Smart accessories",
    count: "234 items",
    color: "from-red-500 to-red-600"
  },
  {
    id: "home",
    name: "Smart Home",
    icon: Home,
    description: "Connected living",
    count: "456 items",
    color: "from-teal-500 to-teal-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br card-hover border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Explore Category
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;