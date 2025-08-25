import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About VelocityStore
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're more than just an e-commerce platform. We're your trusted partner in discovering 
              exceptional products that enhance your lifestyle and bring value to your everyday experiences.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-gradient rounded-xl p-8 shadow-sm">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize online shopping by providing a seamless, secure, and personalized 
                experience that connects customers with premium products from trusted vendors worldwide.
              </p>
            </div>
            
            <div className="card-gradient rounded-xl p-8 shadow-sm">
              <Heart className="h-12 w-12 text-accent mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted e-commerce destination, where quality meets 
                convenience and every purchase contributes to a more sustainable and connected future.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-muted-foreground">
                  Your security is our priority. We implement the highest standards of data protection 
                  and secure payment processing.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make is centered around providing exceptional customer experiences 
                  and exceeding expectations.
                </p>
              </div>
              
              <div className="text-center">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Promise</h3>
                <p className="text-muted-foreground">
                  We carefully curate our product selection to ensure every item meets our 
                  rigorous quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-secondary/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6">Built by Passionate People</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our diverse team of e-commerce experts, designers, and technology enthusiasts work 
              tirelessly to bring you the best online shopping experience possible. From our headquarters 
              to our global network of partners, we're united by a shared commitment to excellence.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;