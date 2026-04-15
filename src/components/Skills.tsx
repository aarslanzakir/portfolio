"use client";

import { useScrollReveal } from "./useScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    color: "bg-primary-light/40 text-primary-dark",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3 / SASS",
      "Tailwind CSS",
      "Material UI",
      "Radix UI",
      "Redux",
      "Zustand",
      "Jotai",
    ],
  },
  {
    title: "Backend",
    color: "bg-gray-100 text-gray-800",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Socket.io",
      "Microservices",
      "Jest",
    ],
  },
  {
    title: "Database & Cloud",
    color: "bg-primary-light/30 text-primary-dark",
    skills: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Prisma",
      "Redis",
      "AWS",
      "Firebase",
      "DigitalOcean",
      "Vercel",
    ],
  },
  {
    title: "Tools & Practices",
    color: "bg-stone-100 text-stone-700",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Figma",
      "Postman",
      "Jira",
      "Agile/Scrum",
      "TDD",
      "Auth0",
      "SSO",
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            My <span className="text-primary">Tech Stack</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal ${isVisible ? "visible" : ""} bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${cat.color} transition-transform duration-200 hover:scale-105 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
