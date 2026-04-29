import { useState } from "react";
import { Phone, Mail, MapPin, Link2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const whatsappNumber = "254710883315";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      "*Contact Message - Reah's Foods*",
      "",
      `*Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      "",
      "*Message:*",
      formData.message.trim(),
      "",
      "_Sent via Reah's Foods Contact page_",
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+254 710 883 315",
      link: "tel:+254710883315",
    },
    {
      icon: Mail,
      label: "Email",
      value: "reahsfoods@gmail.com",
      link: "mailto:reahsfoods@gmail.com",
    },
    {
      icon: Link2,
      label: "Instagram",
      value: "@reahsfoods",
      link: "https://instagram.com/reahsfoods",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mama Wahu Rd, Racecourse, Nairobi",
      link: "https://maps.google.com/?q=Mama+Wahu+Road+Nairobi",
    },
  ];

  const hours = [
    { day: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "9:00 AM - 4:00 PM" },
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Have questions? We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft hover-lift transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-semibold text-lg">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 rounded-xl bg-accent/10 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Prefer WhatsApp?</h3>
              <p className="text-muted-foreground mb-4">
                Chat with us directly for quick responses and order support.
              </p>
              <a
                href="https://wa.me/254710883315"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Delivery Zones */}
        <section className="mt-16 p-4 sm:p-8 rounded-2xl bg-card shadow-soft">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Delivery Zones</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            We deliver fresh meals across Nairobi. Check if we deliver to your area:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Westlands", "Kilimani", "Lavington", "Karen", "Kileleshwa",
              "Parklands", "CBD", "Upper Hill", "South B", "South C",
              "Langata", "Gigiri", "Runda", "Muthaiga", "Spring Valley"
            ].map((zone) => (
              <span
                key={zone}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                {zone}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see your area? Contact us – we may still be able to deliver to you!
          </p>
        </section>
      </div>
    </main>
  );
};

export default Contact;
