import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

const SuccessStories = () => {
  const successStories = [
    {
      name: "Priya Sharma",
      role: "Customer Support Executive",
      story: "After years of searching, Naari Rozgaar helped me find a job that respects my time and values my skills. I'm now financially independent and proud!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Anita Verma",
      role: "Online Tutor",
      story: "Being a mother, I needed flexible work hours. Now I teach from home and earn well while taking care of my family. Thank you Naari Rozgaar!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Sunita Devi",
      role: "Tailoring Specialist",
      story: "I turned my tailoring skills into a career. The platform connected me with a boutique that appreciates quality work. My income has doubled!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Meena Kumari",
      role: "Data Entry Operator",
      story: "Coming from a small town, I never imagined working for a big company. Naari Rozgaar made it possible. I'm grateful every day!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Kavita Singh",
      role: "Content Writer",
      story: "My passion for writing became my profession. The verified jobs gave me confidence to apply, and now I write for a national publication!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Rekha Patel",
      role: "HR Assistant",
      story: "After my MBA, I struggled to find the right opportunity. This platform connected me with my dream company. Forever thankful!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real women, real success. Read inspiring stories from women who found meaningful employment through Naari Rozgaar.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProfileCard {...story} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Your Success Story Awaits
              </h2>
              <p className="text-muted-foreground mb-6">
                Join these inspiring women and write your own success story. Start your journey today.
              </p>
              <a
                href="/signup"
                className="inline-block px-8 py-4 rounded-lg btn-gradient text-lg"
              >
                Join Naari Rozgaar
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStories;
