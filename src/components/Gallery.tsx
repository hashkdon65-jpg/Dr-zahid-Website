/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CLINIC_GALLERY } from '../data';
import { GalleryItem } from '../types';
import { Focus, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'clinical' | 'equipment' | 'specialist'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = CLINIC_GALLERY.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const getFilterClass = (filter: typeof activeFilter) => {
    return `px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
      activeFilter === filter
        ? 'bg-stone-900 text-stone-100 font-semibold border-gold-accent'
        : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200/55'
    }`;
  };

  return (
    <section id="gallery" className="py-24 bg-beige-gradient relative overflow-hidden">
      {/* Visual background textures to fulfill plain color ban */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-amber-100/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-stone-200/50 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1a1917]/5 rounded-full border border-[#C5B358]/20">
            <Focus className="w-3.5 h-3.5 text-gold-accent" />
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-stone-700">Digital Clinic Suite Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight font-medium">
            Dental Clinic Gallery & Technology
          </h2>
          <div className="h-0.5 w-16 bg-gold-accent mx-auto rounded-full" />
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Take a visual tour of our bespoke workspace in Badar Commercial, Karachi, customized with absolute therapeutic ergonomics and sterilizer assurance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button onClick={() => setActiveFilter('all')} className={getFilterClass('all')}>
            Complete Suite
          </button>
          <button onClick={() => setActiveFilter('clinical')} className={getFilterClass('clinical')}>
            Clinical Spaces
          </button>
          <button onClick={() => setActiveFilter('equipment')} className={getFilterClass('equipment')}>
            Modern Apparatus
          </button>
          <button onClick={() => setActiveFilter('specialist')} className={getFilterClass('specialist')}>
            Expert Consultation
          </button>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200/50 shadow hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro hover glass overlay */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-stone-50/90 text-stone-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5 text-gold-accent" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-stone-900/85 text-stone-200 text-[9px] font-mono tracking-widest uppercase py-1 px-3 rounded-full border border-gold-accent/40 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-[#C5B358] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs font-light leading-normal mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Carousel */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
            
            {/* Top Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white p-2.5 rounded-full hover:bg-stone-900"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-stone-400 hover:text-white p-3 rounded-full hover:bg-stone-900/60 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Central Media Display Card */}
            <div className="max-w-4xl w-full flex flex-col items-center space-y-4 px-4 select-none">
              <div className="relative max-h-[70vh] w-full flex justify-center">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl border border-stone-800"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center max-w-2xl space-y-1.5">
                <span className="text-[10px] font-mono text-gold-accent tracking-widest uppercase">
                  ✦ Image {lightboxIndex + 1} of {filteredItems.length} — {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl text-white font-medium">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-stone-400 hover:text-white p-3 rounded-full hover:bg-stone-900/60 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
