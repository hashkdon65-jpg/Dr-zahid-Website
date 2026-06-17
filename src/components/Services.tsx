/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CLINIC_SERVICES } from '../data';
import { ServiceDetail } from '../types';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Stethoscope, 
  HeartHandshake, 
  Award,
  ChevronRight,
  Info,
  CalendarCheck2,
  X
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dental' | 'medicare'>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const filteredServices = CLINIC_SERVICES.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  // Simple icon component mapper
  const renderIcon = (iconName: string, className: string) => {
    switch(iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const getCategoryBadge = (category: string) => {
    if (category === 'dental') {
      return (
        <span className="bg-amber-100 text-[#C5B358] text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full font-bold">
          Dental Specialism
        </span>
      );
    }
    return (
      <span className="bg-stone-200 text-stone-800 text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full font-bold">
        Medicare & Consulting
      </span>
    );
  };

  return (
    <section id="services" className="py-24 bg-[#1a1917] text-stone-200 relative overflow-hidden">
      {/* Visual background details to avoid plain backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-gold-accent text-xs uppercase tracking-widest font-bold block">
            Aesthetic & Diagnostic Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f5f0] tracking-tight font-medium">
            Clinical Scope of Services
          </h2>
          <div className="h-0.5 w-16 bg-gold-accent mx-auto rounded-full" />
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Prof. Dr. Zahid Iqbal integrates biological health protocols with high-precision dentistry, deploying world-class micro-instruments above DHL Express, Badar Commercial, Karachi.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'all' 
                ? 'bg-gold-accent text-stone-950 font-semibold' 
                : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800 border border-stone-700/50'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveCategory('dental')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'dental' 
                ? 'bg-gold-accent text-stone-950 font-semibold' 
                : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800 border border-stone-700/50'
            }`}
          >
            Dental Specialists
          </button>
          <button
            onClick={() => setActiveCategory('medicare')}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'medicare' 
                ? 'bg-gold-accent text-stone-950 font-semibold' 
                : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800 border border-stone-700/50'
            }`}
          >
            Medicare Consulting
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="bg-stone-900/40 p-8 rounded-2xl border border-stone-800/80 hover:border-gold-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3.5 rounded-xl bg-stone-800/90 text-gold-accent border border-[#C5B358]/20 group-hover:bg-[#C5B358] group-hover:text-stone-950 transition-colors">
                    {renderIcon(service.icon, 'w-6 h-6')}
                  </div>
                  <span className="text-xs font-mono text-stone-500 font-medium">#{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(service.category)}
                  </div>
                  <h3 className="font-serif text-xl text-stone-100 font-medium leading-tight group-hover:text-gold-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    {service.brief}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-accent hover:text-white font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  Read Full Protocol
                </button>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="p-1 rounded-full text-stone-500 hover:text-gold-accent transition-colors"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detailed Popup modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#faf8f4] text-stone-900 max-w-2xl w-full rounded-2xl border border-gold-accent/40 shadow-2xl relative overflow-hidden">
              
              {/* Top luxury header stripe */}
              <div className="h-2 bg-gradient-to-r from-[#C5B358] via-stone-900 to-[#C5B358]" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="space-y-3">
                  <div className="inline-flex">
                    {getCategoryBadge(selectedService.category)}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-950">
                    {selectedService.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-gold-accent rounded-full" />
                </div>

                <div className="space-y-4">
                  <p className="text-stone-700 text-sm font-light leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/40">
                    {selectedService.description}
                  </p>
                  
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gold-accent font-bold mb-3">Key Benefits & Protocols:</h4>
                    <ul className="space-y-2.5">
                      {selectedService.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-stone-700 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-accent mt-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-stone-400 font-bold leading-none">Inquiry Routing</p>
                    <p className="text-xs text-stone-600 mt-1">Dispatched to +92 302 2146422 & zahidig@hotmail.com</p>
                  </div>
                  
                  <a
                    href={`https://wa.me/923022146422?text=Hello%20Dr.%20Zahid,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(selectedService.name)}%20services%20for%20a%20Wednesday%20appointment.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#1a1917] text-stone-100 hover:bg-stone-800 rounded-xl font-serif text-xs font-semibold tracking-wide border border-gold-accent/40 flex items-center justify-center gap-2 shadow transition-all duration-200"
                  >
                    <CalendarCheck2 className="w-4 h-4 text-gold-accent" />
                    Book Service Now via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
