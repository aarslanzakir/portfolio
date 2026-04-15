"use client";

import { Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const experiences = [
  {
    role: "Senior Team Lead",
    company: "Inartia",
    location: "United States · Remote",
    period: "May 2025 - Present",
    description:
      "Leading cross-functional teams building full-stack MERN and Next.js applications focused on scalability, security, and performance across the entire development lifecycle.",
    highlights: [
      "Architecting server-side rendered and statically generated applications with Next.js, achieving optimal SEO rankings and fast page loads for client-facing products",
      "Establishing CI/CD pipelines, automated testing frameworks, and code review standards that ensure consistent production-quality releases across all projects",
      "Mentoring junior and mid-level developers through technical workshops, pair programming, and engineering best practices that accelerate professional growth",
    ],
  },
  {
    role: "Senior Team Lead / Senior MERN Developer",
    company: "Innovatives Tech",
    location: "Pakistan",
    period: "May 2024 - Jun 2025",
    description:
      "Promoted from Senior Developer to Team Lead within twelve months, recognized for consistent delivery of high-impact technical solutions across concurrent projects.",
    highlights: [
      "Built and shipped eight production-grade web applications using React, Next.js, Node.js, and MongoDB to serve diverse client requirements at enterprise scale",
      "Achieved 40% reduction in page load times through lazy loading, code splitting, and intelligent server-side caching optimization strategies",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Shirazi Logistic Pvt Ltd",
    location: "Pakistan",
    period: "Aug 2023 - Aug 2024",
    description:
      "Engineered logistics management platforms with real-time shipment tracking, interactive analytics dashboards, and automated reporting for operational efficiency.",
    highlights: [
      "Integrated third-party APIs, payment gateways, and notification systems enabling streamlined end-to-end digital business operations",
      "Built real-time tracking dashboards and automated reporting pipelines for logistics workflows",
    ],
  },
  {
    role: "React / Next.js Developer",
    company: "SHJ International",
    location: "Pakistan",
    period: "Feb 2020 - Aug 2023",
    description:
      "Developed 15+ responsive single-page and server-rendered applications using React.js, Next.js, Redux, and modern JavaScript standards.",
    highlights: [
      "Partnered with UI/UX teams to deliver pixel-perfect, accessible, and performant interfaces optimized for cross-device compatibility",
      "Built scalable frontend architectures with Redux, Context API, and modern state management patterns",
    ],
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.period}
                className={`reveal-left ${isVisible ? "visible" : ""} relative pl-9 sm:pl-12 md:pl-20`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="absolute left-1.5 sm:left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-surface ring-4 ring-primary-light/40" />

                <div className="bg-surface rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-1.5 sm:gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-xs sm:text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-[11px] sm:text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={11} className="shrink-0" /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={11} className="shrink-0" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs sm:text-sm text-muted flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
