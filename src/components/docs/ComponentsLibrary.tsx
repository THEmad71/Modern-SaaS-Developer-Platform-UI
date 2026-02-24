import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Search } from 'lucide-react';

const categories = ['All', 'Layout', 'Navigation', 'Forms', 'Data Display', 'Feedback', 'Marketing'];

const components = [
  // Layout
  { id: 'card', name: 'Card', category: 'Layout', description: 'Flexible container for content grouping' },
  { id: 'container', name: 'Container', category: 'Layout', description: 'Responsive container with max-width' },
  { id: 'grid', name: 'Grid', category: 'Layout', description: 'Responsive grid layout system' },
  
  // Navigation
  { id: 'tabs', name: 'Tabs', category: 'Navigation', description: 'Tabbed navigation interface' },
  { id: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Hierarchical navigation trail' },
  { id: 'pagination', name: 'Pagination', category: 'Navigation', description: 'Page navigation controls' },
  
  // Forms
  { id: 'input', name: 'Input', category: 'Forms', description: 'Text input with label support' },
  { id: 'textarea', name: 'Textarea', category: 'Forms', description: 'Multi-line text input field' },
  { id: 'select', name: 'Select', category: 'Forms', description: 'Dropdown selection component' },
  { id: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Boolean input with custom styling' },
  { id: 'radio', name: 'Radio', category: 'Forms', description: 'Radio button group component' },
  
  // Data Display
  { id: 'table', name: 'Table', category: 'Data Display', description: 'Responsive data table' },
  { id: 'stats-card', name: 'Stats Card', category: 'Data Display', description: 'Display key metrics and statistics' },
  { id: 'feature-card', name: 'Feature Card', category: 'Data Display', description: 'Premium glassmorphism card with neon glow' },
  { id: 'badge', name: 'Badge', category: 'Data Display', description: 'Small status indicator' },
  { id: 'avatar', name: 'Avatar', category: 'Data Display', description: 'User profile image component' },
  
  // Feedback
  { id: 'alert', name: 'Alert', category: 'Feedback', description: 'Contextual feedback messages' },
  { id: 'toast', name: 'Toast', category: 'Feedback', description: 'Temporary notification popup' },
  { id: 'progress', name: 'Progress', category: 'Feedback', description: 'Progress bar indicator' },
  { id: 'spinner', name: 'Spinner', category: 'Feedback', description: 'Loading spinner animation' },
  
  // Marketing
  { id: 'hero', name: 'Hero Section', category: 'Marketing', description: 'Landing page hero with CTA' },
  { id: 'pricing', name: 'Pricing Card', category: 'Marketing', description: 'Pricing plan display card' },
  { id: 'testimonial', name: 'Testimonial', category: 'Marketing', description: 'Customer testimonial card' },
  { id: 'cta', name: 'CTA Banner', category: 'Marketing', description: 'Call-to-action banner section' },
];

export default function ComponentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = components.filter((component) => {
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Components Library
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Browse our collection of {components.length} production-ready components organized by category.
              </p>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="mb-8 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex gap-1 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap relative ${
                      selectedCategory === category
                        ? 'text-black dark:text-white'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {category}
                    {selectedCategory === category && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
              Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-3 gap-6">
              {filteredComponents.map((component) => (
                <Link key={component.id} to={`/components/${component.id}`}>
                  <Card className="h-full hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer group">
                    <CardHeader>
                      {/* Preview Area - Placeholder for now */}
                      <div className="w-full h-32 mb-4 rounded-md bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                        <span className="text-xs text-neutral-400">Preview</span>
                      </div>
                      
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base">
                          {component.name}
                        </CardTitle>
                      </div>
                      
                      <span className="inline-block px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 mb-3">
                        {component.category}
                      </span>
                      
                      <CardDescription className="text-sm">
                        {component.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredComponents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                  No components found matching your criteria.
                </p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
