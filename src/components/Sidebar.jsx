import { NavLink } from '@mantine/core';
import { processors } from '../processors';

export function Sidebar({ onProcessorSelect, selectedProcessor }) {
  return (
    <div style={{ 
      width: '200px', 
      padding: '1rem', 
      borderRight: '1px solid #eee',
      height: '100%',
      overflowY: 'auto'
    }}>
      {Object.entries(processors).map(([key, processor]) => (
        <NavLink
          key={key}
          label={processor.name}
          onClick={() => onProcessorSelect(key)}
          active={key === selectedProcessor}
          style={{ 
            marginBottom: '0.5rem',
            color: key === selectedProcessor ? '#228be6' : '#444444'
          }}
        />
      ))}
    </div>
  );
}
