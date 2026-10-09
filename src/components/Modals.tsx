import React, { useState } from 'react';
import { useShop } from '../context/ShopContext.tsx';
import BrewingModal from './BrewingModal.tsx';
import cataviaLogo from '../assets/images/logocatavia.png';
import { X, CheckCircle, ShieldCheck, Mail, Sparkles } from 'lucide-react';

export default function Modals() {
  const {
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    isKitModalOpen,
    setIsKitModalOpen,
    cart,
    country,
    formatPrice,
    trackOrder
  } = useShop();

  const [checkoutStep, setCheckoutStep] = useState<'review' | 'confirmed'>('review');
  const [emailInput, setEmailInput] = useState('');
  const [createdOrderId, setCreatedOrderId] = useState('COL-84920');
  const [kitSubmitted, setKitSubmitted] = useState(false);

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const shippingFee = totalItems >= 2 ? 0 : country === 'US' ? 6.50 : 8.50;
  const grandTotal = subtotal + shippingFee;

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `COL-${Math.floor(10000 + Math.random() * 90000)}`;
    setCreatedOrderId(newId);
    setCheckoutStep('confirmed');
  };

  const handleKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKitSubmitted(true);
  };

  return (
    <>
      {/* 1. Checkout Demonstration Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsCheckoutModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <div className="relative bg-white dark:bg-[#141816] text-[#0D110E] dark:text-[#FAF8F5] w-full max-w-lg rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto animate-scaleUp transition-colors">
            <button
              onClick={() => {
                setIsCheckoutModalOpen(false);
                setCheckoutStep('review');
              }}
              className="absolute top-5 right-5 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white p-1.5 rounded-full hover:bg-[#F3F3EF] dark:hover:bg-white/10 cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutStep === 'review' ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <img
                      src={cataviaLogo}
                      alt="CATAVIA Logo"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = '/logocatavia.png';
                      }}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E85D04]/10 text-[#E85D04] text-[10px] uppercase font-mono tracking-wider font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>CATAVIA · Café Colombiano Oficial</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#0D110E] dark:text-white font-normal mb-2">
                  Resumen de tu Pedido
                </h3>
                <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] mb-6 leading-relaxed">
                  Destino: <strong>{country === 'US' ? 'Estados Unidos (USD $)' : 'Canadá (CAD $)'}</strong> · Envío aéreo express con número de rastreo.
                </p>

                {/* Items brief */}
                <div className="space-y-2 mb-6 border-y border-black/[0.06] dark:border-white/[0.08] py-3.5 max-h-48 overflow-y-auto text-xs">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1">
                      <div>
                        <span className="font-serif font-medium text-[#0D110E] dark:text-white">{item.name}</span>
                        <span className="text-[#5A625C] dark:text-[#9DA7A1] block text-[11px]">{item.size} · {item.grind} (x{item.quantity})</span>
                      </div>
                      <span className="font-mono font-bold text-[#0D110E] dark:text-white">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Financial Summary */}
                <div className="space-y-1.5 text-xs text-[#5A625C] dark:text-[#9DA7A1] mb-6 bg-[#F8F8F5] dark:bg-[#1A201D] p-4 rounded-2xl border border-black/[0.05] dark:border-white/[0.08]">
                  <div className="flex justify-between">
                    <span>Subtotal café fresco:</span>
                    <span className="font-mono text-[#0D110E] dark:text-white font-bold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío internacional express:</span>
                    <span className="font-mono text-[#0D110E] dark:text-white font-bold">
                      {shippingFee === 0 ? 'Gratis' : formatPrice(shippingFee)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-medium text-[#0D110E] dark:text-white pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <span className="font-serif">Total estimado:</span>
                    <span className="font-serif text-xl text-[#E85D04] font-semibold">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <form onSubmit={handleSimulateCheckout} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#5A625C] dark:text-[#9DA7A1] font-mono font-bold mb-1">
                      Correo para confirmación de entrega:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu-correo@ejemplo.com"
                      className="w-full px-4 py-3 bg-[#FAF9F6] dark:bg-[#1A201D] border border-black/[0.1] dark:border-white/15 rounded-2xl text-xs sm:text-sm text-[#0D110E] dark:text-white focus:outline-hidden focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-lg glow-orange transition-all cursor-pointer active:scale-95"
                  >
                    Confirmar Intención de Compra (Demostración)
                  </button>
                </form>

                <p className="mt-4 text-[10px] text-[#5A625C] dark:text-[#9DA7A1] text-center italic">
                  *No se solicitarán datos de tarjeta de crédito reales en esta etapa de presentación del producto.
                </p>
              </div>
            ) : (
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={cataviaLogo}
                    alt="CATAVIA Logo"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/logocatavia.png';
                    }}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0D110E] dark:text-white font-normal mb-2">
                  ¡Gracias por tu interés en CATAVIA · Café Colombiano!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A625C] dark:text-[#9DA7A1] mb-5 leading-relaxed max-w-sm mx-auto">
                  Hemos registrado tu selección demostrativa para entrega en {country === 'US' ? 'Estados Unidos' : 'Canadá'}.
                </p>

                {/* Generated Order ID Card */}
                <div className="bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.08] dark:border-white/[0.1] rounded-2xl p-4 mb-6 max-w-sm mx-auto text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5A625C] dark:text-[#9DA7A1] block mb-1">
                    Número de Pedido Asignado:
                  </span>
                  <div className="font-mono text-xl font-bold text-[#E85D04] tracking-widest mb-1">
                    {createdOrderId}
                  </div>
                  <span className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] block">
                    Guía de seguimiento internacional activa
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    onClick={() => trackOrder(createdOrderId)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-full cursor-pointer shadow-lg glow-orange transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>📦 Rastrear este Pedido en Vivo</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsCheckoutModalOpen(false);
                      setCheckoutStep('review');
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] text-xs uppercase tracking-wider font-bold rounded-full cursor-pointer hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
                  >
                    Volver al sitio
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Tasting Kit Waitlist Modal */}
      {isKitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsKitModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <div className="relative bg-white dark:bg-[#141816] text-[#0D110E] dark:text-[#FAF8F5] w-full max-w-md rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 overflow-hidden z-10 animate-scaleUp transition-colors">
            <button
              onClick={() => {
                setIsKitModalOpen(false);
                setKitSubmitted(false);
              }}
              className="absolute top-5 right-5 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white p-1.5 rounded-full hover:bg-[#F3F3EF] dark:hover:bg-white/10 cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!kitSubmitted ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <img
                      src={cataviaLogo}
                      alt="CATAVIA Logo"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = '/logocatavia.png';
                      }}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E85D04]/10 text-[#E85D04] text-[10px] uppercase font-mono tracking-wider font-bold">
                    <Sparkles className="w-3 h-3" />
                    <span>Edición Especial CATAVIA</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#0D110E] dark:text-white font-normal mb-2">
                  Tasting Kit 4 Orígenes
                </h3>
                <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] mb-6 leading-relaxed font-normal">
                  Recibe en primicia la caja con 4 micro-paquetes de degustación (Huila, Sierra Nevada, Nariño y Santander) junto con la guía de cata comparativa en casa.
                </p>

                <form onSubmit={handleKitSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#5A625C] dark:text-[#9DA7A1] font-mono font-bold mb-1">
                      Tu Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="nombre@correo.com"
                      className="w-full px-4 py-3 bg-[#FAF9F6] dark:bg-[#1A201D] border border-black/[0.1] dark:border-white/15 rounded-2xl text-xs sm:text-sm text-[#0D110E] dark:text-white focus:outline-hidden focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition-all font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-full shadow-lg glow-orange transition-all cursor-pointer active:scale-95"
                  >
                    Unirme a la lista prioritaria
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-[#0D110E] dark:text-white font-normal mb-2">
                  ¡Estás en la lista prioritaria!
                </h3>
                <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] mb-6 leading-relaxed font-normal">
                  Te avisaremos antes de que se agote la primera producción del Kit de Degustación para Estados Unidos y Canadá.
                </p>
                <button
                  onClick={() => {
                    setIsKitModalOpen(false);
                    setKitSubmitted(false);
                  }}
                  className="px-8 py-2.5 bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] text-xs uppercase tracking-wider font-bold rounded-full cursor-pointer hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Artisan Brewing Guides Modal */}
      <BrewingModal />
    </>
  );
}
