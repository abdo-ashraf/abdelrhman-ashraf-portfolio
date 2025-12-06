import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
export function HeroSection() {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-card-hover border-4 border-accent/20 animate-pulse-glow">
              <img src={profilePhoto} alt="Abdelrhman Ashraf - Data Scientist & ML Engineer" className="w-full h-full object-cover" />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-accent/30 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent font-medium mb-3 animate-fade-in-up">
              👋 Hello, I'm
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up animation-delay-100">
              Abdelrhman Ashraf
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-gradient mb-6 animate-fade-in-up animation-delay-200">
              Data Scientist & Machine Learning Engineer
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-300">
              Passionate about building intelligent systems, exploring AI agents, 
              and developing end-to-end ML solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
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
    </section>;
}