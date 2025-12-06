import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Vulnerability Analyzer Agent',
    description: 'FastAPI-based agent using LangChain & LLMs to convert unstructured vulnerability text into structured Pydantic models. Features Dockerized deployment and Google Search enrichment pipeline.',
    tags: ['FastAPI', 'LangChain', 'LLMs', 'Docker'],
    github: 'https://github.com/abdo-ashraf',
  },
  {
    title: 'Excel Jobs Data Analytics Dashboard',
    description: 'End-to-end data analytics pipeline using Power Query ETL, Power Pivot modeling, DAX, and dynamic dashboards analyzing global data-jobs trends.',
    tags: ['Power Query', 'Power Pivot', 'DAX', 'Analytics'],
    github: 'https://github.com/abdo-ashraf',
  },
  {
    title: 'Gemma-3 RL Fine-Tuning Pipeline',
    description: 'Reinforcement learning fine-tuning pipeline for Gemma-3-1B using GRPO & LoRA, optimized for memory efficiency and performance.',
    tags: ['PyTorch', 'RL', 'LoRA', 'GRPO'],
    github: 'https://github.com/abdo-ashraf',
  },
  {
    title: 'GPU Optimization Framework',
    description: 'Comprehensive framework implementing mixed precision training, Torch Compile, and memory optimization techniques for faster model training.',
    tags: ['PyTorch', 'CUDA', 'Optimization'],
    github: 'https://github.com/abdo-ashraf',
  },
  {
    title: 'NMT Multi-Model Training',
    description: 'Neural Machine Translation framework supporting multiple model architectures with unified training pipeline and evaluation metrics.',
    tags: ['NLP', 'Transformers', 'PyTorch'],
    github: 'https://github.com/abdo-ashraf',
  },
  {
    title: 'Image Classification & Localization',
    description: 'Deep learning model for simultaneous image classification and object localization with custom loss functions and augmentation strategies.',
    tags: ['Computer Vision', 'CNN', 'TensorFlow'],
    github: 'https://github.com/abdo-ashraf',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work in machine learning and AI
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:-translate-y-2 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Details
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
