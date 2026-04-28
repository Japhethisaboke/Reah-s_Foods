import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Clock, Truck, Heart, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import breakfastPreview from "@/assets/breakfast-preview.jpg";
import lunchPreview from "@/assets/lunch-preview.jpg";
import dinnerPreview from "@/assets/dinner-preview.jpg";
import mealPrepPreview from "@/assets/meal-prep-preview.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh healthy meal bowls"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="font-display text-accent text-xl md:text-2xl mb-4 animate-fade-up">
            Fuel Your Body. Nourish Your Life.
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fresh, Healthy Meals Delivered to Your Door
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Custom meal plans designed for your fitness goals. From weight loss to muscle building, we've got your nutrition covered.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/meal-plans">
              <Button variant="hero" size="xl" className="gap-3">
                Build Your Plan
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="hero-outline" size="xl">
                Explore Menu
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/80 text-sm">500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-white/80 text-sm">Fresh Daily Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-white/80 text-sm">100% Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Utensils,
      title: "Custom Meal Plans",
      description: "Personalized nutrition based on your fitness goals - weight loss, muscle gain, or maintenance.",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Every meal prepared fresh, never frozen. Quality ingredients you can taste.",
    },
    {
      icon: Truck,
      title: "Delivered to You",
      description: "Convenient delivery across Nairobi. Right to your home, office, or gym.",
    },
    {
      icon: Heart,
      title: "Healthy & Delicious",
      description: "Global flavors, local ingredients. Nutritious meals that actually taste amazing.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Reahs Foods</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We make healthy eating simple, delicious, and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-background shadow-soft hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuPreviewSection = () => {
  const menuItems = [
    {
      title: "Breakfast",
      description: "Start your day with energizing meals",
      image: breakfastPreview,
      link: "/menu?tab=breakfast",
    },
    {
      title: "Lunch",
      description: "Build your perfect midday plate",
      image: lunchPreview,
      link: "/menu?tab=lunch",
    },
    {
      title: "Dinner",
      description: "Elegant evening dining options",
      image: dinnerPreview,
      link: "/menu?tab=dinner",
    },
    {
      title: "Meal Prep",
      description: "Weekly fitness-focused plans",
      image: mealPrepPreview,
      link: "/meal-plans",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional Kenyan favorites to global cuisines, discover meals crafted for every taste and goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              className="group menu-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  View Menu
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const MealPlansCTA = () => {
  const plans = [
    { name: "Weight Loss", icon: "🌱", color: "bg-green-100 text-green-700" },
    { name: "Weight Gain", icon: "💪", color: "bg-orange-100 text-orange-700" },
    { name: "Body Building", icon: "🏋️", color: "bg-red-100 text-red-700" },
    { name: "Keto Diet", icon: "🥑", color: "bg-purple-100 text-purple-700" },
    { name: "Vegan", icon: "🌿", color: "bg-teal-100 text-teal-700" },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Build Your Perfect Meal Plan
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Choose your fitness goal and customize your weekly meal plan. Fresh ingredients, balanced nutrition, incredible taste.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <span className="text-2xl">{plan.icon}</span>
              <span className="font-medium">{plan.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/meal-plans">
            <Button variant="hero" size="xl" className="gap-3">
              Start Building Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build Your Menu",
      description: "Select breakfast, lunch, and dinner items in a custom weekly menu builder.",
    },
    {
      number: "02",
      title: "Choose Your Service",
      description: "Pick a start date and the number of service days to match your schedule.",
    },
    {
      number: "03",
      title: "Review Your Order",
      description: "See itemized daily totals and confirm your custom meal selections.",
    },
    {
      number: "04",
      title: "Submit on WhatsApp",
      description: "Send your order straight to WhatsApp for fast confirmation and delivery planning.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Custom healthy meals ordered easily with a menu builder, service planning, and WhatsApp checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-center">
                <span className="font-display text-6xl font-bold text-primary/20">{step.number}</span>
                <h3 className="font-heading font-semibold text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-full h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Fitness Enthusiast",
      content: "Reahs Foods has transformed my meal prep. The bodybuilding plan helped me hit my protein goals while enjoying delicious food!",
      rating: 5,
    },
    {
      name: "James K.",
      role: "Busy Professional",
      content: "As someone with no time to cook, these meals are a lifesaver. Fresh, healthy, and delivered right to my office.",
      rating: 5,
    },
    {
      name: "Amina W.",
      role: "Health Coach",
      content: "I recommend Reahs Foods to all my clients. Their weight loss plans are nutritionally balanced and absolutely delicious.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card shadow-soft hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-heading font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to Eat Healthy?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Start your journey to better nutrition today. Order now or chat with us on WhatsApp!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/meal-plans">
            <Button size="xl" className="bg-foreground text-background hover:bg-foreground/90 gap-3">
              Order Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a
            href="https://wa.me/254710883315"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="xl" className="border-foreground/90 text-foreground hover:bg-foreground hover:text-background gap-3">
              <Phone className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <MenuPreviewSection />
      <MealPlansCTA />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
