import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20">
        <Shield className="h-20 w-20 text-primary" />
      </div>
      <div className="absolute bottom-1/3 right-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Lock className="h-16 w-16 text-primary" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float opacity-20" style={{ animationDelay: "4s" }}>
        <Eye className="h-12 w-12 text-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              CSEAN Award Nominee 2024
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Defending Your
            <span className="block text-gradient glow-text">Digital Frontier</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert cybersecurity solutions protecting Nigeria's critical infrastructure. 
            From penetration testing to digital forensics, we secure your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Start Your Security Assessment
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "100+", label: "Clients Protected" },
              { value: "500+", label: "Assessments Done" },
              { value: "24/7", label: "Incident Response" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
