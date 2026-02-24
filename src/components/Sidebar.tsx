import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarSection {
  title: string;
  items?: SidebarItem[];
  collapsible?: boolean;
  subcategories?: {
    title: string;
    items: SidebarItem[];
  }[];
}

const sections: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', path: '/' },
      { label: 'Installation', path: '/installation' },
    ],
  },
  {
    title: 'Components',
    collapsible: true,
    subcategories: [
      {
        title: 'Layout',
        items: [
          { label: 'Card', path: '/components/card' },
          { label: 'Container', path: '/components/container' },
          { label: 'Grid', path: '/components/grid' },
        ],
      },
      {
        title: 'Navigation',
        items: [
          { label: 'Tabs', path: '/components/tabs' },
          { label: 'Breadcrumb', path: '/components/breadcrumb' },
          { label: 'Pagination', path: '/components/pagination' },
        ],
      },
      {
        title: 'Forms',
        items: [
          { label: 'Input', path: '/components/input' },
          { label: 'Textarea', path: '/components/textarea' },
          { label: 'Select', path: '/components/select' },
          { label: 'Checkbox', path: '/components/checkbox' },
          { label: 'Radio', path: '/components/radio' },
        ],
      },
      {
        title: 'Data Display',
        items: [
          { label: 'Table', path: '/components/table' },
          { label: 'Stats Card', path: '/components/stats-card' },
          { label: 'Feature Card', path: '/components/feature-card' },
          { label: 'Badge', path: '/components/badge' },
          { label: 'Avatar', path: '/components/avatar' },
        ],
      },
      {
        title: 'Feedback',
        items: [
          { label: 'Alert', path: '/components/alert' },
          { label: 'Toast', path: '/components/toast' },
          { label: 'Progress', path: '/components/progress' },
          { label: 'Spinner', path: '/components/spinner' },
        ],
      },
      {
        title: 'Marketing',
        items: [
          { label: 'Hero Section', path: '/components/hero' },
          { label: 'Pricing Card', path: '/components/pricing' },
          { label: 'Testimonial', path: '/components/testimonial' },
          { label: 'CTA Banner', path: '/components/cta' },
        ],
      },
    ],
  },
  {
    title: 'Playground',
    items: [
      { label: 'Visual Builder', path: '/playground' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'Browse', path: '/community' },
      { label: 'Submit', path: '/community/submit' },
    ],
  },
  {
    title: 'Studio',
    items: [
      { label: 'Work', path: '/studio' },
      { label: 'Order', path: '/studio/order' },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    Components: true,
  });
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Layout: true,
    Navigation: true,
    Forms: true,
    'Data Display': true,
    Feedback: true,
    Marketing: true,
  });

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-[280px] border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="p-6">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.collapsible ? (
              <>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                >
                  <span>{section.title}</span>
                  {expandedSections[section.title] ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>
                {expandedSections[section.title] && section.subcategories && (
                  <div className="space-y-4">
                    {section.subcategories.map((category, catIdx) => (
                      <div key={catIdx}>
                        <button
                          onClick={() => toggleCategory(category.title)}
                          className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <span>{category.title}</span>
                          {expandedCategories[category.title] ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          )}
                        </button>
                        {expandedCategories[category.title] && (
                          <div className="mt-1 space-y-0.5 ml-3">
                            {category.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                                  location.pathname === item.path
                                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-950'
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-0.5">
                  {section.items?.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                          : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-950'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}