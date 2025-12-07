import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '/assets/profile-photo.jpg';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-3xl blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-3xl blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-accent font-medium mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Abdelrhman Ashraf
            </h1>

            <h2 className="font-display text-2xl md:text-3xl font-semibold text-gradient mb-6">
              Data Scientist & AI Engineer
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl lg:max-w-lg mb-8 mx-auto lg:mx-0">
              Passionate about building intelligent systems, exploring AI agents, 
              and developing end-to-end ML solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              
            </div>
          </div>

          {/* Profile Image (Square, right side) */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-card-hover border-4 border-accent/20">
              <img
                src={profilePhoto}
                alt="Abdelrhman Ashraf - Data Scientist & ML Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
