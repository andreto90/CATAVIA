import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath = '/' | '/colombia' | '/costa-rica' | '/panama' | '/brasil' | '/turquia';

interface NavigationContextType {
  currentPath: RoutePath;
  navigate: (path: string) => void;
  isWorldExplorer: boolean;
  isColombia: boolean;
  activeCountrySlug: string | null;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function normalizePath(rawPath: string): RoutePath {
  let clean = rawPath.trim();
  
  // Support hash routing fallback if running inside preview iframe or hash mode
  if (clean.startsWith('#/')) {
    clean = clean.substring(1);
  } else if (clean.startsWith('#')) {
    clean = clean.substring(1);
  }

  // Remove query strings
  if (clean.includes('?')) {
    clean = clean.split('?')[0];
  }

  if (clean === '/colombia' || clean === 'colombia') return '/colombia';
  if (clean === '/costa-rica' || clean === 'costa-rica') return '/costa-rica';
  if (clean === '/panama' || clean === 'panama') return '/panama';
  if (clean === '/brasil' || clean === 'brasil' || clean === '/brazil') return '/brasil';
  if (clean === '/turquia' || clean === 'turquia' || clean === '/turkey') return '/turquia';
  
  return '/';
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window === 'undefined') return '/';
    // Check hash first if present (common in iframes)
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return normalizePath(window.location.hash);
    }
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(normalizePath(window.location.hash));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    // If it's an internal hash anchor on the current page (e.g. #origen)
    if (to.startsWith('#') && !to.startsWith('#/')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetRoute = normalizePath(to);
    
    // Update window history
    try {
      window.history.pushState({}, '', targetRoute);
    } catch {
      // Fallback for iframe sandboxes
      window.location.hash = '#' + targetRoute;
    }

    setCurrentPath(targetRoute);

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWorldExplorer = currentPath === '/';
  const isColombia = currentPath === '/colombia';
  const activeCountrySlug =
    currentPath === '/colombia'
      ? 'colombia'
      : currentPath === '/costa-rica'
      ? 'costa-rica'
      : currentPath === '/panama'
      ? 'panama'
      : currentPath === '/brasil'
      ? 'brasil'
      : currentPath === '/turquia'
      ? 'turquia'
      : null;

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isWorldExplorer,
        isColombia,
        activeCountrySlug,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
