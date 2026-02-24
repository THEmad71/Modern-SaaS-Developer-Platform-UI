import { Button } from '../ui/Button';
import { Download, RotateCcw, Code, Eye } from 'lucide-react';

interface TopBarProps {
  mode: 'preview' | 'code';
  onModeChange: (mode: 'preview' | 'code') => void;
  onExport: () => void;
  onReset: () => void;
}

export default function TopBar({ mode, onModeChange, onExport, onReset }: TopBarProps) {
  return (
    <div className="h-14 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-black dark:text-white mr-4">Playground</h2>
        
        {/* Mode Toggle */}
        <div className="flex gap-1 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-900">
          <button
            onClick={() => onModeChange('preview')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              mode === 'preview'
                ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => onModeChange('code')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              mode === 'code'
                ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Code className="w-4 h-4" />
            Code
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" onClick={onReset} className="text-sm">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        <Button variant="default" onClick={onExport} className="text-sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
