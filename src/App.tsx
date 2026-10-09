import React from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ShopProvider } from './context/ShopContext.tsx';
import { NavigationProvider, useNavigation } from './context/NavigationContext.tsx';
import Navbar from './components/Navbar.tsx';
import WorldExplorer from './components/WorldExplorer.tsx';
import CountryPage from './components/CountryPage.tsx';
import Footer from './components/Footer.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import Modals from './components/Modals.tsx';
import FloatingThemeWidget from './components/FloatingThemeWidget.tsx';

function AppContent() {
  const { currentPath } = useNavigation();

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0E0D] text-[#141816] dark:text-[#FAF8F5] flex flex-col font-sans selection:bg-[#E85D04] selection:text-white transition-colors duration-300">
      {/* Sticky 3-Zone International Navigation */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentPath === '/colombia' ? (
          <CountryPage countrySlug="colombia" />
        ) : currentPath === '/costa-rica' ? (
          <CountryPage countrySlug="costa-rica" />
        ) : currentPath === '/panama' ? (
          <CountryPage countrySlug="panama" />
        ) : currentPath === '/brasil' ? (
          <CountryPage countrySlug="brasil" />
        ) : currentPath === '/turquia' ? (
          <CountryPage countrySlug="turquia" />
        ) : (
          <WorldExplorer />
        )}
      </main>

      {/* Global Slide-Over Shopping Bag */}
      <CartDrawer />

      {/* Interactive Checkouts & Waitlist Modals */}
      <Modals />

      {/* Refined Minimalist Luxury Footer */}
      <Footer />

      {/* Floating Theme Mode Switcher */}
      <FloatingThemeWidget />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ShopProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </ShopProvider>
    </ThemeProvider>
  );
}
