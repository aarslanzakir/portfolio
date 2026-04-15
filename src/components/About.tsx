"use client";

import { Briefcase, Globe, Code2, Award } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const stats = [
  { icon: Briefcase, value: "7+", label: "Years Experience" },
  { icon: Globe, value: "50+", label: "Projects Delivered" },
  { icon: Award, value: "100%", label: "Job Success" },
  { icon: Code2, value: "Top Rated", label: "On Upwork" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-surface-alt/50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 sm:mb-6">
            Turning Ideas Into{" "}
            <span className="text-primary">Digital Reality</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I&apos;m a Top Rated Upwork freelancer and Senior Team Lead with a passion
            for building elegant, performant web applications. From leading
            cross-functional teams at US-based companies to shipping 8+ production-grade
            apps at enterprise scale, I bring deep expertise in full-stack development,
            scalability, and user-centric design to every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal ${isVisible ? "visible" : ""} bg-surface rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-primary-light/40 flex items-center justify-center">
                <stat.icon size={18} className="text-primary-dark sm:hidden" />
                <stat.icon size={22} className="text-primary-dark hidden sm:block" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div
            className={`reveal-left ${isVisible ? "visible" : ""} bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-border`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3">What I Do</h3>
            <p className="text-muted text-sm leading-relaxed">
              I specialize in building end-to-end web applications, from
              crafting pixel-perfect UIs with React and Next.js to architecting
              robust backends with Node.js, NestJS, and PostgreSQL. I handle the
              entire lifecycle: database design, API development, authentication
              systems, cloud deployment, and CI/CD pipelines.
            </p>
          </div>
          <div
            className={`reveal-right ${isVisible ? "visible" : ""} bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-border`}
            style={{ transitionDelay: "700ms" }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3">How I Work</h3>
            <p className="text-muted text-sm leading-relaxed">
              I believe in clean, maintainable code and transparent
              communication. As a team lead, I mentor developers, establish
              CI/CD pipelines, and ensure production-quality releases. Every
              project gets my full commitment, whether it&apos;s a startup
              MVP or an enterprise platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
