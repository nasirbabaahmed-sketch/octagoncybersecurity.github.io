import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Penetration Testing", href: "#services" },
    { name: "Digital Forensics", href: "#services" },
    { name: "Security Training", href: "#training" },
    { name: "Incident Response", href: "#services" },
    { name: "Consultation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#contact" },
    { name: "Blog", href: "#" },
  ],
  training: [
    { name: "Ethical Hacking", href: "#training" },
    { name: "Security Fundamentals", href: "#training" },
    { name: "Enterprise Training", href: "#training" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Octagon Cybersecurity" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Protecting Nigeria's digital infrastructure with world-class cybersecurity 
              solutions and training programs.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:info@octagoncybersecurity.ng"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@octagoncybersecurity.ng
              </a>
              <a 
                href="https://wa.me/2349076184107"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +234 907 618 4107
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>AP-B15 AMAC Plaza, Kabale Close, Off Sultan Abubakar Way, Wuse Zone 3, Abuja</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Octagon Cybersecurity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
