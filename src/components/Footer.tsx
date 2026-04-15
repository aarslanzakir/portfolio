"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <a href="#home" className="text-lg font-bold text-foreground">
            <span className="text-primary">A</span>rslan
            <span className="text-primary">.</span>
          </a>


          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/aarslanzakir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/arslan-ارسلان-5423b1240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~012c165f44a345b11e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted hover:text-green-600 transition-colors"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
