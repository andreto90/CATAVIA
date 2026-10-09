import React, { createContext, useContext, useState, useEffect } from 'react';

export type CountryCode = 'US' | 'CA';
export type CurrencyCode = 'USD' | 'CAD';

export interface CartItem {
  id: string;
  name: string;
  region: string;
  size: string; // "12oz (340g)" or "2.2lb (1kg)"
  grind: string; // "whole" | "drip" | "french" | "espresso"
  price: number;
  quantity: number;
  image: string;
}

interface ShopContextType {
  country: CountryCode;
  currency: CurrencyCode;
  setCountry: (country: CountryCode) => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  isKitModalOpen: boolean;
  setIsKitModalOpen: (open: boolean) => void;
  isBrewingModalOpen: boolean;
  setIsBrewingModalOpen: (open: boolean) => void;
  selectedBrewMethod: 'v60' | 'french' | 'chemex';
  selectedBrewCoffee: string;
  openBrewingGuide: (method?: 'v60' | 'french' | 'chemex', coffeeId?: string) => void;
  formatPrice: (amount: number) => string;
  trackingOrderId: string;
  setTrackingOrderId: (id: string) => void;
  trackOrder: (orderId: string) => void;
  isTrackingModalOpen: boolean;
  setIsTrackingModalOpen: (open: boolean) => void;
  trackingIdNumber: string;
  setTrackingIdNumber: (id: string) => void;
  trackingPhone: string;
  setTrackingPhone: (phone: string) => void;
  openTrackingModal: (idNumber?: string, phone?: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountryState] = useState<CountryCode>(() => {
    return (localStorage.getItem('coffee_country') as CountryCode) || 'US';
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isKitModalOpen, setIsKitModalOpen] = useState(false);
  const [isBrewingModalOpen, setIsBrewingModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState<'v60' | 'french' | 'chemex'>('v60');
  const [selectedBrewCoffee, setSelectedBrewCoffee] = useState<string>('huila-geisha');
  const [trackingOrderId, setTrackingOrderId] = useState<string>(() => {
    return localStorage.getItem('coffee_last_order') || 'CTV-9873660';
  });
  const [trackingIdNumber, setTrackingIdNumber] = useState<string>('');
  const [trackingPhone, setTrackingPhone] = useState<string>('');

  const openTrackingModal = (idNumber = '9873660', phone = '3217013200') => {
    setTrackingIdNumber(idNumber);
    setTrackingPhone(phone);
    setIsTrackingModalOpen(true);
  };

  const trackOrder = (orderId: string) => {
    const cleanId = orderId.trim().toUpperCase();
    if (cleanId) {
      setTrackingOrderId(cleanId);
      localStorage.setItem('coffee_last_order', cleanId);
    }
    setTrackingIdNumber('9873660');
    setTrackingPhone('3217013200');
    setIsCheckoutModalOpen(false);
    setIsTrackingModalOpen(true);
  };

  const openBrewingGuide = (method: 'v60' | 'french' | 'chemex' = 'v60', coffeeId = 'huila-geisha') => {
    setSelectedBrewMethod(method);
    setSelectedBrewCoffee(coffeeId);
    setIsBrewingModalOpen(true);
  };

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('coffee_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    // Default demo item so the cart feels alive
    return [
      {
        id: 'huila-geisha',
        name: 'Huila Geisha Reserve',
        region: 'San Agustín, Huila',
        size: '12oz (340g)',
        grind: 'Whole Bean',
        price: country === 'US' ? 28.50 : 38.50,
        quantity: 1,
        image: '/images/premium_coffee_package_1791438608891.jpg'
      }
    ];
  });

  const currency: CurrencyCode = country === 'US' ? 'USD' : 'CAD';

  const setCountry = (newCountry: CountryCode) => {
    setCountryState(newCountry);
    localStorage.setItem('coffee_country', newCountry);
  };

  useEffect(() => {
    localStorage.setItem('coffee_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        i => i.id === item.id && i.size === item.size && i.grind === item.grind
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [...prev, { ...item, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, idx) => idx !== index));
  };

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    setCart(prev => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat(country === 'US' ? 'en-US' : 'en-CA', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <ShopContext.Provider
      value={{
        country,
        currency,
        setCountry,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        isKitModalOpen,
        setIsKitModalOpen,
        isBrewingModalOpen,
        setIsBrewingModalOpen,
        selectedBrewMethod,
        selectedBrewCoffee,
        openBrewingGuide,
        formatPrice,
        trackingOrderId,
        setTrackingOrderId,
        trackOrder,
        isTrackingModalOpen,
        setIsTrackingModalOpen,
        trackingIdNumber,
        setTrackingIdNumber,
        trackingPhone,
        setTrackingPhone,
        openTrackingModal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
