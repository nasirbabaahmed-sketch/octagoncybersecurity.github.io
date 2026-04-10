import { 
  Shield, 
  Search, 
  FileSearch, 
  Users, 
  Server, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Simulating real-world attacks to identify vulnerabilities before malicious actors exploit them.",
    features: ["Network Testing", "Web App Security", "Social Engineering"],
  },
  {
    icon: FileSearch,
    title: "Digital Forensics",
    description: "Specialized investigations for legal and corporate clients with complete discretion and data integrity.",
    features: ["Incident Analysis", "Evidence Recovery", "Legal Support"],
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "Educating your workforce to recognize and mitigate cybersecurity threats effectively.",
    features: ["Phishing Simulations", "Policy Training", "Compliance"],
  },
  {
    icon: Server,
    title: "Security Architecture",
    description: "Comprehensive assessment and redesign of your security infrastructure for optimal protection.",
    features: ["Risk Assessment", "Policy Design", "Implementation"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response and recovery services when security incidents occur. 24/7 availability.",
    features: ["24/7 Support", "Containment", "Recovery Planning"],
  },
  {
    icon: Shield,
    title: "Consultation Services",
    description: "Expert advice on computer security, litigation support, and digital forensics strategy.",
    features: ["Strategy Planning", "Compliance Audits", "Risk Management"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Security Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From vulnerability assessments to incident response, we provide end-to-end 
            cybersecurity services tailored to your organization's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="absolute inset-0 w-14 h-14 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
