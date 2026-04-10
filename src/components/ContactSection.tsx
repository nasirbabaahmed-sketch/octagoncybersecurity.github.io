import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent('New Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nOrganization: ${formData.get('organization')}\nService Interest: ${formData.get('service')}\n\nMessage:\n${formData.get('message')}`
    );
    window.location.href = `mailto:info@octagoncybersecurity.ng?subject=${subject}&body=${body}`;
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-card" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Secure Your Future?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us for a free security consultation. Our experts are ready to help 
            protect your organization from cyber threats.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:info@octagoncybersecurity.ng"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      info@octagoncybersecurity.ng
                    </div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/2349076184107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone / WhatsApp</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      +234 907 618 4107
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-medium text-sm leading-relaxed">
                      AP-B15 AMAC Plaza, Kabale Close,<br />
                      Off Sultan Abubakar Way,<br />
                      Wuse Zone 3, Abuja
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-card rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-foreground">Quick Response</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 24 hours. For urgent security incidents, 
                call our hotline for immediate assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will contact you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input 
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <Input 
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Organization</label>
                      <Input 
                        name="organization"
                        placeholder="Your Company"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Interest</label>
                      <Input 
                        name="service"
                        placeholder="e.g., Penetration Testing"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send via Email
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="lg" 
                      className="flex-1 border-green-500/50 text-green-500 hover:bg-green-500/10 hover:border-green-500"
                      onClick={() => window.open('https://wa.me/2349076184107?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20cybersecurity%20services.', '_blank')}
                    >
                      <Phone className="h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
