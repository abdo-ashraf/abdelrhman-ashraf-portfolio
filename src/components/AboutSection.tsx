import { Code2, Brain, Database, Cloud, Server, BarChart3, GraduationCap, Briefcase, Table, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const experience = [
  {
    title: 'IT Support',
    company: 'Alexandria Construction Company (TMG)',
    period: 'Sep 2025 – Present',
    description:
      'Provided technical support for company staff by troubleshooting hardware, software, and network issues. Maintained operating systems, applications, and security tools while monitoring system performance and ensuring stable network connectivity. Assisted employees with account setup, access permissions, and system updates.',
    skills: [
      'Technical Support',
      'Troubleshooting'
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Homains',
    period: 'Dec 2024 – Feb 2025',
    description:
      'Developed an end-to-end speech-to-text system for the Egyptian dialect using Whisper. Designed a CI/CD fine-tuning pipeline with ZenML, Hugging Face, and MLflow for continuous training and experiment tracking. Optimized the model using LoRA and processed 15 hours of audio for evaluation, achieving a 29% WER improvement.',
    skills: [
      'Speech-to-Text',
      'Whisper',
      'ZenML',
      'Hugging Face',
      'MLflow',
      'LoRA',
      'Deep Learning',
      'Model Optimization',
      'Audio Processing',
    ],
  },
  {
    title: 'Graduation Project',
    company: 'Fixed Solutions',
    period: 'Oct 2023 – Jun 2024',
    description:
      'Developed a real-time malware detection system using deep learning. Implemented two advanced neural networks: one for analyzing system call sequences and another for detecting malicious patterns from byte-level file images. Achieved strong performance including 81.14% accuracy and 65.32% precision on Zero-day malware, supported by a custom Selenium-based dataset scraper.',
    skills: [
      'Deep Learning',
      'Malware Detection',
      'Computer Vision',
      'Byte Image Processing',
      'Python',
      'Tensorflow',
      'Selenium'
    ],
  },
];

const education = [
  {
    degree: 'Deep Learning for Computer Vision Diploma',
    institution: 'NTI',
    period: 'Dec 2024 – Feb 2025',
  },
  {
    degree: 'B.Sc. Computer & Systems Engineering',
    institution: 'Ain Shams University',
    period: '2019 – 2024',
  },
];

const skillsData = {
  programmingLanguages: ['Python', 'C'],
  librariesAndFrameworks: [
    'FastAPI',
    'LangChain',
    'OpenAI',
    'PyTorch',
    'TensorFlow',
    'Streamlit',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'scikit-learn',
    'Transformers',
    'Selenium',
  ],
  toolsAndPlatforms: [
    'Excel (Power Query, Power Pivot)',
    'Amazon Web Services (AWS)',
    'SQL',
    'NoSQL (MongoDB)',
    'Vector Databases',
    'Git',
    'Docker',
    'Vibe coding',
  ],
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">About Me</h2>
            <p className="section-subtitle mx-auto">
              Building intelligent systems that make a difference
            </p>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I'm a Data Scientist and AI Engineer passionate about designing intelligent systems that solve real-world problems. I specialize in deep learning, LLMs, AI agents, and building scalable end-to-end ML pipelines.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">

          {/* EXPERIENCE */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-accent mb-2">{exp.period}</p>

                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* SKILLS + EDUCATION (Side-by-Side Row) */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* SKILLS (LEFT) */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-accent" />
                  </div>
                  Skills
                </h3>
                {/* <p className="text-sm text-muted-foreground mb-6">Development Arsenal</p> */}

                <div className="space-y-8">

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Programming Languages</h4>
                    <p className="text-muted-foreground">{skillsData.programmingLanguages.join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Libraries & Frameworks</h4>
                    <p className="text-muted-foreground">{skillsData.librariesAndFrameworks.join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tools & Platforms</h4>
                    <p className="text-muted-foreground">{skillsData.toolsAndPlatforms.join(', ')}</p>
                  </div>

                </div>
              </div>

              {/* EDUCATION (RIGHT) */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  Education
                </h3>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-accent">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
