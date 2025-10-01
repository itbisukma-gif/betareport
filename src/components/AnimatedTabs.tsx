
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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

type AnimatedTabsContextType = {
  activeTab: string;
};

const AnimatedTabsContext = React.createContext<AnimatedTabsContextType | null>(null);

export const AnimatedTabs = ({
  tabs,
  initialTab,
  onTabChange,
  children,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(initialTab || tabs[0].id);

  const handleSetTab = (id: string) => {
    setActiveTab(id);
    onTabChange?.(id);
  };

  const content = React.useMemo(() => {
    return React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) && child.props.value === activeTab
    );
  }, [children, activeTab]);

  return (
    <AnimatedTabsContext.Provider value={{ activeTab }}>
      <div className={className}>
        <div className="relative grid grid-cols-4 bg-transparent p-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSetTab(tab.id)}
              className={cn(
                'relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                activeTab === tab.id ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedTabsContext.Provider>
  );
};

export const AnimatedTabsContent = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  // This component doesn't render anything itself.
  // It's just a data container for the AnimatedTabs component.
  return <>{children}</>;
};

AnimatedTabs.Content = AnimatedTabsContent;
