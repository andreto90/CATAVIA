import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext.tsx';
import { COUNTRIES_DATA } from '../data/countriesData.ts';
import { Globe, ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function ExploreCountriesSection() {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  // Highlight the other 4 countries (Costa Rica, Panamá, Brasil, Turquía) as teasers
  const internationalDestinations = [
    COUNTRIES_DATA['costa-rica'],
    COUNTRIES_DATA['panama'],
    COUNTRIES_DATA['brasil'],
    COUNTRIES_DATA['turquia']
  ];

  return (
    <section id="explora-mundo" className="py-20 sm:py-28 bg-[#F5F2EB] dark:bg-[#111614] border-y border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold">
              <Globe className="w-4 h-4" />
              <span>{t('exploreSection.kicker', { defaultValue: 'COLECCIÓN INTERNACIONAL CATAVIA' })}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight">
              {t('exploreSection.title', { defaultValue: 'Un mundo de café por descubrir.' })}
            </h2>

            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] max-w-2xl font-sans leading-relaxed">
              {t('exploreSection.subtitle', {
                defaultValue:
                  'Viaja a través de los aromas, tradiciones y experiencias que hacen única la cultura cafetera de cada país.'
              })}
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-6 py-3.5 rounded-full bg-[#141816] dark:bg-white text-white dark:text-[#141816] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-lg flex items-center gap-2 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>{t('exploreSection.ctaBtn', { defaultValue: 'Explorar países' })}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 International Destinations Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internationalDestinations.map((dest) => (
            <div
              key={dest.slug}
              onClick={() => navigate(`/${dest.slug}`)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-[#E85D04]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Country SVG Silhouette subtle watermark */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md p-1.5 opacity-80 group-hover:scale-110 transition-transform">
                  <svg viewBox={dest.viewBox} className="w-full h-full fill-white">
                    <path d={dest.mapSvgPath} />
                  </svg>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono text-[#E85D04] uppercase font-bold tracking-wider block">
                    {dest.editorialKicker}
                  </span>
                  <h4 className="text-2xl font-serif font-bold leading-tight">{dest.name}</h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#606863] dark:text-[#9DA7A1] line-clamp-2 font-sans">
                  "{dest.conceptSubtitle}"
                </p>

                <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#E85D04] group-hover:translate-x-1 transition-transform">
                  <span>Descubrir {dest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Explorer Banner invitation */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#E85D04] uppercase tracking-wider block">
                NUEVA EXPERIENCIA MUNDIAL
              </span>
              <p className="text-sm font-sans text-[#141816] dark:text-white font-medium">
                Descubre mapas interactivos de terroir, marcas verified como Café Monteverde y rutas históricas de café turco.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="text-xs font-mono uppercase font-bold text-[#E85D04] hover:text-[#d45300] flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <span>Ver Explorador Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
