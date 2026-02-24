import { UIComponent } from './UIBuilderMode';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Input } from '../ui/Input';
import { Alert } from '../ui/Alert';
import { Trash2, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

interface UICanvasProps {
  components: UIComponent[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onDelete: (id: string) => void;
}

export default function UICanvas({ components, selectedId, onSelect, onDelete }: UICanvasProps) {
  const [zoom, setZoom] = useState(100);

  const renderComponent = (comp: UIComponent) => {
    const isSelected = selectedId === comp.id;

    let content = null;

    switch (comp.type) {
      case 'button':
        content = <Button variant={comp.props.variant}>{comp.props.text}</Button>;
        break;
      case 'card':
        content = (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{comp.props.title}</CardTitle>
              <CardDescription>{comp.props.description}</CardDescription>
            </CardHeader>
          </Card>
        );
        break;
      case 'input':
        content = (
          <Input
            label={comp.props.label}
            placeholder={comp.props.placeholder}
            type={comp.props.type}
            className="max-w-sm"
          />
        );
        break;
      case 'text':
        content = <p className={`text-${comp.props.size}`}>{comp.props.content}</p>;
        break;
      case 'container':
        content = (
          <div className={`p-${comp.props.padding} bg-${comp.props.background} border border-neutral-200 dark:border-neutral-800 rounded-lg min-h-[100px] w-full max-w-2xl`}>
            <p className="text-sm text-neutral-400">Container</p>
          </div>
        );
        break;
      case 'alert':
        content = (
          <Alert variant="info" className="max-w-sm">
            This is an alert message
          </Alert>
        );
        break;
      default:
        content = <div>Unknown component</div>;
    }

    return (
      <div
        key={comp.id}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(comp.id);
        }}
        className={`relative group mb-4 ${isSelected ? 'ring-2 ring-blue-500 rounded-lg p-1' : ''}`}
      >
        {content}
        {isSelected && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(comp.id);
            }}
            className="absolute -top-2 -right-2 p-1.5 rounded bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        )}
      </div>
    );
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
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-1">
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

      {/* Canvas */}
      <div className="relative h-full overflow-auto p-8" onClick={() => onSelect(null)}>
        <div
          className="max-w-4xl mx-auto min-h-full bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 p-8"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
        >
          {components.length === 0 ? (
            <div className="flex items-center justify-center h-96 text-neutral-400">
              <div className="text-center">
                <p className="text-sm mb-2">No components yet</p>
                <p className="text-xs">Click components from the library to add them</p>
              </div>
            </div>
          ) : (
            components.map(renderComponent)
          )}
        </div>
      </div>
    </div>
  );
}
