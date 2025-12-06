import { Code2, Brain, Database, Cloud, Server, BarChart3, GraduationCap, Briefcase } from 'lucide-react';
const skills = [{
  name: 'Python',
  icon: Code2
}, {
  name: 'PyTorch / TensorFlow',
  icon: Brain
}, {
  name: 'LLMs & LangChain',
  icon: Brain
}, {
  name: 'FastAPI / Streamlit',
  icon: Server
}, {
  name: 'AWS & Cloud',
  icon: Cloud
}, {
  name: 'SQL / NoSQL',
  icon: Database
}, {
  name: 'MLFlow / ZenML',
  icon: BarChart3
}, {
  name: 'Docker / vLLM',
  icon: Server
}];
const education = [{
  degree: 'Deep Learning for Computer Vision Diploma',
  institution: 'NTI',
  period: 'Dec 2024 – Feb 2025'
}, {
  degree: 'B.Sc. Computer & Systems Engineering',
  institution: 'Ain Shams University',
  period: '2019 – 2024'
}];
const experience = [{
  title: 'IT Support',
  company: 'Alexandria Construction Company (TMG)',
  period: 'Sep 2025 – Present'
}, {
  title: 'Machine Learning Engineer Intern',
  company: 'Homains',
  period: 'Dec 2024 – Feb 2025'
}, {
  title: 'Graduation Project',
  company: 'Fixed Solutions',
  period: 'Oct 2023 – Jun 2024'
}];
export function AboutSection() {
  return <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle mx-auto">
            Building intelligent systems that make a difference
          </p>
        </div>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">I'm a Data Scientist and AI Engineer passionate about designing intelligent systems that solve real-world problems. I specialize in deep learning, LLMs, AI agents, and building scalable end-to-end ML pipelines. I love solving complex challenges, optimizing ML ecosystems, and continuously learning to push my technical boundaries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-accent">{edu.period}</p>
                </div>)}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                  <h4 className="font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-accent">{exp.period}</p>
                </div>)}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-center mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return <div key={skill.name} className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group" style={{
              animationDelay: `${index * 50}ms`
            }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{skill.name}</span>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}