"use client";

import { ArrowDown, Mail, MapPin, Sparkles, Award } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function UpworkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-24 sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-0 sm:pb-0"
    >
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-primary-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-light/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-primary-light/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badges */}
        <div className="anim-fade-up flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-surface rounded-full border border-border shadow-sm">
            <Sparkles size={12} className="text-primary sm:hidden" />
            <Sparkles size={14} className="text-primary hidden sm:block" />
            <span className="text-xs sm:text-sm text-muted font-medium">
              Available for new projects
            </span>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~012c165f44a345b11e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 rounded-full border border-green-200 shadow-sm hover:bg-green-100 transition-colors"
          >
            <Award size={12} className="text-green-600 sm:hidden" />
            <Award size={14} className="text-green-600 hidden sm:block" />
            <span className="text-xs sm:text-sm text-green-700 font-medium">
              Top Rated on Upwork
            </span>
          </a>
        </div>

        <h1 className="anim-fade-up stagger-1 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Ali Arslan Zakir
          </span>
        </h1>

        <p className="anim-fade-up stagger-2 text-base sm:text-lg md:text-2xl text-muted font-medium mb-2">
          Senior Team Lead &amp; Full-Stack Developer
        </p>

        <p className="anim-fade-up stagger-2 text-xs sm:text-sm text-green-600 font-medium mb-3 sm:mb-4">
          100% Job Success &middot; Top Rated on Upwork
        </p>

        <p className="anim-fade-up stagger-3 text-sm sm:text-base md:text-lg text-muted/80 max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed">
          7+ years crafting scalable web applications for clients worldwide
          &mdash; from Canadian government projects to global SaaS platforms.
          Specializing in{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">Node.js</span>, and
          modern cloud architectures.
        </p>

        <div className="anim-fade-up stagger-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted mb-5 sm:mb-8">
          <MapPin size={14} className="shrink-0" />
          <span>Shekhupura, Pakistan &middot; Working with clients globally</span>
        </div>

        <div className="anim-fade-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-7 sm:px-8 py-3 sm:py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-7 sm:px-8 py-3 sm:py-3.5 bg-surface text-foreground font-medium rounded-full border border-border hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        <div className="anim-fade-in stagger-6 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/aarslanzakir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 sm:p-3 rounded-full bg-surface border border-border text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/arslan-ارسلان-5423b1240"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 sm:p-3 rounded-full bg-surface border border-border text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~012c165f44a345b11e"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="p-2.5 sm:p-3 rounded-full bg-surface border border-border text-muted hover:text-green-600 hover:border-green-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            <UpworkIcon size={18} />
          </a>
          <a
            href="mailto:aliarslanzakir@gmail.com"
            aria-label="Email"
            className="p-2.5 sm:p-3 rounded-full bg-surface border border-border text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="anim-fade-in stagger-12 mt-6 sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2">
          <a
            href="#about"
            className="anim-bounce text-muted hover:text-primary transition-colors inline-block"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
