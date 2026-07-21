import { Quote } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  story: string;
  image: string;
}

const ProfileCard = ({ name, role, story, image }: ProfileCardProps) => {
  return (
    <div className="card-gradient card-hover rounded-xl p-6 border border-border text-center">
      <div className="relative mb-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Quote size={14} className="text-secondary-foreground" />
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{role}</p>

      <p className="text-muted-foreground text-sm italic leading-relaxed">"{story}"</p>
    </div>
  );
};

export default ProfileCard;
