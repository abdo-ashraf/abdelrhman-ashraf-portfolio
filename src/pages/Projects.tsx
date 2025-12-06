import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const allProjects = [
  {
    title: 'Vulnerability Analyzer Agent',
    description: 'FastAPI-based agent using LangChain & LLMs to convert unstructured vulnerability text into structured Pydantic models. Features Dockerized deployment and Google Search enrichment pipeline.',
    tags: ['FastAPI', 'LangChain', 'LLMs', 'Docker'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'Excel Jobs Data Analytics Dashboard',
    description: 'End-to-end data analytics pipeline using Power Query ETL, Power Pivot modeling, DAX, and dynamic dashboards analyzing global data-jobs trends.',
    tags: ['Excel', 'Power Query', 'DAX', 'Analytics'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'Gemma-3 RL Fine-Tuning Pipeline',
    description: 'Reinforcement learning fine-tuning pipeline for Gemma-3-1B using GRPO & LoRA, optimized for memory efficiency and performance.',
    tags: ['PyTorch', 'RL', 'LoRA', 'GRPO'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'GPU Optimization Framework',
    description: 'Comprehensive framework for GPU optimization including mixed precision training, Torch Compile, and memory management strategies.',
    tags: ['CUDA', 'PyTorch', 'Optimization'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'NMT Multi-Model Training Framework',
    description: 'Neural Machine Translation framework supporting multiple model architectures with unified training pipeline and evaluation metrics.',
    tags: ['NLP', 'Transformers', 'PyTorch'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'Image Classification & Localization',
    description: 'Deep learning model for simultaneous image classification and object localization with custom loss functions and data augmentation.',
    tags: ['CNN', 'Computer Vision', 'TensorFlow'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'Speech Recognition System',
    description: 'End-to-end automatic speech recognition system using deep learning with attention mechanisms and CTC loss.',
    tags: ['ASR', 'Deep Learning', 'Audio'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
  {
    title: 'Malware Detection Model',
    description: 'Machine learning-based malware detection system using static and dynamic analysis features with ensemble methods.',
    tags: ['Security', 'ML', 'Classification'],
    github: 'https://github.com/abdo-ashraf',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Link 
              to="/" 
              className="inline-flex items-center text-accent hover:text-accent/80 mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of my work in machine learning, AI, and data science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Screenshot Placeholder */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Screenshot Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
