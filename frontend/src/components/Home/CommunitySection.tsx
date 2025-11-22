import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Heart, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Maria Schmidt",
    location: "Berlin",
    text: "Seit ich EcoTracker nutze, habe ich meinen CO₂-Ausstoß um 30% reduziert. Die Community motiviert mich jeden Tag!",
    points: 3200
  },
  {
    name: "Thomas Weber",
    location: "München",
    text: "Endlich macht Recycling Spaß! Die Belohnungen sind super und ich fühle mich gut dabei, etwas für die Umwelt zu tun.",
    points: 2840
  },
  {
    name: "Anna Müller",
    location: "Hamburg",
    text: "Die CO₂-Steuer Übersicht hat mir geholfen, bewusster zu leben. Kann ich nur empfehlen!",
    points: 2650
  }
];

const stats = [
  { label: "Aktive Nutzer", value: "25.000+", icon: <Users className="w-6 h-6" /> },
  { label: "Tonnen CO₂ gespart", value: "1.200", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Bäume gepflanzt", value: "5.400", icon: <Heart className="w-6 h-6" /> },
  { label: "Recycelt (Tonnen)", value: "840", icon: <MessageSquare className="w-6 h-6" /> }
];

export const CommunitySection = () => {
  return (
    <section id="community" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Unsere Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Werden Sie Teil einer wachsenden Gemeinschaft von über 25.000 Menschen, die aktiv für eine nachhaltige Zukunft kämpfen.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Was unsere Mitglieder sagen</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Punkte gesammelt</span>
                  <span className="font-bold text-primary">{testimonial.points}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Werden Sie Teil der Bewegung</h3>
            <p className="text-muted-foreground mb-6">
              Gemeinsam können wir mehr erreichen. Teilen Sie Ihre Erfolge, motivieren Sie andere und lernen Sie von der Community.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Jetzt der Community beitreten
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
