import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Car, Home, Plane, TrendingDown } from "lucide-react";

export const CO2Calculator = () => {
  const [carKm, setCarKm] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [flights, setFlights] = useState(0);

  // CO2 Steuer rates (approximate for Germany 2024)
  const co2Rate = 45; // €45 per ton CO2
  
  // Emission factors
  const carEmission = 0.12; // kg CO2 per km
  const electricityEmission = 0.4; // kg CO2 per kWh
  const flightEmission = 250; // kg CO2 per flight (average)

  const totalEmissions = (
    (carKm * carEmission) +
    (electricity * electricityEmission) +
    (flights * flightEmission)
  ) / 1000; // Convert to tons

  const co2Tax = totalEmissions * co2Rate;

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">CO₂-Steuer Rechner</h3>
        <p className="text-muted-foreground">Berechnen Sie Ihre monatliche CO₂-Belastung</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <Label htmlFor="car" className="flex items-center gap-2">
            <Car className="w-4 h-4 text-primary" />
            Auto (km/Monat)
          </Label>
          <Input
            id="car"
            type="number"
            value={carKm || ""}
            onChange={(e) => setCarKm(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="electricity" className="flex items-center gap-2">
            <Home className="w-4 h-4 text-primary" />
            Strom (kWh/Monat)
          </Label>
          <Input
            id="electricity"
            type="number"
            value={electricity || ""}
            onChange={(e) => setElectricity(Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="flights" className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-primary" />
            Flüge/Monat
          </Label>
          <Input
            id="flights"
            type="number"
            value={flights || ""}
            onChange={(e) => setFlights(Number(e.target.value))}
            placeholder="0"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-lg bg-secondary">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <TrendingDown className="w-5 h-5" />
            <span className="text-sm font-medium">CO₂-Emissionen</span>
          </div>
          <p className="text-3xl font-bold text-foreground">
            {totalEmissions.toFixed(2)} <span className="text-lg">Tonnen</span>
          </p>
        </div>

        <div className="p-6 rounded-lg bg-primary text-primary-foreground">
          <p className="text-sm font-medium mb-2 opacity-90">Geschätzte CO₂-Steuer</p>
          <p className="text-3xl font-bold">
            {co2Tax.toFixed(2)} <span className="text-lg">€/Monat</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
