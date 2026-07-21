import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      title: "House Maid",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      description: "Cleaning house, washing clothes, and helping in kitchen work.....",
    },
    {
      title: "Cleaning Staff",
      company: "ServiceFirst India",
      location: "Mumbai, Maharashtra",
      type: "Full Time / Part Time",
      description: "Office cleaning, dusting, and maintaining cleanliness...",
    },
    {
      title: "Tailoring Work",
      company: "FashionHub",
      location: "Delhi NCR",
      type: "Part-time",
      description: "Skilled tailors needed for boutique work. Flexible hours and work-from-home options available...",
    },
    {
      title: "Babysitter",
      location: "Pune, Maharashtra",
      type: "Full Time",
      description: "Taking care of children, feeding, and playing with them...",
    },
    {
      title: " Home Cook",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      description: "Cooking food for family and helping in kitchen work...",
    },
    {
      title: "Factory Helper",
      location: " Delhi NCR",
      type: "Full-time",
      description: "Packing products and helping in small factory work...",
    },
    {
      title: "Pen Packing Worker",
      location: "Hyderabad, Telangana",
      type: "Full Time / Work From Home",
      description: "Packing pens into boxes and sealing them properly...",
    },
    {
      title: "Product Packing Helper",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      description: "Packing small products like toys, clips, and household items...",
    },
    {
      title: "Small Items Packing Worker",
      location: "Ahmedabad, Gujarat",
      type: "Work From Home / Full Time",
      description: "Packing bindis, clips, rubber bands, and small items...",
    },
    {
      title: "Shop Helper",
      location: "Bhopal, Madhya Pradesh",
      type: "Full-time",
      description: "Assisting customers and arranging items in grocery store...",
    },
    {
      title: "Kitchen Assistant",
      location: "Coimbatore, Tamil Nadu",
      type: "Full-time",
      description: "Cutting vegetables, cleaning utensils, and helping main cook...",
    },
     {
      title: "Hotel Housekeeping Staff",
      location: "Goa, Goa",
      type: "Full-time",
      description: "Cleaning rooms, changing bedsheets, and assisting hotel guests...",
    },
    
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your <span className="text-gradient">Dream Job</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore verified job opportunities designed for women. Safe, reliable, and empowering.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by job title, company, or location..."
                className="w-full px-5 py-4 pl-12 rounded-xl border border-border bg-card shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <JobCard {...job} />
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No jobs found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
