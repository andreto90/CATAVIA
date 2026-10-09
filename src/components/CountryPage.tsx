import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryData, COUNTRIES_DATA } from '../data/countriesData.ts';
import { useNavigation } from '../context/NavigationContext.tsx';
import CountrySvgMap from './CountrySvgMap.tsx';
import Catalog from './Catalog.tsx';
import {
  Compass,
  ArrowRight,
  ExternalLink,
  Award,
  Clock,
  Sparkles,
  MapPin,
  BookOpen,
  Coffee,
  Globe,
  CheckCircle2,
  ChevronRight,
  Layers,
  Flame,
  ArrowLeft
} from 'lucide-react';

interface CountryPageProps {
  countrySlug: string;
}

export default function CountryPage({ countrySlug }: CountryPageProps) {
  const { t, i18n } = useTranslation();
  const { navigate } = useNavigation();

  const country: CountryData = COUNTRIES_DATA[countrySlug] || COUNTRIES_DATA['costa-rica'];
  const [activeTab, setActiveTab] = useState<'all' | 'marcas' | 'tours' | 'cursos' | 'catacion'>('all');

  // Other countries for the footer cross-navigation
  const otherCountries = Object.values(COUNTRIES_DATA).filter((c) => c.slug !== country.slug);

  // Localized country name
  const localizedName =
    i18n.language.startsWith('en') ? country.nameEn :
    i18n.language.startsWith('fr') ? country.nameFr :
    country.name;

  return (
    <div key={country.slug} className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0E0D] text-[#141816] dark:text-[#FAF8F5] transition-colors duration-300">
      {/* =========================================================================
          A. PRESENTACIÓN DEL PAÍS (HERO CINEMATOGRÁFICO)
      ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Cinematographic Photography with Deep Atmospheric Overlays */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={country.heroImage}
            alt={`Cultura cafetera de ${country.name}`}
            className="w-full h-full object-cover scale-105 animate-pulse-subtle"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=85';
            }}
          />
          {/* Gradient vignettes for immaculate contrast and luxury editorial feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E0D] via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/70" />
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundColor: country.accentColor }}
          />
        </div>

        {/* Hero Content with Subtle Fade-In-Up & Real Country Map in Top Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[60vh] py-8 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Editorial Presentation */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center sm:text-left">
              {/* Breadcrumb & Navigation Anchor */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono tracking-wider text-white/70 mb-4 uppercase">
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#E85D04] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t('country.backToWorld', { defaultValue: 'Explorador Mundial' })}</span>
                </button>
                <span>/</span>
                <span className="text-[#E85D04] font-bold">{localizedName}</span>
              </div>

              {/* Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-mono tracking-widest uppercase mb-4 self-center sm:self-start">
                <Sparkles className="w-3.5 h-3.5 text-[#E85D04]" />
                <span>{country.editorialKicker}</span>
              </div>

              {/* Majestic Serif Country Title */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-8xl font-serif font-black text-white tracking-tight leading-none drop-shadow-2xl mb-4">
                {localizedName}
              </h1>

              {/* Concept Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white/90 max-w-2xl mb-4">
                "{country.conceptSubtitle}"
              </p>

              {/* Editorial Lead Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#FAF8F5]/85 max-w-xl font-sans leading-relaxed mb-6">
                {country.narrativeLead}
              </p>

              {/* Quick Metrics Bar */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-4 border-t border-white/15 text-xs font-mono text-white/90">
                {country.altitudeRange && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#E85D04] font-bold">ALTITUD:</span>
                    <span>{country.altitudeRange}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-[#E85D04] font-bold">CARÁCTER:</span>
                  <span>{country.annualProductionNote}</span>
                </div>
                {country.keyHarvestSeason && (
                  <div className="hidden md:flex items-center gap-2">
                    <span className="text-[#E85D04] font-bold">COSECHA:</span>
                    <span>{country.keyHarvestSeason}</span>
                  </div>
                )}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-8">
                <a
                  href="#mapa-geografico"
                  className="px-6 py-3 rounded-full bg-[#E85D04] hover:bg-[#d45300] text-white text-xs uppercase font-mono tracking-wider font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>{t('country.heroCtaMap', { defaultValue: 'Explorar Mapa & Regiones' })}</span>
                </a>
                <a
                  href="#cafes-y-marcas"
                  className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs uppercase font-mono tracking-wider font-bold transition-all backdrop-blur-xs flex items-center gap-2"
                >
                  <Coffee className="w-4 h-4" />
                  <span>{t('country.heroCtaBrands', { defaultValue: 'Descubrir Cafés' })}</span>
                </a>
                <a
                  href="#experiencias-tours"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-mono tracking-wider font-bold transition-all backdrop-blur-xs hidden sm:flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t('country.heroCtaTours', { defaultValue: 'Tours & Cataciones' })}</span>
                </a>
              </div>
            </div>

            {/* Right: Authentic Real Geographic Silhouette Map in the Top Header */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
              <div className="w-full max-w-[420px] rounded-3xl bg-black/60 backdrop-blur-xl border border-white/20 p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                {/* Accent ambient glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-35 pointer-events-none"
                  style={{ backgroundColor: country.accentColor }}
                />

                {/* Top card header */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-[10px] font-mono tracking-wider">
                  <span className="text-[#E85D04] font-bold flex items-center gap-1.5 uppercase">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{country.name}</span>
                  </span>
                  <span className="text-white/70 uppercase">
                    CATAVIA ATLAS
                  </span>
                </div>

                {/* Real Geographical Map Showcase - Sin puntos de referencia */}
                <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-2xl overflow-hidden my-3 bg-[#0A0D0B] border border-white/10 flex items-center justify-center group/map shadow-inner">
                  <img
                    src={country.realMapImage}
                    alt={`Mapa de ${country.name}`}
                    className="w-full h-full object-contain p-2 select-none transition-transform duration-700 group-hover/map:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                    loading="eager"
                  />
                  {/* Subtle corner geographic watermark */}
                  <div className="absolute bottom-2.5 right-3 text-[9px] font-mono tracking-widest text-white/40 uppercase select-none pointer-events-none">
                    CATAVIA GEO · {country.slug.toUpperCase()}
                  </div>
                </div>

                {/* Bottom card footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                  <span className="text-white/80 text-[11px]">
                    <strong className="text-[#E85D04] font-bold">{country.regions.length}</strong> Zonas en Cartografía
                  </span>
                  <a
                    href="#mapa-geografico"
                    className="text-[#E85D04] hover:text-[#ff7b29] font-bold flex items-center gap-1 transition-colors text-[11px]"
                  >
                    <span>Ver cartografía sensorial</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-mono tracking-widest uppercase flex flex-col items-center gap-1 animate-bounce">
          <span>DESLIZA HACIA EL MAPA</span>
          <ChevronRight className="w-3.5 h-3.5 rotate-90" />
        </div>
      </section>

      {/* =========================================================================
          B. MAPA DEL PAÍS — ELEMENTO OBLIGATORIO PROTAGONISTA
      ========================================================================= */}
      <section id="mapa-geografico" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-100">
        <CountrySvgMap country={country} />
      </section>

      {/* =========================================================================
          C. HISTORIA Y CULTURA CAFETERA
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F5F2EB] dark:bg-[#111614] border-y border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 animate-fade-in-up animation-delay-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Narrative Editorial */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold">
                <BookOpen className="w-4 h-4" />
                <span>{t('country.cultureHistoryTitle', { defaultValue: 'Cultura, Tradición & Herencia' })}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight leading-tight">
                {t('country.howCoffeeShaped', { defaultValue: 'La huella imborrable del café en' })} {localizedName}
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed">
                {country.narrativeBody.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-[#E85D04] first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E85D04]" />
                  <span>{t('country.authenticHeritage', { defaultValue: 'Herencia histórica verificada' })}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#E85D04]" />
                  <span>{t('country.globalSpecialty', { defaultValue: 'Reconocimiento internacional' })}</span>
                </div>
              </div>
            </div>

            {/* Right: Evocative Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 aspect-[4/5] group">
                <img
                  src={country.cultureImage}
                  alt={`Tradición de café en ${country.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E85D04] font-bold block mb-1">
                    ATMÓSFERA LOCAL
                  </span>
                  <p className="text-sm font-serif italic text-white/90">
                    "{country.editorialKicker} — Donde cada preparación es un acto de arte y devoción."
                  </p>
                </div>
              </div>

              {/* Decorative Floating Quote Tag */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white dark:bg-[#1E2420] text-[#141816] dark:text-white p-4 rounded-2xl shadow-xl border border-black/10 dark:border-white/10 max-w-xs text-xs font-sans">
                <span className="font-bold text-[#E85D04] block mb-0.5">CATAVIA CURATED ATLAS</span>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Exploración auténtica sin intermediarios de la cultura cafetera mundial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          D. EXPLORA LOS CAFÉS Y SUS MARCAS (CON DESTACADO CAFÉ MONTEVERDE EN CR)
      ========================================================================= */}
      <section id="cafes-y-marcas" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
              <Coffee className="w-4 h-4" />
              <span>{t('country.brandsSectionTitle', { defaultValue: 'Propuestas de Especialidad & Productores' })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight">
              {t('country.discoverCoffees', { defaultValue: 'Descubre sus Cafés y Marcas' })}
            </h2>
            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] max-w-2xl mt-2 font-sans">
              {t('country.brandsSubtitle', {
                defaultValue: 'Conoce las tostadurías, haciendas y cooperativas emblemáticas que representan con honor la identidad de este origen.'
              })}
            </p>
          </div>

          <div className="text-xs font-mono text-[#606863] dark:text-[#9DA7A1] px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            {t('country.brandsCount', { count: country.brands.length, defaultValue: `${country.brands.length} Marcas Verificadas` })}
          </div>
        </div>

        {/* Brands Grid with Editorial Distinction */}
        <div className="space-y-8">
          {country.brands.map((brand) => (
            <div
              key={brand.id}
              className={`rounded-3xl p-6 sm:p-8 lg:p-10 border transition-all duration-300 ${
                brand.highlighted
                  ? 'bg-gradient-to-br from-[#FAF8F5] via-white to-[#F5EFE6] dark:from-[#141816] dark:via-[#1A201C] dark:to-[#121614] border-[#E85D04]/40 shadow-2xl relative overflow-hidden'
                  : 'bg-white dark:bg-[#141816] border-black/10 dark:border-white/10 shadow-lg'
              }`}
            >
              {/* Special Crown / Spotlight badge for featured brands like Café Monteverde */}
              {brand.highlighted && (
                <div className="absolute top-0 right-0 bg-[#E85D04] text-white px-6 py-1.5 rounded-bl-2xl text-[10px] font-mono uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t('country.featuredBrandBadge', { defaultValue: 'Presencia Destacada' })}</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Brand Image */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E85D04] font-bold block">
                      {brand.location}
                    </span>
                    <span className="text-xs font-mono text-white/80">
                      Fundada en {brand.founded || 'Tradición Histórica'}
                    </span>
                  </div>
                </div>

                {/* Brand Narrative & Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#141816] dark:text-white">
                        {brand.name}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-[#E85D04] font-semibold tracking-wider mb-3">
                      {brand.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed mb-4">
                      {brand.description}
                    </p>
                  </div>

                  {/* Sensory Notes */}
                  {brand.sensoryNotes && brand.sensoryNotes.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#606863] dark:text-[#9DA7A1] block mb-2 font-bold">
                        {t('country.sensoryProfileVerified', { defaultValue: 'Notas Sensoriales Verificadas:' })}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {brand.sensoryNotes.map((note, nIdx) => (
                          <span
                            key={nIdx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-white/10 text-[#141816] dark:text-white border border-black/5 dark:border-white/10 shadow-xs"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Varietals & Farm Experience */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                    {brand.varieties && (
                      <div className="text-xs text-[#606863] dark:text-[#9DA7A1]">
                        <span className="font-bold text-[#141816] dark:text-white">Variedades:</span>{' '}
                        {brand.varieties.join(', ')}
                      </div>
                    )}

                    {brand.officialUrl && (
                      <a
                        href={brand.officialUrl}
                        target={brand.officialUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141816] dark:bg-white text-white dark:text-[#141816] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-sm self-start sm:self-auto"
                      >
                        <span>{t('country.viewOfficialInfo', { defaultValue: 'Conocer Marca Oficial' })}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Single Origin Catalog & Store for Colombia */}
        {country.slug === 'colombia' && (
          <div id="coleccion" className="mt-16 pt-12 border-t border-black/10 dark:border-white/10">
            <Catalog />
          </div>
        )}
      </section>

      {/* =========================================================================
          E. COFFEE TOURS
      ========================================================================= */}
      <section id="experiencias-tours" className="py-16 sm:py-24 bg-[#F5F2EB] dark:bg-[#111614] border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 animate-fade-in-up animation-delay-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
                <Compass className="w-4 h-4" />
                <span>{t('country.toursSectionKicker', { defaultValue: 'Rutas & Vivencias en Origen' })}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight">
                Coffee Tours
              </h2>
              <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] max-w-2xl mt-2 font-sans">
                {t('country.toursSubtitle', {
                  defaultValue: 'Recorridos verídicos para caminar entre cafetales, conocer beneficios históricos y degustar cosechas directas.'
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {country.tours.map((tour) => (
              <div
                key={tour.id}
                className="rounded-3xl bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-[#E85D04]/50 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-white/90 text-[#141816] backdrop-blur-xs">
                        {tour.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#E85D04]" />
                        {tour.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#E85D04]" />
                        {tour.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#141816] dark:text-white">
                      {tour.title}
                    </h3>
                    <p className="text-xs font-mono text-[#606863] dark:text-[#9DA7A1]">
                      Operador: <strong className="text-[#141816] dark:text-white">{tour.operator}</strong>
                    </p>
                    <p className="text-sm text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed">
                      {tour.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#606863] dark:text-[#9DA7A1] font-bold">
                        Puntos Destacados:
                      </span>
                      {tour.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-[#3C443F] dark:text-[#CBD5E1]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D04] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  {tour.infoUrl ? (
                    <a
                      href={tour.infoUrl}
                      target={tour.infoUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full border border-black/10 dark:border-white/10 hover:border-[#E85D04] text-xs font-mono uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors hover:text-[#E85D04]"
                    >
                      <span>{t('country.tourDetailsBtn', { defaultValue: 'Ver Información del Operador' })}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="text-xs font-mono text-[#606863] dark:text-[#9DA7A1] text-center py-2">
                      {t('country.tourAvailableOnSite', { defaultValue: 'Consulta presencial disponible en la región' })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          F. CURSOS Y EXPERIENCIAS DE BARISMO
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-250">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
              <Flame className="w-4 h-4" />
              <span>{t('country.baristaSectionKicker', { defaultValue: 'Talleres, Barismo & Conocimiento' })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight">
              {t('country.learnTheArtOfCoffee', { defaultValue: 'Aprende el Arte del Café' })}
            </h2>
            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] max-w-2xl mt-2 font-sans">
              {t('country.baristaSubtitle', {
                defaultValue: 'Experiencias de aprendizaje y calibración técnica según la tradición y métodos representativos de este origen.'
              })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {country.baristaClasses.map((cls, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 p-6 sm:p-8 shadow-lg flex flex-col justify-between hover:border-[#E85D04]/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-md bg-[#E85D04]/10 text-[#E85D04] uppercase font-bold tracking-wider">
                    {cls.category}
                  </span>
                  <span className="text-[#606863] dark:text-[#9DA7A1] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration} · Nivel: {cls.level}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#141816] dark:text-white">
                  {cls.title}
                </h3>

                <p className="text-sm text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed">
                  {cls.description}
                </p>

                <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#606863] dark:text-[#9DA7A1] font-bold block">
                    {t('country.keyLearnings', { defaultValue: 'Competencias Clave Aprendidas:' })}
                  </span>
                  {cls.keyLearnings.map((item, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-xs text-[#3C443F] dark:text-[#CBD5E1]">
                      <span className="text-[#E85D04] font-bold">➔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#606863] dark:text-[#9DA7A1]">
                  Talleres Verificados en la Región
                </span>
                <span className="text-xs font-mono uppercase font-bold text-[#E85D04] flex items-center gap-1">
                  <span>Guía Curada</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          G. COFFEE TASTING EXPERIENCES & COFFEE TRIALS
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#141816] text-white animate-fade-in-up animation-delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
                <Layers className="w-4 h-4" />
                <span>Coffee Tasting Experiences</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {t('country.tastingExperiencesTitle', { defaultValue: 'Experiencias de Catación & Coffee Trials' })}
              </h2>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl mt-2 font-sans">
                {t('country.tastingSubtitle', {
                  defaultValue: 'Sesiones de análisis sensorial para adiestrar el paladar en la rueda de sabores, notas florales, niveles de acidez y cuerpo de este terroir.'
                })}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {country.tastings.map((tasting, tIdx) => (
              <div
                key={tIdx}
                className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Description & Format */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono uppercase font-bold bg-[#E85D04]/20 text-[#E85D04] tracking-wider">
                      {tasting.format}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {tasting.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                      {tasting.description}
                    </p>

                    {/* Sample Profiles */}
                    <div className="pt-2 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block font-bold">
                        Lotes de Muestra Comparativa:
                      </span>
                      {tasting.sampleProfiles.map((sample, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                        >
                          <div>
                            <span className="font-bold text-white">{sample.name}</span>
                            <span className="text-white/50 font-mono ml-2">({sample.process})</span>
                          </div>
                          <span className="text-[#E85D04] italic">"{sample.notes}"</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: The Sensory Wheel Radar Breakdown */}
                  <div className="lg:col-span-6 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-mono uppercase text-[#E85D04] font-bold">
                        RUEDA SENSORIAL DEL ORIGEN (SCA)
                      </span>
                      <Sparkles className="w-4 h-4 text-[#E85D04]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono text-white/50 block uppercase">AROMA & FRAGANCIA</span>
                        <span className="font-medium text-white">{tasting.sensoryWheel.aroma}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono text-white/50 block uppercase">ACIDEZ</span>
                        <span className="font-medium text-white">{tasting.sensoryWheel.acidity}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono text-white/50 block uppercase">CUERPO & TEXTURA</span>
                        <span className="font-medium text-white">{tasting.sensoryWheel.body}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono text-white/50 block uppercase">DULZURA</span>
                        <span className="font-medium text-white">{tasting.sensoryWheel.sweetness}</span>
                      </div>
                      <div className="sm:col-span-2 p-2.5 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono text-white/50 block uppercase">RETROGUSTO & FINAL</span>
                        <span className="font-medium text-white">{tasting.sensoryWheel.finish}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          H. NAVEGACIÓN ENTRE PAÍSES (CROSS-COUNTRY CAROUSEL)
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/[0.06] dark:border-white/[0.08] animate-fade-in-up animation-delay-350">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
            <Globe className="w-4 h-4" />
            <span>{t('country.continueJourneyKicker', { defaultValue: 'La Travesía Internacional Continúa' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141816] dark:text-white">
            {t('country.exploreOtherOrigins', { defaultValue: 'Explora Otros Países Cafeteros' })}
          </h2>
          <p className="text-sm text-[#606863] dark:text-[#9DA7A1] mt-2 font-sans">
            Cada nación custodia una historia irrepetible. Selecciona el siguiente destino en tu pasaporte cafetero.
          </p>
        </div>

        {/* Other countries cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCountries.map((other) => (
            <div
              key={other.slug}
              onClick={() => navigate(other.slug === 'colombia' ? '/colombia' : `/${other.slug}`)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-[#E85D04]/60 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={other.heroImage}
                  alt={other.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono text-[#E85D04] uppercase font-bold tracking-wider block">
                    {other.editorialKicker}
                  </span>
                  <h4 className="text-xl font-serif font-bold">{other.name}</h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#606863] dark:text-[#9DA7A1] line-clamp-2 font-sans mb-3">
                  {other.conceptSubtitle}
                </p>
                <div className="text-xs font-mono font-bold text-[#E85D04] flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>{other.slug === 'colombia' ? 'Ver Tienda & Landing' : 'Explorar País'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to World Explorer Hub button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3.5 rounded-full bg-[#141816] dark:bg-white text-white dark:text-[#141816] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-lg cursor-pointer"
          >
            ← {t('country.backToWorldHub', { defaultValue: 'Regresar al Explorador Mundial CATAVIA' })}
          </button>
        </div>
      </section>
    </div>
  );
}
