import { useState } from 'react';
import { Shape } from './ShapesMode';
import { Trash2, ZoomIn, ZoomOut } from 'lucide-react';

interface ShapesCanvasProps {
  shapes: Shape[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onUpdate: (id: string, updates: Partial<Shape>) => void;
  onDelete: (id: string) => void;
}

export default function ShapesCanvas({ shapes, selectedId, onSelect, onUpdate, onDelete }: ShapesCanvasProps) {
  const [zoom, setZoom] = useState(100);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, shapeId: string) => {
    e.stopPropagation();
    onSelect(shapeId);
    setDragging(shapeId);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      const shape = shapes.find((s) => s.id === dragging);
      if (shape) {
        const dx = (e.clientX - dragStart.x) / (zoom / 100);
        const dy = (e.clientY - dragStart.y) / (zoom / 100);
        onUpdate(dragging, { x: shape.x + dx, y: shape.y + dy });
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const renderShape = (shape: Shape) => {
    const isSelected = selectedId === shape.id;
    const shadowStyle = shape.shadow.blur > 0 ? 
      `${shape.shadow.x}px ${shape.shadow.y}px ${shape.shadow.blur}px ${shape.shadow.spread}px ${shape.shadow.color}` : 
      'none';

    const commonProps = {
      onMouseDown: (e: React.MouseEvent) => handleMouseDown(e, shape.id),
      style: {
        position: 'absolute' as const,
        left: shape.x,
        top: shape.y,
        cursor: 'move',
        opacity: shape.opacity,
        boxShadow: shadowStyle,
        filter: shape.blur > 0 ? `blur(${shape.blur}px)` : 'none',
      },
      className: isSelected ? 'ring-2 ring-blue-500' : '',
    };

    switch (shape.type) {
      case 'rectangle':
        return (
          <div
            key={shape.id}
            {...commonProps}
            style={{
              ...commonProps.style,
              width: shape.width,
              height: shape.height,
              backgroundColor: shape.fill,
              border: shape.strokeWidth > 0 ? `${shape.strokeWidth}px solid ${shape.stroke}` : 'none',
              borderRadius: shape.cornerRadius,
            }}
          />
        );

      case 'circle':
        return (
          <div
            key={shape.id}
            {...commonProps}
            style={{
              ...commonProps.style,
              width: shape.width,
              height: shape.height,
              backgroundColor: shape.fill,
              border: shape.strokeWidth > 0 ? `${shape.strokeWidth}px solid ${shape.stroke}` : 'none',
              borderRadius: '50%',
            }}
          />
        );

      case 'line':
        return (
          <div
            key={shape.id}
            {...commonProps}
            style={{
              ...commonProps.style,
              width: shape.width,
              height: shape.strokeWidth || 2,
              backgroundColor: shape.stroke,
            }}
          />
        );

      case 'text':
        return (
          <div
            key={shape.id}
            {...commonProps}
            style={{
              ...commonProps.style,
              color: shape.fill,
              fontSize: shape.height,
              fontWeight: 500,
            }}
          >
            {shape.text}
          </div>
        );

      case 'frame':
        return (
          <div
            key={shape.id}
            {...commonProps}
            style={{
              ...commonProps.style,
              width: shape.width,
              height: shape.height,
              border: `2px dashed ${shape.stroke}`,
              borderRadius: shape.cornerRadius,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(228 228 231 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(228 228 231 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-1 z-10">
        <button
          onClick={() => setZoom(Math.max(50, zoom - 10))}
          className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          <ZoomOut className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
        </button>
        <span className="text-xs text-neutral-600 dark:text-neutral-400 px-2">{zoom}%</span>
        <button
          onClick={() => setZoom(Math.min(200, zoom + 10))}
          className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          <ZoomIn className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
        </button>
      </div>

      {/* Delete Button */}
      {selectedId && (
        <button
          onClick={() => onDelete(selectedId)}
          className="absolute top-4 left-4 p-2 rounded bg-red-500 text-white z-10"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}

      {/* Canvas */}
      <div
        className="relative h-full overflow-auto"
        onClick={() => onSelect(null)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative min-w-[2000px] min-h-[2000px]"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
        >
          {shapes.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 pointer-events-none">
              <div className="text-center">
                <p className="text-sm mb-2">No shapes yet</p>
                <p className="text-xs">Click shapes from the library to add them</p>
              </div>
            </div>
          ) : (
            shapes.map(renderShape)
          )}
        </div>
      </div>
    </div>
  );
}
