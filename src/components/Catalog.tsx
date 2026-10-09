import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { motion } from 'framer-motion';
import { ShoppingBag, Check, Info } from 'lucide-react';

interface ProductVariantState {
  [productId: string]: {
    size: '12oz' | '2.2lb';
    grind: 'whole' | 'filter' | 'espresso' | 'french';
  };
}

export default function Catalog() {
  const { t } = useTranslation();
  const { country, formatPrice, addToCart } = useShop();

  const products = (t('catalog.products', { returnObjects: true }) as any[]) || [];

  const [selectedVariants, setSelectedVariants] = useState<ProductVariantState>({
    'huila-geisha': { size: '12oz', grind: 'whole' },
    'sierra-nevada-mist': { size: '12oz', grind: 'whole' },
    'narino-bourbon': { size: '12oz', grind: 'whole' },
    'santander-honey': { size: '12oz', grind: 'whole' },
  });

  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleSizeChange = (productId: string, size: '12oz' | '2.2lb') => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: { ...prev[productId], size }
    }));
  };

  const handleGrindChange = (productId: string, grind: 'whole' | 'filter' | 'espresso' | 'french') => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: { ...prev[productId], grind }
    }));
  };

  const getPrice = (prod: any, size: '12oz' | '2.2lb') => {
    const base = country === 'US' ? prod.priceUSD : prod.priceCAD;
    if (size === '2.2lb') {
      return base * 2.3;
    }
    return base;
  };

  const handleAddToCart = (prod: any) => {
    const current = selectedVariants[prod.id] || { size: '12oz', grind: 'whole' };
    const price = getPrice(prod, current.size);

    const grindLabels: Record<string, string> = {
      whole: t('catalog.wholeBean', { defaultValue: 'Grano Entero (Whole Bean)' }),
      filter: t('catalog.groundDrip', { defaultValue: 'Molienda Filtro / Pour-Over' }),
      espresso: t('catalog.groundEspresso', { defaultValue: 'Molienda Fina Espresso' }),
      french: t('catalog.groundFrench', { defaultValue: 'Molienda Gruesa Prensa Francesa' }),
    };

    addToCart({
      id: prod.id,
      name: prod.name,
      region: prod.region,
      size: current.size === '12oz' ? '12oz (340g)' : '2.2lb (1kg)',
      grind: grindLabels[current.grind] || 'Grano Entero',
      price: price,
      image: '/images/premium_coffee_package_1791438608891.jpg'
    });

    setAddedNotice(prod.id);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  return (
    <section id="coleccion" className="py-24 lg:py-36 bg-[#F4F4F1] dark:bg-[#0E1210] border-y border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Staged Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#E85D04] font-bold font-mono block mb-2">
              {t('catalog.badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#141816] dark:text-[#FAF8F5] font-normal leading-tight mb-4">
              {t('catalog.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#606863] dark:text-[#9DA7A1] font-light leading-relaxed">
              {t('catalog.subtitle')}
            </p>
          </div>
          <div className="mt-6 md:mt-0 text-xs text-[#606863] dark:text-[#9DA7A1] font-mono flex items-center gap-2 bg-white dark:bg-[#141816] px-4 py-2.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>{t('catalog.samplePriceNotice', { country: country === 'US' ? 'EE. UU. (USD)' : 'Canadá (CAD)' })}</span>
          </div>
        </motion.div>

        {/* 4 Iconic Coffees Staged Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((prod, idx) => {
            const currentVariant = selectedVariants[prod.id] || { size: '12oz', grind: 'whole' };
            const currentPrice = getPrice(prod, currentVariant.size);

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: (idx % 2) * 0.16,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-white dark:bg-[#141816] rounded-3xl border border-black/[0.07] dark:border-white/[0.1] p-7 sm:p-9 shadow-xs hover-lift flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Metadata strip */}
                  <div className="flex items-center justify-between text-xs text-[#606863] dark:text-[#9DA7A1] mb-5 pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                    <span className="font-mono text-[#E85D04] font-bold tracking-wider">{prod.region}</span>
                    <span className="text-[10px] uppercase font-mono font-semibold tracking-widest bg-[#F3EFEA] dark:bg-white/10 text-[#141816] dark:text-white px-3 py-1 rounded-full">
                      {prod.roast}
                    </span>
                  </div>

                  {/* Product Visual + Overview */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                    <div className="sm:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] dark:bg-black/30 border border-black/[0.06] dark:border-white/[0.08] group">
                      <img
                        src="/images/premium_coffee_package_1791438608891.jpg"
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = '/src/assets/images/premium_coffee_package_1791438608891.jpg';
                        }}
                      />
                      <div className="absolute top-2.5 right-2.5 bg-[#141816]/90 dark:bg-white/90 text-white dark:text-[#141816] text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                        Tueste Fresco
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#141816] dark:text-white font-normal leading-tight mb-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-[#606863] dark:text-[#9DA7A1] leading-relaxed mb-4 font-light">
                        {prod.description}
                      </p>
                      <div className="p-3 rounded-xl bg-[#F8F8F5] dark:bg-[#1C221F] border border-black/[0.04] dark:border-white/[0.05] text-[11px] text-[#141816] dark:text-[#FAF8F5] space-y-1.5">
                        <div>
                          <span className="font-semibold text-[#606863] dark:text-[#9DA7A1]">Notas:</span> {prod.sensoryProfile}
                        </div>
                        <div className="flex justify-between text-[#606863] dark:text-[#9DA7A1] text-[10px] font-mono">
                          <span>Cuerpo: {prod.body}</span>
                          <span>Acidez: {prod.acidity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Size & Grind Selectors */}
                  <div className="space-y-4 mb-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.06] text-xs">
                    {/* Size Selector */}
                    <div>
                      <span className="text-[#606863] dark:text-[#9DA7A1] block mb-2 font-medium text-[11px] uppercase tracking-wider font-mono">
                        {t('catalog.sizeLabel')}
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleSizeChange(prod.id, '12oz')}
                          className={`py-2 px-3 text-center rounded-xl border transition-all cursor-pointer ${
                            currentVariant.size === '12oz'
                              ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] text-[#141816] dark:text-white font-semibold ring-1 ring-[#E85D04]'
                              : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] text-[#606863] dark:text-[#9DA7A1] hover:border-black/20'
                          }`}
                        >
                          12oz (340g) · Hogar
                        </button>
                        <button
                          onClick={() => handleSizeChange(prod.id, '2.2lb')}
                          className={`py-2 px-3 text-center rounded-xl border transition-all cursor-pointer ${
                            currentVariant.size === '2.2lb'
                              ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] text-[#141816] dark:text-white font-semibold ring-1 ring-[#E85D04]'
                              : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] text-[#606863] dark:text-[#9DA7A1] hover:border-black/20'
                          }`}
                        >
                          2.2lb (1kg) · Reserva
                        </button>
                      </div>
                    </div>

                    {/* Grind Selector */}
                    <div>
                      <span className="text-[#606863] dark:text-[#9DA7A1] block mb-2 font-medium text-[11px] uppercase tracking-wider font-mono">
                        {t('catalog.grindLabel')}
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
                        {[
                          { key: 'whole', label: 'Grano' },
                          { key: 'filter', label: 'Filtro' },
                          { key: 'espresso', label: 'Espresso' },
                          { key: 'french', label: 'Prensa' },
                        ].map(g => (
                          <button
                            key={g.key}
                            onClick={() => handleGrindChange(prod.id, g.key as any)}
                            className={`py-2 px-2 text-center rounded-xl border transition-all cursor-pointer font-medium ${
                              currentVariant.grind === g.key
                                ? 'border-[#E85D04] bg-[#FFF8F3] dark:bg-[#1E2521] text-[#141816] dark:text-white font-semibold ring-1 ring-[#E85D04]'
                                : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A211D] text-[#606863] dark:text-[#9DA7A1] hover:border-black/20'
                            }`}
                          >
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#606863] dark:text-[#9DA7A1] block font-medium">
                      Entrega en {country === 'US' ? 'EE. UU.' : 'Canadá'}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-normal text-[#141816] dark:text-white">
                      {formatPrice(currentPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(prod)}
                    className="px-6 py-3.5 bg-[#141816] dark:bg-white text-white dark:text-[#141816] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95 hover:shadow-lg"
                  >
                    {addedNotice === prod.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>¡Agregado!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>{t('catalog.addToCart')}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
