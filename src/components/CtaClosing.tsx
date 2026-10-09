import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaClosing() {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 lg:py-44 bg-[#0A0D0B] text-white overflow-hidden">
      {/* Background Cinematic Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/colombian_landscape_cobre_1791438627661.jpg"
          alt="Paisaje de las montañas cafeteras de Colombia al atardecer"
          className="w-full h-full object-cover opacity-30 filter brightness-70 scale-103"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = '/src/assets/images/colombian_landscape_cobre_1791438627661.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0B] via-[#0A0D0B]/80 to-[#0A0D0B]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-mono uppercase tracking-[0.16em] text-[#E85D04] mb-8 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>El Comienzo de Tu Ritual</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.08] mb-8 text-balance">
          {t('closing.title')}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-xl mx-auto mb-12 text-pretty">
          {t('closing.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#descubrimiento"
            className="w-full sm:w-auto px-8 py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-[0.16em] font-bold rounded-full shadow-2xl glow-orange transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>{t('closing.cta')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#coleccion"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 text-xs uppercase tracking-[0.16em] font-bold rounded-full transition-all duration-300 text-center cursor-pointer active:scale-95"
          >
            {t('closing.secondaryCta')}
          </a>
        </div>
      </div>
    </section>
  );
}
