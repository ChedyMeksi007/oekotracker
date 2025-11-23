import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Trophy, Medal, Award } from "lucide-react";

const leaders = [
  { name: "Max Mustermann", points: 2850, recycled: 285, rank: 1 },
  { name: "Anna Schmidt", points: 2640, recycled: 264, rank: 2 },
  { name: "Thomas Weber", points: 2420, recycled: 242, rank: 3 },
  { name: "Sarah Meyer", points: 2190, recycled: 219, rank: 4 },
  { name: "Michael Klein", points: 2050, recycled: 205, rank: 5 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-5 h-5 text-yellow-500" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Award className="w-5 h-5 text-amber-700" />;
    default:
      return <span className="text-muted-foreground font-semibold">#{rank}</span>;
  }
};

export const Leaderboard = () => {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6">Bestenliste</h3>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div
            key={leader.name}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 flex justify-center">
                {getRankIcon(leader.rank)}
              </div>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{leader.name}</p>
                <p className="text-sm text-muted-foreground">{leader.recycled} kg recycelt</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{leader.points}</p>
              <p className="text-xs text-muted-foreground">Punkte</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
