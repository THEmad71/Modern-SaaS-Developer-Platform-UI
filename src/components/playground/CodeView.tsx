import { useState } from 'react';
import { ComponentInstance } from './Playground';
import { Copy, Check } from 'lucide-react';

interface CodeViewProps {
  components: ComponentInstance[];
}

export default function CodeView({ components }: CodeViewProps) {
  const [copied, setCopied] = useState(false);

  const generateCode = (): string => {
    let imports = new Set<string>();
    
    const componentCode = components.map(comp => {
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
          return `      <Input 
        label="${comp.props.label}" 
        placeholder="${comp.props.placeholder}" 
        type="${comp.props.type}"
        className="max-w-sm"
      />`;
        case 'text':
          return `      <p className="text-${comp.props.size}">${comp.props.content}</p>`;
        case 'alert':
          imports.add("import { Alert } from './components/ui/Alert';");
          return `      <Alert variant="info" className="max-w-sm">
        ${comp.props.message || 'This is an alert message'}
      </Alert>`;
        default:
          return '';
      }
    }).join('\n\n');

    if (components.length === 0) {
      return '// Add components to generate code';
    }

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
        <div className="relative rounded-lg bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 overflow-hidden">
          {/* Header */}
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
                  Copy Code
                </>
              )}
            </button>
          </div>

          {/* Code */}
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-neutral-200 font-mono leading-relaxed">
              {code}
            </code>
          </pre>
        </div>

        {/* Info */}
        {components.length > 0 && (
          <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
            <p className="text-sm text-blue-900 dark:text-blue-300">
              <strong>Tip:</strong> Copy this code and paste it into your React project. Make sure you have the required components installed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
