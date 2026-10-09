import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useShop } from '../context/ShopContext.tsx';
import cataviaLogo from '../assets/images/logocatavia.png';
import {
  TrackedOrder,
  getOrderByCredentials,
  cleanDigits,
  DESIGNATED_USER_ORDER
} from '../data/orderData.ts';
import {
  User,
  Phone,
  Plane,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Flame,
  ShieldCheck,
  Thermometer,
  Coffee,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function OrderStatus() {
  const { t } = useTranslation();
  const {
    country,
    isTrackingModalOpen,
    setIsTrackingModalOpen,
    trackingIdNumber,
    setTrackingIdNumber,
    trackingPhone,
    setTrackingPhone,
    openBrewingGuide
  } = useShop();

  // The tracking option on the landing page is COLLAPSED by default
  const [isSectionCollapsed, setIsSectionCollapsed] = useState(true);

  // Inputs start clean/empty so the modal NEVER opens automatically on mount
  const [idInput, setIdInput] = useState(trackingIdNumber || '');
  const [phoneInput, setPhoneInput] = useState(trackingPhone || '');

  // Flag to know whether user is actively typing or clicked demo
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [modalDismissed, setModalDismissed] = useState(false);

  // Current order details for the modal
  const [currentOrder, setCurrentOrder] = useState<TrackedOrder>(() =>
    getOrderByCredentials(idInput || '9873660', phoneInput || '3217013200', country)
  );

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [simulatedFeedback, setSimulatedFeedback] = useState<string | null>(null);

  // Sync inputs with context if changed externally
  useEffect(() => {
    if (trackingIdNumber && trackingIdNumber !== idInput) {
      setIdInput(trackingIdNumber);
    }
    if (trackingPhone && trackingPhone !== phoneInput) {
      setPhoneInput(trackingPhone);
    }
  }, [trackingIdNumber, trackingPhone]);

  // Update order data based on inputs
  useEffect(() => {
    if (idInput || phoneInput) {
      setCurrentOrder(getOrderByCredentials(idInput, phoneInput, country));
    }
  }, [idInput, phoneInput, country]);

  // "Solo digitando los datos el sistema debe mostrar todo lo relacionado con el envio"
  // When user actively types 9873660 as ID and 3217013200 as CEL, automatically open the modal!
  useEffect(() => {
    if (!userHasInteracted || modalDismissed || isTrackingModalOpen) return;

    const cleanId = cleanDigits(idInput);
    const cleanTel = cleanDigits(phoneInput);

    if (cleanId === '9873660' && cleanTel === '3217013200') {
      setTrackingIdNumber(cleanId);
      setTrackingPhone(cleanTel);
      setCurrentOrder(getOrderByCredentials(cleanId, cleanTel, country));
      setIsTrackingModalOpen(true);
    }
  }, [
    idInput,
    phoneInput,
    userHasInteracted,
    modalDismissed,
    isTrackingModalOpen,
    country,
    setTrackingIdNumber,
    setTrackingPhone,
    setIsTrackingModalOpen
  ]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserHasInteracted(true);
    setModalDismissed(false);
    setIdInput(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserHasInteracted(true);
    setModalDismissed(false);
    setPhoneInput(e.target.value);
  };

  const handleManualSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setUserHasInteracted(true);
    setModalDismissed(false);

    const cleanId = cleanDigits(idInput) || '9873660';
    const cleanTel = cleanDigits(phoneInput) || '3217013200';

    setIdInput(cleanId);
    setPhoneInput(cleanTel);
    setTrackingIdNumber(cleanId);
    setTrackingPhone(cleanTel);
    setCurrentOrder(getOrderByCredentials(cleanId, cleanTel, country));
    setIsTrackingModalOpen(true);
  };

  const handleUseQuickDemo = () => {
    setUserHasInteracted(true);
    setModalDismissed(false);
    setIdInput('9873660');
    setPhoneInput('3217013200');
    setTrackingIdNumber('9873660');
    setTrackingPhone('3217013200');
    setCurrentOrder(getOrderByCredentials('9873660', '3217013200', country));
    setIsTrackingModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalDismissed(true);
    setIsTrackingModalOpen(false);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setSimulatedFeedback('✓ Sincronizado en tiempo real con la red de carga aérea express CATAVIA.');
      setTimeout(() => setSimulatedFeedback(null), 4000);
    }, 700);
  };

  const handleSimulateNextStep = () => {
    setCurrentOrder(prev => {
      if (prev.currentStepIndex >= 5) {
        setSimulatedFeedback('¡El café ya fue entregado en tu puerta! Disfruta tu taza de café colombiano.');
        setTimeout(() => setSimulatedFeedback(null), 4000);
        return prev;
      }
      const nextIndex = prev.currentStepIndex + 1;
      const updatedStages = prev.stages.map((stage, idx) => ({
        ...stage,
        status: (idx < nextIndex ? 'completed' : idx === nextIndex ? 'active' : 'upcoming') as
          | 'completed'
          | 'active'
          | 'upcoming',
        timestamp: idx === nextIndex ? 'En Curso (En Tiempo Real)' : stage.timestamp
      }));

      const newStatus =
        nextIndex === 1
          ? 'packaging'
          : nextIndex === 2
          ? 'transit'
          : nextIndex === 3
          ? 'customs'
          : nextIndex === 4
          ? 'out_for_delivery'
          : 'delivered';

      const newLabel =
        nextIndex === 1
          ? 'Empaque Hermético & Válvula CATAVIA'
          : nextIndex === 2
          ? 'En Vuelo Aéreo Internacional Express'
          : nextIndex === 3
          ? 'En Inspección Aduanera de Destino'
          : nextIndex === 4
          ? 'En Reparto Local Hoy'
          : 'Entregado en Puerta con Éxito';

      const nextOrder: TrackedOrder = {
        ...prev,
        status: newStatus as TrackedOrder['status'],
        statusLabel: newLabel,
        currentStepIndex: nextIndex,
        progressPercent: Math.round(((nextIndex + 0.5) / 6) * 100),
        stages: updatedStages,
        milestones: [
          {
            timestamp: 'Hace un momento',
            location: updatedStages[nextIndex].location,
            description: `Actualización satelital CATAVIA: ${updatedStages[nextIndex].detail}`,
            status: 'active'
          },
          ...prev.milestones
        ]
      };

      setSimulatedFeedback(`⚡ Avance simulado en vivo: "${newLabel}".`);
      setTimeout(() => setSimulatedFeedback(null), 5000);

      return nextOrder;
    });
  };

  const getStepIcon = (index: number, status: 'completed' | 'active' | 'upcoming') => {
    if (status === 'completed') {
      return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
    if (status === 'active') {
      switch (index) {
        case 0:
          return <Flame className="w-5 h-5 text-[#E85D04] animate-pulse" />;
        case 1:
          return <Package className="w-5 h-5 text-[#E85D04] animate-pulse" />;
        case 2:
          return <Plane className="w-5 h-5 text-amber-500 animate-bounce" />;
        case 3:
          return <ShieldCheck className="w-5 h-5 text-amber-500 animate-pulse" />;
        case 4:
          return <Truck className="w-5 h-5 text-teal-500 animate-pulse" />;
        default:
          return <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />;
      }
    }
    return <Clock className="w-5 h-5 text-[#5A625C]/50 dark:text-[#9DA7A1]/40" />;
  };

  const isMatchedCredentials =
    cleanDigits(idInput) === '9873660' && cleanDigits(phoneInput) === '3217013200';

  return (
    <section
      id="rastreo"
      className="py-12 lg:py-16 bg-[#F5F2EB]/40 dark:bg-[#0E1210]/90 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* COLLAPSED OPTION CONTAINER: Kept compact and non-intrusive */}
        <div className="bg-white dark:bg-[#141816] rounded-3xl border border-black/[0.08] dark:border-white/[0.1] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
          {/* Header Bar / Collapsed Trigger */}
          <div
            onClick={() => setIsSectionCollapsed(!isSectionCollapsed)}
            className="p-5 sm:p-7 flex items-center justify-between cursor-pointer hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
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
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#E85D04]">
                    {t('tracking.badge')}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/10 text-[#5A625C] dark:text-[#9DA7A1]">
                    {isSectionCollapsed
                      ? t('tracking.collapsedOptionTitle')
                      : t('tracking.collapseOption')}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0D110E] dark:text-white font-normal leading-snug">
                  {t('tracking.title')}
                </h3>
                <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] font-light mt-0.5">
                  {isSectionCollapsed
                    ? t('tracking.collapsedOptionDesc')
                    : t('tracking.subtitle')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  setIsSectionCollapsed(!isSectionCollapsed);
                }}
                className="px-4 py-2 rounded-full border border-[#E85D04]/30 hover:border-[#E85D04] text-[#E85D04] bg-[#E85D04]/5 hover:bg-[#E85D04] hover:text-white text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>
                  {isSectionCollapsed
                    ? t('tracking.expandOption')
                    : t('tracking.collapseOption')}
                </span>
                {isSectionCollapsed ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronUp className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Form Body (Visible ONLY when expanded) */}
          {!isSectionCollapsed && (
            <div className="p-6 sm:p-8 border-t border-black/[0.06] dark:border-white/[0.08] bg-[#FAF8F5]/50 dark:bg-[#121614] animate-fadeIn">
              {/* Informative Guidance */}
              <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-[#181E1B] border border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-[#5A625C] dark:text-[#9DA7A1]">
                  <Sparkles className="w-4 h-4 text-[#E85D04] shrink-0" />
                  <span>{t('tracking.typingPrompt')}</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#E85D04]/10 text-[#E85D04] font-semibold self-start sm:self-auto shrink-0 border border-[#E85D04]/20">
                  ID: 9873660 · CEL: 3217013200
                </span>
              </div>

              <form onSubmit={handleManualSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: Identification (Cédula: 9873660) */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0D110E] dark:text-white mb-1.5">
                      {t('tracking.idLabel')}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#5A625C] dark:text-[#9DA7A1] absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={idInput}
                        onChange={handleIdChange}
                        placeholder={t('tracking.idPlaceholder')}
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#1A201D] border border-black/15 dark:border-white/15 rounded-2xl text-sm font-mono text-[#0D110E] dark:text-white placeholder:text-[#5A625C]/40 focus:outline-hidden focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Field 2: Phone (Celular: 3217013200) */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0D110E] dark:text-white mb-1.5">
                      {t('tracking.phoneLabel')}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#5A625C] dark:text-[#9DA7A1] absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={phoneInput}
                        onChange={handlePhoneChange}
                        placeholder={t('tracking.phonePlaceholder')}
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#1A201D] border border-black/15 dark:border-white/15 rounded-2xl text-sm font-mono text-[#0D110E] dark:text-white placeholder:text-[#5A625C]/40 focus:outline-hidden focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition-all font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick test autofill bar & Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleUseQuickDemo}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E85D04]/10 hover:bg-[#E85D04]/20 text-[#E85D04] text-xs font-mono font-semibold transition-all cursor-pointer border border-[#E85D04]/20 text-left"
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{t('tracking.testCredentialsBadge')}</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#E85D04] hover:bg-[#DC2F02] text-white text-xs uppercase tracking-wider font-bold rounded-2xl shadow-lg glow-orange transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 shrink-0"
                  >
                    <span>{t('tracking.submitBtn')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Match indicator or ready feedback */}
                {isMatchedCredentials && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      {t('tracking.readyToOpenNotice')}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setModalDismissed(false);
                        setIsTrackingModalOpen(true);
                      }}
                      className="underline font-bold hover:text-emerald-800 dark:hover:text-emerald-200 cursor-pointer"
                    >
                      {t('tracking.openModalBtn')} ➔
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* REAL-TIME TRACKING MODAL (OPENS WITH ID: 9873660 & CEL: 3217013200) */}
      {/* ALL detailed shipping progress is presented exclusively in this modal */}
      {/* ========================================================================= */}
      {isTrackingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop blur */}
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-4xl bg-white dark:bg-[#141816] text-[#0D110E] dark:text-[#FAF8F5] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 sm:p-10 z-10 max-h-[92vh] overflow-y-auto animate-scaleUp transition-colors my-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-[#5A625C] dark:text-[#9DA7A1] hover:text-[#0D110E] dark:hover:text-white p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer transition-colors"
              aria-label={t('tracking.closeBtn')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pb-6 border-b border-black/[0.06] dark:border-white/[0.08] pr-8">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
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
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E85D04]/10 text-[#E85D04] text-[10px] uppercase font-mono font-bold tracking-widest border border-[#E85D04]/20">
                    CATAVIA · Servicio Oficial de Envío Aéreo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase border border-emerald-500/20">
                    {t('tracking.verifiedCustomer')}: C.C. {idInput || '9873660'} · CEL {phoneInput || '3217013200'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0D110E] dark:text-white font-normal">
                    {t('tracking.modalTitle')}
                  </h3>
                  <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] mt-0.5">
                    {t('tracking.modalSubtitle')}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#5A625C] dark:text-[#9DA7A1]">Pedido:</span>
                  <span className="font-mono text-xl font-bold text-[#E85D04] tracking-wider">
                    {currentOrder.orderId}
                  </span>
                  <button
                    onClick={() => handleCopy(currentOrder.orderId, 'modalOrderId')}
                    className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-[#5A625C] dark:text-[#9DA7A1] cursor-pointer"
                    title="Copiar ID de pedido"
                  >
                    {copiedKey === 'modalOrderId' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Live Feedback Toast if simulated */}
            {simulatedFeedback && (
              <div className="my-4 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium flex items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{simulatedFeedback}</span>
                </div>
                <button
                  onClick={() => setSimulatedFeedback(null)}
                  className="text-xs uppercase font-mono hover:underline cursor-pointer"
                >
                  OK
                </button>
              </div>
            )}

            {/* Status & Actions Bar */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04] animate-ping" />
                <span className="font-serif text-lg font-medium text-[#0D110E] dark:text-white">
                  {currentOrder.statusLabel}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleSimulateNextStep}
                  className="px-3.5 py-1.5 bg-[#E85D04]/10 hover:bg-[#E85D04]/20 border border-[#E85D04]/30 text-[#E85D04] text-xs font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('tracking.simulateProgress')}</span>
                </button>

                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="p-1.5 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-[#5A625C] dark:text-[#9DA7A1] cursor-pointer"
                  title={t('tracking.refreshStatus')}
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#E85D04]' : ''}`} />
                </button>
              </div>
            </div>

            {/* Metrics Quick Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#5A625C] dark:text-[#9DA7A1] block mb-1">
                  {t('tracking.estimatedArrival')}
                </span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#0D110E] dark:text-white block">
                  {currentOrder.estimatedDelivery}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#5A625C] dark:text-[#9DA7A1] block mb-1">
                  {t('tracking.carrierLabel')}
                </span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#0D110E] dark:text-white block truncate">
                  {currentOrder.carrier}
                </span>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] font-mono text-[#5A625C] dark:text-[#9DA7A1]">
                  <span>Guía:</span>
                  <span className="font-bold text-[#0D110E] dark:text-white">{currentOrder.trackingNumber}</span>
                  <button
                    onClick={() => handleCopy(currentOrder.trackingNumber, 'modalWaybill')}
                    className="p-0.5 hover:text-[#E85D04] cursor-pointer"
                  >
                    {copiedKey === 'modalWaybill' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#5A625C] dark:text-[#9DA7A1] block mb-1">
                  {t('tracking.routeLabel')}
                </span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#0D110E] dark:text-white block">
                  Colombia ➔ {currentOrder.destination.countryCode === 'US' ? 'EE. UU.' : 'Canadá'}
                </span>
                <span className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-[#E85D04] shrink-0" />
                  <span className="truncate">{currentOrder.destination.city}, {currentOrder.destination.stateOrProv}</span>
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#5A625C] dark:text-[#9DA7A1] block mb-1">
                  {t('tracking.freshnessLabel')}
                </span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#E85D04] block">
                  {currentOrder.coffee.cuppingScore} SCA Pts
                </span>
                <span className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] flex items-center gap-1 mt-0.5">
                  <Thermometer className="w-3 h-3 text-emerald-500" />
                  <span>Válvula & Cadena Térmica</span>
                </span>
              </div>
            </div>

            {/* Stepper (The 6 Journey Stations) */}
            <div className="my-8">
              <h4 className="font-serif text-xl font-normal text-[#0D110E] dark:text-white mb-4">
                Línea de Tiempo del Despacho Puerta a Puerta:
              </h4>

              <div className="space-y-4">
                {currentOrder.stages.map((stage, idx) => {
                  const isCompleted = stage.status === 'completed';
                  const isActive = stage.status === 'active';

                  return (
                    <div
                      key={stage.id}
                      className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-[#FAF6F0] dark:bg-[#1E2521] border border-[#E85D04]/30 shadow-xs'
                          : isCompleted
                          ? 'border border-black/[0.04] dark:border-white/[0.04]'
                          : 'opacity-50 border border-black/[0.02] dark:border-white/[0.02]'
                      }`}
                    >
                      <div className="shrink-0 flex items-center justify-center">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isCompleted
                              ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                              : isActive
                              ? 'bg-[#E85D04] text-white shadow-md glow-orange'
                              : 'bg-black/5 dark:bg-white/5 text-[#5A625C]'
                          }`}
                        >
                          {getStepIcon(idx, stage.status)}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h5
                            className={`font-serif text-base font-medium ${
                              isActive
                                ? 'text-[#E85D04]'
                                : isCompleted
                                ? 'text-[#0D110E] dark:text-white'
                                : 'text-[#5A625C] dark:text-[#9DA7A1]'
                            }`}
                          >
                            0{stage.stepNumber}. {stage.title}
                          </h5>
                          {stage.timestamp && (
                            <span className="text-[10px] font-mono text-[#5A625C] dark:text-[#9DA7A1] bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full self-start sm:self-auto">
                              {stage.timestamp}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#3A403C] dark:text-[#C5CEC8] font-light leading-relaxed">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coffee Package & Chronological scan log */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
              {/* Coffee Item */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-[#E85D04]" />
                  <span className="text-xs font-mono uppercase font-bold text-[#0D110E] dark:text-white">
                    {t('tracking.packageContentTitle')}
                  </span>
                </div>
                <h5 className="font-serif text-lg font-medium text-[#0D110E] dark:text-white mb-1">
                  {currentOrder.coffee.name}
                </h5>
                <p className="text-xs text-[#5A625C] dark:text-[#9DA7A1] mb-3">
                  {currentOrder.coffee.size} · {currentOrder.coffee.grind} (x{currentOrder.coffee.quantity})
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {currentOrder.coffee.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-[10px] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleCloseModal();
                    openBrewingGuide('v60', currentOrder.coffee.id);
                  }}
                  className="w-full py-2.5 bg-[#0D110E] dark:bg-white text-white dark:text-[#0D110E] hover:bg-[#E85D04] dark:hover:bg-[#E85D04] dark:hover:text-white rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>{t('tracking.brewingGuideBtn')}</span>
                </button>
              </div>

              {/* Scan Log */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A201D] border border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#E85D04]" />
                  <span className="text-xs font-mono uppercase font-bold text-[#0D110E] dark:text-white">
                    {t('tracking.scanHistoryTitle')}
                  </span>
                </div>
                <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
                  {currentOrder.milestones.map((m, idx) => (
                    <div key={idx} className="text-xs border-b border-black/[0.04] dark:border-white/[0.04] pb-2 last:border-0 last:pb-0">
                      <div className="flex justify-between font-mono text-[11px] font-bold text-[#0D110E] dark:text-white">
                        <span>{m.timestamp}</span>
                        <span className="text-[10px] opacity-70 font-normal">{m.location}</span>
                      </div>
                      <p className="text-[11px] text-[#5A625C] dark:text-[#9DA7A1] mt-0.5">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#5A625C] dark:text-[#9DA7A1]">
                {t('tracking.modalNotice')}
              </span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-6 py-2.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#0D110E] dark:text-white rounded-full text-xs font-mono uppercase font-bold transition-colors cursor-pointer"
              >
                {t('tracking.closeBtn')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
