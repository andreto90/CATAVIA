import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { Check, RotateCcw, ShoppingBag, Sparkles } from 'lucide-react';

interface QuizState {
  intensity: 'soft' | 'balanced' | 'intense' | null;
  flavor: 'sweet' | 'fruity' | 'citrus' | 'classic' | null;
  method: 'filter' | 'pourover' | 'french' | 'espresso' | 'other' | null;
  presentation: 'beans' | 'ground' | null;
}

export default function CoffeeSelector() {
  const { t } = useTranslation();
  const { addToCart, country, formatPrice } = useShop();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizState>({
    intensity: null,
    flavor: null,
    method: null,
    presentation: null,
  });

  const totalSteps = 4;

  const handleSelect = <K extends keyof QuizState>(key: K, value: QuizState[K]) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setAnswers({
      intensity: null,
      flavor: null,
      method: null,
      presentation: null,
    });
    setCurrentStep(1);
  };

  const catalogProducts = (t('catalog.products', { returnObjects: true }) as any[]) || [];

  const getRecommendation = () => {
    const { intensity, flavor } = answers;

    let targetId = 'santander-honey';
    if (intensity === 'soft' || flavor === 'citrus') {
      targetId = 'huila-geisha';
    } else if (intensity === 'intense' || flavor === 'sweet') {
      targetId = 'sierra-nevada-mist';
    } else if (flavor === 'fruity') {
      targetId = 'narino-bourbon';
    }

    const prod = catalogProducts.find((p: any) => p?.id === targetId) || {};
    const fallbackPrices: Record<string, { us: number; ca: number }> = {
      'huila-geisha': { us: 28.50, ca: 38.50 },
      'sierra-nevada-mist': { us: 24.00, ca: 32.50 },
      'narino-bourbon': { us: 26.00, ca: 35.00 },
      'santander-honey': { us: 25.00, ca: 34.00 }
    };

    const price = country === 'US'
      ? (prod.priceUSD || fallbackPrices[targetId]?.us || 26.00)
      : (prod.priceCAD || fallbackPrices[targetId]?.ca || 35.00);

    return {
      id: targetId,
      name: prod.name || 'Café Especial Colombiano',
      region: prod.region || 'Andes de Colombia',
      roast: prod.roast || 'Tueste Fresco',
      flavorSummary: prod.sensoryProfile || '',
      desc: prod.description || '',
      price: price,
      image: '/images/premium_coffee_package_1791438608891.jpg'
    };
  };

  const isCompleted = answers.intensity && answers.flavor && answers.method && answers.presentation;
  const recommendation = isCompleted ? getRecommendation() : null;

  return (
    <section id="descubrimiento" className="py-24 lg:py-36 bg-[#FAF8F5] dark:bg-[#0B0E0D] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E85D04]/10 text-[#E85D04] text-[11px] font-mono uppercase tracking-[0.2em] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('quiz.badge')}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#141816] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
            {t('quiz.title')}
          </h2>
          <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] font-light leading-relaxed">
            {t('quiz.subtitle')}
          </p>
        </div>

        {/* Quiz Master Container */}
        <div className="bg-white dark:bg-[#141816] rounded-3xl border border-black/[0.08] dark:border-white/[0.1] shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-colors duration-300">
          {/* Top Progress Bar */}
          {!isCompleted && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-mono text-[#606863] dark:text-[#9DA7A1] mb-2.5">
                <span className="font-semibold uppercase tracking-wider">
                  {t('quiz.stepCounter', { current: currentStep, total: totalSteps })}
                </span>
                <span className="font-bold text-[#141816] dark:text-white">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-[#F3EFEA] dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E85D04] to-[#F48C06] transition-all duration-400 ease-out rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 1: Intensity */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-normal mb-1.5">
                {t('quiz.q1')}
              </h3>
              <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] mb-8 font-light">{t('quiz.q1Sub')}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { key: 'soft', ...((t('quiz.q1Options.soft', { returnObjects: true }) as any) || {}) },
                  { key: 'balanced', ...((t('quiz.q1Options.balanced', { returnObjects: true }) as any) || {}) },
                  { key: 'intense', ...((t('quiz.q1Options.intense', { returnObjects: true }) as any) || {}) },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelect('intensity', opt.key as any)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-300 cursor-pointer hover-lift ${
                      answers.intensity === opt.key
                        ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] ring-2 ring-[#E85D04]/30 shadow-sm'
                        : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] hover:border-[#E85D04]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-medium text-[#141816] dark:text-white">{opt.label}</span>
                      {answers.intensity === opt.key && (
                        <span className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Flavors */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-normal mb-1.5">
                {t('quiz.q2')}
              </h3>
              <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] mb-8 font-light">{t('quiz.q2Sub')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'sweet', ...((t('quiz.q2Options.sweet', { returnObjects: true }) as any) || {}) },
                  { key: 'fruity', ...((t('quiz.q2Options.fruity', { returnObjects: true }) as any) || {}) },
                  { key: 'citrus', ...((t('quiz.q2Options.citrus', { returnObjects: true }) as any) || {}) },
                  { key: 'classic', ...((t('quiz.q2Options.classic', { returnObjects: true }) as any) || {}) },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelect('flavor', opt.key as any)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-300 cursor-pointer hover-lift ${
                      answers.flavor === opt.key
                        ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] ring-2 ring-[#E85D04]/30 shadow-sm'
                        : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] hover:border-[#E85D04]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-base font-medium text-[#141816] dark:text-white">{opt.label}</span>
                      {answers.flavor === opt.key && (
                        <span className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-semibold text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white underline cursor-pointer"
                >
                  ← Volver a intensidad
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Brew Method */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-normal mb-1.5">
                {t('quiz.q3')}
              </h3>
              <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] mb-8 font-light">{t('quiz.q3Sub')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {[
                  { key: 'filter', ...((t('quiz.q3Options.filter', { returnObjects: true }) as any) || {}) },
                  { key: 'pourover', ...((t('quiz.q3Options.pourover', { returnObjects: true }) as any) || {}) },
                  { key: 'french', ...((t('quiz.q3Options.french', { returnObjects: true }) as any) || {}) },
                  { key: 'espresso', ...((t('quiz.q3Options.espresso', { returnObjects: true }) as any) || {}) },
                  { key: 'other', ...((t('quiz.q3Options.other', { returnObjects: true }) as any) || {}) },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelect('method', opt.key as any)}
                    className={`p-5 text-left rounded-2xl border transition-all duration-300 cursor-pointer hover-lift ${
                      answers.method === opt.key
                        ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] ring-2 ring-[#E85D04]/30 shadow-sm'
                        : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] hover:border-[#E85D04]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-serif text-sm font-medium text-[#141816] dark:text-white">{opt.label}</span>
                      {answers.method === opt.key && (
                        <span className="w-4 h-4 rounded-full bg-[#E85D04] text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-semibold text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white underline cursor-pointer"
                >
                  ← Volver a sabores
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Presentation */}
          {currentStep === 4 && !isCompleted && (
            <div className="animate-fadeIn">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-normal mb-1.5">
                {t('quiz.q4')}
              </h3>
              <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] mb-8 font-light">{t('quiz.q4Sub')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'beans', ...((t('quiz.q4Options.beans', { returnObjects: true }) as any) || {}) },
                  { key: 'ground', ...((t('quiz.q4Options.ground', { returnObjects: true }) as any) || {}) },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelect('presentation', opt.key as any)}
                    className={`p-6 text-left rounded-2xl border transition-all duration-300 cursor-pointer hover-lift ${
                      answers.presentation === opt.key
                        ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] ring-2 ring-[#E85D04]/30 shadow-sm'
                        : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] hover:border-[#E85D04]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-base font-medium text-[#141816] dark:text-white">{opt.label}</span>
                      {answers.presentation === opt.key && (
                        <span className="w-5 h-5 rounded-full bg-[#E85D04] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#606863] dark:text-[#9DA7A1] leading-relaxed font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="text-xs font-semibold text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white underline cursor-pointer"
                >
                  ← Volver a método
                </button>
              </div>
            </div>
          )}

          {/* Final Match Recommendation Card */}
          {isCompleted && recommendation && (
            <div className="animate-fadeIn">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-mono uppercase tracking-widest font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('quiz.compatibility')}</span>
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#141816] dark:text-white font-normal">
                  {t('quiz.recommendationTitle')}
                </h3>
              </div>

              <div className="bg-[#FFF8F3] dark:bg-[#1A211D] p-6 sm:p-8 rounded-2xl border border-[#E85D04]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8 shadow-sm">
                <div className="md:col-span-5 relative aspect-square rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white">
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#141816] text-white text-[10px] uppercase font-mono px-2.5 py-1 rounded-full font-semibold">
                    {recommendation.roast}
                  </div>
                </div>

                <div className="md:col-span-7">
                  <span className="text-xs font-mono text-[#E85D04] uppercase tracking-wider block font-bold mb-1">
                    {recommendation.region}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-medium mb-2">
                    {recommendation.name}
                  </h4>
                  <div className="inline-block px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-[#E85D04]/20 text-xs font-semibold text-[#141816] dark:text-white mb-3">
                    Notas: {recommendation.flavorSummary}
                  </div>
                  <p className="text-xs sm:text-sm text-[#606863] dark:text-[#9DA7A1] leading-relaxed mb-6 font-light">
                    {recommendation.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
                    <div>
                      <span className="text-[11px] text-[#606863] dark:text-[#9DA7A1] block font-light">12oz (340g) · Hogar</span>
                      <span className="font-serif text-2xl font-semibold text-[#141816] dark:text-white">
                        {formatPrice(recommendation.price)}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        addToCart({
                          id: recommendation.id,
                          name: recommendation.name,
                          region: recommendation.region,
                          size: '12oz (340g)',
                          grind: answers.presentation === 'beans' ? 'Whole Bean' : 'Molienda Calibrada',
                          price: recommendation.price,
                          image: recommendation.image,
                        })
                      }
                      className="px-6 py-3.5 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-md glow-orange transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t('quiz.chooseCoffee')}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#606863] dark:text-[#9DA7A1] gap-4">
                <span className="italic">{t('quiz.demoNote')}</span>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-[#E85D04] hover:text-[#DC2F02] font-bold underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('quiz.reset')}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
