import { useState } from 'react';
import { Squircle } from './Squircle';
import './App.css';

function App() {
  const [borderRadius, setBorderRadius] = useState(25);
  const [tension, setTension] = useState(0.5);
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(40);

  return (
    <div className="app">
      <header className="header">
        <h1>🟦 Squircler</h1>
        <p>A drop-in React component that renders real squircles for any element</p>
      </header>

      <main className="main">
        <section className="playground">
          <h2>Live Playground</h2>
          
          <div className="controls">
            <div className="control-group">
              <label>
                Border Radius: 
                <input 
                  type="number" 
                  min="0" 
                  max="50" 
                  step="1" 
                  value={borderRadius} 
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  style={{ 
                    marginLeft: '8px', 
                    width: '60px', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    border: '1px solid #ccc' 
                  }}
                />
                <span style={{ marginLeft: '4px' }}>%</span>
              </label>
              <small>0% = sharp corners, 50% = circle</small>
            </div>
            
            <div className="control-group">
              <label>
                Tension: 
                <input 
                  type="number" 
                  min="0" 
                  max="100" 
                  step="5" 
                  value={Math.round(tension * 100)} 
                  onChange={(e) => setTension(Number(e.target.value) / 100)}
                  style={{ 
                    marginLeft: '8px', 
                    width: '60px', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    border: '1px solid #ccc' 
                  }}
                />
                <span style={{ marginLeft: '4px' }}>%</span>
              </label>
              <small>0% = squircle-like, 100% = circular</small>
            </div>
            
            <div className="control-group">
              <label>
                Width: {width}px
                <input 
                  type="range" 
                  min="60" 
                  max="300" 
                  value={width} 
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </label>
            </div>
            
            <div className="control-group">
              <label>
                Height: {height}px
                <input 
                  type="range" 
                  min="30" 
                  max="200" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="preview">
            <Squircle
              borderRadius={borderRadius}
              tension={tension}
              width={width}
              height={height}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Squircle!
            </Squircle>
          </div>

          <div className="code-sample">
            <h3>Code:</h3>
            <pre><code>{`<Squircle
  borderRadius={${borderRadius}}
  tension={${tension}}
  width={${width}}
  height={${height}}
  style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  Squircle!
</Squircle>`}</code></pre>
          </div>
        </section>

        <section className="examples">
          <h2>Examples</h2>
          
          <div className="examples-grid">
            <div className="example">
              <h3>Button</h3>
              <Squircle
                borderRadius={30}
                tension={0.7}
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
                onClick={() => alert('Squircle button clicked!')}
              >
                Press Me
              </Squircle>
            </div>

            <div className="example">
              <h3>Glass Effect</h3>
              <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', padding: '20px', borderRadius: '20px' }}>
                <Squircle
                  borderRadius={25}
                  tension={0.5}
                  width={140}
                  height={80}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Glass Squircle
                </Squircle>
              </div>
            </div>

            <div className="example">
              <h3>Card</h3>
              <Squircle
                borderRadius={35}
                tension={0.8}
                width={200}
                height={120}
                style={{
                  background: 'white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: '#333'
                }}
              >
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Card Title</h4>
                <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>Some content here</p>
              </Squircle>
            </div>

            <div className="example">
              <h3>Avatar</h3>
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
            </div>

            <div className="example">
              <h3>Progress Bar</h3>
              <div style={{ width: '200px' }}>
                <Squircle
                  borderRadius={50}
                  tension={1.0}
                  width={200}
                  height={12}
                  style={{
                    background: '#E5E5E5',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '70%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #00C851, #007E33)',
                  }} />
                </Squircle>
              </div>
            </div>

            <div className="example">
              <h3>Image Container</h3>
              <Squircle
                borderRadius={40}
                tension={0.6}
                width={120}
                height={120}
                style={{
                  background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MEg4MFY4MEg0MFY0MFoiIGZpbGw9IiNEREREREQiLz4KPC9zdmc+)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '12px'
                }}
              >
                Image
              </Squircle>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ Adjustable squircle shape (n prop from 2 to 10+)</li>
            <li>✅ Any HTML tag via `as` prop</li>
            <li>✅ Pass-through for all CSS styles and props</li>
            <li>✅ Works with any child content</li>
            <li>✅ Uses real SVG clip-path for actual shape clipping</li>
            <li>✅ TypeScript support</li>
            <li>✅ Glass/blur effects supported via CSS</li>
            <li>✅ Responsive and accessible</li>
          </ul>
        </section>

        <section className="installation">
          <h2>Installation</h2>
          <pre><code>npm install squircler</code></pre>
          
          <h3>Usage</h3>
          <pre><code>{`import { Squircle } from 'squircler';

function MyComponent() {
  return (
    <Squircle
      n={4}
      width={120}
      height={40}
      as="button"
      style={{
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(16px)",
        color: "#111"
      }}
    >
      Press Me
    </Squircle>
  );
}`}</code></pre>
        </section>
      </main>
    </div>
  );
}

export default App;
