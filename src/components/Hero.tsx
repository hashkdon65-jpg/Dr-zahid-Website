/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HoursStatus from './HoursStatus';
import { CalendarCheck, Shield, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-4 md:px-8">
      {/* Visual Background: Minimalist generated background + cover overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/dr_zahid_hero_bg_1781676700928.jpg"
          alt="Dr. Zahid Premium Clinic Banner"
          className="w-full h-full object-cover filter brightness-[0.88] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxury dark 50% black overlay & transition layer */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5f0] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Presentation */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#C5B358]/20 text-white">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-stone-200">
              Prof. Dr. Zahid Iqbal — Specialist Suite
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-medium leading-[1.1]">
            Precision Medicare <br />
            <span className="italic text-white serif">
              & Dental Aesthetics
            </span>
          </h1>

          <p className="text-stone-200 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Where biological precision meets aesthetic grace. Experience Pakistan&apos;s leading micro-dentistry and general Medicare evaluations, operating in DHA Phase 5 with strict medical compliance and ultra-premium patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-full font-serif font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-gold-accent/40 text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-gold-accent group-hover:scale-110 transition-transform" />
              Book Priority Consultation
            </button>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-serif font-medium rounded-full border border-white/20 hover:border-gold-accent backdrop-blur-md transition-all text-center"
            >
              Explore Services
            </a>
          </div>

          {/* Micro Trust metrics */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/20 max-w-md">
            <div>
              <div className="flex items-center gap-0.5 text-amber-500 mb-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-stone-300 font-bold">Patient Rating</p>
              <p className="font-serif text-sm font-semibold text-white">5.0 Out of 5.0</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C5B358] mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono leading-none font-bold">CERTIFIED</span>
              </div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-stone-300 font-bold">Standard</p>
              <p className="font-serif text-sm font-semibold text-white">Sterility Perfect</p>
            </div>
            <div>
              <div className="text-[10px] text-stone-300 font-mono mb-1 font-bold">KARACHI</div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-white font-bold">Location</p>
              <p className="font-serif text-sm font-semibold text-white">DHA Phase 5</p>
            </div>
          </div>
        </div>

        {/* Dynamic Opening Hour Countdown Panel */}
        <div className="lg:col-span-5 flex justify-center w-full z-10">
          <HoursStatus />
        </div>
      </div>
    </section>
  );
}
