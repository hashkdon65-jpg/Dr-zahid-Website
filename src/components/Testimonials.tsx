/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PATIENT_TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, MessageSquareQuote, CheckCircle2, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(PATIENT_TESTIMONIALS);
  
  // Feedback form state
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    experience: '',
    serviceReceived: 'General Medicare & consultation',
    authorTitle: 'Karachi Patient'
  });
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.experience) return;

    const submittedReview: Testimonial = {
      id: `custom-t-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      experience: newReview.experience,
      serviceReceived: newReview.serviceReceived,
      authorTitle: newReview.authorTitle || 'DHA Resident'
    };

    setTestimonials([submittedReview, ...testimonials]);
    setFeedbackSuccess(true);
    setNewReview({
      name: '',
      rating: 5,
      experience: '',
      serviceReceived: 'General Medicare & consultation',
      authorTitle: 'Karachi Patient'
    });

    setTimeout(() => {
      setFeedbackSuccess(false);
    }, 4000);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5" aria-label={`Patient score: ${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`w-4 h-4 ${idx < rating ? 'text-[#C5B358] fill-current' : 'text-stone-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-[#1a1917] text-stone-200 relative overflow-hidden">
      {/* Texture Details to eliminate flat darks */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-stone-800/20 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header summary */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-gold-accent text-xs uppercase tracking-widest font-bold block">
            Verified Experiences & Ratings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-50 tracking-tight font-medium">
            Testimonials from DHA Karachi
          </h2>
          <div className="h-0.5 w-16 bg-gold-accent mx-auto rounded-full" />
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Read first-hand accounts of Dr. Zahid Iqbal&apos;s surgical precision and consultative wisdom. Our practice is built on referrals and clinical outcomes.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main reviews grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800/80 hover:border-[#C5B358]/40 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      {renderStars(test.rating)}
                      <p className="font-serif font-semibold text-stone-100 text-base mt-2">{test.name}</p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-[#C5B358]">{test.authorTitle}</p>
                    </div>
                    <span className="p-1.5 rounded-lg bg-stone-800 text-gold-accent shrink-0">
                      <MessageSquareQuote className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-stone-300 text-xs font-light leading-relaxed italic">
                    &ldquo;{test.experience}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-stone-800 text-stone-300 py-0.5 px-2 rounded-full font-medium">
                    {test.serviceReceived}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500 font-medium">
                    {test.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Form Card */}
          <div className="lg:col-span-4 bg-[#faf8f4] text-stone-900 p-8 rounded-2xl border border-gold-accent/40 shadow-xl self-stretch flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 text-gold-accent">
                  <UserCheck className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest leading-none">Review Desk</span>
                </div>
                <h3 className="font-serif text-xl font-medium tracking-tight text-stone-950">Add Your Experience</h3>
                <div className="h-0.5 w-12 bg-gold-accent rounded-full" />
              </div>

              {feedbackSuccess ? (
                <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl space-y-2 text-center animate-fadeIn py-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
                  <p className="text-sm font-semibold">Thank You for Your Feedback</p>
                  <p className="text-xs text-emerald-700">Your rating has been recorded and listed dynamically.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asma Malik"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3 rounded-lg placeholder-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1 col-span-2">Select Treatment Received</label>
                    <select
                      value={newReview.serviceReceived}
                      onChange={(e) => setNewReview({ ...newReview, serviceReceived: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3 rounded-lg"
                    >
                      <option value="Orthodontics">Orthodontics / Aligners</option>
                      <option value="Dental Implants">Bespoke Dental Implants</option>
                      <option value="Cosmetic Makeover">Cosmetic Smile Makeover</option>
                      <option value="Wisdom Extraction">Specialist Oral Surgery</option>
                      <option value="Family Medicare">Primary Medicare Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1Col-span-2">Rating</label>
                    <div className="flex gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: num })}
                          className={`p-2 rounded-lg border text-sm font-semibold w-9 text-center transition-all ${
                            newReview.rating >= num 
                              ? 'bg-[#1a1917] text-[#C5B358] border-gold-accent' 
                              : 'bg-stone-50 text-stone-400 border-stone-200'
                          }`}
                        >
                          {num} ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1">Your Experience</label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.experience}
                      onChange={(e) => setNewReview({ ...newReview, experience: e.target.value })}
                      placeholder="Share details of your clinical session with Dr. Zahid..."
                      className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3 rounded-lg placeholder-stone-400 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-stone-100 py-3.5 rounded-lg font-serif tracking-wide font-medium border border-gold-accent/40 shadow transition-colors cursor-pointer"
                  >
                    Submit Live Review
                  </button>
                </form>
              )}
            </div>
            
            <div className="pt-4 border-t border-stone-200/50 text-[10px] text-stone-400 font-mono text-center">
              All submissions are sandboxed onto local session streams.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
