import { Squircle } from '../Squircle';

// Simple usage examples for documentation
export function SimpleExamples() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Basic Button */}
      <Squircle
        borderRadius={25}
        tension={0.5}
        width={120}
        height={40}
        as="button"
        style={{
          background: '#007AFF',
          color: 'white',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Button
      </Squircle>

      {/* Glass Effect */}
      <Squircle
        borderRadius={25}
        tension={0.5}
        width={200}
        height={80}
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          padding: '20px'
        }}
      >
        Glass Effect
      </Squircle>

      {/* Avatar */}
      <Squircle
        borderRadius={45}
        tension={0.3}
        width={80}
        height={80}
        style={{
          background: 'linear-gradient(135deg, #FA8072, #FF6347)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold'
        }}
      >
        JT
      </Squircle>

      {/* Card */}
      <Squircle
        borderRadius={35}
        tension={0.8}
        width={300}
        height={150}
        style={{
          background: 'white',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '20px'
        }}
      >
        <h3>Card Title</h3>
        <p>This is a card with squircle shape.</p>
      </Squircle>

    </div>
  );
}
