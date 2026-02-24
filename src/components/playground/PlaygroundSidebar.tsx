import { useState } from 'react';
import { ChevronDown, ChevronRight, Square, Type, CreditCard, AlertCircle, Sparkles } from 'lucide-react';

interface ComponentCategory {
  title: string;
  items: {
    type: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const categories: ComponentCategory[] = [
  {
    title: 'Layout',
    items: [
      { type: 'card', label: 'Card', icon: <CreditCard className="w-4 h-4" /> },
      { type: 'container', label: 'Container', icon: <Square className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Forms',
    items: [
      { type: 'input', label: 'Input', icon: <Type className="w-4 h-4" /> },
      { type: 'button', label: 'Button', icon: <Square className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { type: 'text', label: 'Text', icon: <Type className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { type: 'alert', label: 'Alert', icon: <AlertCircle className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { type: 'hero', label: 'Hero', icon: <Sparkles className="w-4 h-4" /> },
    ],
  },
];

interface PlaygroundSidebarProps {
  onAddComponent: (type: string) => void;
}

export default function PlaygroundSidebar({ onAddComponent }: PlaygroundSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Layout: true,
    Forms: true,
    'Data Display': true,
    Feedback: true,
    Marketing: true,
  });

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-y-auto">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
          Components
        </h3>
        
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.title}>
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span>{category.title}</span>
                {expandedCategories[category.title] ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>
              
              {expandedCategories[category.title] && (
                <div className="mt-1 space-y-1">
                  {category.items.map((item) => (
                    <button
                      key={item.type}
                      onClick={() => onAddComponent(item.type)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                      draggable
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
