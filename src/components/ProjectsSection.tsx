"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Vulnerability Analyzer Agent",
    description:
      "FastAPI-based agent using LangChain & LLMs to convert unstructured vulnerability text into structured Pydantic models. Features Dockerized deployment and Google Search enrichment pipeline.",
    tags: ["FastAPI", "LangChain", "LLMs", "Docker"],
    github: "https://github.com/abdo-ashraf/Vulnerability-Analyzer-Agent",
    image: "/projects/vuln-agent.png", // <-- add your real image
  },
  {
    title: "Excel Jobs Data Analytics Dashboard",
    description:
      "End-to-end data analytics pipeline using Power Query ETL, Power Pivot modeling, DAX, and dynamic dashboards analyzing global data-jobs trends.",
    tags: ["Power Query", "Power Pivot", "DAX", "Analytics"],
    github: "https://github.com/abdo-ashraf/Excel-Jobs-Data-Analytics-project",
    image: "/projects/excel-dashboard.png",
  },
  {
    title: "Gemma-3 RL Fine-Tuning Pipeline",
    description:
      "Reinforcement learning fine-tuning pipeline for Gemma-3-1B using GRPO & LoRA, optimized for memory efficiency and performance.",
    tags: ["PyTorch", "RL", "LoRA", "GRPO"],
    github: "https://github.com/abdo-ashraf/Gemma-3-RL-Finetuning",
    image: "/projects/gemma.png",
  },
  {
    title: "GPU Optimization Framework",
    description:
      "Framework implementing mixed precision training, Torch Compile, and memory optimization techniques for faster model training.",
    tags: ["PyTorch", "CUDA", "Optimization"],
    github:
      "https://github.com/abdo-ashraf/Optimizing-GPU-Utilization-at-Training",
    image: "/projects/gpu-opt.png",
  },
  {
    title: "NMT Multi-Model Training",
    description:
      "Neural Machine Translation framework supporting multiple model architectures with unified training pipeline and evaluation metrics.",
    tags: ["NLP", "Transformers", "PyTorch"],
    github:
      "https://github.com/abdo-ashraf/NMT-MultiModel-Training-Framework",
    image: "/projects/nmt.png",
  },
  {
    title: 'Image Classification & Localization',
    description:
      "Deep learning model for simultaneous image classification and object localization with custom loss functions and augmentation strategies.",
    tags: ['Computer Vision', 'CNN', 'TensorFlow'],
    github: 'http://www.github.com/abdo-ashraf/Image-Classification-with-localization',
    image: "/projects/localization.png"
  }
  ];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="group hover:-translate-y-2 bg-card border-border cursor-pointer transition-transform"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  {/* Image */}
                  <div className="w-full h-40 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

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
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
