import { useState } from 'react';
import { ViewMode } from './Playground';
import ShapesLibraryPanel from './ShapesLibraryPanel';
import ShapesCanvas from './ShapesCanvas';
import ShapesPropertiesPanel from './ShapesPropertiesPanel';
import ShapesCodeView from './ShapesCodeView';

export interface Shape {
  id: string;
  type: 'rectangle' | 'circle' | 'line' | 'text' | 'frame';
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  cornerRadius: number;
  opacity: number;
  shadow: { x: number; y: number; blur: number; spread: number; color: string };
  blur: number;
  text?: string;
}

interface ShapesModeProps {
  viewMode: ViewMode;
}

export default function ShapesMode({ viewMode }: ShapesModeProps) {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleAddShape = (type: Shape['type']) => {
    const newShape: Shape = {
      id: `${type}-${Date.now()}`,
      type,
      x: 100,
      y: 100,
      width: type === 'circle' ? 100 : 200,
      height: type === 'circle' ? 100 : type === 'line' ? 2 : 100,
      fill: '#3b82f6',
      stroke: '#000000',
      strokeWidth: 0,
      cornerRadius: type === 'rectangle' ? 8 : 0,
      opacity: 1,
      shadow: { x: 0, y: 0, blur: 0, spread: 0, color: '#000000' },
      blur: 0,
      text: type === 'text' ? 'Text' : undefined,
    };
    setShapes([...shapes, newShape]);
    setSelectedId(newShape.id);
  };

  const handleUpdateShape = (id: string, updates: Partial<Shape>) => {
    setShapes(shapes.map((shape) => (shape.id === id ? { ...shape, ...updates } : shape)));
  };

  const handleDeleteShape = (id: string) => {
    setShapes(shapes.filter((shape) => shape.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  const selectedShape = shapes.find((s) => s.id === selectedId);

  return (
    <div className="flex-1 flex overflow-hidden">
      <ShapesLibraryPanel onAddShape={handleAddShape} />
      
      {viewMode === 'preview' ? (
        <ShapesCanvas
          shapes={shapes}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onUpdate={handleUpdateShape}
          onDelete={handleDeleteShape}
        />
      ) : (
        <ShapesCodeView shapes={shapes} />
      )}

      {viewMode === 'preview' && selectedShape && (
        <ShapesPropertiesPanel
          shape={selectedShape}
          onUpdate={(updates) => handleUpdateShape(selectedShape.id, updates)}
        />
      )}
    </div>
  );
}
