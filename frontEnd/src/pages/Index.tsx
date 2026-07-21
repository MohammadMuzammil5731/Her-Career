import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-women.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Verified Jobs",
      description: "All job listings are carefully verified to ensure a safe working environment for women.",
    },
    {
      icon: Briefcase,
      title: "Diverse Opportunities",
      description: "From work-from-home to full-time positions, find roles that match your skills and lifestyle.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join thousands of women who have found meaningful employment through our platform.",
    },
    {
      icon: Star,
      title: "Career Growth",
      description: "Access resources and opportunities to grow professionally and achieve your goals.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empowering <span className="text-gradient">Women</span> Through Employment
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Her Career connects talented women with safe, reliable job opportunities. 
                Start your journey to professional success today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-gradient text-lg"
                >
                  Find Jobs
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors text-lg"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Women professionals"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">Naari Rozgaar</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              We are dedicated to bridging the gap between talented women and quality employment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-gradient card-hover rounded-xl p-6 border border-border text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">5000+</p>
              <p className="text-background/70">Women Employed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</p>
              <p className="text-background/70">Partner Companies</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</p>
              <p className="text-background/70">Cities Covered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</p>
              <p className="text-background/70">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of women who have transformed their lives through meaningful employment.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-gradient text-lg"
          >
            Create Your Account
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
