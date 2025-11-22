import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", recycled: 45, co2: 2.1 },
  { month: "Feb", recycled: 52, co2: 1.9 },
  { month: "Mär", recycled: 61, co2: 1.7 },
  { month: "Apr", recycled: 58, co2: 1.8 },
  { month: "Mai", recycled: 70, co2: 1.5 },
  { month: "Jun", recycled: 75, co2: 1.4 },
];

export const StatsChart = () => {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6">Ihre Fortschritte</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px"
            }}
          />
          <Legend />
          <Bar dataKey="recycled" fill="hsl(var(--primary))" name="Recycelt (kg)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="co2" fill="hsl(var(--accent))" name="CO₂ (Tonnen)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
