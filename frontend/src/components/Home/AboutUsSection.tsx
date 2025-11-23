import { Card } from "./ui/card";
import { Leaf, Target, Users, Heart, GraduationCap } from "lucide-react";
import tuBerlinLogo from "../../assets/tu-berlin-logo.png";
import htwBerlinLogo from "../../assets/htw-berlin-logo.png";

export const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Über uns</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ÖkoTracker Deutschland ist Ihre digitale Plattform für ein nachhaltigeres Leben
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Unsere Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir möchten jeden Haushalt in Deutschland dabei unterstützen, seinen CO₂-Fußabdruck 
                  zu verstehen und aktiv zu reduzieren. Mit innovativen digitalen Lösungen machen wir 
                  Nachhaltigkeit messbar, erreichbar und belohnend.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Unsere Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eine Zukunft, in der jeder Bürger die Werkzeuge und Motivation hat, um aktiv 
                  zum Umweltschutz beizutragen. Durch Gamification und Community-Engagement 
                  verwandeln wir umweltfreundliches Verhalten in eine positive, lohnende Erfahrung.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Warum ÖkoTracker?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die CO₂-Steuer ist Realität in Deutschland, aber viele Bürger verstehen nicht genau, 
                wie sie sich auf ihren Alltag auswirkt. Gleichzeitig wird Recycling oft als mühsam empfunden, 
                ohne dass die positiven Auswirkungen sichtbar werden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ÖkoTracker schließt diese Lücke: Wir zeigen Ihnen transparent Ihre CO₂-Kosten, 
                belohnen Ihr Recycling-Engagement mit echten Prämien und verbinden Sie mit einer 
                Community von Gleichgesinnten. So wird Umweltschutz nicht nur zur Pflicht, 
                sondern zu einer motivierenden Gemeinschaftsaufgabe.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Unser Team</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Skander Rezgui</h4>
                  <p className="text-muted-foreground mb-3">
                    Bachelor Elektrotechnik und Automatisierungstechnik
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <img src={tuBerlinLogo} alt="TU Berlin" className="w-5 h-5 object-contain" />
                    <span>Technische Universität Berlin</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Keanu Han</h4>
                  <p className="text-muted-foreground mb-3">
                    Bachelor Computer Engineering
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <img src={htwBerlinLogo} alt="HTW Berlin" className="w-5 h-5 object-contain" />
                    <span>Hochschule für Technik und Wirtschaft Berlin</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
