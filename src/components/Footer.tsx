import React from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { useNavigation } from '../context/NavigationContext.tsx';
import { COUNTRIES_DATA } from '../data/countriesData.ts';
import { getLocalizedCountryData } from '../utils/countryLocalization.ts';
import cataviaLogo from '../assets/images/logocatavia.png';
import { Mail, Globe, MapPin, Heart, Sun, Moon, Laptop, Compass, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { country } = useShop();
  const { theme, setTheme } = useTheme();
  const { navigate, isColombia } = useNavigation();

  return (
    <footer className="bg-[#0A0D0B] text-[#FBFBFA] pt-24 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3.5 mb-4 group inline-flex text-left cursor-pointer"
              aria-label="CATAVIA - Descubre el mundo del café"
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cataviaLogo}
                  alt="Logo oficial CATAVIA"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/logocatavia.png';
                  }}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  CATAVIA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.24em] text-[#E85D04] font-bold mt-1">
                  Atlas Cafetero Internacional
                </span>
              </div>
            </button>
            <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-normal mb-8 max-w-sm">
              {isColombia
                ? t('footer.about')
                : 'CATAVIA conecta a los amantes del buen café con las culturas cafeteras más legendarias del planeta: Colombia, Costa Rica, Panamá, Brasil y Turquía.'}
            </p>
            <div className="flex items-center gap-3 text-xs mb-4">
              <span className="text-white/40 uppercase font-mono tracking-wider text-[10px]">{t('footer.languageLabel', { defaultValue: 'Idioma:' })}</span>
              <div className="flex gap-1.5 font-mono">
                {['es', 'en', 'fr'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => i18n.changeLanguage(lang)}
                    className={`px-3 py-1 rounded-full uppercase border text-xs transition-all cursor-pointer ${
                      i18n.language.startsWith(lang)
                        ? 'border-[#E85D04] bg-[#E85D04] text-white font-bold'
                        : 'border-white/15 text-white/60 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-white/40 uppercase font-mono tracking-wider text-[10px]">{t('footer.themeLabel', { defaultValue: 'Tema:' })}</span>
              <div className="flex gap-1.5 font-mono">
                {[
                  { mode: 'light' as const, label: t('nav.themeLight', { defaultValue: 'Claro' }), icon: Sun },
                  { mode: 'dark' as const, label: t('nav.themeDark', { defaultValue: 'Oscuro' }), icon: Moon },
                  { mode: 'system' as const, label: t('nav.themeSystem', { defaultValue: 'Sistema' }), icon: Laptop },
                ].map(({ mode, label, icon: Icon }) => (
                  <button
                    key={mode}
                    onClick={() => setTheme(mode)}
                    className={`px-2.5 py-1 rounded-full border text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      theme === mode
                        ? 'border-[#E85D04] bg-[#E85D04] text-white font-bold'
                        : 'border-white/15 text-white/60 hover:text-white hover:border-white/30'
                    }`}
                    title={`Tema ${label}`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#E85D04] font-mono font-bold mb-5">
              {t('footer.linksTitle')}
            </h4>
            <ul className="space-y-3 text-xs text-white/70 font-medium">
              <li>
                <a href="#origen" className="hover:text-white transition-colors">{t('nav.origin')}</a>
              </li>
              <li>
                <a href="#descubrimiento" className="hover:text-white transition-colors">{t('nav.discovery')}</a>
              </li>
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">{t('nav.catalog')}</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">{t('nav.howItWorks')}</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">{t('nav.experience')}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">{t('nav.faq')}</a>
              </li>
              <li>
                <a
                  href="#rastreo"
                  className="text-[#E85D04] hover:underline font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04] animate-pulse" />
                  <span>{t('nav.trackOrder')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* International Countries & Regions */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#E85D04] font-mono font-bold mb-5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{t('footer.countriesTitle', { defaultValue: 'Países & Orígenes' })}</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-normal">
              {Object.values(COUNTRIES_DATA).map((c) => {
                const locC = getLocalizedCountryData(c, i18n.language);
                const flagMap: Record<string, string> = {
                  'colombia': '🇨🇴',
                  'costa-rica': '🇨🇷',
                  'panama': '🇵🇦',
                  'brasil': '🇧🇷',
                  'turquia': '🇹🇷'
                };
                return (
                  <li key={c.slug}>
                    <button
                      onClick={() => navigate(c.slug === 'colombia' ? '/colombia' : `/${c.slug}`)}
                      className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>{flagMap[c.slug] || '☕'} {locC.name} ({locC.regions[0]?.name || locC.name})</span>
                    </button>
                  </li>
                );
              })}
              <li className="pt-1">
                <button
                  onClick={() => navigate('/')}
                  className="text-[#E85D04] font-mono font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('nav.seeWorldMap', { defaultValue: 'Ver Atlas Mundial' })}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Market */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#E85D04] font-mono font-bold mb-5">
              {t('footer.supportTitle')}
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <a
                href="mailto:concierge@cafecolombia-demo.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E85D04]" />
                <span>{t('footer.email')}</span>
              </a>
              <p className="text-[11px] text-white/50 leading-relaxed">{t('footer.hours')}</p>
              <div className="pt-2">
                <span className="text-[10px] text-white/40 uppercase font-mono tracking-wider block mb-1.5">
                  {t('footer.targetMarket', { defaultValue: 'Mercado Destino:' })}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs font-semibold">
                  <span>{country === 'US' ? t('nav.usa', { defaultValue: '🇺🇸 Estados Unidos (USD)' }) : t('nav.canada', { defaultValue: '🇨🇦 Canadá (CAD)' })}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p className="text-center md:text-left max-w-xl font-normal">
            {t('footer.globalPlatformNotice', {
              defaultValue:
                'CATAVIA es una plataforma que conecta al productor con el consumidor que disfruta de una buena taza de café y de experiencias inmersivas dedicada a la apreciación de la cultura cafetera global.'
            })}
          </p>
          <div className="flex items-center gap-4 font-mono">
            <span>{t('footer.copyright', { defaultValue: '© 2026 CATAVIA. Todos los derechos reservados.' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
