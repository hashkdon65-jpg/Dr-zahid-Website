/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Heart, Phone, CalendarCheck, Instagram, Facebook } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm leading-none">
      {/* Top micro bar */}
      <div className="bg-[#1a1917] text-[#f7f5f0] py-2 px-4 text-xs font-mono select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-1">
            <span className="text-gold-accent">✦</span>
            <span>Operating strictly: Wednesdays at 5:00 PM only</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-gold-accent" /> +92 302 2146422
            </span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full border border-[#C5B358]/40 flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 shadow-sm group-hover:border-[#C5B358] transition-colors">
              <Heart className="w-5 h-5 text-gold-accent animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base tracking-wide font-semibold text-[#4A4A35] leading-tight uppercase">
                DR. ZAHID <span className="font-light text-[#8C826B]">MEDICARE</span>
              </span>
              <span className="font-mono text-[9px] text-[#A39B88] uppercase tracking-[0.2em] font-semibold mt-0.5">
                & Dental Specialists
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-[#5C5648]">
            <a href="#about" className="hover:text-[#C5B358] transition-colors">
              Excellence
            </a>
            <a href="#services" className="hover:text-[#C5B358] transition-colors">
              Our Services
            </a>
            <a href="#gallery" className="hover:text-[#C5B358] transition-colors">
              Dental Gallery
            </a>
            <a href="#testimonials" className="hover:text-[#C5B358] transition-colors">
              Patient Stories
            </a>
            <a href="#contact" className="hover:text-[#C5B358] transition-colors">
              Location & Hours
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-stone-200/80 pr-5 mr-1">
              <a href="https://www.facebook.com/dentalspecialits/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="Facebook Page">
                <Facebook className="w-5 h-5 text-[#5C5648] hover:text-[#C5B358] transition-colors" />
              </a>
              <a href="https://www.instagram.com/prof.dr.zahid_iqbal/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" title="Instagram Profile">
                <Instagram className="w-5 h-5 text-[#5C5648] hover:text-[#C5B358] transition-colors" />
              </a>
            </div>
            
            <button
              onClick={onContactClick}
              className="bg-stone-900 hover:bg-stone-800 text-stone-100 hover:text-stone-50 px-5 py-2.5 rounded-full font-serif text-sm tracking-wide font-medium border border-gold-accent/40 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-gold-accent" />
              Book Consult
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-700 p-2 rounded-lg hover:bg-stone-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200/80 px-4 py-6 space-y-4 animate-fadeIn">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-700 font-medium py-1.5 border-b border-stone-200/30 font-serif"
          >
            Specialist Profile
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-700 font-medium py-1.5 border-b border-stone-200/30 font-serif"
          >
            Our Services
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-700 font-medium py-1.5 border-b border-stone-200/30 font-serif"
          >
            Dental Gallery
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-700 font-medium py-1.5 border-b border-stone-200/30 font-serif"
          >
            Patient Stories
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="bg-stone-900 text-stone-50 w-full py-3 rounded-xl font-serif text-sm border border-gold-accent flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-gold-accent" />
            Book Direct Inquiry
          </button>
        </div>
      )}
    </nav>
  );
}
