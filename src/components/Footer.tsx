import { Heart, Github, Linkedin, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Abdelrhman. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/abdo-ashraf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abdelrhman-ashraf-a92683222/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abdoashraff185@gmail.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}