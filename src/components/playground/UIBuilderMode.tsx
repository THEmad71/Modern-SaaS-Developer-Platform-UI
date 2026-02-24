import { useState } from 'react';
import { ViewMode } from './Playground';
import UILibraryPanel from './UILibraryPanel';
import UICanvas from './UICanvas';
import UIPropertiesPanel from './UIPropertiesPanel';
import UICodeView from './UICodeView';

export interface UIComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: UIComponent[];
}

interface UIBuilderModeProps {
  viewMode: ViewMode;
}

export default function UIBuilderMode({ viewMode }: UIBuilderModeProps) {
  const [components, setComponents] = useState<UIComponent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleAddComponent = (type: string) => {
    const newComponent: UIComponent = {
      id: `${type}-${Date.now()}`,
      type,
      props: getDefaultProps(type),
    };
    setComponents([...components, newComponent]);
    setSelectedId(newComponent.id);
  };

  const handleUpdateComponent = (id: string, props: Record<string, any>) => {
    setComponents(
      components.map((comp) => (comp.id === id ? { ...comp, props: { ...comp.props, ...props } } : comp))
    );
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter((comp) => comp.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  const selectedComponent = components.find((c) => c.id === selectedId);

  return (
    <div className="flex-1 flex overflow-hidden">
      <UILibraryPanel onAddComponent={handleAddComponent} />
      
      {viewMode === 'preview' ? (
        <UICanvas
          components={components}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onDelete={handleDeleteComponent}
        />
      ) : (
        <UICodeView components={components} />
      )}

      {viewMode === 'preview' && selectedComponent && (
        <UIPropertiesPanel
          component={selectedComponent}
          onUpdate={(props) => handleUpdateComponent(selectedComponent.id, props)}
        />
      )}
    </div>
  );
}

function getDefaultProps(type: string): Record<string, any> {
  const defaults: Record<string, any> = {
    button: { text: 'Button', variant: 'default' },
    card: { title: 'Card Title', description: 'Card description' },
    input: { label: 'Label', placeholder: 'Enter text...', type: 'text' },
    text: { content: 'Text content', size: 'base' },
    container: { padding: '4', background: 'white' },
  };
  return defaults[type] || {};
}
