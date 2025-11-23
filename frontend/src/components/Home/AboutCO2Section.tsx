import { Card } from "./ui/card";
import { TrendingDown, Euro, Leaf, Info } from "lucide-react";

export const AboutCO2Section = () => {
  return (
    <section id="co2-info" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">CO₂-Steuer in Deutschland</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verstehen Sie, wie die CO₂-Bepreisung funktioniert und wie Sie Ihren ökologischen Fußabdruck reduzieren können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Was ist die CO₂-Steuer?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Die CO₂-Steuer ist eine Abgabe auf den Ausstoß von Kohlendioxid. Seit 2021 wird in Deutschland für fossile Brennstoffe wie Benzin, Diesel, Heizöl und Erdgas ein CO₂-Preis erhoben.
            </p>
            <p className="text-muted-foreground">
              Ziel ist es, klimaschädliche Emissionen zu verteuern und damit Anreize für klimafreundlicheres Verhalten zu schaffen. Der Preis liegt aktuell bei 45€ pro Tonne CO₂.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Euro className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Wie viel kostet es?</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="font-medium">1 Liter Benzin</span>
                <span className="text-primary font-bold">+0,12€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="font-medium">1 Liter Diesel</span>
                <span className="text-primary font-bold">+0,14€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="font-medium">1 Liter Heizöl</span>
                <span className="text-primary font-bold">+0,14€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="font-medium">1 kWh Erdgas</span>
                <span className="text-primary font-bold">+0,01€</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">So können Sie CO₂ sparen</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Mobilität</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Öffentliche Verkehrsmittel nutzen</li>
                <li>• Fahrrad fahren oder zu Fuß gehen</li>
                <li>• Fahrgemeinschaften bilden</li>
                <li>• Auf Elektromobilität umsteigen</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Wohnen</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Heizung auf 20°C reduzieren</li>
                <li>• Zu Ökostrom wechseln</li>
                <li>• Energieeffiziente Geräte nutzen</li>
                <li>• Wohnung gut isolieren</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Konsum</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Regional und saisonal einkaufen</li>
                <li>• Weniger Fleisch konsumieren</li>
                <li>• Produkte reparieren statt wegwerfen</li>
                <li>• Bewusst recyceln</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl p-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Jeder Schritt zählt</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Durch bewusstes Handeln können Sie nicht nur Ihre CO₂-Steuer senken, sondern auch aktiv zum Klimaschutz beitragen. Gemeinsam schaffen wir eine nachhaltige Zukunft!
          </p>
        </div>
      </div>
    </section>
  );
};
