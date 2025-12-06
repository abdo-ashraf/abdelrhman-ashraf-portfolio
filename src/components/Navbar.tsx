import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/' && href.startsWith('#')) {
      e.preventDefault();
      window.location.href = '/' + href;
      return;
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-card/80 backdrop-blur-lg border-b border-border shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="AA Logo" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-foreground">
            Abdelrhman<span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/projects" className="nav-link text-sm font-medium">
              All Projects
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Hire Me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/projects"
              className="block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Projects
            </Link>
          </li>
          <li className="pt-2">
            <Button variant="hero" className="w-full" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Hire Me</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
