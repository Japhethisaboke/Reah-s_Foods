import { Link } from "react-router-dom";
import { Link2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="Reahs Foods"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-display text-lg italic text-background/80 mb-4">
              Fuel Your Body. Nourish Your Life.
            </p>
            <p className="text-sm text-background/60">
              Fresh, healthy meal prep and catering services in Nairobi, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-background/70 hover:text-background transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Build Your Plan
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Meal Plans */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Meal Plans</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Weight Gain
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Body Building
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Keto Diet
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-background/70 hover:text-background transition-colors">
                  Vegan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <a
                    href="tel:+254710883315"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    +254 710 883 315
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <a
                  href="mailto:reahsfoods@gmail.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  reahsfoods@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="h-5 w-5 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  <a
                    href="https://instagram.com/reahsfoods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    @reahsfoods
                  </a>
                  <a
                    href="https://instagram.com/reahs.foods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    @reahs.foods
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span className="text-background/70">
                  Mama Wahu Rd, Racecourse<br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Reahs Foods. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/reahsfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Link2 className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/254710883315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:reahsfoods@gmail.com"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
