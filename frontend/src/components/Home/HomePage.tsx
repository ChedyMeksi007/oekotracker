import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Leaf, TrendingUp, Gift, Users } from "lucide-react";
import { WasteTracker } from "./WasteTracker";
import { CO2Calculator } from "./CO2Calculator";
import { StatsChart } from "./StatsChart";
import { Leaderboard } from "./Leaderboard";
import { RewardsSection } from "./RewardsSection";
import { CommunitySection } from "./CommunitySection";
import { AboutCO2Section } from "./AboutCO2Section";
import { AboutUsSection } from "./AboutUsSection";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero-eco.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Für eine grünere Zukunft</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ÖkoTracker Deutschland
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Verfolgen Sie Ihre CO₂-Steuer, sammeln Sie Recycling-Punkte und tragen Sie zu einer nachhaltigen Zukunft bei
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              onClick={handleGetStarted}
            >
              Jetzt starten
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('features')}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card 
              className="p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => scrollToSection('co2-calculator')}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">CO₂ Tracking</h3>
              <p className="text-muted-foreground">
                Berechnen Sie Ihre monatliche CO₂-Belastung und optimieren Sie Ihren ökologischen Fußabdruck
              </p>
            </Card>

            <Card 
              className="p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => scrollToSection('waste-tracker')}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Müll Tracker</h3>
              <p className="text-muted-foreground">
                Scannen Sie QR-Codes, dokumentieren Sie Ihr Recycling und sammeln Sie wertvolle Punkte
              </p>
            </Card>

            <Card 
              className="p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => scrollToSection('rewards')}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Gift className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Belohnungen</h3>
              <p className="text-muted-foreground">
                Sammeln Sie Punkte für jedes Kilogramm recycelten Müll und erhalten Sie tolle Prämien
              </p>
            </Card>

            <Card 
              className="p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => scrollToSection('community')}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Vergleichen Sie Ihre Leistung mit anderen und motivieren Sie sich gegenseitig
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About CO2 Section */}
      <AboutCO2Section />

      {/* CO2 Calculator Section */}
      <section id="co2-calculator" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">CO₂-Steuer Rechner</h2>
            <p className="text-xl text-muted-foreground">
              Berechnen Sie Ihre geschätzte CO₂-Steuer für Deutschland
            </p>
          </div>
          <CO2Calculator />
        </div>
      </section>

      {/* Rewards Section */}
      <RewardsSection />

      {/* Waste Tracker Section */}
      <section id="waste-tracker" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Müll-Tracker</h2>
            <p className="text-xl text-muted-foreground">
              Erfassen Sie Ihr Recycling und sammeln Sie Punkte
            </p>
          </div>
          <WasteTracker />
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ihre Fortschritte & Bestenliste</h2>
            <p className="text-xl text-muted-foreground">
              Verfolgen Sie Ihre Entwicklung und vergleichen Sie sich mit anderen
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <StatsChart />
            <Leaderboard />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold text-primary">ÖkoTracker</span>
          </div>
          <p className="text-muted-foreground">
            Gemeinsam für eine nachhaltige Zukunft in Deutschland
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
