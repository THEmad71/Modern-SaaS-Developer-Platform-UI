import { useState } from 'react';
import { Shape } from './ShapesMode';
import { Copy, Check } from 'lucide-react';

interface ShapesCodeViewProps {
  shapes: Shape[];
}

export default function ShapesCodeView({ shapes }: ShapesCodeViewProps) {
  const [copied, setCopied] = useState(false);

  const generateCode = (): string => {
    if (shapes.length === 0) {
      return '<!-- Add shapes to generate code -->';
    }

    const htmlCode = shapes
      .map((shape) => {
        const shadowStyle =
          shape.shadow.blur > 0
            ? `box-shadow: ${shape.shadow.x}px ${shape.shadow.y}px ${shape.shadow.blur}px ${shape.shadow.spread}px ${shape.shadow.color};`
            : '';
        const blurStyle = shape.blur > 0 ? `filter: blur(${shape.blur}px);` : '';

        switch (shape.type) {
          case 'rectangle':
            return `  <div style="
    position: absolute;
    left: ${shape.x}px;
    top: ${shape.y}px;
    width: ${shape.width}px;
    height: ${shape.height}px;
    background-color: ${shape.fill};
    border: ${shape.strokeWidth}px solid ${shape.stroke};
    border-radius: ${shape.cornerRadius}px;
    opacity: ${shape.opacity};
    ${shadowStyle}
    ${blurStyle}
  "></div>`;

          case 'circle':
            return `  <div style="
    position: absolute;
    left: ${shape.x}px;
    top: ${shape.y}px;
    width: ${shape.width}px;
    height: ${shape.height}px;
    background-color: ${shape.fill};
    border: ${shape.strokeWidth}px solid ${shape.stroke};
    border-radius: 50%;
    opacity: ${shape.opacity};
    ${shadowStyle}
    ${blurStyle}
  "></div>`;

          case 'line':
            return `  <div style="
    position: absolute;
    left: ${shape.x}px;
    top: ${shape.y}px;
    width: ${shape.width}px;
    height: ${shape.strokeWidth || 2}px;
    background-color: ${shape.stroke};
    opacity: ${shape.opacity};
  "></div>`;

          case 'text':
            return `  <div style="
    position: absolute;
    left: ${shape.x}px;
    top: ${shape.y}px;
    color: ${shape.fill};
    font-size: ${shape.height}px;
    font-weight: 500;
    opacity: ${shape.opacity};
  ">${shape.text}</div>`;

          case 'frame':
            return `  <div style="
    position: absolute;
    left: ${shape.x}px;
    top: ${shape.y}px;
    width: ${shape.width}px;
    height: ${shape.height}px;
    border: 2px dashed ${shape.stroke};
    border-radius: ${shape.cornerRadius}px;
    opacity: ${shape.opacity};
  "></div>`;

          default:
            return '';
        }
      })
      .join('\n\n');

    return `<!DOCTYPE html>
<html>
<head>
  <title>Generated Design</title>
</head>
<body>
<div style="position: relative; width: 100vw; height: 100vh;">
${htmlCode}
</div>
</body>
</html>`;
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
            <span className="text-xs text-neutral-400">design.html</span>
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
