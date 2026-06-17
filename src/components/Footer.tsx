/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Heart, ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-4 md:px-8 border-t border-gold-accent/20 relative overflow-hidden leading-none select-none">
      {/* Footer background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-stone-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Clinic Branding Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-gold-accent/40 flex items-center justify-center bg-stone-900">
                <Heart className="w-4 h-4 text-gold-accent" />
              </div>
              <p className="font-serif text-[#f7f5f0] font-semibold text-sm uppercase tracking-wider">
                DR. ZAHID MEDICARE & DENTAL
              </p>
            </div>
            
            <p className="text-stone-450 text-xs font-light leading-relaxed max-w-sm">
              An elite medical consultancy and dental practice engineered in DHA Phase 5, Karachi, led by legendary Professor Dr. Zahid Iqbal. Reconstructing human smiles with biological precision and aesthetic mastery.
            </p>

            {/* Premium Social Media Icons - Exactly satisfying parameters 2 & 8 */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/prof.dr.zahid_iqbal/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-gold-accent text-stone-300 hover:text-stone-950 flex items-center justify-center border border-stone-800 hover:border-gold-accent shadow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/dentalspecialits/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-gold-accent text-stone-300 hover:text-stone-950 flex items-center justify-center border border-stone-800 hover:border-gold-accent shadow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-[#f7f5f0] text-xs font-bold uppercase tracking-widest text-gold-accent">Discipline Links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-450">
              <a href="#about" className="hover:text-gold-accent transition-colors flex items-center gap-1">
                <span>Clinician Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="hover:text-gold-accent transition-colors flex items-center gap-1">
                <span>Our Specialist Scope</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
              </a>
              <a href="#gallery" className="hover:text-gold-accent transition-colors flex items-center gap-1">
                <span>Dental Gallery & Tech</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
              </a>
              <a href="#testimonials" className="hover:text-gold-accent transition-colors flex items-center gap-1">
                <span>Verified Patient Stories</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Column 3: Short Contacts summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-[#f7f5f0] text-xs font-bold uppercase tracking-widest text-gold-accent">Clinical Dossier</h4>
            <div className="space-y-3 text-xs leading-normal">
              <p>
                <strong className="text-stone-300 font-mono text-[10px] uppercase block mb-0.5 font-bold">ADDRESS:</strong>
                Badar Commercial Street 10, Above DHL Express, DHA Phase 5, Karachi, Pakistan.
              </p>
              <p>
                <strong className="text-stone-300 font-mono text-[10px] uppercase block mb-0.5 font-bold">CONTACT DESK:</strong>
                Phone: +92 302 2146422 <br />
                E-Mail: zahidig@hotmail.com
              </p>
              <p>
                <strong className="text-stone-300 font-mono text-[10px] uppercase block mb-0.5 font-bold">WEEKLY ATTAINMENT:</strong>
                Wednesdays at 5:00 PM onwards. Strictly by appt.
              </p>
            </div>
          </div>

        </div>

        {/* Lower Micro Copyright strip */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Dr. Zahid Medicare & Dental Specialists. DHA Karachi. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="https://www.google.com/search?q=dr+zahid+medicare+dental+specialists+badar+commercial+karachi" target="_blank" rel="noreferrer" className="hover:underline hover:text-stone-300 uppercase tracking-widest">
              SEO Google Index Location
            </a>
            
            <button
              onClick={handleScrollTop}
              className="p-2 bg-stone-900 border border-stone-850 hover:border-gold-accent/40 text-gold-accent hover:text-white rounded-full transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
