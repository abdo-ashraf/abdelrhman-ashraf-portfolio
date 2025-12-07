"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";
const projects = [{
  title: "Vulnerability Analyzer Agent",
  description: "An agent using LangChain to convert unstructured vulnerability text into structured output. Features Dockerized deployment and Google Search pipeline.",
  tags: ["FastAPI", "LangChain", "LLMs", "Docker"],
  link: "https://github.com/abdo-ashraf/Vulnerability-Analyzer-Agent",
  image: "src/assets/projects/vuln-agent.png"
}, {
  title: "Excel Jobs Data Analytics Dashboard",
  description: "End-to-end data analytics pipeline using Power Query ETL, Power Pivot modeling, DAX, and dynamic dashboards analyzing global data-jobs trends.",
  tags: ["Power Query", "Power Pivot", "DAX", "Analytics"],
  link: "https://github.com/abdo-ashraf/Excel-Jobs-Data-Analytics-project",
  image: "src/assets/projects/excel-dashboard.png"
}, {
  title: "Gemma-3 RL Fine-Tuning Pipeline",
  description: "Reinforcement learning fine-tuning pipeline for Gemma-3-1B using GRPO & LoRA, optimized for memory efficiency and performance.",
  tags: ["PyTorch", "RL", "LoRA", "GRPO"],
  link: "https://github.com/abdo-ashraf/Gemma-3-RL-Finetuning",
  image: "src/assets/projects/gemma.png"
}, {
  title: "GPU Optimization Framework",
  description: "Framework implementing mixed precision training, Torch Compile, and memory optimization techniques for faster model training.",
  tags: ["PyTorch", "CUDA", "Optimization"],
  link: "https://github.com/abdo-ashraf/Optimizing-GPU-Utilization-at-Training",
  image: "src/assets/projects/gpu-opt.png"
}, {
  title: "NMT Multi-Model Training",
  description: "Neural Machine Translation framework supporting multiple model architectures with unified training pipeline and evaluation metrics.",
  tags: ["NLP", "Transformers", "PyTorch"],
  link: "https://github.com/abdo-ashraf/NMT-MultiModel-Training-Framework",
  image: "src/assets/projects/nmt.png"
}, {
  title: "Image Classification & Localization",
  description: "Deep learning model for simultaneous image classification and object localization with custom loss functions and augmentation strategies.",
  tags: ["Computer Vision", "CNN", "TensorFlow"],
  link: "http://www.github.com/abdo-ashraf/Image-Classification-with-localization",
  image: "src/assets/projects/localization.png"
}];
export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of my recent work in machine learning and AI
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal delay={0.1}>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" transition={{
          duration: 0.4
        }}>
            <AnimatePresence>
              {visibleProjects.map((project, index) => <motion.div key={project.title} layout initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              delay: index * 0.05
            }}>
                  <Card className="group hover:-translate-y-2 bg-card border-border cursor-pointer transition-transform" onClick={() => window.open(project.link, "_blank")}>
                    {/* Image wrapper with overlay icon */}
                    <div className="w-full h-60 overflow-hidden rounded-t-xl relative">
                      <img src={project.image} alt={project.title} className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-contain" />

                      {/* GitHub overlay bottom-left */}
                      <div className="absolute bottom-2 left-2 bg-black/70 p-2 rounded-lg">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                            {tag}
                          </span>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* View More Button */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(!showAll)} className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition">
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>;
}