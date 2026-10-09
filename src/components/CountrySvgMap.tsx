import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryData, RegionMarker } from '../data/countriesData.ts';
import { Compass, Sparkles, ChevronRight, Info, Check } from 'lucide-react';

interface CountrySvgMapProps {
  country: CountryData;
}

export default function CountrySvgMap({ country }: CountrySvgMapProps) {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<RegionMarker>(country.regions[0] || null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionMarker | null>(null);

  return (
    <div className="relative w-full rounded-3xl bg-[#141816] text-[#FAF8F5] p-6 sm:p-8 lg:p-12 overflow-hidden border border-white/10 shadow-2xl">
      {/* Subtle background ambient gradients */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: country.accentColor }}
      />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E85D04]/10 blur-3xl pointer-events-none" />

      {/* Header section with kicker and title */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E85D04] uppercase font-bold mb-2">
            <Compass className="w-4 h-4" />
            <span>{t('country.mapSectionTitle', { defaultValue: 'Cartografía Sensorial de Origen' })}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            {country.name} · {t('country.mapGeography', { defaultValue: 'Regiones y Terroir' })}
          </h3>
          <p className="text-sm text-[#FAF8F5]/70 max-w-xl mt-2 font-sans">
            {country.isOriginProducer
              ? t('country.mapDescriptionProducer', {
                  defaultValue: 'Explora las principales regiones cafetaleras. Cada zona cuenta con un microclima, altitud y perfil de taza singulares.'
                })
              : t('country.mapDescriptionCultural', {
                  defaultValue: 'Explora los epicentros históricos y contemporáneos del ritual cafetero otomano y la hospitalidad tradicional.'
                })}
          </p>
        </div>

        {/* Region counter badge */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
            <span className="text-[#E85D04] font-bold">{country.regions.length}</span> {t('country.keyZones', { defaultValue: 'Zonas Identificadas' })}
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map SVG & Detailed Region Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
        {/* Left: The SVG Geographic Silhouette */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] p-4 sm:p-8 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm">
          {/* Compass Rose & Geographic Coordinates Watermark */}
          <div className="absolute top-4 left-4 flex flex-col text-[10px] font-mono text-white/35 tracking-widest select-none">
            <span>TERROIR ATLAS</span>
            <span>CATAVIA GEO · {country.name.toUpperCase()}</span>
          </div>

          <div className="absolute top-4 right-4 text-[10px] font-mono text-white/50 border border-white/10 px-2.5 py-1 rounded-full bg-white/5">
            {country.altitudeRange || t('country.culturalHeritageBadge', { defaultValue: 'Patrimonio Cultural' })}
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center my-4">
            <svg
              viewBox={country.viewBox}
              className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] select-none"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(232, 93, 4, 0.15))' }}
            >
              <defs>
                {/* Linear gradient for landmass */}
                <linearGradient id={`grad-${country.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2A302C" />
                  <stop offset="50%" stopColor="#1E2320" />
                  <stop offset="100%" stopColor="#151917" />
                </linearGradient>

                <linearGradient id={`accentGrad-${country.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={country.accentColor} stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#E85D04" stopOpacity="0.12" />
                </linearGradient>

                {/* Subtle pattern for terroir elevation */}
                <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Background topographic grid */}
              <rect width="100" height="100" fill="url(#gridPattern)" />

              {/* Country Silhouette Landmass */}
              <path
                d={country.mapSvgPath}
                fill={`url(#grad-${country.slug})`}
                stroke="rgba(255, 255, 255, 0.28)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="transition-colors duration-300 hover:stroke-[#E85D04]"
              />

              {/* Accent internal wash */}
              <path
                d={country.mapSvgPath}
                fill={`url(#accentGrad-${country.slug})`}
                opacity="0.6"
              />

              {/* Coordinate Reference Crosshairs */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />

              {/* Interactive Region Pins on Map */}
              {country.regions.map((reg) => {
                const isSelected = selectedRegion?.id === reg.id;
                const isHovered = hoveredRegion?.id === reg.id;

                return (
                  <g
                    key={reg.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion(reg)}
                    onMouseEnter={() => setHoveredRegion(reg)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    {/* Transparent generous hit area so cursor doesn't flicker */}
                    <circle cx={reg.x} cy={reg.y} r="8" fill="transparent" />

                    {/* Concentric rings when selected */}
                    {isSelected && (
                      <>
                        <circle
                          cx={reg.x}
                          cy={reg.y}
                          r="5.5"
                          fill="none"
                          stroke={country.accentColor}
                          strokeWidth="0.9"
                          strokeDasharray="1.5 1.5"
                          opacity="0.8"
                        />
                        <circle
                          cx={reg.x}
                          cy={reg.y}
                          r="4"
                          fill={country.accentColor}
                          opacity="0.25"
                        />
                      </>
                    )}

                    {/* Outer marker ring */}
                    <circle
                      cx={reg.x}
                      cy={reg.y}
                      r={isSelected ? '3' : isHovered ? '2.8' : '2.2'}
                      fill={isSelected ? country.accentColor : isHovered ? '#FFFFFF' : '#D0CCC4'}
                      stroke="#141816"
                      strokeWidth="1"
                    />

                    {/* Center dot */}
                    <circle
                      cx={reg.x}
                      cy={reg.y}
                      r={isSelected ? '1.2' : '0.9'}
                      fill={isSelected ? '#FFFFFF' : '#141816'}
                    />

                    {/* Clean permanent text label next to the pin */}
                    <text
                      x={reg.x + 3.2}
                      y={reg.y + 1}
                      fill={isSelected ? '#FFFFFF' : isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.75)'}
                      fontSize="3"
                      fontFamily="sans-serif"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      className="select-none pointer-events-none drop-shadow-md"
                    >
                      {reg.name.split(':')[0]}
                    </text>
                  </g>
                );
              })}

              {/* In-SVG Sleek Floating Tooltip on Hover (Zero layout shift) */}
              {hoveredRegion && (
                <g className="pointer-events-none select-none transition-opacity duration-200" opacity="1">
                  <rect
                    x={Math.max(5, Math.min(65, hoveredRegion.x - 18))}
                    y={Math.max(4, hoveredRegion.y - 11)}
                    width="36"
                    height="8.5"
                    rx="1.5"
                    fill="#0B0E0D"
                    stroke={country.accentColor}
                    strokeWidth="0.5"
                    opacity="0.95"
                  />
                  <text
                    x={Math.max(5, Math.min(65, hoveredRegion.x - 18)) + 18}
                    y={Math.max(4, hoveredRegion.y - 11) + 4.2}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="2.4"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    {hoveredRegion.name.split(':')[0]}
                  </text>
                  <text
                    x={Math.max(5, Math.min(65, hoveredRegion.x - 18)) + 18}
                    y={Math.max(4, hoveredRegion.y - 11) + 7}
                    textAnchor="middle"
                    fill={country.accentColor}
                    fontSize="1.8"
                    fontFamily="monospace"
                  >
                    {hoveredRegion.altitude || 'Punto Clave'}
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between w-full text-[11px] font-mono text-white/50 pt-2 border-t border-white/5 px-2">
            <span>Haz clic en cualquier punto para fijar la información</span>
            <span className="text-[#E85D04] font-bold">
              {selectedRegion ? selectedRegion.name.split(':')[0] : 'Selecciona una zona'}
            </span>
          </div>
        </div>

        {/* Right: Selected Region Detailed Card (Stable container, zero page jumps) */}
        <div className="lg:col-span-5 flex flex-col justify-between min-h-[460px] space-y-6">
          {selectedRegion ? (
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-bold tracking-wider"
                    style={{ backgroundColor: `${country.accentColor}25`, color: country.accentColor }}
                  >
                    {country.isOriginProducer ? t('country.regionLabel', { defaultValue: 'Región Cafetera' }) : t('country.culturalHubLabel', { defaultValue: 'Epicentro Cultural' })}
                  </span>

                  {selectedRegion.altitude && (
                    <span className="text-xs font-mono text-white/70">
                      {selectedRegion.altitude}
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-serif font-bold text-white mb-1">
                  {selectedRegion.name}
                </h4>
                {selectedRegion.altName && (
                  <p className="text-xs font-mono text-[#E85D04] tracking-wider mb-4">
                    {selectedRegion.altName}
                  </p>
                )}

                {/* Sensory Profile Banner */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1 flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3 h-3 text-[#E85D04]" />
                    <span>{t('country.sensoryProfile', { defaultValue: 'Perfil Sensorial en Taza' })}</span>
                  </div>
                  <p className="text-sm font-sans font-medium text-white italic">
                    "{selectedRegion.profile}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed font-sans mb-4">
                  {selectedRegion.description}
                </p>

                {/* Soil / Climate / History info */}
                {selectedRegion.soilOrClimate && (
                  <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-white/70 mb-3">
                    <Info className="w-4 h-4 text-[#E85D04] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-medium">{t('country.soilClimate', { defaultValue: 'Terroir & Suelo:' })}</strong> {selectedRegion.soilOrClimate}
                    </span>
                  </div>
                )}

                {/* Cultural Note */}
                {selectedRegion.culturalNote && (
                  <div className="p-3 rounded-lg bg-white/5 text-xs text-[#FAF8F5]/90 border border-white/5">
                    <span className="font-semibold text-[#E85D04]">{t('country.culturalTradition', { defaultValue: 'Tradición Local:' })} </span>
                    {selectedRegion.culturalNote}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-white/60 flex-1 flex flex-col items-center justify-center">
              <Compass className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>{t('country.selectRegionPrompt', { defaultValue: 'Selecciona una región para descubrir sus secretos' })}</p>
            </div>
          )}

          {/* Quick Selector of All Regions (Stable Tabs) */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
              {t('country.allRegions', { defaultValue: 'Selección Rápida de Zonas:' })}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {country.regions.map((reg) => {
                const isSelected = selectedRegion?.id === reg.id;
                return (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`text-left px-3 py-2.5 rounded-xl border text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#E85D04] text-white border-[#E85D04] font-semibold shadow-md'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{reg.name.split(':')[0]}</span>
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
