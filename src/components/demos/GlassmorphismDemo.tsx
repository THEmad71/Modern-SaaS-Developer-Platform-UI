import Navbar from '../Navbar';
import { GlassmorphismCard } from '../ui/GlassmorphismCard';
import { Zap, Brain, Search, Sparkles, Database, Globe } from 'lucide-react';
import CodeBlock from '../CodeBlock';

export default function GlassmorphismDemo() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Glassmorphism Feature Cards
          </h1>
          <p className="text-lg text-neutral-400">
            Premium dark cards with soft neon glows and glass effects.
          </p>
        </div>

        {/* Main Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Featured Card
          </h2>
          <div className="flex justify-center">
            <GlassmorphismCard
              icon={Zap}
              title="Web Searcher"
              description="Automatically browses the web and summarizes the latest information for you."
              className="w-[340px]"
            />
          </div>
        </div>

        {/* Grid of Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">
            More Examples
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <GlassmorphismCard
              icon={Brain}
              title="AI Assistant"
              description="Intelligent responses powered by advanced language models and real-time data."
            />
            <GlassmorphismCard
              icon={Search}
              title="Smart Search"
              description="Find exactly what you need with context-aware search and filtering."
            />
            <GlassmorphismCard
              icon={Sparkles}
              title="Auto Enhance"
              description="Automatically improve your content with AI-powered suggestions and edits."
            />
            <GlassmorphismCard
              icon={Database}
              title="Data Sync"
              description="Keep your data synchronized across all devices in real-time."
            />
            <GlassmorphismCard
              icon={Globe}
              title="Global CDN"
              description="Lightning-fast delivery with edge caching and smart routing worldwide."
            />
            <GlassmorphismCard
              icon={Zap}
              title="Instant Deploy"
              description="Deploy your changes instantly with zero-downtime deployments."
            />
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Implementation
          </h2>
          <CodeBlock
            code={`import { GlassmorphismCard } from './components/ui/GlassmorphismCard';
import { Zap } from 'lucide-react';

export default function Example() {
  return (
    <GlassmorphismCard
      icon={Zap}
      title="Web Searcher"
      description="Automatically browses the web and summarizes the latest information for you."
    />
  );
}`}
            language="tsx"
          />
        </div>
      </main>
    </div>
  );
}
