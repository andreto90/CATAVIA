import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mountain, Flame, Coffee, Sparkles } from 'lucide-react';

export default function Storytelling() {
  const { t } = useTranslation();

  return (
    <section id="origen" className="py-24 lg:py-36 bg-[#0B0E0D] text-[#FAF8F5] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#E85D04]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#1B4332]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24 lg:mb-32">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E85D04] font-bold font-mono block mb-3">
            {t('narrative.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] mb-6">
            {t('narrative.title')}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            {t('narrative.intro')}
          </p>
        </div>

        {/* Station 01: El Origen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32 lg:mb-40">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#E85D04]">
                {t('narrative.m1Number')}
              </span>
              <div className="h-[1px] flex-1 bg-white/15" />
              <Mountain className="w-5 h-5 text-white/40" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-white/60 font-mono font-semibold block mb-2">
              {t('narrative.m1Subtitle')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-5 leading-tight">
              {t('narrative.m1Title')}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t('narrative.m1Text')}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.regionsLabel', { defaultValue: 'Regiones Emblemáticas:' })}</span>
                <span className="text-white font-medium">{t('narrative.regionsValue', { defaultValue: 'Huila · Sierra Nevada · Nariño · Santander' })}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.terroirLabel', { defaultValue: 'Terroir:' })}</span>
                <span className="text-[#E85D04] font-mono">{t('narrative.terroirValue', { defaultValue: '1,700m - 2,100m sobre el nivel del mar' })}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/colombian_landscape_cobre_1791438627661.jpg"
                alt="Montañas y cafetales andinos de Colombia"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/colombian_landscape_cobre_1791438627661.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white/80 font-mono flex justify-between">
                <span>{t('narrative.rangesLabel', { defaultValue: 'Cordillera Central & Occidental, Colombia' })}</span>
                <span className="text-[#E85D04]">{t('narrative.microclimatesLabel', { defaultValue: 'Microclimas Andinos' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Station 02: El Descubrimiento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32 lg:mb-40">
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/coffee_beans_macro_1791439292473.jpg"
                alt="Granos de café tostados frescos con textura oleosa"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/coffee_beans_macro_1791439292473.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white/80 font-mono flex justify-between">
                <span>{t('narrative.microlotsLabel', { defaultValue: 'Selección de Microlotes Especiales' })}</span>
                <span className="text-[#E85D04]">{t('narrative.roastingLabel', { defaultValue: 'Tostión Artesanal' })}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#E85D04]">
                {t('narrative.m2Number')}
              </span>
              <div className="h-[1px] flex-1 bg-white/15" />
              <Flame className="w-5 h-5 text-white/40" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-white/60 font-mono font-semibold block mb-2">
              {t('narrative.m2Subtitle')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-5 leading-tight">
              {t('narrative.m2Title')}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t('narrative.m2Text')}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.roastProfilesLabel', { defaultValue: 'Perfiles de Tueste:' })}</span>
                <span className="text-white font-medium">{t('narrative.roastProfilesValue', { defaultValue: 'Medio Claro · Medio · Medio Oscuro' })}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.developmentLabel', { defaultValue: 'Desarrollo:' })}</span>
                <span className="text-[#E85D04] font-mono">{t('narrative.developmentValue', { defaultValue: 'Curva artesanal por lote' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Station 03: Tu Ritual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#E85D04]">
                {t('narrative.m3Number')}
              </span>
              <div className="h-[1px] flex-1 bg-white/15" />
              <Coffee className="w-5 h-5 text-white/40" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-white/60 font-mono font-semibold block mb-2">
              {t('narrative.m3Subtitle')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-5 leading-tight">
              {t('narrative.m3Title')}
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t('narrative.m3Text')}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.sealLabel', { defaultValue: 'Sellado Hermético:' })}</span>
                <span className="text-white font-medium">{t('narrative.sealValue', { defaultValue: 'Válvula desgasificadora unidireccional' })}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">{t('narrative.consumptionLabel', { defaultValue: 'Momento de Consumo:' })}</span>
                <span className="text-[#E85D04] font-mono">{t('narrative.consumptionValue', { defaultValue: 'Mañanas contemplativas & sobremesas' })}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/coffee_preparation_ritual_1791438617849.jpg"
                alt="Ritual de preparación de café pour-over en casa"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/coffee_preparation_ritual_1791438617849.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white/80 font-mono flex justify-between">
                <span>{t('narrative.destinationLabel', { defaultValue: 'Tu Hogar en Norteamérica' })}</span>
                <span className="text-[#E85D04]">{t('narrative.extractionLabel', { defaultValue: 'Extracción Perfecta' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
