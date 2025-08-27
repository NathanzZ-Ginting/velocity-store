import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Shield, Award, Globe, Zap, Instagram, ArrowRight, Star, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Hero Section */}
          <div className="relative text-center mb-20 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl" />
            <div className="relative py-20 px-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-3 text-sm text-muted-foreground font-medium">Trusted by 10,000+ customers worldwide</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                Crafting Quality,<br />
                <span className="text-primary">Delivering Joy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                We're not just another online store. We're your trusted companion in discovering 
                exceptional products that transform your daily life and bring lasting value to every moment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="group">
                  <Link to="/products">
                    Explore Our Collection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow Our Journey
                </Button>
              </div>
            </div>
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

          {/* Our Story */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">From Vision to Reality</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    VelocityStore began in 2020 with a simple yet powerful vision: to bridge the gap between 
                    exceptional products and the people who deserve them. What started as a small team of 
                    passionate entrepreneurs has grown into a trusted global marketplace.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Breaking Barriers</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We recognized that too many amazing products never reached the right customers due to 
                    complex supply chains and limited accessibility. Our mission became clear: create a 
                    platform where innovation meets accessibility, where quality meets convenience.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">The Journey Continues</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Today, we've successfully connected thousands of customers with premium products from 
                    verified vendors worldwide. But our story is far from over—every product we curate, 
                    every customer we serve, adds a new chapter to our ongoing commitment to excellence.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <Lightbulb className="h-24 w-24 text-primary mx-auto" />
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">10K+</div>
                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">500+</div>
                          <div className="text-xs text-muted-foreground">Premium Products</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">25+</div>
                          <div className="text-xs text-muted-foreground">Global Partners</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These fundamental principles guide every decision we make and define who we are as a company.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Uncompromising Quality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every product is meticulously designed and tested to meet the highest standards of craftsmanship. 
                    We never compromise on quality, ensuring excellence in everything we offer.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Heart className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Customer-Centric</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You are at the heart of everything we do. Your satisfaction, feedback, and success drive our 
                    innovation and fuel our passion for continuous improvement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-green-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                    <Globe className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainable Practices</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to using eco-friendly materials and ethical processes from start to finish. 
                    Building a better future for our planet and communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-orange-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <Zap className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Innovation & Speed</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We embrace cutting-edge technology and agile processes to deliver lightning-fast service 
                    and stay ahead of evolving customer needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Meet the Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind VelocityStore who make our mission possible every day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    NS
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nathan Ginting</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Visionary entrepreneur with 8+ years in e-commerce. Nathan founded VelocityStore with the dream 
                    of making premium products accessible to everyone worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    SM
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                  <p className="text-accent font-semibold mb-4">Head of Design</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Creative director with expertise in user experience and brand design. Sarah ensures every 
                    customer touchpoint reflects our commitment to excellence and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    DK
                  </div>
                  <h3 className="text-xl font-bold mb-2">David Kim</h3>
                  <p className="text-green-600 font-semibold mb-4">Customer Success Lead</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Customer advocate with a passion for building relationships. David leads our support team 
                    to ensure every customer feels valued and heard throughout their journey.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our values and want to make a 
                difference in the e-commerce space. Be part of something extraordinary.
              </p>
              <Button variant="outline" size="lg" className="group">
                <Users className="mr-2 h-5 w-5" />
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join thousands of satisfied customers who trust VelocityStore for their premium product needs. 
                  Start your journey with us today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    <Link to="/products">
                      Shop Our Latest Collection
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow Our Journey on Instagram
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Support Available</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;