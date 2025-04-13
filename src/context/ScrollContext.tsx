import React, { createContext, useContext, useRef, ReactNode } from 'react';

type ScrollContextType = {
  flashSalesRef: React.RefObject<HTMLDivElement | null>;
  categoriesRef: React.RefObject<HTMLDivElement | null>;
  scrollLeft: (which: 'flash' | 'categories') => void;
  scrollRight: (which: 'flash' | 'categories') => void;
};

// create context with correct types
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// export hook to use context easily
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used inside ScrollProvider');
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export const ScrollProvider = ({ children }: Props) => {
  const flashSalesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (which: 'flash' | 'categories') => {
    const ref = which === 'flash' ? flashSalesRef : categoriesRef;
    if (ref.current) ref.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = (which: 'flash' | 'categories') => {
    const ref = which === 'flash' ? flashSalesRef : categoriesRef;
    if (ref.current) ref.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ flashSalesRef, categoriesRef, scrollLeft, scrollRight }}>
      {children}
    </ScrollContext.Provider>
  );
};
