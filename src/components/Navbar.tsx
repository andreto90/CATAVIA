import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { useTheme, ThemeMode } from '../context/ThemeContext.tsx';
import { useNavigation } from '../context/NavigationContext.tsx';
import cataviaLogo from '../assets/images/logocatavia.png';
import {
  ShoppingBag,
  Globe,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Laptop,
  Compass,
  ArrowRight,
  Check
} from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { country, setCountry, cart, setIsCartOpen, openTrackingModal } = useShop();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { currentPath, navigate, isWorldExplorer, isColombia, activeCountrySlug } = useNavigation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);

  const countriesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countriesDropdownRef.current &&
        !countriesDropdownRef.current.contains(event.target as Node)
      ) {
        setCountriesDropdownOpen(false);
      }
    };
    if (countriesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [countriesDropdownOpen]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const languages = [
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language.substring(0, 2)) || languages[0];

  const themeOptions: { mode: ThemeMode; label: string; icon: any }[] = [
    { mode: 'light', label: t('nav.themeLight', { defaultValue: 'Claro' }), icon: Sun },
    { mode: 'dark', label: t('nav.themeDark', { defaultValue: 'Oscuro' }), icon: Moon },
    { mode: 'system', label: t('nav.themeSystem', { defaultValue: 'Sistema' }), icon: Laptop },
  ];

  const CurrentThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Laptop;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 dark:bg-[#0B0E0D]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-xs py-3.5 text-[#141816] dark:text-[#FAF8F5]'
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-4 sm:py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4 xl:gap-6 min-h-[44px]">
          {/* Brand Wordmark & Emblem Logo */}
          <button
            onClick={() => navigate('/')}
            className="shrink-0 flex items-center gap-2 sm:gap-2.5 group transition-opacity hover:opacity-95 text-left cursor-pointer"
            aria-label="CATAVIA - Descubre el mundo del café"
          >
            {/* Medallion Seal Logo */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={cataviaLogo}
                alt="Logo oficial CATAVIA"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/logocatavia.png';
                }}
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>

            {/* Typography Lockup - Perfectly Aligned and Proportioned */}
            <div className="flex flex-col justify-center select-none text-left">
              <span className={`text-lg sm:text-[20px] xl:text-[22px] font-bold font-serif tracking-tight leading-none ${
                isScrolled ? 'text-[#141816] dark:text-white' : 'text-white'
              }`}>
                CATAVIA
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] font-mono tracking-[0.2em] sm:tracking-[0.22em] uppercase font-bold text-[#E85D04] leading-none mt-1 whitespace-nowrap">
                {isColombia ? 'Café Colombiano' : isWorldExplorer ? 'Mundo del Café' : activeCountrySlug?.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </button>

          {/* Navigation Links - Centered with natural flex flow */}
          <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 2xl:gap-5 text-[10.5px] xl:text-[11px] 2xl:text-xs uppercase tracking-[0.12em] font-semibold whitespace-nowrap flex-1 px-2">
            {/* 1. VISIBLE "EXPLORA PAÍSES" BUTTON WITH DROPDOWN */}
            <div className="relative" ref={countriesDropdownRef}>
              <button
                onClick={() => {
                  setCountriesDropdownOpen(!countriesDropdownOpen);
                  setCountryDropdownOpen(false);
                  setLangDropdownOpen(false);
                  setThemeDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                  isWorldExplorer || countriesDropdownOpen
                    ? 'bg-[#E85D04] text-white border-[#E85D04] shadow-md'
                    : isScrolled
                    ? 'border-[#E85D04]/40 text-[#E85D04] bg-[#E85D04]/5 hover:bg-[#E85D04] hover:text-white'
                    : 'border-white/40 text-white bg-white/10 hover:bg-white/25'
                }`}
                aria-expanded={countriesDropdownOpen}
                aria-label="Explorar países cafeteros"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{t('nav.exploreCountries', { defaultValue: 'Explora países' })}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${countriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Countries Quick Explorer Popover */}
              {countriesDropdownOpen && (
                <div className="absolute left-0 mt-2.5 w-[330px] sm:w-[360px] bg-white dark:bg-[#141816] text-[#141816] dark:text-white rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 p-3 z-50 animate-fadeIn space-y-2 normal-case font-sans tracking-normal whitespace-normal">
                  {/* Popover Header */}
                  <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E85D04] font-bold flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Países Cafeteros Disponibles</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#606863] dark:text-[#9DA7A1]">
                      5 Destinos
                    </span>
                  </div>

                  {/* World Explorer Option */}
                  <button
                    onClick={() => {
                      navigate('/');
                      setCountriesDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer border ${
                      isWorldExplorer
                        ? 'bg-[#E85D04]/10 border-[#E85D04]/40 text-[#E85D04] font-bold'
                        : 'bg-[#FAF8F5] dark:bg-white/5 border-transparent hover:border-[#E85D04]/30 hover:bg-[#F3EFEA] dark:hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#E85D04]/15 flex items-center justify-center shrink-0 text-[#E85D04]">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold leading-tight truncate">
                          {t('nav.worldExplorerAll', { defaultValue: 'Explorador Mundial' })}
                        </div>
                        <div className="text-[10.5px] text-[#606863] dark:text-[#9DA7A1] leading-tight">
                          Descubre el mundo, una taza a la vez
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E85D04] shrink-0 opacity-80" />
                  </button>

                  {/* List of Countries - Strictly Countries without brands */}
                  <div className="pt-1 border-t border-black/5 dark:border-white/5 space-y-1">
                    {[
                      { slug: 'colombia', name: 'Colombia', flag: '🇨🇴', desc: 'Origen Productor · Suavidad Andina' },
                      { slug: 'costa-rica', name: 'Costa Rica', flag: '🇨🇷', desc: 'Origen Productor · Bosque Nuboso' },
                      { slug: 'panama', name: 'Panamá', flag: '🇵🇦', desc: 'Origen Productor · Cuna del Geisha' },
                      { slug: 'brasil', name: 'Brasil', flag: '🇧🇷', desc: 'Origen Productor · Minas Gerais' },
                      { slug: 'turquia', name: 'Turquía', flag: '🇹🇷', desc: 'Patrimonio Cultural · Ritual en Cezve' },
                    ].map((c) => {
                      const isCurrentActive =
                        (c.slug === 'colombia' && isColombia) ||
                        activeCountrySlug === c.slug;

                      return (
                        <button
                          key={c.slug}
                          onClick={() => {
                            if (c.slug === 'colombia') navigate('/colombia');
                            else navigate(`/${c.slug}`);
                            setCountriesDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-all cursor-pointer border ${
                            isCurrentActive
                              ? 'bg-[#E85D04]/10 border-[#E85D04]/40 text-[#E85D04] font-bold'
                              : 'border-transparent hover:bg-[#F3EFEA] dark:hover:bg-white/5 text-[#141816] dark:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xl shrink-0 select-none">{c.flag}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-semibold leading-tight">
                                <span>{c.name}</span>
                              </div>
                              <div className="text-[10px] text-[#606863] dark:text-[#9DA7A1] leading-tight truncate">
                                {c.desc}
                              </div>
                            </div>
                          </div>
                          {isCurrentActive ? (
                            <Check className="w-4 h-4 text-[#E85D04] shrink-0" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-[#606863] dark:text-[#9DA7A1] opacity-50 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contextual Nav Links based on current page */}
            {isColombia ? (
              <>
                <a
                  href="#origen"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.origin')}
                </a>
                <a
                  href="#descubrimiento"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.discovery')}
                </a>
                <a
                  href="#coleccion"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.catalog')}
                </a>
                <a
                  href="#como-funciona"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.howItWorks')}
                </a>
                <a
                  href="#experiencia"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.experience')}
                </a>
                <a
                  href="#faq"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.faq')}
                </a>
              </>
            ) : isWorldExplorer ? (
              <>
                <a
                  href="#galeria-paises"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('nav.countriesGallery', { defaultValue: 'Galería de Países' })}
                </a>
                <button
                  onClick={() => navigate('/colombia')}
                  className={`transition-colors hover:text-[#E85D04] cursor-pointer flex items-center gap-1.5 ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  <span>🇨🇴 Colombia (Tienda Oficial)</span>
                </button>
              </>
            ) : (
              <>
                <a
                  href="#mapa-geografico"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('country.navMap', { defaultValue: 'Mapa & Terroir' })}
                </a>
                <a
                  href="#cafes-y-marcas"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('country.navBrands', { defaultValue: 'Cafés & Marcas' })}
                </a>
                <a
                  href="#experiencias-tours"
                  className={`transition-colors hover:text-[#E85D04] ${
                    isScrolled ? 'text-[#141816]/80 dark:text-white/80' : 'text-white/90'
                  }`}
                >
                  {t('country.navTours', { defaultValue: 'Tours & Cataciones' })}
                </a>
                <button
                  onClick={() => navigate('/colombia')}
                  className={`transition-colors hover:text-[#E85D04] cursor-pointer text-[#E85D04] font-bold ${
                    isScrolled ? 'dark:text-[#E85D04]' : 'text-white hover:text-[#E85D04]'
                  }`}
                >
                  🇨🇴 Tienda Colombia
                </button>
              </>
            )}

            <a
              href="#rastreo"
              onClick={(e) => {
                if (!isColombia) {
                  e.preventDefault();
                  navigate('/colombia#rastreo');
                }
              }}
              className={`hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all border cursor-pointer ${
                isScrolled
                  ? 'border-[#E85D04]/30 text-[#E85D04] hover:bg-[#E85D04] hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-[#0D110E]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-pulse" />
              <span>{t('nav.trackOrder')}</span>
            </a>
          </nav>

          {/* Controls: Quick Theme Toggle, Market, Language, Cart */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Theme Cycle Button (Desktop) */}
            <button
              onClick={() => {
                const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
                setTheme(next);
              }}
              className={`hidden md:flex p-2 rounded-full border transition-all cursor-pointer items-center justify-center ${
                isScrolled
                  ? 'border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/10 text-[#141816] dark:text-white hover:text-[#E85D04] hover:border-[#E85D04]'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
              title={`Tema visual: ${theme === 'light' ? 'Claro' : theme === 'dark' ? 'Oscuro' : 'Sistema'} (Clic para cambiar)`}
              aria-label="Cambiar tema visual"
            >
              <CurrentThemeIcon className="w-3.5 h-3.5" />
            </button>

            {/* 2. Country / Currency Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setCountryDropdownOpen(!countryDropdownOpen);
                  setThemeDropdownOpen(false);
                  setLangDropdownOpen(false);
                }}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isScrolled
                    ? 'border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/10 text-[#141816] dark:text-white hover:border-[#E85D04]'
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/15'
                }`}
                aria-label="Select delivery country"
              >
                <span>{country === 'US' ? '🇺🇸' : '🇨🇦'}</span>
                <span className="font-mono text-[10.5px] sm:text-[11px] font-bold">{country === 'US' ? 'USD' : 'CAD'}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#141816] text-[#141816] dark:text-white rounded-xl shadow-xl border border-black/10 dark:border-white/10 py-1.5 text-xs z-50 animate-fadeIn">
                  <button
                    onClick={() => {
                      setCountry('US');
                      setCountryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#F3EFEA] dark:hover:bg-white/5 cursor-pointer ${
                      country === 'US' ? 'font-bold text-[#E85D04]' : ''
                    }`}
                  >
                    <span>🇺🇸 {t('nav.usa', { defaultValue: 'Estados Unidos (USD)' })}</span>
                  </button>
                  <button
                    onClick={() => {
                      setCountry('CA');
                      setCountryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#F3EFEA] dark:hover:bg-white/5 cursor-pointer ${
                      country === 'CA' ? 'font-bold text-[#E85D04]' : ''
                    }`}
                  >
                    <span>🇨🇦 {t('nav.canada', { defaultValue: 'Canadá (CAD)' })}</span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setThemeDropdownOpen(false);
                  setCountryDropdownOpen(false);
                }}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isScrolled
                    ? 'border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/10 text-[#141816] dark:text-white hover:border-[#E85D04]'
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/15'
                }`}
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 opacity-80" />
                <span className="font-mono text-[10.5px] sm:text-[11px] font-bold">{currentLang.short}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#141816] text-[#141816] dark:text-white rounded-xl shadow-xl border border-black/10 dark:border-white/10 py-1 text-xs z-50 animate-fadeIn">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        i18n.changeLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#F3EFEA] dark:hover:bg-white/5 flex items-center justify-between cursor-pointer ${
                        currentLang.code === l.code ? 'font-bold text-[#E85D04]' : ''
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-[10px] text-[#606863] dark:text-[#9DA7A1] font-mono">{l.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 sm:p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                isScrolled
                  ? 'bg-[#141816] dark:bg-white text-white dark:text-[#141816] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white'
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-xs'
              }`}
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E85D04] text-white font-mono text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xs transition-colors cursor-pointer ${
                isScrolled ? 'text-[#141816] dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] dark:bg-[#141816] text-[#141816] dark:text-white border-b border-black/10 dark:border-white/10 px-6 py-6 shadow-2xl animate-fadeIn space-y-6">
          {/* Mobile brand mark */}
          <div className="flex items-center gap-3 pb-4 border-b border-black/10 dark:border-white/10">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
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
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#141816] dark:text-white leading-none">
                CATAVIA
              </span>
              <span className="text-[9px] font-mono tracking-[0.24em] uppercase font-bold text-[#E85D04] leading-tight mt-1">
                {isColombia ? 'Café Colombiano' : isWorldExplorer ? 'Mundo del Café' : activeCountrySlug?.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>

          {/* Mobile International Countries Explorer Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#E85D04]/15 via-[#E85D04]/5 to-transparent border border-[#E85D04]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#E85D04] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>{t('nav.exploreCountries', { defaultValue: 'Explora países' })}</span>
              </span>
              <button
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className="text-[10px] font-mono text-[#E85D04] font-bold underline"
              >
                Ver Mapa Mundial
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {[
                { slug: 'colombia', name: 'Colombia', flag: '🇨🇴' },
                { slug: 'costa-rica', name: 'Costa Rica', flag: '🇨🇷' },
                { slug: 'panama', name: 'Panamá', flag: '🇵🇦' },
                { slug: 'brasil', name: 'Brasil', flag: '🇧🇷' },
                { slug: 'turquia', name: 'Turquía', flag: '🇹🇷' },
              ].map((c) => (
                <button
                  key={c.slug}
                  onClick={() => {
                    if (c.slug === 'colombia') navigate('/colombia');
                    else navigate(`/${c.slug}`);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-xl text-left border flex items-center gap-2 cursor-pointer transition-colors ${
                    activeCountrySlug === c.slug
                      ? 'bg-[#E85D04] text-white border-[#E85D04] font-bold'
                      : 'bg-white dark:bg-white/5 border-black/5 dark:border-white/10 hover:border-[#E85D04]'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.16em]">
            {isColombia ? (
              <>
                <a href="#origen" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.origin')}
                </a>
                <a href="#descubrimiento" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.discovery')}
                </a>
                <a href="#coleccion" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.catalog')}
                </a>
                <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.howItWorks')}
                </a>
                <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.experience')}
                </a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.faq')}
                </a>
              </>
            ) : isWorldExplorer ? (
              <>
                <a href="#galeria-paises" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('nav.countriesGallery', { defaultValue: 'Galería de Países' })}
                </a>
                <button
                  onClick={() => {
                    navigate('/colombia');
                    setMobileMenuOpen(false);
                  }}
                  className="py-1 text-left text-[#E85D04] hover:underline"
                >
                  🇨🇴 Tienda Oficial Colombia
                </button>
              </>
            ) : (
              <>
                <a href="#mapa-geografico" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('country.navMap', { defaultValue: 'Mapa & Terroir' })}
                </a>
                <a href="#cafes-y-marcas" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('country.navBrands', { defaultValue: 'Cafés & Marcas' })}
                </a>
                <a href="#experiencias-tours" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#E85D04]">
                  {t('country.navTours', { defaultValue: 'Tours & Cataciones' })}
                </a>
                <button
                  onClick={() => {
                    navigate('/colombia');
                    setMobileMenuOpen(false);
                  }}
                  className="py-1 text-left text-[#E85D04] hover:underline"
                >
                  🇨🇴 Tienda Oficial Colombia
                </button>
              </>
            )}
            <a
              href="#rastreo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3.5 rounded-xl bg-[#E85D04]/10 text-[#E85D04] font-mono flex items-center justify-between cursor-pointer w-full text-left"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E85D04] animate-pulse" />
                <span className="font-bold">{t('nav.trackOrder')}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider">➔</span>
            </a>
          </div>

          {/* Dedicated Theme Mode Selector on Mobile */}
          <div className="pt-4 border-t border-black/10 dark:border-white/10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#606863] dark:text-[#9DA7A1] mb-2.5 font-bold">
              {t('nav.visualTheme', { defaultValue: 'Tema Visual: Claro · Oscuro · Sistema' })}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {themeOptions.map(opt => {
                const OptIcon = opt.icon;
                const isActive = theme === opt.mode;
                return (
                  <button
                    key={opt.mode}
                    onClick={() => setTheme(opt.mode)}
                    className={`py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all text-xs cursor-pointer ${
                      isActive
                        ? 'bg-[#E85D04] text-white border-[#E85D04] font-bold shadow-xs'
                        : 'bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10 text-[#141816] dark:text-white hover:border-[#E85D04]'
                    }`}
                  >
                    <OptIcon className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Country & Language Row on Mobile */}
          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#606863] dark:text-[#9DA7A1] uppercase">{t('nav.selectCountry', { defaultValue: 'País:' })}</span>
              <button
                onClick={() => setCountry(country === 'US' ? 'CA' : 'US')}
                className="font-mono font-bold text-xs px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/10"
              >
                {country === 'US' ? `🇺🇸 ${t('nav.usa', { defaultValue: 'EE. UU. (USD)' })}` : `🇨🇦 ${t('nav.canada', { defaultValue: 'Canadá (CAD)' })}`}
              </button>
            </div>
            <div className="flex items-center gap-1">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => i18n.changeLanguage(l.code)}
                  className={`px-2 py-0.5 rounded-xs text-[11px] font-mono uppercase ${
                    i18n.language.startsWith(l.code)
                      ? 'bg-[#E85D04] text-white font-bold'
                      : 'text-[#606863] dark:text-[#9DA7A1]'
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
