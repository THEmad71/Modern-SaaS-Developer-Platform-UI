import { Square, Circle, Minus, Type, Box } from 'lucide-react';
import { Shape } from './ShapesMode';

const shapes = [
  { type: 'rectangle' as Shape['type'], label: 'Rectangle', icon: <Square className="w-4 h-4" /> },
  { type: 'circle' as Shape['type'], label: 'Circle', icon: <Circle className="w-4 h-4" /> },
  { type: 'line' as Shape['type'], label: 'Line', icon: <Minus className="w-4 h-4" /> },
  { type: 'text' as Shape['type'], label: 'Text', icon: <Type className="w-4 h-4" /> },
  { type: 'frame' as Shape['type'], label: 'Frame', icon: <Box className="w-4 h-4" /> },
];

interface ShapesLibraryPanelProps {
  onAddShape: (type: Shape['type']) => void;
}

export default function ShapesLibraryPanel({ onAddShape }: ShapesLibraryPanelProps) {
  return (
    <div className="w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-y-auto">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
          Library
        </h3>

        <div className="space-y-1">
          {shapes.map((shape) => (
            <button
              key={shape.type}
              onClick={() => onAddShape(shape.type)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              {shape.icon}
              {shape.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
