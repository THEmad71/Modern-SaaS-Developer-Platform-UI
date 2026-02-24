import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
        <span className="text-xs text-neutral-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-2 py-1 rounded text-xs text-neutral-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-neutral-200 font-mono">
          {code}
        </code>
      </pre>
    </div>
  );
}
