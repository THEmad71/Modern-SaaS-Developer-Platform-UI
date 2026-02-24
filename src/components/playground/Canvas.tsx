import { ComponentInstance } from './Playground';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Input } from '../ui/Input';
import { Alert } from '../ui/Alert';
import { Trash2 } from 'lucide-react';

interface CanvasProps {
  components: ComponentInstance[];
  selectedComponent: string | null;
  onSelectComponent: (id: string) => void;
  onDeleteComponent: (id: string) => void;
}

export default function Canvas({ 
  components, 
  selectedComponent, 
  onSelectComponent,
  onDeleteComponent 
}: CanvasProps) {
  const renderComponent = (comp: ComponentInstance) => {
    const isSelected = selectedComponent === comp.id;
    
    let content = null;
    
    switch (comp.type) {
      case 'button':
        content = (
          <Button variant={comp.props.variant}>
            {comp.props.text}
          </Button>
        );
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
        content = (
          <p className={`text-${comp.props.size} text-${comp.props.color}`}>
            {comp.props.content}
          </p>
        );
        break;
      case 'alert':
        content = (
          <Alert variant="info" className="max-w-sm">
            {comp.props.message || 'This is an alert message'}
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
          onSelectComponent(comp.id);
        }}
        className={`relative group mb-4 ${
          isSelected ? 'ring-2 ring-blue-500 rounded-lg' : ''
        }`}
      >
        {content}
        {isSelected && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteComponent(comp.id);
            }}
            className="absolute top-2 right-2 p-1.5 rounded bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div 
      className="flex-1 bg-neutral-50 dark:bg-neutral-950 overflow-auto p-8"
      onClick={() => onSelectComponent('')}
    >
      <div className="max-w-4xl mx-auto min-h-full bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
        {components.length === 0 ? (
          <div className="flex items-center justify-center h-96 text-neutral-400">
            <div className="text-center">
              <p className="text-sm mb-2">No components yet</p>
              <p className="text-xs">Click components from the sidebar to add them</p>
            </div>
          </div>
        ) : (
          components.map(renderComponent)
        )}
      </div>
    </div>
  );
}
