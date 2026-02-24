import { useState } from 'react';
import Navbar from '../Navbar';
import PlaygroundTopBar from './PlaygroundTopBar';
import UIBuilderMode from './UIBuilderMode';
import ShapesMode from './ShapesMode';

export type PlaygroundMode = 'ui-builder' | 'shapes';
export type ViewMode = 'preview' | 'code';

export default function Playground() {
  const [mode, setMode] = useState<PlaygroundMode>('ui-builder');
  const [viewMode, setViewMode] = useState<ViewMode>('preview');

  const handleExport = () => {
    alert('Export functionality');
  };

  const handleSave = () => {
    alert('Save functionality');
  };

  const handleShare = () => {
    alert('Share functionality');
  };

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <PlaygroundTopBar
        mode={mode}
        viewMode={viewMode}
        onModeChange={setMode}
        onViewModeChange={setViewMode}
        onExport={handleExport}
        onSave={handleSave}
        onShare={handleShare}
      />
      
      {mode === 'ui-builder' ? (
        <UIBuilderMode viewMode={viewMode} />
      ) : (
        <ShapesMode viewMode={viewMode} />
      )}
    </div>
  );
}
