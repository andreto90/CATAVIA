import React from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { Sunrise, MessageCircle, Moon, Sparkles, Coffee, Flame, Droplets, BookOpen, ArrowRight } from 'lucide-react';

export default function Experience() {
  const { t } = useTranslation();
  const { setIsKitModalOpen, openBrewingGuide } = useShop();

  const brewMethods = [
    {
      id: 'v60' as const,
      name: t('experience.v60Title', { defaultValue: 'Hario V60' }),
      subtitle: t('experience.v60Subtitle', { defaultValue: 'Claridad & Brillo Floral' }),
      ratio: '1:16.6 (15g : 250g)',
      time: '2:45 min',
      bestWith: t('experience.v60Best', { defaultValue: 'Huila Geisha & Nariño' }),
      desc: t('experience.v60Desc', { defaultValue: 'Extracción por goteo cónico que acentúa las notas de jazmín blanco, bergamota y la acidez cítrica brillante de los cafés andinos.' }),
      icon: Droplets,
    },
    {
      id: 'french' as const,
      name: t('experience.frenchTitle', { defaultValue: 'Prensa Francesa' }),
      subtitle: t('experience.frenchSubtitle', { defaultValue: 'Cuerpo & Notas a Cacao' }),
      ratio: '1:15 (30g : 450g)',
      time: '4:00 min',
      bestWith: t('experience.frenchBest', { defaultValue: 'Sierra Nevada Mist' }),
      desc: t('experience.frenchDesc', { defaultValue: 'Inmersión total de cuatro minutos que conserva los aceites naturales, entregando una taza densa, achocolatada y aterciopelada.' }),
      icon: Coffee,
    },
    {
      id: 'chemex' as const,
      name: t('experience.chemexTitle', { defaultValue: 'Chemex 6-Cup' }),
      subtitle: t('experience.chemexSubtitle', { defaultValue: 'Pureza & Dulzura de Panela' }),
      ratio: '1:16 (30g : 480g)',
      time: '4:10 min',
      bestWith: t('experience.chemexBest', { defaultValue: 'Santander Honey & Bourbon' }),
      desc: t('experience.chemexDesc', { defaultValue: 'El filtro grueso de triple capa purga sedimentos y resalta la dulzura limpia de la caña de azúcar y las frutas rojas.' }),
      icon: Flame,
    },
  ];

  return (
    <section id="experiencia" className="py-24 lg:py-36 bg-[#0B0E0D] text-[#FAF8F5] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#1B4332]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-2">
            {t('experience.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Feature Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/images/coffee_home_moment_1791439282634.jpg"
                alt="Café pour-over matutino servido en taza de cerámica artesanal en sala moderna"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/coffee_home_moment_1791439282634.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-white/90">
                <p className="font-editorial-italic text-2xl sm:text-3xl text-white mb-1">
                  «El aroma de Colombia en la primera luz de tu sala.»
                </p>
                <span className="text-white/60 font-mono text-[11px] tracking-wider uppercase">Momento de serenidad cotidiana</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E85D04]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2 text-[#E85D04]">
                <Sunrise className="w-5 h-5" />
                <h3 className="font-serif text-xl text-white font-medium">{t('experience.moment1Title')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                {t('experience.moment1Desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E85D04]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2 text-[#E85D04]">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-serif text-xl text-white font-medium">{t('experience.moment2Title')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                {t('experience.moment2Desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E85D04]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2 text-[#E85D04]">
                <Moon className="w-5 h-5" />
                <h3 className="font-serif text-xl text-white font-medium">{t('experience.moment3Title')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                {t('experience.moment3Desc')}
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- BREWING GUIDES SECTION ---------------- */}
        <div className="mb-28 pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-[11px] font-mono uppercase tracking-widest font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t('experience.brewingBadge')}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {t('experience.brewingTitle')}
              </h3>
              <p className="text-sm text-white/70 font-light mt-2 max-w-xl">
                {t('experience.brewingSubtitle')}
              </p>
            </div>

            <button
              onClick={() => openBrewingGuide('v60', 'huila-geisha')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E85D04] hover:text-white underline transition-colors cursor-pointer"
            >
              <span>{t('experience.brewingOpenFull')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {brewMethods.map((method) => {
              const IconComp = method.icon;
              return (
                <div
                  key={method.id}
                  className="bg-white/5 border border-white/10 hover:border-[#E85D04]/60 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover-lift relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/20 text-[#E85D04] flex items-center justify-center shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-[#E85D04] font-bold bg-white/10 px-3 py-1 rounded-full">
                        {method.time}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl text-white font-normal mb-1">
                      {method.name}
                    </h4>
                    <span className="text-xs text-[#E85D04] font-mono font-medium block mb-3">
                      {method.subtitle}
                    </span>

                    <p className="text-xs text-white/70 leading-relaxed font-light mb-5">
                      {method.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-white/80 space-y-1.5 mb-6">
                      <div className="flex justify-between">
                        <span className="text-white/50 font-mono">{t('experience.brewingRatio')}</span>
                        <span className="font-mono text-white font-medium">{method.ratio}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-[#E85D04]">
                        <span>{method.bestWith}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openBrewingGuide(method.id, 'huila-geisha')}
                    className="w-full py-3 px-4 rounded-full bg-white/10 hover:bg-[#E85D04] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
                  >
                    <span>{t('experience.brewingStepByStep')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasting Kit Teaser Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#161B18] via-[#121614] to-[#18201B] border border-[#E85D04]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-[10px] uppercase font-mono tracking-widest font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('experience.brewingTastingBadge')}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
              {t('experience.kitTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-xl">
              {t('experience.kitSubtitle')}
            </p>
          </div>
          <button
            onClick={() => setIsKitModalOpen(true)}
            className="px-8 py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer active:scale-95 shadow-lg glow-orange shrink-0"
          >
            {t('experience.kitBtn')}
          </button>
        </div>
      </div>
    </section>
  );
}
