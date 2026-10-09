import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import {
  COFFEE_PROFILES,
  BREWING_RECIPES,
  BrewRecipe,
  BrewStep,
  CoffeeProfileInfo
} from '../data/brewingData.ts';
import {
  X,
  Clock,
  Thermometer,
  Scale,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Droplet
} from 'lucide-react';

export default function BrewingModal() {
  const { t, i18n } = useTranslation();
  const {
    isBrewingModalOpen,
    setIsBrewingModalOpen,
    selectedBrewMethod,
    selectedBrewCoffee
  } = useShop();

  const [activeCoffeeId, setActiveCoffeeId] = useState<string>(selectedBrewCoffee || 'huila-geisha');
  const [activeMethod, setActiveMethod] = useState<'v60' | 'french' | 'chemex'>(
    selectedBrewMethod || 'v60'
  );

  useEffect(() => {
    if (isBrewingModalOpen) {
      if (selectedBrewMethod) setActiveMethod(selectedBrewMethod);
      if (selectedBrewCoffee) setActiveCoffeeId(selectedBrewCoffee);
    }
  }, [isBrewingModalOpen, selectedBrewMethod, selectedBrewCoffee]);

  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  if (!isBrewingModalOpen) return null;

  const catalogProducts = (t('catalog.products', { returnObjects: true }) as any[]) || [];

  const currentCoffee: CoffeeProfileInfo =
    COFFEE_PROFILES.find(c => c.id === activeCoffeeId) || COFFEE_PROFILES[0];

  const localizedActiveProduct = catalogProducts.find((p: any) => p?.id === currentCoffee.id);
  const activeCoffeeDisplayName = localizedActiveProduct?.name || currentCoffee.name;

  const currentRecipe: BrewRecipe =
    BREWING_RECIPES[activeCoffeeId]?.[activeMethod] || BREWING_RECIPES['huila-geisha']['v60'];

  const methodNames: Record<'v60' | 'french' | 'chemex', { name: string; tag: string }> = {
    v60: {
      name: t('experience.v60Title', { defaultValue: 'Hario V60' }),
      tag: t('brewingModal.v60Tag', { defaultValue: 'Claridad & Floración' })
    },
    french: {
      name: t('experience.frenchTitle', { defaultValue: 'Prensa Francesa' }),
      tag: t('brewingModal.frenchTag', { defaultValue: 'Cuerpo & Inmersión' })
    },
    chemex: {
      name: t('experience.chemexTitle', { defaultValue: 'Chemex 6-Cup' }),
      tag: t('brewingModal.chemexTag', { defaultValue: 'Pureza & Dulzura' })
    }
  };

  const currentLang = i18n.language || 'es';

  const getLocalizedStep = (step: BrewStep): { title: string; desc: string } => {
    if (currentLang.startsWith('en')) {
      const enMap: Record<string, { title: string; desc: string }> = {
        'Enjuague y preparación': {
          title: 'Rinse & Preparation',
          desc: 'Rinse paper filter with hot water to purge paper taste and pre-heat vessel. Discard water, add ground coffee, level bed, and tare scale to 0g.'
        },
        'Floración (Bloom)': {
          title: 'Blooming Stage',
          desc: 'Pour 45g to 60g of hot water in gentle spirals. Let bloom for 45s to release trapped CO₂ and unlock vibrant florals.'
        },
        'Primer vertido continuo': {
          title: 'First Continuous Pour',
          desc: 'Pour steadily in concentric spirals from center outwards, avoiding paper walls, maintaining balanced flow.'
        },
        'Segundo vertido y caída final': {
          title: 'Second Pour & Drawdown',
          desc: 'Pour remaining water up to target recipe weight. Give a gentle swirl for an even coffee bed and allow clean drawdown.'
        },
        'Precalentamiento e incorporación': {
          title: 'Preheat & Coffee Addition',
          desc: 'Preheat glass carafe with hot water. Discard, add coarse coffee grounds, and tare scale to 0g.'
        },
        'Inmersión inicial (Bloom)': {
          title: 'Initial Immersion',
          desc: 'Pour all hot water vigorously ensuring total saturation of coffee grounds. Stir gently twice with a paddle.'
        },
        'Ruptura de costra y descarte': {
          title: 'Break Crust & Skim',
          desc: 'At 4:00, gently break floating crust with two spoons. Skim off surface white foam and floating particulates for pure body.'
        },
        'Prensado suave': {
          title: 'Gentle Press & Decant',
          desc: 'Place plunger on surface and press down slowly with steady pressure. Decant immediately into cups.'
        },
        'Enjuague de filtro triple': {
          title: 'Triple-Layer Filter Rinse',
          desc: 'Position 3-fold side facing spout. Rinse generously with hot water, discard rinse water, and add coffee grounds.'
        },
        'Pre-infusión lenta': {
          title: 'Slow Pre-infusion',
          desc: 'Pour 60g of hot water saturating grounds evenly. Let bloom for 45s.'
        },
        'Vertido por pulsos en espiral': {
          title: 'Spiral Pulse Pours',
          desc: 'Pour in steady spiral pulses. Maintain water level below carafe rim.'
        },
        'Filtrado y decantado': {
          title: 'Complete Drawdown & Swirl',
          desc: 'Allow brew to filter through completely. Remove filter and swirl decanter to aerate and unify temperature.'
        }
      };
      return enMap[step.title] || { title: step.title, desc: step.desc };
    }
    if (currentLang.startsWith('fr')) {
      const frMap: Record<string, { title: string; desc: string }> = {
        'Enjuague y preparación': {
          title: 'Rinçage et Préparation',
          desc: 'Rincez le filtre papier à l\'eau chaude pour éliminer le goût résiduel. Videz l\'eau, versez le café, égalisez la surface et tarez la balance.'
        },
        'Floración (Bloom)': {
          title: 'Pré-infusion (Bloom)',
          desc: 'Versez 45g à 60g d\'eau chaude en spirale douce. Laissez reposer 45s pour libérer le CO₂ et réveiller les arômes floraux.'
        },
        'Primer vertido continuo': {
          title: 'Premier Versement Continu',
          desc: 'Versez l\'eau régulièrement en cercles concentriques du centre vers l\'extérieur, sans heurter les parois du filtre.'
        },
        'Segundo vertido y caída final': {
          title: 'Second Versement & Filtration',
          desc: 'Complétez le versement jusqu\'au poids cible. Donnez une légère agitation circulaire et laissez s\'écouler.'
        },
        'Precalentamiento e incorporación': {
          title: 'Préchauffage et Ajout',
          desc: 'Préchauffez la carafe avec de l\'eau chaude. Videz, ajoutez la mouture grossière et tarez la balance.'
        },
        'Inmersión inicial (Bloom)': {
          title: 'Immersion Initiale',
          desc: 'Versez l\'eau chaude vigoureusement pour saturer l\'ensemble de la mouture. Remuez délicatement avec une cuillère.'
        },
        'Ruptura de costra y descarte': {
          title: 'Rupture de Croûte & Écume',
          desc: 'À 4:00, brisez délicatement la croûte flottante avec deux cuillères. Retirez la mousse blanche pour une tasse limpide.'
        },
        'Prensado suave': {
          title: 'Pressage Doux & Dégustation',
          desc: 'Abaissez le piston avec une pression très lente et régulière. Servez immédiatement pour stopper l\'extraction.'
        },
        'Enjuague de filtro triple': {
          title: 'Rinçage du Filtre Triple',
          desc: 'Placez le filtre triple épaisseur face au bec verseur. Rincez abondamment à l\'eau chaude, videz, puis versez la mouture.'
        },
        'Pre-infusión lenta': {
          title: 'Pré-infusion Lente',
          desc: 'Versez 60g d\'eau en imprégnant tout le lit de café. Laissez reposer 45 secondes.'
        },
        'Vertido por pulsos en espiral': {
          title: 'Versements par Pulsations',
          desc: 'Versez l\'eau par impulsions douces en cercles concentriques. Maintenez le niveau d\'eau stable.'
        },
        'Filtrado y decantado': {
          title: 'Filtration et Aération',
          desc: 'Laissez le café s\'écouler complètement. Retirez le filtre et faites tournoyer la carafe pour homogénéiser la tasse.'
        }
      };
      return frMap[step.title] || { title: step.title, desc: step.desc };
    }
    return { title: step.title, desc: step.desc };
  };

  const getLocalizedRecipeInfo = () => {
    if (currentLang.startsWith('en')) {
      return {
        grindSize: currentRecipe.grindSize
          .replace('Media-Fina (sal marina fina)', 'Medium-Fine (fine sea salt)')
          .replace('Gruesa uniforme (sal kosher / pimienta partida)', 'Coarse Uniform (kosher salt / cracked pepper)')
          .replace('Media-Gruesa (sal de roca o arena de playa)', 'Medium-Coarse (rock salt / beach sand)'),
        sensoryTarget: currentRecipe.sensoryTarget
          .replace('Taza limpia y translúcida con notas vivas de jazmín blanco, bergamota y té de melocotón.', 'Clean and radiant cup with vivid notes of white jasmine, bergamot, and white peach.')
          .replace('Cuerpo espeso, licoroso y envolvente. Notas ricas a chocolate fundido, avellana tostada y panela.', 'Velvety, rich mouthfeel with melted 72% dark cocoa, roasted hazelnut, and warm cane panela.')
          .replace('Taza de pureza cristalina y cuerpo sedoso con dulzura pronunciada de miel y frutas confitadas.', 'Crystal-clean cup with silky body and sweet honeyed notes of candied orchard fruits.')
      };
    }
    if (currentLang.startsWith('fr')) {
      return {
        grindSize: currentRecipe.grindSize
          .replace('Media-Fina (sal marina fina)', 'Moyenne-Fine (sel de mer fin)')
          .replace('Gruesa uniforme (sal kosher / pimienta partida)', 'Grosse Uniforme (gros sel / poivre concassé)')
          .replace('Media-Gruesa (sal de roca o arena de playa)', 'Moyenne-Grosse (gros sel / sable de plage)'),
        sensoryTarget: currentRecipe.sensoryTarget
          .replace('Taza limpia y translúcida con notas vivas de jazmín blanco, bergamota y té de melocotón.', 'Tasse limpide et éclatante aux notes vives de jasmin blanc, bergamote et pêche.')
          .replace('Cuerpo espeso, licoroso y envolvente. Notas ricas a chocolate fundido, avellana tostada y panela.', 'Corps dense et velouté aux notes riches de chocolat noir fondu, noisette et panela.')
          .replace('Taza de pureza cristalina y cuerpo sedoso con dulzura pronunciada de miel y frutas confitadas.', 'Pureté cristalline et corps soyeux avec une remarquable douceur de miel et fruits confits.')
      };
    }
    return {
      grindSize: currentRecipe.grindSize,
      sensoryTarget: currentRecipe.sensoryTarget
    };
  };

  const localizedRecipeDetails = getLocalizedRecipeInfo();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsBrewingModalOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-[#141816] text-[#0D110E] dark:text-[#FAF8F5] w-full max-w-4xl rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden z-10 max-h-[92vh] flex flex-col animate-scaleUp transition-colors">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#141816] flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E85D04]/10 text-[#E85D04] text-[10px] uppercase font-mono tracking-wider font-bold mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('brewingModal.badge', { defaultValue: 'Guía de Extracción Personalizada' })}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D110E] dark:text-white font-normal">
              {t('brewingModal.title', { defaultValue: 'El Arte del Barista en Casa' })}
            </h2>
          </div>
          <button
            onClick={() => setIsBrewingModalOpen(false)}
            className="p-2 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white rounded-full hover:bg-[#F3F3EF] dark:hover:bg-white/10 cursor-pointer transition-colors"
            aria-label={t('brewingModal.closeAria', { defaultValue: 'Cerrar guía' })}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* 1. Selector de Café */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#5A625C] dark:text-[#9DA7A1] font-bold mb-3">
              {t('brewingModal.selectCoffee', { defaultValue: '1. Selecciona el Café Colombiano a Preparar:' })}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {COFFEE_PROFILES.map(coffee => {
                const isSelected = coffee.id === activeCoffeeId;
                const locProd = catalogProducts.find((p: any) => p?.id === coffee.id);
                const displayName = locProd?.name || coffee.name;
                const displayRoast = locProd?.roast || coffee.roast;
                const displayFlavor = locProd?.sensoryProfile || coffee.flavorProfile;

                return (
                  <button
                    key={coffee.id}
                    onClick={() => {
                      setActiveCoffeeId(coffee.id);
                      handleResetTimer();
                    }}
                    className={`p-3.5 text-left rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#E85D04]/15 ring-2 ring-[#E85D04]/30 shadow-xs'
                        : 'border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#1A201D] hover:border-[#E85D04]/40'
                    }`}
                  >
                    <span className="font-serif text-sm font-medium text-[#0D110E] dark:text-white block truncate">
                      {displayName}
                    </span>
                    <span className="text-[10px] text-[#E85D04] font-mono block truncate font-semibold">
                      {displayRoast}
                    </span>
                    <span className="text-[10px] text-[#5A625C] dark:text-[#9DA7A1] line-clamp-1 mt-1 font-normal">
                      {displayFlavor}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Selector de Método */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#5A625C] dark:text-[#9DA7A1] font-bold mb-3">
              {t('brewingModal.selectMethod', { defaultValue: '2. Método de Extracción:' })}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['v60', 'french', 'chemex'] as const).map(method => {
                const isSelected = activeMethod === method;
                return (
                  <button
                    key={method}
                    onClick={() => {
                      setActiveMethod(method);
                      handleResetTimer();
                    }}
                    className={`py-3.5 px-4 text-center rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] border-[#0D110E] dark:border-white shadow-md'
                        : 'bg-[#F4F4F1] dark:bg-[#1A201D] text-[#0D110E] dark:text-white border-black/[0.06] dark:border-white/10 hover:border-black/20'
                    }`}
                  >
                    <span className="font-serif text-base sm:text-lg font-medium block">
                      {methodNames[method].name}
                    </span>
                    <span
                      className={`text-[10px] font-mono block ${
                        isSelected ? 'text-[#E85D04]' : 'text-[#5A625C] dark:text-[#9DA7A1]'
                      }`}
                    >
                      {methodNames[method].tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Parámetros Calibrados */}
          <div className="bg-[#FFF8F3] dark:bg-[#1A201D] p-6 rounded-2xl border border-[#E85D04]/30 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-black/[0.06] dark:border-white/[0.08] gap-2">
              <div>
                <span className="text-xs font-mono text-[#E85D04] uppercase tracking-wider block font-bold">
                  {t('brewingModal.recipeFor', { name: activeCoffeeDisplayName, defaultValue: `Receta Calibrada para ${activeCoffeeDisplayName}` })}
                </span>
                <h3 className="font-serif text-xl text-[#0D110E] dark:text-white font-normal">
                  {methodNames[activeMethod].name} · Ratio {currentRecipe.ratio}
                </h3>
              </div>

              {/* Kitchen Brew Timer */}
              <div className="inline-flex items-center gap-2 bg-white dark:bg-[#141816] px-4 py-2 rounded-full border border-black/[0.1] dark:border-white/15 shadow-xs">
                <Clock className="w-4 h-4 text-[#E85D04]" />
                <span className="font-mono text-lg font-bold text-[#0D110E] dark:text-white tracking-wider">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 text-[#0D110E] dark:text-white hover:text-[#E85D04] cursor-pointer"
                  title={isTimerRunning ? t('brewingModal.pauseTimer', { defaultValue: 'Pausar' }) : t('brewingModal.startTimer', { defaultValue: 'Iniciar' })}
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleResetTimer}
                  className="p-1 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white cursor-pointer"
                  title={t('brewingModal.resetTimer', { defaultValue: 'Reiniciar cronómetro' })}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-white dark:bg-[#141816] p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1.5 block mb-1">
                  <Scale className="w-3.5 h-3.5 text-[#E85D04]" />
                  {t('brewingModal.coffeeDose', { defaultValue: 'Dosis de Café:' })}
                </span>
                <span className="font-mono text-base font-bold text-[#0D110E] dark:text-white">
                  {currentRecipe.coffeeGrams}g
                </span>
              </div>

              <div className="bg-white dark:bg-[#141816] p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1.5 block mb-1">
                  <Droplet className="w-3.5 h-3.5 text-[#E85D04]" />
                  {t('brewingModal.hotWater', { defaultValue: 'Agua Caliente:' })}
                </span>
                <span className="font-mono text-base font-bold text-[#0D110E] dark:text-white">
                  {currentRecipe.waterGrams}g
                </span>
              </div>

              <div className="bg-white dark:bg-[#141816] p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1.5 block mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-[#E85D04]" />
                  {t('brewingModal.temperature', { defaultValue: 'Temperatura:' })}
                </span>
                <span className="font-mono text-base font-bold text-[#0D110E] dark:text-white">
                  {currentRecipe.waterTemp}
                </span>
              </div>

              <div className="bg-white dark:bg-[#141816] p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1.5 block mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#E85D04]" />
                  {t('brewingModal.targetTime', { defaultValue: 'Tiempo Objetivo:' })}
                </span>
                <span className="font-mono text-base font-bold text-[#0D110E] dark:text-white">
                  {currentRecipe.targetTime}
                </span>
              </div>
            </div>

            {/* Grind & Cup Target */}
            <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1.5">
              <div>
                <span className="text-[#5A625C] dark:text-[#9DA7A1]">{t('brewingModal.grind', { defaultValue: 'Molienda:' })} </span>
                <span className="font-bold text-[#0D110E] dark:text-white">{localizedRecipeDetails.grindSize}</span>
              </div>
              <div>
                <span className="text-[#5A625C] dark:text-[#9DA7A1]">{t('brewingModal.sensoryTarget', { defaultValue: 'Objetivo:' })} </span>
                <span className="italic font-medium text-[#0D110E] dark:text-white">{localizedRecipeDetails.sensoryTarget}</span>
              </div>
            </div>
          </div>

          {/* 4. Instrucciones Paso a Paso */}
          <div>
            <h4 className="font-serif text-xl text-[#0D110E] dark:text-white font-normal mb-4">
              {t('brewingModal.stepsTitle', { defaultValue: 'Instrucciones Paso a Paso' })}
            </h4>
            <div className="space-y-3.5">
              {currentRecipe.steps.map((step, idx) => {
                const locStep = getLocalizedStep(step);
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#1A201D] flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 hover:border-[#E85D04]/40 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:w-28 shrink-0">
                      <span className="w-7 h-7 rounded-full bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-mono text-[#E85D04] font-bold">
                        {step.time}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h5 className="font-serif text-base font-medium text-[#0D110E] dark:text-white mb-1">
                        {locStep.title}
                      </h5>
                      <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] leading-relaxed font-normal">
                        {locStep.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#141816] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#5A625C] dark:text-[#9DA7A1]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('brewingModal.terroirOptimized', { defaultValue: 'Receta optimizada para el terroir colombiano seleccionado.' })}</span>
          </div>

          <button
            onClick={() => setIsBrewingModalOpen(false)}
            className="w-full sm:w-auto px-7 py-3 bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer shadow-md"
          >
            {t('brewingModal.gotItBtn', { defaultValue: 'Entendido, ¡a preparar!' })}
          </button>
        </div>
      </div>
    </div>
  );
}
