/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, AlertTriangle, CalendarCheck2 } from 'lucide-react';
import { InquiryFormState } from '../types';

export default function ContactInquiry() {
  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    selectedService: 'General Health Diagnostics & consultation',
    preferredDateTime: '',
    message: '',
    submitted: false,
    routingChoice: 'whatsapp'
  });

  const [dateAlert, setDateAlert] = useState(false);

  const handleDateChange = (dateVal: string) => {
    setForm(prev => ({ ...prev, preferredDateTime: dateVal }));
    if (!dateVal) {
      setDateAlert(false);
      return;
    }
    // Determine the day of the week
    const dateObj = new Date(dateVal);
    const dayOfWeek = dateObj.getDay(); // 0 is Sunday, 3 is Wednesday
    if (dayOfWeek !== 3) {
      setDateAlert(true);
    } else {
      setDateAlert(false);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phoneNumber) return;

    // Compile dynamic dispatch string
    const whatsappText = `Hello Dr. Zahid Medicare & Dental Specialists, I would like to submit an inquiry:\n\n` +
      `- *Patient:* ${form.fullName}\n` +
      `- *Phone:* ${form.phoneNumber}\n` +
      `- *Email:* ${form.email || 'N/A'}\n` +
      `- *Service:* ${form.selectedService}\n` +
      `- *Requested Date:* ${form.preferredDateTime ? new Date(form.preferredDateTime).toLocaleString() : 'Wednesday Session'}\n` +
      `- *Message:* ${form.message || 'Immediate appointment slot'}`;

    const mailSubject = `Clinical Inquiry - ${form.fullName}`;
    const mailBody = `Hello Dr. Zahid Medicare & Dental Specialists,\n\nI wish to schedule an appointment/session:\n\nName: ${form.fullName}\nContact Phone: ${form.phoneNumber}\nService Desired: ${form.selectedService}\nPreferred slot: ${form.preferredDateTime}\nMessage: ${form.message}\n\nSubmitted dynamically (DHA Phase 5 Karachi Suite).`;

    // Local sandbox state save
    setForm(prev => ({ ...prev, submitted: true }));

    if (form.routingChoice === 'whatsapp') {
      const whatsappUrl = `https://wa.me/923022146422?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
    } else if (form.routingChoice === 'email') {
      const mailtoUrl = `mailto:zahidig@hotmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
      window.location.href = mailtoUrl;
    } else {
      // Default auto actions
      const whatsappUrl = `https://wa.me/923022146422?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="py-24 bg-beige-gradient relative overflow-hidden">
      {/* Decorative details for professional aesthetics */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute left-10 top-1/4 w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-gold-accent text-xs uppercase tracking-widest font-bold block">
            Direct Therapeutic Ingress
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight font-medium">
            Book Appointment & Inquiries
          </h2>
          <div className="h-0.5 w-16 bg-gold-accent mx-auto rounded-full" />
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Register your clinical dossier below. Active inquiries are immediately routed directly to Dr. Zahid Iqbal&apos;s digital handset at <strong>+92 302 2146422</strong> and inbox <strong>zahidig@hotmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact parameters & Address */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900 text-stone-100 p-8 rounded-2xl border border-gold-accent/40 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <span className="font-mono text-gold-accent text-xs uppercase tracking-widest font-bold block">Clinic Coordinates</span>
                <h3 className="font-serif text-2xl font-light text-stone-100">Contact Dossier</h3>
                <div className="h-0.5 w-10 bg-gold-accent" />
              </div>

              <div className="space-y-6 pt-2">
                {/* Shortened, professional address instead of rough original */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-gold-accent shrink-0 border border-stone-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold col-span-2">Clinical Location</p>
                    <p className="text-stone-100 text-sm font-serif leading-snug">
                      Badar Commercial Street 10, <br />
                      (Above DHL Express Service Point), <br /> 
                      DHA Phase 5, Karachi, 75500, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-gold-accent shrink-0 border border-stone-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">Inquiry Desk</p>
                    <p className="text-stone-100 text-sm font-semibold font-mono">
                      +92 302 2146422
                    </p>
                    <p className="text-[10px] text-stone-400">WhatsApp live link enabled</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-gold-accent shrink-0 border border-stone-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">Electronic Mail</p>
                    <p className="text-stone-100 text-sm font-semibold font-mono">
                      zahidig@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-gold-accent shrink-0 border border-stone-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">Physical Consult Slots</p>
                    <p className="text-stone-100 text-sm font-semibold">
                      Wednesdays (5:00 PM onwards)
                    </p>
                    <p className="text-[10px] text-amber-400">CLOSED all other times. Priority booking required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical instructions display */}
            <div className="p-6 bg-[#faf8f4] border border-stone-200/60 rounded-2xl shadow-sm text-xs text-stone-600 leading-relaxed">
              <h4 className="font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5 uppercase text-[10px] tracking-wider text-[#C5B358]">
                ✦ Patient Instructions
              </h4>
              <p className="mb-2">
                1. Submit your inquiry using the smart medical form. 
              </p>
              <p className="mb-2">
                2. Choose whether you wish to compile and route this via <strong>Direct WhatsApp Desk</strong> or <strong>E-Mail Dispatch</strong>. 
              </p>
              <p>
                3. The clinic will review your record and confirm your Wednesday 5:00 PM slot within 4 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 bg-[#faf8f4] p-8 md:p-10 rounded-2xl border border-stone-200 shadow-xl relative">
            
            <form onSubmit={handleInquirySubmit} className="space-y-6 text-xs text-stone-800">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zainab Fatima"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl placeholder-stone-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Phone Number (with active WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 300 1234567"
                    value={form.phoneNumber}
                    onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl placeholder-stone-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. patient@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl placeholder-stone-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Desired Treatment / Segment</label>
                  <select
                    value={form.selectedService}
                    onChange={(e) => setForm({ ...form, selectedService: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl font-sans"
                  >
                    <option value="Orthodontics & Aligner Therapy">Orthodontics & Braces / Clear Aligners</option>
                    <option value="Advanced Dental Implants">Advanced Restorative Dental Implants</option>
                    <option value="Cosmetic Smile Makeover">Cosmetic Smile Makeover & Veneers</option>
                    <option value="Pain-Free Endodontics">Endodontics / Micro Root Canal</option>
                    <option value="Impacted Wisdom Relief">Surgical Removal of Teeth</option>
                    <option value="General Medicare Consultation">Primary Medicare & Family Diagnostics</option>
                    <option value="Preventative Screenings">Biomedical Optimization & Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Preferred Date (Wednesday Recommended) *</label>
                <input
                  type="date"
                  required
                  value={form.preferredDateTime}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl font-mono"
                />
                
                {/* Wednesday alert notification */}
                {dateAlert && (
                  <div className="mt-2.5 p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-800 rounded-xl flex items-start gap-2 animate-fadeIn leading-relaxed">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                    <p>
                      <strong>Operating schedule warning:</strong> Dr. Zahid is physical at the clinic <strong>exclusively on Wednesdays starting at 5:00 PM</strong>. Booking on another weekday may delay verification.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold mb-1.5">Clinical Notes / Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your dental discomfort or medicare general health objectives..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:outline-none p-3.5 rounded-xl placeholder-stone-400 resize-none leading-relaxed font-sans"
                />
              </div>

              {/* Inquiry Action Segment */}
              <div className="space-y-4 pt-2">
                <label className="block font-mono text-[10px] uppercase text-stone-500 font-bold leading-none">Select Dispatch Mechanism</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setForm(p => ({ ...p, routingChoice: 'whatsapp' }))}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                      form.routingChoice === 'whatsapp'
                        ? 'bg-emerald-500/5 text-emerald-800 border-emerald-500 font-semibold'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600 mb-1" />
                    <span>WhatsApp Route</span>
                    <span className="text-[10px] font-mono text-stone-400 mt-1 font-light font-sans">Opens Chat to Phone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm(p => ({ ...p, routingChoice: 'email' }))}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                      form.routingChoice === 'email'
                        ? 'bg-blue-500/5 text-blue-800 border-blue-500 font-semibold'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Mail className="w-5 h-5 text-blue-600 mb-1" />
                    <span>E-Mail Mailto Route</span>
                    <span className="text-[10px] font-mono text-stone-400 mt-1 font-light font-sans">Opens Local Email client</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-stone-100 font-serif text-sm tracking-wide font-medium rounded-full shadow-lg border border-gold-accent/40 flex items-center justify-center gap-2 duration-300 group cursor-pointer"
              >
                <Send className="w-4 h-4 text-gold-accent group-hover:translate-x-1 transition-transform" />
                Dispatch Clinical Inquiry Dossier
              </button>
            </form>

            {form.submitted && (
              <div className="absolute inset-0 bg-stone-900/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-8 text-center text-stone-200 animate-fadeIn z-20">
                <div className="p-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-4">
                  <CalendarCheck2 className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl text-stone-100 font-semibold mb-2">Inquiry Pre-Registration Dispatched!</h3>
                <p className="text-stone-300 text-xs max-w-md font-light leading-relaxed mb-6">
                  Your record has been queued. If your browser didn&apos;t automatically launch the application, click any trigger button below to finalize delivery to Dr. Zahid.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                  <a
                    href={`https://wa.me/923022146422?text=${encodeURIComponent(
                      `Hello Dr. Zahid, clinical inquiry for ${form.fullName} to DHA Karachi.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-xs text-center shadow flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" /> Send WhatsApp
                  </a>

                  <a
                    href={`mailto:zahidig@hotmail.com?subject=Inquiry%20from%20${encodeURIComponent(form.fullName)}&body=Phone:%20${encodeURIComponent(form.phoneNumber)}`}
                    className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold py-3 px-4 rounded-xl text-xs text-center border border-gold-accent/30 flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-gold-accent" /> Send E-Mail
                  </a>
                </div>

                <button
                  onClick={() => setForm(p => ({ ...p, submitted: false }))}
                  className="mt-8 text-stone-400 hover:text-white text-[10px] underline uppercase tracking-wider"
                >
                  Return and Edit Form
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
