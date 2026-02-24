import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import CodeBlock from '../CodeBlock';
import { Alert } from '../ui/alert';

export default function Installation() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Installation
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Get started with NeedUI in minutes. Follow these simple steps to set up your project.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    Create a Next.js App
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Start by creating a new Next.js application with TypeScript support.
                </p>
                <CodeBlock
                  code="npx create-next-app@latest my-app --typescript --tailwind --app"
                  language="bash"
                />
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    Configure Tailwind CSS
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Ensure Tailwind CSS is properly configured in your project. Update your <code className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-sm">tailwind.config.js</code> file:
                </p>
                <CodeBlock
                  code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                  language="javascript"
                />
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    Install NeedUI CLI (Optional)
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  For a streamlined experience, install the NeedUI CLI to add components with a single command.
                </p>
                <CodeBlock
                  code="npx needui-cli@latest init"
                  language="bash"
                />
                <Alert variant="info" className="mt-4">
                  <strong className="block mb-1">Add Individual Components</strong>
                  Use <code className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30">npx needui-cli add [component-name]</code> to add specific components to your project.
                </Alert>
              </div>

              {/* Step 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    Start Building
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  That's it! Browse the component library and start copying components into your project. Each component page includes installation instructions and usage examples.
                </p>
                <Alert variant="success">
                  <strong className="block mb-1">You're Ready!</strong>
                  Head over to the Components section to explore available components and start building your application.
                </Alert>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
