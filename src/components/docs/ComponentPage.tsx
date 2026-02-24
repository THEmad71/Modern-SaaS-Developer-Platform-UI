import { useParams } from 'react-router';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ComponentPreview from '../ComponentPreview';
import CodeBlock from '../CodeBlock';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Input } from '../ui/Input';
import { User, Calendar, BarChart, Zap } from 'lucide-react';
import { GlassmorphismCard } from '../ui/GlassmorphismCard';

const componentData: Record<string, any> = {
  card: {
    name: 'Card',
    category: 'Layout',
    difficulty: 'Beginner',
    lastUpdated: '2026-02-15',
    contributor: 'NeedUI Team',
    description: 'A flexible container component for grouping and displaying content.',
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Component</CardTitle>
          <CardDescription>
            This is a card description that provides additional context about the content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Cards can contain any type of content including text, images, and interactive elements.
          </p>
          <Button variant="default">Learn More</Button>
        </CardContent>
      </Card>
    ),
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';

export default function Example() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Component</CardTitle>
        <CardDescription>
          This is a card description.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">
          Cards can contain any type of content.
        </p>
        <Button variant="default">Learn More</Button>
      </CardContent>
    </Card>
  );
}`,
    installation: `npm install class-variance-authority clsx tailwind-merge`,
  },
  input: {
    name: 'Input',
    category: 'Forms',
    difficulty: 'Beginner',
    lastUpdated: '2026-02-20',
    contributor: 'Sarah Chen',
    description: 'A styled input component with label support for building forms.',
    preview: (
      <div className="w-[350px] space-y-4">
        <Input label="Email Address" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Button variant="default" className="w-full">Sign In</Button>
      </div>
    ),
    code: `import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';

export default function Example() {
  return (
    <div className="space-y-4">
      <Input 
        label="Email Address" 
        type="email" 
        placeholder="you@example.com" 
      />
      <Input 
        label="Password" 
        type="password" 
        placeholder="••••••••" 
      />
      <Button variant="default" className="w-full">
        Sign In
      </Button>
    </div>
  );
}`,
    installation: `npm install react`,
  },
  'stats-card': {
    name: 'Stats Card',
    category: 'Data Display',
    difficulty: 'Intermediate',
    lastUpdated: '2026-02-18',
    contributor: 'Alex Kumar',
    description: 'Display key metrics and statistics in an organized card format.',
    preview: (
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: <User className="w-5 h-5" />, label: 'Total Users', value: '2,543' },
          { icon: <Calendar className="w-5 h-5" />, label: 'Events', value: '127' },
          { icon: <BarChart className="w-5 h-5" />, label: 'Growth', value: '+12.5%' },
        ].map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-semibold text-black dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    code: `import { Card, CardContent } from './components/ui/Card';
import { User, Calendar, BarChart } from 'lucide-react';

const stats = [
  { icon: <User />, label: 'Total Users', value: '2,543' },
  { icon: <Calendar />, label: 'Events', value: '127' },
  { icon: <BarChart />, label: 'Growth', value: '+12.5%' },
];

export default function Example() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-semibold">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-600">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`,
    installation: `npm install lucide-react`,
  },
  'feature-card': {
    name: 'Feature Card',
    category: 'Data Display',
    difficulty: 'Intermediate',
    lastUpdated: '2026-02-22',
    contributor: 'NeedUI Team',
    description: 'Premium dark card with glassmorphism effect and soft neon glow. Perfect for modern AI and SaaS interfaces.',
    darkPreview: true,
    preview: (
      <div className="bg-black p-12 rounded-lg relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="relative flex justify-center">
          <GlassmorphismCard
            icon={Zap}
            title="Web Searcher"
            description="Automatically browses the web and summarizes the latest information for you."
            className="w-[340px]"
          />
        </div>
      </div>
    ),
    code: `import { GlassmorphismCard } from './components/ui/GlassmorphismCard';
import { Zap } from 'lucide-react';

export default function Example() {
  return (
    <GlassmorphismCard
      icon={Zap}
      title="Web Searcher"
      description="Automatically browses the web and summarizes the latest information for you."
    />
  );
}`,
    installation: `npm install lucide-react`,
    componentCode: `import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface GlassmorphismCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function GlassmorphismCard({ 
  icon: Icon, 
  title, 
  description, 
  className = '' 
}: GlassmorphismCardProps) {
  return (
    <div className={\`group relative \${className}\`}>
      {/* Glow Effect - Outside the card */}
      <div className="absolute -inset-[2px] bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-green-500/20 rounded-[18px] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Gradient lighting from bottom-right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-500/10 via-green-500/5 to-transparent rounded-[16px] blur-2xl" />
      
      {/* Card */}
      <div className="relative rounded-2xl p-6 bg-[#0f0f12]/90 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}`,
  },
};

export default function ComponentPage() {
  const { componentId } = useParams();
  const component = componentData[componentId || 'card'] || componentData.card;

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className={`max-w-6xl mx-auto ${component.darkPreview ? 'dark-section' : ''}`}>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                {component.name}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {component.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-6 mb-8 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <div className="text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Category:</span>{' '}
                <span className="text-black dark:text-white font-medium">{component.category}</span>
              </div>
              <div className="text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Difficulty:</span>{' '}
                <span className="text-black dark:text-white font-medium">{component.difficulty}</span>
              </div>
              <div className="text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">Updated:</span>{' '}
                <span className="text-black dark:text-white font-medium">{component.lastUpdated}</span>
              </div>
              <div className="text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">By:</span>{' '}
                <span className="text-black dark:text-white font-medium">{component.contributor}</span>
              </div>
            </div>

            {/* Preview and Code */}
            <div className="mb-12">
              <ComponentPreview
                preview={component.preview}
                code={component.code}
              />
            </div>

            {/* Installation */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Installation
              </h2>
              <CodeBlock code={component.installation} language="bash" />
            </div>

            {/* Full Component Code (if available) */}
            {component.componentCode && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  Component Code
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Copy and paste this into your project at <code className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-sm">components/ui/GlassmorphismCard.tsx</code>
                </p>
                <CodeBlock code={component.componentCode} language="tsx" />
              </div>
            )}

            {/* Usage */}
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Usage Example
              </h2>
              <CodeBlock code={component.code} language="tsx" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}