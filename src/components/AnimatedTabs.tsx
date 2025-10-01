
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import useEmblaCarousel, { type EmblaCarouselType } from 'embla-carousel-react';

type Tab = {
  id: string;
  label: React.ReactNode;
};

type AnimatedTabsProps = {
  tabs: Tab[];
  initialTab?: string;
  onTabChange?: (tabId: string) => void;
  children: React.ReactNode;
  className?: string;
};

export const AnimatedTabs = ({
  tabs,
  initialTab,
  onTabChange,
  children,
  className,
}: AnimatedTabsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'keepSnaps',
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.7,
    startIndex: initialTab ? tabs.findIndex(t => t.id === initialTab) : 0,
  });

  const [activeTab, setActiveTab] = React.useState(initialTab || tabs[0].id);

  const handleSetTab = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      const newActiveTab = tabs[index].id;
      setActiveTab(newActiveTab);
      onTabChange?.(newActiveTab);
    },
    [emblaApi, onTabChange, tabs]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = (emblaApi: EmblaCarouselType) => {
      const newActiveTab = tabs[emblaApi.selectedScrollSnap()].id;
      setActiveTab(newActiveTab);
      onTabChange?.(newActiveTab);
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, tabs, onTabChange]);

  return (
    <div className={cn('w-full', className)}>
      <div className="relative grid grid-cols-4 bg-transparent p-0">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleSetTab(index)}
            className={cn(
              'relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              activeTab === tab.id
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-0 rounded-full bg-primary"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="overflow-hidden mt-2" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div className="relative flex-shrink-0 w-full">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AnimatedTabsContent = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};
