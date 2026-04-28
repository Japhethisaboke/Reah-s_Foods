import { Heart, Users, Award, Leaf } from "lucide-react";
import mealPrepPreview from "@/assets/meal-prep-preview.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Health",
      description: "Every meal is crafted with love and a deep commitment to your wellbeing. We believe food should heal, energize, and bring joy.",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the freshest local produce and premium proteins. No preservatives, no shortcuts just real, wholesome food.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "From fitness enthusiasts to busy families, we serve our Nairobi community with personalized nutrition solutions.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Our kitchen maintains the highest standards of hygiene and quality. Every meal passes our taste and nutrition tests.",
    },
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Reahs Foods</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Fuel Your Body. Nourish Your Life.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Reahs Foods was born from a simple belief: that healthy eating shouldn't be complicated, time-consuming, or tasteless. As fitness enthusiasts ourselves, we understood the struggle of maintaining proper nutrition while juggling busy lives.
                </p>
                <p>
                  Based in Nairobi, Kenya, we set out to create a meal prep service that combines the rich flavors of African and global cuisines with balanced, goal-oriented nutrition. Whether you're looking to lose weight, build muscle, or simply eat healthier, we've got you covered.
                </p>
                <p>
                  Every meal we prepare is made fresh daily with locally sourced ingredients. We believe in transparency you'll always know exactly what's in your food and how it supports your health goals.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={mealPrepPreview}
                alt="Fresh meal prep containers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/90">
                To make healthy, delicious meals accessible to every Kenyan. We're committed to fueling active lifestyles with fresh, nutritious food that tastes incredible and supports personal wellness goals.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-accent text-accent-foreground">
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-accent-foreground/90">
                To be Kenya's most trusted meal prep and healthy catering service, inspiring a nation to embrace nutritious eating without sacrificing flavor, convenience, or cultural authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to delivering your meals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card shadow-soft hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
