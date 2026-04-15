"use client";

import { useState } from "react";
import { ExternalLink, Play, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  loomVideos?: { title: string; url: string }[];
  featured?: boolean;
  color: string;
}

const projects: Project[] = [
  {
    title: "QTap - Transport & Dispatch Dashboard",
    description:
      "A Next.js + Supabase SaaS platform for businesses to manage customer loyalty programs. Supports NFC tags, QR codes, and digital cards for member engagement, tracking points, stamps, and redemptions. Features multi-tenant architecture, campaign management, push notifications, analytics, and staff management with role-based access and row-level security.",
    tech: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Vercel AI SDK",
    ],
    liveUrl: "https://dashboard.qtap.qa/login",
    loomVideos: [
      {
        title: "Platform Overview",
        url: "https://www.loom.com/share/d89d15d664c74cafbd1eaa0d5ac6da17",
      },
      {
        title: "Complex Feature Demo",
        url: "https://www.loom.com/share/fa09010189974e4db26ee824a1c106f0",
      },
    ],
    featured: true,
    color: "from-primary/15 to-primary-light/20",
  },
  {
    title: "WizeTrak - Contract & Project Management",
    description:
      "Comprehensive contract and project management system with multi-step workflows, document uploads, approval processes, payment tracking, custom form builder with drag-and-drop, activity timeline, and built-in collaboration tools with approvers and notification system.",
    tech: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth0",
      "Zustand",
      "ApexCharts",
    ],
    loomVideos: [
      {
        title: "Dashboard Walkthrough",
        url: "https://www.loom.com/share/8a06a5e11be14f7aa17a49bea25b3da4",
      },
      {
        title: "Backend & Database",
        url: "https://www.loom.com/share/6eb6abddd7ad4b5fb3a9cf6f724a9054",
      },
    ],
    featured: true,
    color: "from-gray-100 to-primary-light/10",
  },
  {
    title: "PropertyPlus - Real Estate Management",
    description:
      "Property management dashboard for real estate professionals. Features portfolio tracking with occupancy rates and revenue metrics, calendar-based maintenance scheduling, staff & vendor management, analytics dashboard, and dark/light theme support with responsive design.",
    tech: ["Next.js", "React Server Components", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://propertyplus.albisai.com/",
    featured: true,
    color: "from-primary-light/15 to-gray-100",
  },
  {
    title: "Kronaxys Platform",
    description:
      "Full-featured web platform with complex business logic, user authentication, and integrated dashboards for streamlined operations.",
    tech: ["Next.js", "React", "Node.js", "TypeScript"],
    liveUrl: "https://kronaxys.com/",
    color: "from-primary-light/10 to-gray-50",
  },
  {
    title: "Ez-Signature System",
    description:
      "Digital signature system built with Next.js frontend and NestJS backend, featuring document management, e-signature workflows, and secure authentication.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    liveUrl: "http://ezsignature.org/",
    loomVideos: [
      {
        title: "System Overview",
        url: "https://www.loom.com/share/e9de6ec0973c4904bf637eb63827aefe",
      },
    ],
    color: "from-gray-50 to-primary-light/10",
  },
  {
    title: "GoSriLanka Tour Operator",
    description:
      "Tourism platform for Sri Lanka tour operations with booking management, vendor coordination, and customer-facing website.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "http://getgosrilanka.com/",
    color: "from-primary-light/20 to-gray-50",
  },
  {
    title: "Velano Transport",
    description:
      "Transport and logistics web application with route management, fleet tracking, and operational dashboards.",
    tech: ["React", "Node.js", "TypeScript"],
    liveUrl: "http://velanotransport.com/",
    color: "from-gray-100 to-primary-light/15",
  },
  {
    title: "JinnStore",
    description:
      "E-commerce platform with product catalog, shopping cart, payment integration, and order management.",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "http://jinnstore.com/",
    color: "from-gray-50 to-primary-light/15",
  },
];

const demoVideos = [
  {
    title: "Car Bot APIs Integration",
    tech: "Node.js",
    url: "https://www.loom.com/share/daa7181c3eca46668ce26b427d928ad8",
  },
  {
    title: "Supabase Backend (CRUD, RLS, DB Design)",
    tech: "Supabase",
    url: "https://www.loom.com/share/6eb6abddd7ad4b5fb3a9cf6f724a9054",
  },
  {
    title: "Table Tracking Project",
    tech: "Next.js",
    url: "https://www.loom.com/share/b6273473dcfe4fbda985da78d1c9a1dc",
  },
  {
    title: "Figma to Next.js Conversion",
    tech: "Next.js",
    url: "https://www.loom.com/share/f1666986c455446399a058799999defe",
  },
  {
    title: "Location Dropdown Implementation",
    tech: "React",
    url: "https://www.loom.com/share/b160c9d1a11a4ab488c55d88cc48eebf",
  },
  {
    title: "Discourse SSO Login Integration",
    tech: "Next.js",
    url: "https://www.loom.com/share/a928f2d09a6e4d3099e523d643de07d8",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group bg-surface rounded-xl sm:rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors pr-3 sm:pr-4">
            {project.title}
          </h3>
          {project.featured && (
            <span className="shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary-light/40 text-primary-dark rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4">
          {expanded || project.description.length <= 150
            ? project.description
            : project.description.slice(0, 150) + "..."}
          {project.description.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-primary hover:text-primary-dark text-xs font-medium inline-flex items-center gap-0.5"
            >
              {expanded ? (
                <>
                  Less <ChevronUp size={12} />
                </>
              ) : (
                <>
                  More <ChevronDown size={12} />
                </>
              )}
            </button>
          )}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-surface-alt text-[10px] sm:text-xs font-medium text-muted rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              <ExternalLink size={13} />
              Live Site
            </a>
          )}
          {project.loomVideos?.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <Play size={13} />
              {video.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-surface-alt/50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-3 sm:mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
            A selection of projects covering full-stack development, API
            integrations, authentication systems, and real-world business logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "800ms" }}>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Development <span className="text-primary">Demos</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {demoVideos.map((video, i) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal ${isVisible ? "visible" : ""} group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-surface rounded-lg sm:rounded-xl border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                style={{ transitionDelay: `${900 + i * 50}ms` }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-accent-light/40 flex items-center justify-center group-hover:bg-accent transition-all duration-200">
                  <Play size={14} className="text-gray-700 group-hover:text-white sm:hidden" />
                  <Play size={16} className="text-gray-700 group-hover:text-white hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-foreground truncate">
                    {video.title}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted">{video.tech}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
