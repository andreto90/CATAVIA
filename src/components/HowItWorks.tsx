import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane, PackageCheck, Coffee } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      num: t('howItWorks.step1Num'),
      title: t('howItWorks.step1Title'),
      text: t('howItWorks.step1Text'),
      icon: Coffee,
      detail: t('howItWorks.step1Detail', { defaultValue: 'Orientación sensorial intuitiva' })
    },
    {
      num: t('howItWorks.step2Num'),
      title: t('howItWorks.step2Title'),
      text: t('howItWorks.step2Text'),
      icon: PackageCheck,
      detail: t('howItWorks.step2Detail', { defaultValue: 'Grano entero o molienda calibrada' })
    },
    {
      num: t('howItWorks.step3Num'),
      title: t('howItWorks.step3Title'),
      text: t('howItWorks.step3Text'),
      icon: Plane,
      detail: t('howItWorks.step3Detail', { defaultValue: '3 a 5 días hábiles a EE. UU. y Canadá' })
    }
  ];

  return (
    <section id="como-funciona" className="py-24 lg:py-36 bg-[#FAF8F5] dark:bg-[#0B0E0D] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Staged Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20 lg:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-2">
            {t('howItWorks.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141816] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] font-light leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* 3 Steps Staged Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
          {/* Animated line connector */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[2px] bg-black/[0.08] dark:bg-white/10 z-0"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.16,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative z-10 bg-white dark:bg-[#141816] p-8 sm:p-9 rounded-3xl border border-black/[0.07] dark:border-white/[0.1] shadow-xs hover-lift flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-5xl sm:text-6xl font-normal text-[#E85D04]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#141816] dark:bg-[#1C221F] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-[#E85D04]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#141816] dark:text-[#FAF8F5] font-normal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light mb-8">
                    {step.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06] text-[11px] font-mono text-[#E85D04] uppercase font-semibold tracking-wider">
                  {step.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
