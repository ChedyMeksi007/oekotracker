import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plus, Minus, Trash2, Recycle, Wine, FileText, QrCode, Camera, Gift } from "lucide-react";
import { useState } from "react";

interface WasteCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  amount: number;
  points: number;
  color: string;
}

export const WasteTracker = () => {
  const [categories, setCategories] = useState<WasteCategory[]>([
    { id: "plastic", name: "Plastik", icon: <Recycle className="w-6 h-6" />, amount: 0, points: 10, color: "bg-blue-500" },
    { id: "paper", name: "Papier", icon: <FileText className="w-6 h-6" />, amount: 0, points: 5, color: "bg-amber-500" },
    { id: "glass", name: "Glas", icon: <Wine className="w-6 h-6" />, amount: 0, points: 8, color: "bg-green-600" },
    { id: "organic", name: "Biomüll", icon: <Trash2 className="w-6 h-6" />, amount: 0, points: 3, color: "bg-emerald-600" },
  ]);

  const updateAmount = (id: string, delta: number) => {
    setCategories(cats =>
      cats.map(cat =>
        cat.id === id ? { ...cat, amount: Math.max(0, cat.amount + delta) } : cat
      )
    );
  };

  const totalPoints = categories.reduce((sum, cat) => sum + cat.amount * cat.points, 0);

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20 shadow-sm">
        <div className="flex items-start gap-6">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center flex-shrink-0">
              <QrCode className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-lg flex items-center justify-center flex-shrink-0">
              <Camera className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">So funktioniert's</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0 mt-0.5">1</span>
                <span><strong className="text-foreground">QR-Code scannen:</strong> Scannen Sie den QR-Code am Recycling-Container</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0 mt-0.5">2</span>
                <span><strong className="text-foreground">Foto machen:</strong> Machen Sie ein Foto Ihres recycelten Mülls</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0 mt-0.5">3</span>
                <span><strong className="text-foreground">Punkte sammeln:</strong> Erhalten Sie automatisch Punkte basierend auf der Menge und Art</span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <Card 
            key={category.id} 
            className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
            <div className="relative p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-4 rounded-2xl ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Punkte</div>
                  <div className="text-lg font-bold text-primary">{category.points}/kg</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              
              <div className="py-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.amount}
                  <span className="text-lg ml-1 text-muted-foreground">kg</span>
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => updateAmount(category.id, -1)}
                  className="flex-1 hover:bg-destructive/10 hover:text-destructive hover:border-destructive transition-all duration-300"
                  disabled={category.amount === 0}
                >
                  <Minus className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => updateAmount(category.id, 1)}
                  className={`flex-1 ${category.color} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="relative overflow-hidden border-0 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="relative p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>Gesamtpunkte</span>
              </div>
              <div className="text-6xl font-bold text-primary-foreground animate-fade-in">
                {totalPoints}
              </div>
              <p className="text-primary-foreground/70 text-sm">Bereit zum Einlösen</p>
            </div>
            <div className="space-y-2 md:text-right">
              <div className="flex md:justify-end items-center gap-2 text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
                <Recycle className="w-4 h-4" />
                <span>Gesamt recycelt</span>
              </div>
              <div className="text-5xl font-bold text-primary-foreground">
                {categories.reduce((sum, cat) => sum + cat.amount, 0)}
                <span className="text-2xl ml-2 text-primary-foreground/80">kg</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">CO₂ eingespart</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
