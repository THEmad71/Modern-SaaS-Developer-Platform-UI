import { UIComponent } from './UIBuilderMode';
import { Input } from '../ui/input';

interface UIPropertiesPanelProps {
  component: UIComponent;
  onUpdate: (props: Record<string, any>) => void;
}

export default function UIPropertiesPanel({ component, onUpdate }: UIPropertiesPanelProps) {
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
            <Select
              label="Variant"
              value={component.props.variant}
              onChange={(value) => handleChange('variant', value)}
              options={[
                { value: 'default', label: 'Default' },
                { value: 'outline', label: 'Outline' },
                { value: 'ghost', label: 'Ghost' },
              ]}
            />
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
            <Select
              label="Size"
              value={component.props.size}
              onChange={(value) => handleChange('size', value)}
              options={[
                { value: 'xs', label: 'Extra Small' },
                { value: 'sm', label: 'Small' },
                { value: 'base', label: 'Base' },
                { value: 'lg', label: 'Large' },
                { value: 'xl', label: 'Extra Large' },
              ]}
            />
          </>
        );

      default:
        return <p className="text-sm text-neutral-500">No properties</p>;
    }
  };

  return (
    <div className="w-80 border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-y-auto">
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-black dark:text-white mb-1">Properties</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">{component.type}</p>
        </div>
        <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          {renderProperties()}
        </div>
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-black dark:text-white">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
