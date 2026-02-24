import { ComponentInstance } from './Playground';
import { Input } from '../ui/input';

interface PropertiesPanelProps {
  component: ComponentInstance;
  onUpdate: (props: Record<string, any>) => void;
}

export default function PropertiesPanel({ component, onUpdate }: PropertiesPanelProps) {
  const handleChange = (key: string, value: any) => {
    onUpdate({ [key]: value });
  };

  const renderProperties = () => {
    switch (component.type) {
      case 'button':
        return (
          <>
            <Input
              label="Text"
              value={component.props.text}
              onChange={(e) => handleChange('text', e.target.value)}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Variant
              </label>
              <select
                value={component.props.variant}
                onChange={(e) => handleChange('variant', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="default">Default</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Padding
              </label>
              <select
                value={component.props.padding}
                onChange={(e) => handleChange('padding', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </>
        );
      
      case 'card':
        return (
          <>
            <Input
              label="Title"
              value={component.props.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
            <Input
              label="Description"
              value={component.props.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Border Radius
              </label>
              <select
                value={component.props.rounded}
                onChange={(e) => handleChange('rounded', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </>
        );
      
      case 'input':
        return (
          <>
            <Input
              label="Label"
              value={component.props.label}
              onChange={(e) => handleChange('label', e.target.value)}
            />
            <Input
              label="Placeholder"
              value={component.props.placeholder}
              onChange={(e) => handleChange('placeholder', e.target.value)}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Type
              </label>
              <select
                value={component.props.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="number">Number</option>
              </select>
            </div>
          </>
        );
      
      case 'text':
        return (
          <>
            <Input
              label="Content"
              value={component.props.content}
              onChange={(e) => handleChange('content', e.target.value)}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-black dark:text-white">
                Text Size
              </label>
              <select
                value={component.props.size}
                onChange={(e) => handleChange('size', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="base">Base</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
                <option value="2xl">2X Large</option>
              </select>
            </div>
          </>
        );
      
      default:
        return <p className="text-sm text-neutral-500">No properties available</p>;
    }
  };

  return (
    <div className="w-80 border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-y-auto">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
          Properties
        </h3>
        <div className="space-y-4">
          <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Component Type</p>
            <p className="text-sm font-medium text-black dark:text-white capitalize">{component.type}</p>
          </div>
          {renderProperties()}
        </div>
      </div>
    </div>
  );
}
