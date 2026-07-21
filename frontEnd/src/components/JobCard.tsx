import { MapPin, Briefcase, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  company: string;
  description: string;
}

const JobCard = ({ title, location, type, company, description }: JobCardProps) => {
  const handleApply = () => {
    toast({
      title: "Application Submitted! 🎉",
      description: `Your application for ${title} at ${company} has been received. We will contact you soon.`,
    });
  };

  return (
    <div className="card-gradient card-hover rounded-xl p-6 border border-border">
      <div className="mb-4">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} className="text-secondary" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Briefcase size={14} className="text-secondary" />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock size={14} className="text-secondary" />
          <span>Posted recently</span>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="w-full py-3 rounded-lg btn-gradient"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
