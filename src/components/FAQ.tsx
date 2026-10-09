import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-36 bg-[#FBFBFA] dark:bg-[#0B0E0D] border-t border-black/[0.05] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-2">
            {t('faq.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0D110E] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A625C] dark:text-[#9DA7A1] font-light leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Modern Accordion */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141816] transition-all overflow-hidden shadow-2xs hover:border-[#E85D04]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBFBFA] dark:hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#0D110E] dark:text-white font-medium leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#E85D04] text-white rotate-180 shadow-xs'
                        : 'bg-[#F3F3EF] dark:bg-white/10 text-[#0D110E] dark:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-[#5A625C] dark:text-[#9DA7A1] font-light leading-relaxed border-t border-black/[0.04] dark:border-white/[0.06] animate-fadeIn">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modern Concierge Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#0D110E] dark:bg-[#1E2521] border border-transparent dark:border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E85D04] flex items-center justify-center text-white shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-serif text-base font-normal block text-white">¿Tienes alguna pregunta adicional?</span>
              <span className="text-xs text-white/70 font-light">Nuestro equipo de concierge cafetero está disponible 24/7.</span>
            </div>
          </div>
          <a
            href="mailto:concierge@cafecolombia-demo.com"
            className="px-6 py-3 bg-white text-[#0D110E] hover:bg-[#E85D04] hover:text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shrink-0 cursor-pointer"
          >
            Escribir al Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
