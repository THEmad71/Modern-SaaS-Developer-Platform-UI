import { Button } from '../ui/button';
import { Download, Save, Share2, Eye, Code, Shapes, Layout } from 'lucide-react';
import { PlaygroundMode, ViewMode } from './Playground';

interface PlaygroundTopBarProps {
  mode: PlaygroundMode;
  viewMode: ViewMode;
  onModeChange: (mode: PlaygroundMode) => void;
  onViewModeChange: (mode: ViewMode) => void;
  onExport: () => void;
  onSave: () => void;
  onShare: () => void;
}

export default function PlaygroundTopBar({
  mode,
  viewMode,
  onModeChange,
  onViewModeChange,
  onExport,
  onSave,
  onShare,
}: PlaygroundTopBarProps) {
  return (
    <div className="h-14 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black flex items-center justify-between px-6">
      {/* Left: Mode Tabs */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-900">
        <button
          onClick={() => onModeChange('ui-builder')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            mode === 'ui-builder'
              ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Layout className="w-4 h-4" />
          UI Builder
        </button>
        <button
          onClick={() => onModeChange('shapes')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            mode === 'shapes'
              ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Shapes className="w-4 h-4" />
          Shapes
        </button>
      </div>

      {/* Center: View Toggle */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-900">
        <button
          onClick={() => onViewModeChange('preview')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            viewMode === 'preview'
              ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          onClick={() => onViewModeChange('code')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            viewMode === 'code'
              ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <Code className="w-4 h-4" />
          Code
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={onShare} className="text-sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" onClick={onSave} className="text-sm">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="default" onClick={onExport} className="text-sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}
