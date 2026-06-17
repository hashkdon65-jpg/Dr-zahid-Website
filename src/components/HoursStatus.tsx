/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

export default function HoursStatus() {
  const [statusText, setStatusText] = useState('');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateClinicStatus() {
      const now = new Date();
      // Target: Wednesday (Day 3), 17:00 (5:00 PM)
      const targetDay = 3; 
      const targetHour = 17;
      const targetMinute = 0;

      const currentDay = now.getDay();
      const currentHour = now.getHours();
      
      // Let's assume on Wednesday, Dr. Zahid stays open from 5:00 PM to 9:00 PM (21:00)
      const closeHour = 21;

      let isCurrentlySession = false;
      if (currentDay === targetDay && currentHour >= targetHour && currentHour < closeHour) {
        isCurrentlySession = true;
      }

      setIsOpen(isCurrentlySession);

      // Now calculate the NEXT Wednesday at 5:00 PM
      let targetDate = new Date(now);
      targetDate.setHours(targetHour, targetMinute, 0, 0);

      // Distances in days
      let daysRemaining = (targetDay - currentDay + 7) % 7;
      
      if (daysRemaining === 0) {
        // It's Wednesday. Is 5 PM in the past?
        const currentMs = now.getTime();
        const targetMs = targetDate.getTime();
        if (currentMs > targetMs) {
          // Yes, target for today has passed, schedule for next Wednesday
          daysRemaining = 7;
        }
      }

      targetDate.setDate(now.getDate() + daysRemaining);

      const timeDiff = targetDate.getTime() - now.getTime();
      
      const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({ days: d, hours: h, minutes: m, seconds: s });

      if (isCurrentlySession) {
        setStatusText(`Currently Live (Open until 9:00 PM)`);
      } else {
        if (d === 0 && h === 0 && m === 0) {
          setStatusText('Opening shortly at 5:00 PM');
        } else if (d === 0) {
          setStatusText(`Opens Today at 5:00 PM`);
        } else {
          setStatusText(`Opens Wednesday at 5:00 PM`);
        }
      }
    }

    updateClinicStatus();
    const interval = setInterval(updateClinicStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-beige-card p-6 rounded-2xl border-gold-accent max-w-md w-full mx-auto shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isOpen ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
            <Clock className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-serif font-medium text-lg leading-tight">Clinic Schedule</h4>
            <p className="text-xs text-stone-500">Strictly by appointment</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
          isOpen ? 'bg-emerald-500/15 text-emerald-700 font-mono' : 'bg-amber-500/15 text-amber-700 font-mono'
        }`}>
          ● {isOpen ? 'LIVE NOW' : 'CLOSED'}
        </span>
      </div>

      <div className="space-y-4">
        <div className="p-3 bg-stone-100/60 rounded-xl flex items-start gap-2 text-xs text-stone-600 leading-relaxed border border-stone-200/40">
          <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <span>
            Dr. Zahid Medicare & Dental Specialists operates strictly on the weekly slot: <strong>Wednesday 5:00 PM onward</strong>. Please pre-book to guarantee your arrival consult.
          </span>
        </div>

        {!isOpen ? (
          <div>
            <div className="text-xs text-stone-500 mb-1.5 uppercase tracking-widest font-mono text-center">Countdown to next session</div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/50">
                <div className="font-mono text-xl font-bold text-stone-800">{String(countdown.days).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase text-stone-400 font-medium">Days</div>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/50">
                <div className="font-mono text-xl font-bold text-stone-800">{String(countdown.hours).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase text-stone-400 font-medium">Hrs</div>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/50">
                <div className="font-mono text-xl font-bold text-stone-800">{String(countdown.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase text-stone-400 font-medium font-mono">Min</div>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/50">
                <div className="font-mono text-xl font-bold text-gold-accent">{String(countdown.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase text-stone-400 font-medium">Sec</div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs text-stone-600 font-medium font-serif italic">
              {statusText}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-800 rounded-xl text-center">
            <p className="text-sm font-medium">We are currently receiving clinical walk-ins and priority appts.</p>
            <p className="text-xs text-emerald-600/80 mt-1 font-mono">Wednesday Session: 5:00 PM to 9:00 PM</p>
          </div>
        )}
      </div>
    </div>
  );
}
