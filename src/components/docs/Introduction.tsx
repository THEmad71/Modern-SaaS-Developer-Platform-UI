import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Alert } from '../ui/alert';
import { CheckCircle } from 'lucide-react';

export default function Introduction() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Introduction
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Welcome to NeedUI — a modern component library for building beautiful, accessible web applications.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-neutral-700 dark:text-neutral-300">
                NeedUI is more than just a component library. It's a comprehensive platform that combines high-quality, 
                production-ready UI components with a professional design studio and a thriving community of contributors.
              </p>

              <Alert variant="info">
                <strong className="block mb-1">Community-Driven Development</strong>
                NeedUI grows with contributions from developers worldwide. Submit your best components and help build 
                something amazing together.
              </Alert>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                What You Get
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Preview Components',
                    description: 'Browse an extensive library of components with live previews and interactive examples.',
                  },
                  {
                    title: 'Copy-Paste Ready Code',
                    description: 'Every component comes with clean, well-documented code that you can copy and customize.',
                  },
                  {
                    title: 'Community Submissions',
                    description: 'Access components created by the community and contribute your own designs.',
                  },
                  {
                    title: 'Professional UI/UX Services',
                    description: 'Need custom design work? Our studio team can help you build production-ready interfaces.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Philosophy
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                NeedUI is built on the principle of simplicity and flexibility. Components are designed to be:
              </p>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 list-disc list-inside">
                <li>Accessible by default</li>
                <li>Fully customizable with Tailwind CSS</li>
                <li>Framework agnostic (works with React, Next.js, and more)</li>
                <li>Production-ready with minimal setup</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
