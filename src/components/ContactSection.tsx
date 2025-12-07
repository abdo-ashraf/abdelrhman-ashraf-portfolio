import { Mail, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdoashraff185@gmail.com',
    href: 'mailto:abdoashraff185@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/abdo-ashraf',
    href: 'https://github.com/abdo-ashraf',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdelrhman-ashraf',
    href: 'https://linkedin.com/in/abdelrhman-ashraf-a92683222/',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Info - Centered */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground truncate">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label} className="h-full">{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto min-w-[160px]"
              >
                <a href="mailto:abdoashraff185@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Say Hello
                </a>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto min-w-[160px]"
              >
                <a 
                  href="https://drive.google.com/drive/folders/11jma4YwgByDFfDdNzRF9AzpQecYq0GYM?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}