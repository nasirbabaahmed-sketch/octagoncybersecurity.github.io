import { Shield, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We handle all engagements with complete discretion and maintain the highest ethical standards.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Our team stays ahead of emerging threats through continuous learning and research.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside your team, not just for you, building lasting security capabilities.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Pioneering new approaches to protect Nigeria's critical digital infrastructure.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary">About Octagon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nigeria's Trusted <span className="text-gradient">Cyber Defenders</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Octagon Cybersecurity was founded with a singular mission: to bridge the cybersecurity 
              skills gap and protect Nigeria's critical infrastructure from evolving digital threats.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team comprises experienced security professionals with backgrounds in offensive 
              security, digital forensics, and enterprise defense. We've helped organizations across 
              finance, healthcare, government, and education sectors strengthen their security posture.
            </p>

            {/* Award Badge */}
            <div className="inline-flex items-center gap-4 p-4 rounded-xl glass-card border border-primary/30">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">CSEAN Cybersecurity Awards 2024</div>
                <div className="text-sm text-muted-foreground">Nominated for Cyber Startup of the Year</div>
              </div>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 hover-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 tracking-widest uppercase">
            Our Partners & Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/partners/client-1.png" alt="Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/partners/client-2.png" alt="Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/partners/client-3.png" alt="Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/partners/client-8.png" alt="Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            <img src="/partners/partner-a.png" alt="Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
