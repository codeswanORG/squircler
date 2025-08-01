import { useState } from 'react';
import { Squircle } from './Squircle';

// Advanced Web Component Example
function AdvancedExample() {
  const [progress, setProgress] = useState(70);
  const [notification, setNotification] = useState(false);

  return (
    <div style={{ padding: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: 'white' }}>
        <h1>🟦 Squircler Advanced Examples</h1>
        
        {/* Notification */}
        {notification && (
          <Squircle
            borderRadius={35}
            tension={0.8}
            width={350}
            height={60}
            style={{
              background: 'rgba(0, 200, 100, 0.9)',
              backdropFilter: 'blur(20px)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              marginBottom: '20px',
              boxShadow: '0 8px 32px rgba(0, 200, 100, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <span>✅ Squircle component ready!</span>
            <button 
              onClick={() => setNotification(false)}
              style={{ 
                background: 'transparent', 
                border: '1px solid rgba(255,255,255,0.3)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '24px', 
                height: '24px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </Squircle>
        )}

        {/* Interactive Dashboard Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <Squircle
            borderRadius={40}
            tension={0.6}
            width="100%"
            height={200}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Project Progress</h3>
              <p style={{ margin: '0 0 20px 0', opacity: 0.8, fontSize: '14px' }}>Squircler MVP Development</p>
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Completion</span>
                <span>{progress}%</span>
              </div>
              
              <Squircle
                borderRadius={50}
                tension={1.0}
                width="100%"
                height={8}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00C851, #007E33)',
                  transition: 'width 0.3s ease'
                }} />
              </Squircle>
              
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                style={{ width: '100%', marginTop: '16px' }}
              />
            </div>
          </Squircle>

          {/* Feature List Card */}
          <Squircle
            borderRadius={40}
            tension={0.6}
            width="100%"
            height={200}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>Features Completed</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '✅ Mathematical squircle generation',
                '✅ SVG clip-path implementation', 
                '✅ TypeScript support',
                '✅ Glass/blur effects',
                '✅ Responsive design'
              ].map((feature, i) => (
                <div key={i} style={{ fontSize: '14px', opacity: 0.9 }}>
                  {feature}
                </div>
              ))}
            </div>
          </Squircle>
        </div>

        {/* Button Collection */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px' }}>Interactive Button Collection</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            
            <Squircle
              borderRadius={25}
              tension={0.5}
              width={120}
              height={40}
              as="button"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => setNotification(true)}
            >
              Glass Button
            </Squircle>

            <Squircle
              borderRadius={45}
              tension={0.3}
              width={100}
              height={40}
              as="button"
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
                border: 'none',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
              }}
            >
              Gradient
            </Squircle>

            <Squircle
              borderRadius={35}
              tension={0.8}
              width={80}
              height={40}
              as="button"
              style={{
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Outline
            </Squircle>

          </div>
        </div>

        {/* Avatar Grid */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px' }}>Avatar Gallery</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { borderRadius: 50, tension: 0.1, bg: '#FF6B6B', initials: 'JS' },
              { borderRadius: 45, tension: 0.3, bg: '#4ECDC4', initials: 'TS' },
              { borderRadius: 25, tension: 0.5, bg: '#45B7D1', initials: 'RC' },
              { borderRadius: 40, tension: 0.6, bg: '#96CEB4', initials: 'VU' },
              { borderRadius: 35, tension: 0.8, bg: '#FFEAA7', initials: 'AN' },
            ].map((avatar, i) => (
              <Squircle
                key={i}
                borderRadius={avatar.borderRadius}
                tension={avatar.tension}
                width={60}
                height={60}
                style={{
                  background: `linear-gradient(135deg, ${avatar.bg}, ${avatar.bg}CC)`,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: `0 4px 15px ${avatar.bg}40`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {avatar.initials}
              </Squircle>
            ))}
          </div>
        </div>

        {/* Code Export */}
        <Squircle
          borderRadius={25}
          tension={0.5}
          width="100%"
          height="auto"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px'
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Ready to use in your project:</h3>
          <pre style={{ 
            background: 'rgba(0, 0, 0, 0.3)', 
            padding: '16px', 
            borderRadius: '8px', 
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            <code>{`npm install squircler

import { Squircle } from 'squircler';

<Squircle borderRadius={25} tension={0.5} width={120} height={40}>
  Your content here
</Squircle>`}</code>
          </pre>
        </Squircle>

      </div>
    </div>
  );
}

export default AdvancedExample;
