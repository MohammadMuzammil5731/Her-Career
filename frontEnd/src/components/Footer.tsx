import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">
                N
              </div>
              <span className="text-xl font-display font-bold">Naari Rozgaar</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Empowering women through safe and reliable employment opportunities. 
              Your journey to professional success starts here.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <span>Made with</span>
              <Heart size={16} className="text-secondary fill-secondary" />
              <span>for women empowerment</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-background/70 hover:text-background transition-colors">
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-background/70 hover:text-background transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-background/70 hover:text-background transition-colors">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Mail size={16} />
                <span>support@naarirozgaar.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60">
          <p>&copy; 2025 Naari Rozgaar. All rights reserved.</p>
          <p className="text-sm mt-2">A college academic project demonstrating front-end development skills.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
