import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Certified Ethical Hacking",
    duration: "3 Months",
    level: "Advanced",
    description: "Master offensive security techniques and become a certified ethical hacker capable of identifying vulnerabilities.",
    topics: ["Network Exploitation", "Web App Hacking", "Social Engineering", "Malware Analysis"],
    popular: true,
  },
  {
    title: "Cybersecurity Fundamentals",
    duration: "3 Months",
    level: "Beginner",
    description: "Comprehensive introduction to cybersecurity concepts, tools, and best practices for aspiring professionals.",
    topics: ["Security Basics", "Threat Landscape", "Defense Strategies", "Incident Handling"],
    popular: false,
  },
  {
    title: "Enterprise Security Awareness",
    duration: "3 Months",
    level: "All Levels",
    description: "Tailored program for organizations to build a security-conscious workforce and reduce human-factor risks.",
    topics: ["Phishing Defense", "Data Protection", "Compliance", "Secure Practices"],
    popular: false,
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Training</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your <span className="text-gradient">Cyber Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Bridge the cybersecurity skills gap with our industry-recognized training programs.
              Learn from active practitioners and gain hands-on experience.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              View All Courses <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                course.popular 
                  ? "bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                  : "glass-card hover-glow"
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Topics */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-3 text-foreground/80">What you'll learn:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {course.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant={course.popular ? "hero" : "outline"} 
                className="w-full"
                asChild
              >
                <a href="#contact">
                  Enroll Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl glass-card">
          {[
            { icon: Users, value: "200+", label: "Graduates" },
            { icon: Award, value: "95%", label: "Success Rate" },
            { icon: BookOpen, value: "15+", label: "Course Modules" },
            { icon: Clock, value: "1000+", label: "Training Hours" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
