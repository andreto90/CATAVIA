import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import cataviaLogo from '../assets/images/logocatavia.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Cinematic Imagery Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_coffee_plantation_1791438598371.jpg"
          alt="Paisaje andino de cafetales en Colombia"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = '/src/assets/images/hero_coffee_plantation_1791438598371.jpg';
          }}
        />
        {/* Editorial Multi-Tone Scrim ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/75 pointer-events-none" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Subtle Origin Kicker with Official Logo Seal */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-xs text-white mb-8 shadow-xl">
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <img
              src={cataviaLogo}
              alt="CATAVIA"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = '/logocatavia.png';
              }}
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/95 font-semibold">
            CATAVIA · {t('hero.freshnessBadge')}
          </span>
          <span className="flex h-2 w-2 relative ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85D04] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E85D04]" />
          </span>
        </div>

        {/* Master Headline: Prestigious Editorial Serif (Fraunces & Instrument Serif) */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-8 max-w-4xl mx-auto drop-shadow-sm text-balance">
          {t('hero.titleLead', { defaultValue: 'Descubre Colombia,' })}{' '}
          <span className="font-editorial-italic text-[#FAF8F5]/95">
            {t('hero.titleAccent', { defaultValue: 'una taza a la vez.' })}
          </span>
        </h1>

        {/* Evocative Editorial Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto mb-12 text-pretty font-sans">
          {t('hero.subtitle')}
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href="#descubrimiento"
            className="w-full sm:w-auto px-8 py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-full shadow-lg glow-orange transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>{t('hero.ctaPrimary')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#coleccion"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 hover:border-white/50 text-xs uppercase tracking-[0.16em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
          >
            <span>{t('hero.ctaSecondary')}</span>
          </a>
        </div>

        {/* Editorial Metrics Dock */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border border-white/15">
          <div className="border-r border-white/10 last:border-0 sm:border-r">
            <span className="font-serif text-xl sm:text-2xl font-normal text-white block">1,700m+</span>
            <span className="text-[11px] text-white/70 uppercase font-mono tracking-wider">Altitud Andina</span>
          </div>
          <div className="sm:border-r border-white/10">
            <span className="font-serif text-xl sm:text-2xl font-normal text-white block">100% Arábica</span>
            <span className="text-[11px] text-white/70 uppercase font-mono tracking-wider">Variedades Nobles</span>
          </div>
          <div className="border-r border-white/10 last:border-0 sm:border-r">
            <span className="font-serif text-xl sm:text-2xl font-normal text-[#E85D04] block">Tueste Fresco</span>
            <span className="text-[11px] text-white/70 uppercase font-mono tracking-wider">Bajo Pedido</span>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-normal text-white block">3-5 Días</span>
            <span className="text-[11px] text-white/70 uppercase font-mono tracking-wider">EE. UU. & Canadá</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Visual Indicator */}
      <a
        href="#pilares"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white flex flex-col items-center gap-1.5 text-[10px] uppercase font-mono tracking-[0.2em] transition-colors"
        aria-label="Scroll to explore"
      >
        <span>{t('hero.scrollHint')}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E85D04]" />
      </a>
    </section>
  );
}
