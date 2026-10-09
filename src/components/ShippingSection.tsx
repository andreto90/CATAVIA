import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { Truck, ShieldCheck, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function ShippingSection() {
  const { t, i18n } = useTranslation();
  const { country, setCountry } = useShop();
  const [postalInput, setPostalInput] = useState('');
  const [estimateResult, setEstimateResult] = useState<{
    zone: string;
    days: string;
    cost: string;
    freeThreshold: string;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalInput.trim()) return;

    const isUS = country === 'US';
    const lang = i18n.language || 'es';

    let zoneText = '';
    let daysText = '';
    let costText = '';
    let freeText = '';

    if (lang.startsWith('en')) {
      zoneText = isUS
        ? `ZIP Code ${postalInput.trim().toUpperCase()} · United States Territory`
        : `Postal Code ${postalInput.trim().toUpperCase()} · Canadian Territory`;
      daysText = isUS
        ? '3 - 5 business days (Direct Express Air)'
        : '4 - 6 business days (Express Air with Customs Clearance)';
      costText = isUS ? '$6.50 USD (Standard)' : '$8.50 CAD (Standard)';
      freeText = 'Free Express Shipping on orders of 2 or more bags!';
    } else if (lang.startsWith('fr')) {
      zoneText = isUS
        ? `Code ZIP ${postalInput.trim().toUpperCase()} · Territoire des États-Unis`
        : `Code Postal ${postalInput.trim().toUpperCase()} · Territoire Canadien`;
      daysText = isUS
        ? '3 à 5 jours ouvrables (Vol Aérien Express Direct)'
        : '4 à 6 jours ouvrables (Vol Aérien Express avec Dédouanement)';
      costText = isUS ? '6,50 $ USD (Standard)' : '8,50 $ CAD (Standard)';
      freeText = 'Livraison Express Gratuite dès 2 paquets ou plus !';
    } else {
      zoneText = isUS
        ? `Código Postal ${postalInput.trim().toUpperCase()} · Territorio de Estados Unidos`
        : `Código Postal ${postalInput.trim().toUpperCase()} · Territorio Canadiense`;
      daysText = isUS
        ? '3 - 5 días hábiles (Vuelo Aéreo Express Directo)'
        : '4 - 6 días hábiles (Vuelo Aéreo Express con Desaduanaje)';
      costText = isUS ? '$6.50 USD (Estándar)' : '$8.50 CAD (Estándar)';
      freeText = '¡Envío Gratis al ordenar 2 o más paquetes!';
    }

    setEstimateResult({
      zone: zoneText,
      days: daysText,
      cost: costText,
      freeThreshold: freeText
    });
  };

  return (
    <section id="envios" className="py-24 lg:py-36 bg-[#FBFBFA] dark:bg-[#0B0E0D] border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-2">
            {t('shipping.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0D110E] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
            {t('shipping.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A625C] dark:text-[#9DA7A1] font-light leading-relaxed">
            {t('shipping.subtitle')}
          </p>
        </div>

        {/* Master Box */}
        <div className="bg-white dark:bg-[#141816] p-8 sm:p-12 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] shadow-lg transition-colors">
          {/* Country Selection Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-black/[0.06] dark:border-white/[0.08] gap-4">
            <span className="text-xs uppercase tracking-wider text-[#0D110E] dark:text-white font-bold font-mono">
              {t('shipping.activeDestination', { defaultValue: 'Destino Activo de Envío:' })}
            </span>
            <div className="inline-flex rounded-full bg-[#F3F3EF] dark:bg-[#1E2521] p-1 border border-black/[0.06] dark:border-white/10">
              <button
                onClick={() => {
                  setCountry('US');
                  setEstimateResult(null);
                }}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                  country === 'US'
                    ? 'bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] shadow-md'
                    : 'text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white'
                }`}
              >
                <span>🇺🇸</span> {t('nav.usa', { defaultValue: 'Estados Unidos (USD)' })}
              </button>
              <button
                onClick={() => {
                  setCountry('CA');
                  setEstimateResult(null);
                }}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                  country === 'CA'
                    ? 'bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] shadow-md'
                    : 'text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white'
                }`}
              >
                <span>🇨🇦</span> {t('nav.canada', { defaultValue: 'Canadá (CAD)' })}
              </button>
            </div>
          </div>

          {/* Postal Code Input Form */}
          <form onSubmit={handleCalculate} className="mb-8">
            <label className="block text-xs font-bold text-[#0D110E] dark:text-white uppercase tracking-wider font-mono mb-2">
              {t('shipping.postalLabel')}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 text-[#5A625C] dark:text-[#9DA7A1] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={postalInput}
                  onChange={(e) => setPostalInput(e.target.value)}
                  placeholder={country === 'US' ? 'Ej. 90210, 10001, 33101' : 'Ex. M5V 2T6, H2X 1Y4, V6B 1A1'}
                  className="w-full pl-11 pr-4 py-3.5 bg-[#FAF9F6] dark:bg-[#1E2521] border border-black/[0.1] dark:border-white/15 rounded-2xl text-xs sm:text-sm text-[#0D110E] dark:text-white focus:outline-hidden focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition-all font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-2xl transition-all whitespace-nowrap cursor-pointer active:scale-95 shadow-md glow-orange"
              >
                {t('shipping.calculateBtn')}
              </button>
            </div>
          </form>

          {/* Real-time Calculation Result */}
          {estimateResult && (
            <div className="p-6 rounded-2xl bg-[#FFF8F3] dark:bg-[#1E2521] border border-[#E85D04]/30 mb-8 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E85D04] font-bold mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>{estimateResult.zone}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
                <div>
                  <span className="text-[#5A625C] dark:text-[#9DA7A1] block mb-1">{t('shipping.transitTimeLabel', { defaultValue: 'Tiempo en Tránsito:' })}</span>
                  <span className="font-bold text-[#0D110E] dark:text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    {estimateResult.days}
                  </span>
                </div>
                <div>
                  <span className="text-[#5A625C] dark:text-[#9DA7A1] block mb-1">{t('shipping.standardRateLabel', { defaultValue: 'Tarifa Estándar:' })}</span>
                  <span className="font-bold text-[#0D110E] dark:text-white">{estimateResult.cost}</span>
                </div>
                <div>
                  <span className="text-[#5A625C] dark:text-[#9DA7A1] block mb-1">{t('shipping.volumeBenefitLabel', { defaultValue: 'Beneficio por Volumen:' })}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{estimateResult.freeThreshold}</span>
                </div>
              </div>
            </div>
          )}

          {/* Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] text-xs text-[#5A625C] dark:text-[#9DA7A1]">
            <div className="flex gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-[#E85D04]" />
              </div>
              <div>
                <span className="font-bold text-[#0D110E] dark:text-white block mb-1 font-serif">{t('shipping.standardDelivery', { defaultValue: 'Courier Aéreo Express' })}</span>
                <span>{country === 'US' ? t('shipping.transitTimeUS') : t('shipping.transitTimeCA')}</span>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#E85D04]" />
              </div>
              <div>
                <span className="font-bold text-[#0D110E] dark:text-white block mb-1 font-serif">{t('shipping.thermalProtection', { defaultValue: 'Protección Térmica' })}</span>
                <span>{t('shipping.packaging')}</span>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#E85D04]" />
              </div>
              <div>
                <span className="font-bold text-[#0D110E] dark:text-white block mb-1 font-serif">{t('shipping.roastOnDemand', { defaultValue: 'Tueste Bajo Pedido' })}</span>
                <span>{t('shipping.freshnessPromise')}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] italic font-mono">
              {t('shipping.transparencyNote')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
