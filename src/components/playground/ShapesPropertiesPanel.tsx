import { Shape } from './ShapesMode';
import { Input } from '../ui/Input';

interface ShapesPropertiesPanelProps {
  shape: Shape;
  onUpdate: (updates: Partial<Shape>) => void;
}

export default function ShapesPropertiesPanel({ shape, onUpdate }: ShapesPropertiesPanelProps) {
  return (
    <div className="w-80 border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-y-auto">
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-black dark:text-white mb-1">Properties</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">{shape.type}</p>
        </div>

        <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          {/* Position */}
          <div>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase mb-2">Position</p>
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="X"
                type="number"
                value={Math.round(shape.x)}
                onChange={(e) => onUpdate({ x: Number(e.target.value) })}
              />
              <Input
                label="Y"
                type="number"
                value={Math.round(shape.y)}
                onChange={(e) => onUpdate({ y: Number(e.target.value) })}
              />
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase mb-2">Size</p>
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="W"
                type="number"
                value={Math.round(shape.width)}
                onChange={(e) => onUpdate({ width: Number(e.target.value) })}
              />
              <Input
                label="H"
                type="number"
                value={Math.round(shape.height)}
                onChange={(e) => onUpdate({ height: Number(e.target.value) })}
              />
            </div>
          </div>

          {/* Fill */}
          <div>
            <label className="text-sm font-medium text-black dark:text-white mb-2 block">Fill</label>
            <input
              type="color"
              value={shape.fill}
              onChange={(e) => onUpdate({ fill: e.target.value })}
              className="w-full h-10 rounded border border-neutral-200 dark:border-neutral-800"
            />
          </div>

          {/* Stroke */}
          <div>
            <label className="text-sm font-medium text-black dark:text-white mb-2 block">Stroke</label>
            <div className="space-y-2">
              <input
                type="color"
                value={shape.stroke}
                onChange={(e) => onUpdate({ stroke: e.target.value })}
                className="w-full h-10 rounded border border-neutral-200 dark:border-neutral-800"
              />
              <Input
                label="Width"
                type="number"
                value={shape.strokeWidth}
                onChange={(e) => onUpdate({ strokeWidth: Number(e.target.value) })}
              />
            </div>
          </div>

          {/* Corner Radius */}
          {(shape.type === 'rectangle' || shape.type === 'frame') && (
            <Input
              label="Corner Radius"
              type="number"
              value={shape.cornerRadius}
              onChange={(e) => onUpdate({ cornerRadius: Number(e.target.value) })}
            />
          )}

          {/* Opacity */}
          <div>
            <label className="text-sm font-medium text-black dark:text-white mb-2 block">
              Opacity: {Math.round(shape.opacity * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={shape.opacity}
              onChange={(e) => onUpdate({ opacity: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Text */}
          {shape.type === 'text' && (
            <Input
              label="Text"
              value={shape.text || ''}
              onChange={(e) => onUpdate({ text: e.target.value })}
            />
          )}

          {/* Blur */}
          <Input
            label="Blur"
            type="number"
            value={shape.blur}
            onChange={(e) => onUpdate({ blur: Number(e.target.value) })}
          />
        </div>
      </div>
    </div>
  );
}
