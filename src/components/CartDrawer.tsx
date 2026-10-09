import React from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const { t } = useTranslation();
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    country,
    formatPrice,
    setIsCheckoutModalOpen
  } = useShop();

  if (!isCartOpen) return null;

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const isFreeShipping = totalItems >= 2;
  const shippingFee = isFreeShipping ? 0 : country === 'US' ? 6.50 : 8.50;
  const grandTotal = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#141816] text-[#0D110E] dark:text-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-black/10 dark:border-white/10 animate-slideLeft transition-colors">
          {/* Header */}
          <div className="p-6 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E85D04]/10 text-[#E85D04] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-xl font-medium text-[#0D110E] dark:text-white">
                {t('cart.title')}
              </h2>
              <span className="text-xs font-mono font-semibold text-[#5A625C] dark:text-[#9DA7A1]">
                ({totalItems})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white rounded-full hover:bg-[#F3F3EF] dark:hover:bg-white/10 cursor-pointer transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShoppingBag className="w-12 h-12 text-black/15 dark:text-white/15 mb-3" />
                <p className="text-sm text-[#5A625C] dark:text-[#9DA7A1] mb-4 font-normal">{t('cart.empty')}</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#0D110E] dark:bg-white dark:text-[#0D110E] text-white text-xs uppercase tracking-wider font-bold rounded-full cursor-pointer hover:bg-[#E85D04] transition-colors"
                >
                  {t('cart.emptyCta')}
                </button>
              </div>
            ) : (
              <>
                {/* Free shipping progress bar */}
                <div className="p-3.5 rounded-2xl bg-[#FFF8F3] dark:bg-[#E85D04]/10 border border-[#E85D04]/20 text-xs">
                  {isFreeShipping ? (
                    <span className="text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      {t('cart.freeQualified')}
                    </span>
                  ) : (
                    <span className="text-[#5A625C] dark:text-[#9DA7A1]">
                      Agrega <strong>{2 - totalItems}</strong> bolsa(s) más para obtener <strong>Envío Aéreo Gratis</strong> a {country === 'US' ? 'EE. UU.' : 'Canadá'}.
                    </span>
                  )}
                </div>

                {cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="p-4 rounded-2xl border border-black/[0.07] dark:border-white/[0.08] bg-[#FBFBFA] dark:bg-[#1A201D] flex gap-3.5 relative shadow-2xs"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-[#141816] shrink-0 border border-black/[0.08] dark:border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-serif text-base font-medium text-[#0D110E] dark:text-white truncate">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-[#5A625C] dark:text-[#9DA7A1] hover:text-red-500 p-1 cursor-pointer transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] truncate font-medium">
                        {item.size} · {item.grind}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity control */}
                        <div className="flex items-center border border-black/15 dark:border-white/15 rounded-full bg-white dark:bg-[#141816]">
                          <button
                            onClick={() => updateQuantity(idx, item.quantity - 1)}
                            className="p-1 hover:bg-[#F3F3EF] dark:hover:bg-white/10 text-[#0D110E] dark:text-white rounded-l-full cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-[#0D110E] dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(idx, item.quantity + 1)}
                            className="p-1 hover:bg-[#F3F3EF] dark:hover:bg-white/10 text-[#0D110E] dark:text-white rounded-r-full cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-base font-semibold text-[#0D110E] dark:text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] hover:text-red-500 underline block text-right pt-1 cursor-pointer font-medium"
                >
                  {t('cart.clearCart')}
                </button>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-black/[0.06] dark:border-white/[0.08] bg-[#FBFBFA] dark:bg-[#181E1B] space-y-3.5">
              <div className="text-xs space-y-1.5 text-[#5A625C] dark:text-[#9DA7A1]">
                <div className="flex justify-between">
                  <span>{t('cart.subtotal')}</span>
                  <span className="font-mono text-[#0D110E] dark:text-white font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('cart.shippingEst')}</span>
                  <span className="font-mono text-[#0D110E] dark:text-white font-bold">
                    {isFreeShipping ? 'Gratis ($0.00)' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-medium text-[#0D110E] dark:text-white pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <span className="font-serif">{t('cart.total')}</span>
                  <span className="font-serif text-xl text-[#E85D04] font-semibold">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutModalOpen(true);
                }}
                className="w-full py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-lg glow-orange transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{t('cart.checkoutBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-[#5A625C] dark:text-[#9DA7A1] text-center leading-tight">
                {t('cart.disclaimer')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
