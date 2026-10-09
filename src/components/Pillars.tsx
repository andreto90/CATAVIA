import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Home, ArrowUpRight } from 'lucide-react';

export default function Pillars() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Compass,
      title: t('pillars.p1Title'),
      desc: t('pillars.p1Desc'),
      href: '#origen',
      badge: t('pillars.p1Badge', { defaultValue: 'Geografía & Altitud' })
    },
    {
      icon: Sparkles,
      title: t('pillars.p2Title'),
      desc: t('pillars.p2Desc'),
      href: '#descubrimiento',
      badge: t('pillars.p2Badge', { defaultValue: 'Guía Sensorial' })
    },
    {
      icon: Home,
      title: t('pillars.p3Title'),
      desc: t('pillars.p3Desc'),
      href: '#experiencia',
      badge: t('pillars.p3Badge', { defaultValue: 'Ritual Cotidiano' })
    }
  ];

  return (
    <section id="pilares" className="py-24 lg:py-32 bg-[#FAF8F5] dark:bg-[#0B0E0D] border-b border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Staged Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-3">
            {t('pillars.coreBadge', { defaultValue: 'La Propuesta Esencial' })}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141816] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
            {t('pillars.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] font-light leading-relaxed">
            {t('pillars.subtitle')}
          </p>
        </motion.div>

        {/* Staged Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.a
                key={idx}
                href={pillar.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.14,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative p-8 sm:p-9 rounded-2xl bg-white dark:bg-[#141816] border border-black/[0.07] dark:border-white/[0.1] hover:border-[#E85D04]/50 dark:hover:border-[#E85D04]/60 hover-lift flex flex-col justify-between shadow-xs overflow-hidden transition-colors duration-300"
              >
                {/* Subtle decorative background hover gradient */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#E85D04]/5 rounded-full blur-2xl group-hover:bg-[#E85D04]/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#141816] dark:bg-[#1E2521] text-white flex items-center justify-center group-hover:bg-[#E85D04] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#606863] dark:text-[#9DA7A1] bg-[#F3EFEA] dark:bg-white/5 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#141816] dark:text-[#FAF8F5] font-normal mb-3 group-hover:text-[#E85D04] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#141816] dark:text-[#FAF8F5] group-hover:text-[#E85D04] transition-colors">
                  <span>{t('pillars.explorePillar', { defaultValue: 'Explorar Pilar' })}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
