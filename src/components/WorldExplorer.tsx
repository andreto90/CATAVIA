import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../context/NavigationContext.tsx';
import { COUNTRIES_DATA, CountryData } from '../data/countriesData.ts';
import { getLocalizedCountry, getLocalizedCountryData } from '../utils/countryLocalization.ts';
import {
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
  Coffee,
  MapPin,
  Flame,
  Award,
  Layers,
  ChevronRight,
  Check
} from 'lucide-react';

export default function WorldExplorer() {
  const { t, i18n } = useTranslation();
  const { navigate } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sudamerica' | 'centroamerica' | 'europa-oriente'>('all');
  const [activeCountryPreview, setActiveCountryPreview] = useState<string>('colombia');

  const countriesList = Object.values(COUNTRIES_DATA);

  const filteredCountries = countriesList.filter((c) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'sudamerica') return c.slug === 'colombia' || c.slug === 'brasil';
    if (selectedFilter === 'centroamerica') return c.slug === 'costa-rica' || c.slug === 'panama';
    if (selectedFilter === 'europa-oriente') return c.slug === 'turquia';
    return true;
  });

  const activeCountry = COUNTRIES_DATA[activeCountryPreview] || countriesList[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0E0D] text-[#141816] dark:text-[#FAF8F5] transition-colors duration-300">
      {/* =========================================================================
          1. HERO EDITORIAL MUNDIAL: "DESCUBRE EL MUNDO, UNA TAZA A LA VEZ"
      ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background Cinematographic Photography with Rich Moody Lighting */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1920&q=85"
            alt="El mundo del café por CATAVIA"
            className="w-full h-full object-cover scale-105 filter brightness-[0.75] contrast-[1.05]"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=85';
            }}
          />
          {/* Multi-layered cinematic vignette for text legibility & editorial elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E0D] via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-[#0B0E0D]/90" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Subtle Corporate Emblem & International Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-[0.2em] uppercase font-bold mb-6 animate-fadeIn">
            <Globe className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>CATAVIA · {t('world.explorerKicker', { defaultValue: 'ATLAS EDITORIAL DEL CAFÉ' })}</span>
          </div>

          {/* Core Concept Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white tracking-tight leading-[1.05] max-w-5xl mb-6 drop-shadow-2xl">
            {t('world.heroTitleLead', { defaultValue: 'Descubre el mundo,' })}{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F5] via-[#E85D04] to-[#FAF8F5]">
              {t('world.heroTitleAccent', { defaultValue: 'una taza a la vez.' })}
            </span>
          </h1>

          {/* Narrative Concept Statement */}
          <p className="text-lg sm:text-2xl font-serif italic text-white/90 max-w-3xl mb-4 leading-snug">
            "{t('world.narrativeConcept', { defaultValue: 'Cada país tiene una historia que contar. Descúbrela a través de su café.' })}"
          </p>

          {/* Editorial Subtitle */}
          <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-2xl font-sans leading-relaxed mb-10">
            {t('world.heroSubtitle', {
              defaultValue:
                'Una experiencia editorial inmersiva que conecta visual y emocionalmente con las culturas cafeteras más legendarias: desde los Andes colombianos y los bosques nubosos de Centroamérica, hasta las fazendas brasileñas y los salones otomanos de Estambul.'
            })}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#galeria-paises"
              className="px-8 py-3.5 rounded-full bg-[#E85D04] hover:bg-[#d45300] text-white text-xs uppercase font-mono tracking-wider font-bold transition-all shadow-xl hover:shadow-[#E85D04]/30 flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>{t('world.exploreCountriesBtn', { defaultValue: 'Explorar Países' })}</span>
            </a>

            <a
              href="#filosofia"
              className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs uppercase font-mono tracking-wider font-bold transition-all backdrop-blur-xs flex items-center gap-2 cursor-pointer"
            >
              <span>{t('world.discoverPhilosophy', { defaultValue: 'Filosofía & Orígenes' })}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 5 Countries Quick Indicator Bar */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono tracking-widest text-white/80 uppercase">
            {countriesList.map((c) => {
              const locC = getLocalizedCountryData(c, i18n.language);
              return (
                <button
                  key={c.slug}
                  onClick={() => {
                    if (c.slug === 'colombia') navigate('/colombia');
                    else navigate(`/${c.slug}`);
                  }}
                  className="hover:text-[#E85D04] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                  <span className="font-bold">{locC.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll down hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-mono tracking-widest uppercase flex flex-col items-center gap-1 animate-bounce">
          <span>{t('world.scrollHint', { defaultValue: 'DESLIZA PARA DESCUBRIR' })}</span>
          <ChevronRight className="w-3.5 h-3.5 rotate-90" />
        </div>
      </section>

      {/* =========================================================================
          2. MANIFIESTO EDITORIAL: POR QUÉ EL CAFÉ UNE AL MUNDO
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E85D04] font-bold block">
              {t('world.philosophyKicker', { defaultValue: 'FILOSOFÍA CATAVIA' })}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white tracking-tight leading-tight">
              {t('world.manifestoTitle', { defaultValue: 'El café no es un producto. Es la memoria viva de cada tierra.' })}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed">
            <p>
              {t('world.manifestoP1', {
                defaultValue:
                  'Detrás de cada taza humeante hay una geografía irrepetible: el suelo volcánico de Boquete, la humedad misteriosa del bosque nuboso en Monteverde, las inmensas fazendas soleadas de Minas Gerais, las cordilleras andinas de Colombia y el centenario ritual en cezve en los callejones empedrados de Estambul.'
              })}
            </p>
            <p>
              {t('world.manifestoP2', {
                defaultValue:
                  'CATAVIA nace para abrir esa ventana al mundo. No somos un directorio turístico ni una tienda convencional. Somos narradores de la alta cultura cafetera, guiando tus sentidos a través de las variedades, los maestros tostadores, los recorridos por fincas y las cataciones que definen a la humanidad.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. GALERÍA INMERSIVA Y ASIMÉTRICA DE PAÍSES (SECCIÓN PROTAGONISTA)
      ========================================================================= */}
      <section id="galeria-paises" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
              <Compass className="w-4 h-4" />
              <span>{t('world.galleryKicker', { defaultValue: 'Atlas de Experiencias' })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-[#141816] dark:text-white tracking-tight">
              {t('world.galleryTitle', { defaultValue: 'Cinco Culturas. Cinco Experiencias Únicas.' })}
            </h2>
            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] max-w-2xl mt-2 font-sans">
              {t('world.gallerySubtitle', {
                defaultValue: 'Selecciona un país para ingresar a su página oficial con mapa interactivo, marcas verificadas, coffee tours y cataciones sensoriales.'
              })}
            </p>
          </div>

          {/* Interactive Geographic Filter Buttons (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-[#1E2420] text-[#141816] dark:text-white shadow-xs font-bold'
                  : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816]'
              }`}
            >
              {t('world.filterAll', { defaultValue: 'Todos (5)' })}
            </button>
            <button
              onClick={() => setSelectedFilter('sudamerica')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'sudamerica'
                  ? 'bg-white dark:bg-[#1E2420] text-[#141816] dark:text-white shadow-xs font-bold'
                  : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816]'
              }`}
            >
              {t('world.filterSouthAmerica', { defaultValue: 'Sudamérica' })}
            </button>
            <button
              onClick={() => setSelectedFilter('centroamerica')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'centroamerica'
                  ? 'bg-white dark:bg-[#1E2420] text-[#141816] dark:text-white shadow-xs font-bold'
                  : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816]'
              }`}
            >
              {t('world.filterCentralAmerica', { defaultValue: 'Centroamérica' })}
            </button>
            <button
              onClick={() => setSelectedFilter('europa-oriente')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'europa-oriente'
                  ? 'bg-white dark:bg-[#1E2420] text-[#141816] dark:text-white shadow-xs font-bold'
                  : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816]'
              }`}
            >
              {t('world.filterEuropeEast', { defaultValue: 'Europa & Oriente' })}
            </button>
          </div>
        </div>

        {/* The Luxury Editorial Gallery - All 5 Countries Treated Equally */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country) => {
            const locC = getLocalizedCountryData(country, i18n.language);
            return (
              <div
                key={country.slug}
                onClick={() => {
                  if (country.slug === 'colombia') navigate('/colombia');
                  else navigate(`/${country.slug}`);
                }}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#E85D04]/60 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Card Image with Real Map Badge */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={country.heroImage}
                    alt={locC.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                  {/* Top Bar: Kicker & Real Map Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold text-[#FAF8F5]">
                      {locC.editorialKicker}
                    </span>

                    {/* Real Woven Map Thumbnail Icon */}
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center overflow-hidden opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md">
                      <img
                        src={country.realMapImage}
                        alt={`Mapa ${locC.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E85D04]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E85D04] font-bold">
                        {country.isOriginProducer
                          ? t('world.producerOrigin', { defaultValue: 'ORIGEN PRODUCTOR' })
                          : t('world.culturalHeritage', { defaultValue: 'PATRIMONIO CULTURAL' })}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-none text-white">
                      {locC.name}
                    </h3>

                    <p className="text-sm font-serif italic text-white/90 line-clamp-1">
                      "{locC.conceptSubtitle}"
                    </p>
                  </div>
                </div>

                {/* Card Lower Narrative Block */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#3C443F] dark:text-[#CBD5E1] font-sans leading-relaxed line-clamp-3">
                    {locC.narrativeLead}
                  </p>

                  {/* Features metadata pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/5 dark:border-white/5 text-[11px] font-mono text-[#606863] dark:text-[#9DA7A1]">
                    <span>{t('world.regionsMeta', { count: country.regions.length, defaultValue: `${country.regions.length} Regiones` })}</span>
                    <span>·</span>
                    <span>{t('world.brandsMeta', { count: country.brands.length, defaultValue: `${country.brands.length} Marcas` })}</span>
                    <span>·</span>
                    <span>{t('world.toursMeta', { count: country.tours.length, defaultValue: `${country.tours.length} Coffee Tours` })}</span>
                    <span>·</span>
                    <span>{t('world.workshopsMeta', { count: country.baristaClasses.length, defaultValue: `${country.baristaClasses.length} Talleres` })}</span>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 flex items-center justify-between font-mono text-xs uppercase font-bold text-[#E85D04] group-hover:translate-x-1 transition-transform">
                    <span>{t('world.discoverCountry', { country: locC.name, defaultValue: `Descubrir ${locC.name}` })}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. LOS CUATRO EJES DE DESCUBRIMIENTO INTERNACIONAL
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F2EB] dark:bg-[#111614] border-t border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{t('world.pillarsKicker', { defaultValue: 'Arquitectura de Descubrimiento' })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#141816] dark:text-white">
              {t('world.fourPillarsTitle', { defaultValue: 'Cómo se Vive el Mundo del Café' })}
            </h2>
            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] mt-2 font-sans">
              {t('world.fourPillarsSubtitle', { defaultValue: 'En cada país de la colección CATAVIA podrás adentrarte en cuatro dimensiones creadas con rigurosidad y pasión:' })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eje 1: Mapas & Terroirs */}
            <div className="rounded-2xl p-6 bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141816] dark:text-white mb-2">
                  {t('world.pillar1Title', { defaultValue: '1. Mapas & Regiones' })}
                </h3>
                <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] font-sans leading-relaxed">
                  {t('world.pillar1Desc', { defaultValue: 'Siluetas geográficas reales de cada país con marcadores interactivos de las zonas productoras y perfiles sensoriales de suelo y altitud.' })}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-[#E85D04] font-bold">
                {t('world.pillar1Badge', { defaultValue: 'CARTOGRAFÍA VERIFICADA' })}
              </div>
            </div>

            {/* Eje 2: Marcas & Productores */}
            <div className="rounded-2xl p-6 bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141816] dark:text-white mb-2">
                  {t('world.pillar2Title', { defaultValue: '2. Marcas & Propuestas' })}
                </h3>
                <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] font-sans leading-relaxed">
                  {t('world.pillar2Desc', { defaultValue: 'Productores auténticos como Café Monteverde en Costa Rica, los pioneros del Geisha en Boquete o el legendario Mehmet Efendi en Turquía.' })}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-[#E85D04] font-bold">
                {t('world.pillar2Badge', { defaultValue: 'TRAZABILIDAD 100% REAL' })}
              </div>
            </div>

            {/* Eje 3: Coffee Tours */}
            <div className="rounded-2xl p-6 bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141816] dark:text-white mb-2">
                  {t('world.pillar3Title', { defaultValue: '3. Coffee Tours' })}
                </h3>
                <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] font-sans leading-relaxed">
                  {t('world.pillar3Desc', { defaultValue: 'Recorridos vivenciales por fincas sostenibles, molinos de beneficio hidráulico y rutas de cafeterías históricas con enlaces oficiales.' })}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-[#E85D04] font-bold">
                {t('world.pillar3Badge', { defaultValue: 'OPERADORES LOCALES' })}
              </div>
            </div>

            {/* Eje 4: Cursos & Cataciones */}
            <div className="rounded-2xl p-6 bg-white dark:bg-[#141816] border border-black/10 dark:border-white/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141816] dark:text-white mb-2">
                  {t('world.pillar4Title', { defaultValue: '4. Barismo & Catación' })}
                </h3>
                <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] font-sans leading-relaxed">
                  {t('world.pillar4Desc', { defaultValue: 'Talleres de extracción (Chorreador, Cezve, V60) y sesiones de cata comparativa bajo los estándares de la Rueda Sensorial SCA.' })}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-[#E85D04] font-bold">
                {t('world.pillar4Badge', { defaultValue: 'EXPERIENCIAS SENSORIALES' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ENLACE DESTACADO A LA LANDING DE COLOMBIA (TIENDA Y ENVÍOS)
      ========================================================================= */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#141816] via-[#1E2420] to-[#121614] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E85D04] font-bold block">
                {t('world.colombiaBannerKicker', { defaultValue: 'TIENDA OFICIAL DE ORIGEN · CATAVIA COLOMBIA' })}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {t('world.colombiaBannerTitle', { defaultValue: '¿Deseas degustar auténtico café colombiano en casa?' })}
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl font-sans leading-relaxed">
                {t('world.colombiaBannerDesc', { defaultValue: 'Nuestra experiencia comercial de café de especialidad de Colombia está activa con microlotes seleccionados a mano, tostados bajo pedido y entregas express a tu puerta en Estados Unidos y Canadá.' })}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-white/70 pt-2">
                <span>{t('world.colombiaBannerF1', { defaultValue: '✓ Envío aéreo directo (3-5 días)' })}</span>
                <span>{t('world.colombiaBannerF2', { defaultValue: '✓ Selector sensorial interactivo' })}</span>
                <span>{t('world.colombiaBannerF3', { defaultValue: '✓ Variedades Geisha, Castillo y Caturra' })}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => navigate('/colombia')}
                className="w-full py-4 px-6 rounded-full bg-[#E85D04] hover:bg-[#d45300] text-white text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('world.colombiaBannerBtn', { defaultValue: 'Descubre Colombia en CATAVIA' })}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('galeria-paises');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-mono uppercase font-bold tracking-wider transition-all text-center cursor-pointer"
              >
                {t('world.continueAtlasBtn', { defaultValue: 'Seguir Explorando el Atlas' })}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
