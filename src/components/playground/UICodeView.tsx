import { useState } from 'react';
import { UIComponent } from './UIBuilderMode';
import { Copy, Check } from 'lucide-react';

interface UICodeViewProps {
  components: UIComponent[];
}

export default function UICodeView({ components }: UICodeViewProps) {
  const [copied, setCopied] = useState(false);

  const generateCode = (): string => {
    if (components.length === 0) {
      return '// Add components to generate code';
    }

    let imports = new Set<string>();

    const componentCode = components
      .map((comp) => {
        switch (comp.type) {
          case 'button':
            imports.add("import { Button } from './components/ui/Button';");
            return `      <Button variant="${comp.props.variant}">${comp.props.text}</Button>`;
          case 'card':
            imports.add("import { Card, CardHeader, CardTitle, CardDescription } from './components/ui/Card';");
            return `      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>${comp.props.title}</CardTitle>
          <CardDescription>${comp.props.description}</CardDescription>
        </CardHeader>
      </Card>`;
          case 'input':
            imports.add("import { Input } from './components/ui/Input';");
            return `      <Input label="${comp.props.label}" placeholder="${comp.props.placeholder}" type="${comp.props.type}" className="max-w-sm" />`;
          case 'text':
            return `      <p className="text-${comp.props.size}">${comp.props.content}</p>`;
          default:
            return '';
        }
      })
      .join('\n\n');

    return `${Array.from(imports).join('\n')}

export default function GeneratedComponent() {
  return (
    <div className="space-y-4">
${componentCode}
    </div>
  );
}`;
  };

  const code = generateCode();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 bg-neutral-50 dark:bg-neutral-950 overflow-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
            <span className="text-xs text-neutral-400">component.tsx</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 rounded text-xs text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-neutral-200 font-mono leading-relaxed">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
