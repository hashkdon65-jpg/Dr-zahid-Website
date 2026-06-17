/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, ShieldAlert, Heart, Landmark, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-beige-gradient relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl z-0" />
      <div className="absolute left-12 bottom-12 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait and credentials badge */}
          <div className="lg:col-span-5 relative group">
            {/* Elegant luxury frame decoration */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#C5B358]/20 via-transparent to-stone-300/30 rounded-2xl blur-md" />
            
            <div className="relative bg-[#faf8f4] p-4 rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
              <img
                src="/src/assets/images/male_doctor_portrait_1781678518383.jpg"
                alt="Prof. Dr. Zahid Iqbal"
                className="w-full h-auto object-cover rounded-xl filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-stone-900/95 text-stone-100 p-5 rounded-xl border border-gold-accent/40 backdrop-blur-md">
                <span className="font-mono text-gold-accent text-xs font-bold uppercase tracking-widest block mb-1">Chief Specialist</span>
                <p className="font-serif text-lg font-semibold leading-tight text-white">Prof. Dr. Zahid Iqbal</p>
                <p className="text-stone-300 text-xs mt-1">Senior Consultant in Advanced Restorative & Family Medicine</p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Narrative & Clinic Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-gold-accent block">The Specialist Suite</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight font-medium">
                Pioneering Restorations & <br className="hidden sm:inline" />
                <span className="italic font-normal">Holistic Medicare</span>
              </h2>
              <div className="h-1 w-20 bg-gold-accent rounded-full" />
            </div>

            <p className="text-stone-700 font-light leading-relaxed text-base max-w-2xl">
              Prof. Dr. Zahid Iqbal represents a prestigious benchmark of medicine in Karachi. Operating from an ultra-modern suite in Badar Commercial DHA Phase 5, his practice is designed around bespoke treatments, absolute hygiene sterilization protocols, and a profound respect for somatic longevity. This clinic operates exclusively on Wednesday late afternoons, offering elite focused care for every patient.
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-orange-100/40 border border-orange-200/50 text-[#C5B358] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Academic Presidency</h4>
                  <p className="text-xs text-stone-600 mt-1 font-light leading-normal">
                    Led complex clinical programs and university curriculum as a dentistry professor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-blue-100/40 border border-blue-200/50 text-[#C5B358] shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">DHA Phase 5 Elite Suite</h4>
                  <p className="text-xs text-stone-600 mt-1 font-light leading-normal">
                    Located above DHL Express in Badar Commercial, Karachi, equipped with cutting-edge surgery chairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-emerald-100/40 border border-emerald-200/50 text-[#C5B358] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Strict Autoclave Sterile Code</h4>
                  <p className="text-xs text-stone-600 mt-1 font-light leading-normal">
                    Uncompromising class-B autoclave sanitation cycle run for every patient.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-amber-100/40 border border-amber-200/50 text-[#C5B358] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Wednesday Evening Schedule</h4>
                  <p className="text-xs text-stone-600 mt-1 font-light leading-normal">
                    Doors open precisely at 5:00 PM on Wednesday. Patients benefit from absolute dedicated attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div className="p-5 bg-stone-900 text-stone-50 rounded-2xl border border-gold-accent/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <p className="font-mono text-gold-accent text-[10px] uppercase font-bold tracking-widest leading-none">Emergency & Inquiries</p>
                <p className="text-sm font-light text-stone-300">Have an urgent dental pain or health concern?</p>
              </div>
              <a
                href="https://wa.me/923022146422?text=Hello%20Dr.%20Zahid,%20I%20have%20an%20urgent%20clinical%20inquiry."
                target="_blank"
                rel="noreferrer"
                className="bg-gold-accent hover:bg-amber-600 text-stone-950 font-medium px-5 py-2.5 rounded-full text-xs transition-all flex items-center gap-1.5 shadow"
              >
                <Heart className="w-3.5 h-3.5" />
                Text +92 302 2146422
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
