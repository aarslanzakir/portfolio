"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/923004449205?text=${encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-surface-alt/50">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-xs sm:text-sm font-medium text-primary tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-3 sm:mb-4">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto text-sm sm:text-base">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div
            className={`reveal-left ${isVisible ? "visible" : ""} space-y-4 sm:space-y-6`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a
                  href="mailto:aliarslanzakir@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light/40 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <Mail
                      size={18}
                      className="text-primary-dark group-hover:text-white"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Email</div>
                    <div className="text-sm font-medium text-foreground">
                      aliarslanzakir@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/923004449205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-200">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted">WhatsApp</div>
                    <div className="text-sm font-medium text-foreground">
                      +92 300 4449205
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+923004449205"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-200">
                    <Phone
                      size={18}
                      className="text-gray-700 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Phone</div>
                    <div className="text-sm font-medium text-foreground">
                      +92 300 4449205
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light/30 flex items-center justify-center">
                    <MapPin size={18} className="text-primary-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Location</div>
                    <div className="text-sm font-medium text-foreground">
                      Available Worldwide
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light/30 flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Availability</div>
                    <div className="text-sm font-medium text-foreground">
                      Open for new projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border">
              <h3 className="text-sm font-semibold mb-4 text-muted">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/aarslanzakir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-surface-alt text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/arslan-ارسلان-5423b1240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-surface-alt text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className={`reveal-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "300ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border space-y-4 sm:space-y-5"
            >
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30"
              >
                <WhatsAppIcon size={16} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
