import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ScrollReveal';

interface Course {
  title: string;
  instructor: string;
  link: string;
  platform: string;
  icon: string | null;
  status?: 'ongoing' | 'planned' | 'completed';
}

const courses: Course[] = [
  {
    title: "Machine Learning Systems Book",
    instructor: "Vijay Janapa Reddi",
    link: "https://mlsysbook.ai/",
    platform: "Machine Learning Systems",
    icon: null,
    status: 'planned'
  },
  {
    title: "mini-RAG | From notebooks to PRODUCTION",
    instructor: "Abu Bakr Soliman",
    link: "https://www.youtube.com/playlist?list=PLvLvlVqNQGHCUR2p0b8a0QpVjDUg50wQj",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'planned'
  },
  {
    title: "Hands-On Machine Learning with Scikit-Learn and PyTorch",
    instructor: "Aurélien Géron",
    link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9798341607972/",
    platform: "O'Reilly",
    icon: "https://cdn.brandfetch.io/idWxFPwq-L/w/200/h/200/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'ongoing'
  },
  {
    title: "Data Analyst Bootcamp: Zero to Hero",
    instructor: "Luke Barousse",
    link: "https://www.youtube.com/playlist?list=PL_CkpxkuPiT-RJ7zBfHVWwgltEWIVwrwb",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Master Probability and Statistics for AI&DS in 9 Days",
    instructor: "Hatem Elattarai",
    link: "https://www.youtube.com/playlist?list=PLJM7jJIw2GC2Ihr__bRSeMxzsiFMZEsx7",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Machine Learning in Production",
    instructor: "Andrew Ng",
    link: "https://www.deeplearning.ai/courses/machine-learning-in-production/",
    platform: "DeepLearning.AI",
    icon: "https://cdn.brandfetch.io/idcuOol42D/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Ultimate AWS Certified Solutions Architect Associate",
    instructor: "Stephane Maarek",
    link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
    platform: "Udemy",
    icon: "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "AWS Certified Cloud Practitioner CLF02",
    instructor: "Ahmed Elfakharany",
    link: "https://www.youtube.com/playlist?list=PLluZGtIpwF_B6IHB6q1pG8AJAIvpJHNIH",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900) Full Course",
    instructor: "Adam Marczak",
    link: "https://www.youtube.com/playlist?list=PLGjZwEtPN7j-Q59JYso3L4_yoCjj2syrM",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "UMass CS685: Advanced Natural Language Processing (Spring 2024)",
    instructor: "Mohit Iyyer",
    link: "https://www.youtube.com/playlist?list=PLWnsVgP6CzafDszSy-njjdqnliv5qT0EW",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Prompt Engineering",
    instructor: "Abu Bakr Soliman",
    link: "https://www.youtube.com/playlist?list=PLvLvlVqNQGHDNUshQJBWWCIRGgC0PN7VL",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Open Source Models with Hugging Face",
    instructor: "Maria Khalusova, Marc Sun, Younes Belkada",
    link: "https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/",
    platform: "DeepLearning.AI",
    icon: "https://cdn.brandfetch.io/idcuOol42D/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Neural Networks: Zero to Hero",
    instructor: "Andrej Karpathy",
    link: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Deep Learning Fall 2024",
    instructor: "Tamer Elsayed",
    link: "https://www.youtube.com/playlist?list=PLRdABJkXXytCz19PsZ1PCQBKoZGV069k3",
    platform: "YouTube",
    icon: "https://cdn.brandfetch.io/idVfYwcuQz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Machine Learning Real World projects in Python",
    instructor: "Shan Singh",
    link: "https://www.udemy.com/course/machine-learning-real-world-projects-in-python/",
    platform: "Udemy",
    icon: "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Deep Learning Specialization",
    instructor: "Andrew Ng",
    link: "https://www.deeplearning.ai/courses/deep-learning-specialization/",
    platform: "DeepLearning.AI",
    icon: "https://cdn.brandfetch.io/idcuOol42D/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Machine Learning Practical: 6 Real-World Applications",
    instructor: "SuperDataScience Team, Rony Sulca, Ligency",
    link: "https://www.udemy.com/course/machine-learning-practical/",
    platform: "Udemy",
    icon: "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Machine Learning & Data Science Diploma",
    instructor: "Mohammed Agoor",
    link: "https://www.udemy.com/course/machine-learning-diploma-arabic/",
    platform: "Udemy",
    icon: "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  },
  {
    title: "Machine Learning Specialization",
    instructor: "Andrew Ng",
    link: "https://www.deeplearning.ai/courses/machine-learning-specialization/",
    platform: "DeepLearning.AI",
    icon: "https://cdn.brandfetch.io/idcuOol42D/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    status: 'completed'
  }
];

export function LearningJourneySection() {
  const [showAll, setShowAll] = useState(false);
  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  return (
    <section id="learning" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated sequence of courses and resources that shaped my expertise in Machine Learning and AI
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course, index) => (
            <ScrollReveal key={course.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border-border">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                        {course.icon ? (
                          <img 
                            src={course.icon} 
                            alt={course.platform}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-xs font-bold text-muted-foreground">
                            {course.platform.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 flex-1"
                          >
                            {course.title}
                          </a>
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-muted-foreground hover:text-accent transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                          {course.instructor}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {course.platform}
                          </Badge>
                          {course.status === 'ongoing' && (
                            <Badge className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30">
                              On-going
                            </Badge>
                          )}
                          {course.status === 'planned' && (
                            <Badge className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30">
                              Planned
                            </Badge>
                          )}
                          {course.status === 'completed' && (
                            <Badge className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30">
                              Completed
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {courses.length > 6 && (
          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="gap-2"
              >
                {showAll ? (
                  <>
                    View Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    View More ({courses.length - 6} more) <ChevronDown size={18} />
                  </>
                )}
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
