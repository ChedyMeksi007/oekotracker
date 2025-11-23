import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Gift, Star, Trophy, Zap } from "lucide-react";

const rewards = [
  {
    title: "Bronze Belohnung",
    points: 500,
    icon: <Zap className="w-8 h-8" />,
    description: "5€ Gutschein für Bio-Läden",
    color: "bg-amber-700"
  },
  {
    title: "Silber Belohnung",
    points: 1000,
    icon: <Star className="w-8 h-8" />,
    description: "10€ Rabatt auf Ökostrom",
    color: "bg-gray-400"
  },
  {
    title: "Gold Belohnung",
    points: 2000,
    icon: <Trophy className="w-8 h-8" />,
    description: "Baumpflanzung in Ihrem Namen",
    color: "bg-yellow-500"
  },
  {
    title: "Platin Belohnung",
    points: 5000,
    icon: <Gift className="w-8 h-8" />,
    description: "50€ für nachhaltige Produkte",
    color: "bg-primary"
  }
];

export const RewardsSection = () => {
  return (
    <section id="rewards" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Belohnungen & Prämien</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Je mehr Sie recyceln, desto mehr Punkte sammeln Sie. Tauschen Sie Ihre Punkte gegen tolle Prämien und nachhaltige Produkte ein.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewards.map((reward) => (
            <Card key={reward.title} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${reward.color} text-white flex items-center justify-center`}>
                {reward.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{reward.title}</h3>
              <p className="text-center text-muted-foreground mb-4">{reward.description}</p>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">{reward.points}</span>
                <span className="text-sm text-muted-foreground"> Punkte</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">So funktioniert das Punktesystem</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-semibold mb-2">1. Recyceln</p>
                <p className="text-sm opacity-90">Trennen Sie Ihren Müll und bringen Sie ihn zu den Sammelstellen</p>
              </div>
              <div>
                <p className="font-semibold mb-2">2. Punkte sammeln</p>
                <p className="text-sm opacity-90">Erfassen Sie Ihr Recycling und erhalten Sie automatisch Punkte</p>
              </div>
              <div>
                <p className="font-semibold mb-2">3. Belohnungen einlösen</p>
                <p className="text-sm opacity-90">Tauschen Sie Ihre Punkte gegen nachhaltige Prämien ein</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
