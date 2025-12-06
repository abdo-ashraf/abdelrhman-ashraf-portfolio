import { Brain, BarChart3, Eye, MessageSquare, Bot, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: 'Deep Learning Solutions',
    description: 'Custom neural network architectures tailored to your specific use case and data.',
  },
  {
    icon: MessageSquare,
    title: 'NLP & LLM Applications',
    description: 'Chatbots, text analysis, and language models fine-tuned for your domain.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image classification, object detection, and visual inspection systems.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Modeling',
    description: 'ML models for forecasting, recommendations, and business intelligence.',
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Autonomous agents powered by LLMs for complex task automation.',
  },
  {
    icon: Sparkles,
    title: 'ML Pipeline Design',
    description: 'End-to-end ML infrastructure with training, deployment, and monitoring.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
            Coming Soon
          </span>
          <h2 className="section-title mb-4">AI Model Development</h2>
          <p className="section-subtitle mx-auto">
            Custom ML and AI solutions to power your next project
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:-translate-y-2 bg-card border-border text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
