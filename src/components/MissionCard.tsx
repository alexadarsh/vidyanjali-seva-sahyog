
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MissionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  gradient: "shakti-gradient" | "vatsalya-gradient" | "saksham-gradient";
}

const MissionCard = ({ title, description, icon, link, gradient }: MissionCardProps) => {
  return (
    <Card className="mission-card border-2 hover:border-primary h-full flex flex-col">
      <div className={`${gradient} h-2 w-full rounded-t-md`}></div>
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 rounded-full ${gradient} flex items-center justify-center text-white`}>
            {icon}
          </div>
        </div>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 list-disc list-inside text-sm">
          {title === "Mission Shakti" && (
            <>
              <li>Women's Safety & Empowerment</li>
              <li>Gender-based Violence Prevention</li>
              <li>Economic Independence</li>
            </>
          )}
          {title === "Mission Vatsalya" && (
            <>
              <li>Child Protection & Welfare</li>
              <li>Adoption Services</li>
              <li>Child Care Institutions</li>
            </>
          )}
          {title === "Mission Saksham" && (
            <>
              <li>Vocational Skills Training</li>
              <li>Financial Literacy</li>
              <li>Entrepreneurship Development</li>
            </>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MissionCard;
