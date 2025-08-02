import { useState } from 'react';
import { Squircle } from './Squircle';

export function AppDemo() {
  const [borderRadius, setBorderRadius] = useState(25);
  const [tension, setTension] = useState(0.6);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
        🔄 Squircler - Ultimate Squircle Demo
      </h1>
      
      {/* GLOBAL CONTROLS */}
      <section style={{ marginBottom: '4rem', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #007bff', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
          🎮 Global Controls - Affects ALL Squircles Below!
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333', fontSize: '18px' }}>
              🔧 Border Radius: {borderRadius}%
            </label>
            <input 
              type="range" 
              min="5" 
              max="50" 
              value={borderRadius} 
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              style={{ width: '100%', marginBottom: '0.5rem', height: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#666' }}>
              <span>5% (Sharp Corners)</span>
              <span>25% (Balanced)</span>
              <span>50% (Very Round)</span>
            </div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333', fontSize: '18px' }}>
              ⚡ Tension: {tension}
            </label>
            <input 
              type="range" 
              min="0.05" 
              max="2" 
              step="0.05" 
              value={tension} 
              onChange={(e) => setTension(Number(e.target.value))}
              style={{ width: '100%', marginBottom: '0.5rem', height: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#666' }}>
              <span>0.05 (True Squircle)</span>
              <span>1.0 (Circle)</span>
              <span>2.0 (Super Round)</span>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button 
            onClick={() => {
              setBorderRadius(25);
              setTension(0.6);
            }}
            style={{ 
              padding: '12px 24px', 
              background: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Reset to Default
          </button>
          <button 
            onClick={() => {
              setBorderRadius(Math.floor(Math.random() * 45) + 5);
              setTension(Math.random() * 1.95 + 0.05);
            }}
            style={{ 
              padding: '12px 24px', 
              background: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🎲 Randomize
          </button>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', fontSize: '16px', color: '#666' }}>
          <strong>Current Settings:</strong> R: {borderRadius}% | T: {tension} | 
          <span style={{ color: '#007bff', fontWeight: '600', marginLeft: '8px' }}>
            {tension <= 0.3 ? '🟦 True Squircle Mode' : 
             tension < 0.8 ? '🔷 Soft Curves Mode' : 
             tension === 1.0 ? '⭕ Perfect Circle Mode' : 
             '🔵 Super Round Mode'}
          </span>
        </div>
      </section>
      
      {/* SECTION 1: Fixed Size Showcase */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          🎯 Fixed Size Precision
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Perfect pixel-precise squircles with various dimensions and aspect ratios.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '2rem' }}>
          {/* Square variations */}
          <Squircle width={80} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)' }}>
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '5px' }}>80×80</div>
          </Squircle>
          
          <Squircle width={120} height={120} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #4834d4, #686de0)' }}>
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>120×120</div>
          </Squircle>
          
          <Squircle width={160} height={160} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #00d2d3, #01a3a4)' }}>
            <div style={{ color: 'white', fontSize: '16px', textAlign: 'center', padding: '15px' }}>160×160</div>
          </Squircle>
          
          {/* Rectangle variations */}
          <Squircle width={200} height={100} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff9ff3, #f368e0)' }}>
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>200×100<br/>2:1 Ratio</div>
          </Squircle>
          
          <Squircle width={100} height={200} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #feca57, #ff9f43)' }}>
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px', writingMode: 'vertical-rl' }}>100×200</div>
          </Squircle>
          
          <Squircle width={300} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #48dbfb, #0abde3)' }}>
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>300×80 - Ultra Wide</div>
          </Squircle>
          
          <Squircle width={60} height={180} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff6348, #e17055)' }}>
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '5px', writingMode: 'vertical-rl' }}>60×180</div>
          </Squircle>
        </div>

        {/* Extreme aspect ratios */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🔥 Extreme Aspect Ratios</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <Squircle width={400} height={60} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}>
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '8px' }}>400×60 - 6.7:1 Super Wide</div>
          </Squircle>
          
          <Squircle width={50} height={250} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(180deg, #f093fb, #f5576c)' }}>
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '5px', writingMode: 'vertical-rl' }}>50×250</div>
          </Squircle>
          
          <Squircle width={500} height={40} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(90deg, #4facfe, #00f2fe)' }}>
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '5px' }}>500×40 - Banner Style</div>
          </Squircle>
        </div>
      </section>

      {/* SECTION 2: Global Control in Action */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          ⚡ Global Control in Action
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Watch how ALL these shapes change together when you adjust the sliders above! Same dimensions, unified control.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Squircle 
            width={150} 
            height={100} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${tension * 180}, 70%, 60%), hsl(${tension * 180 + 40}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>
              <strong>150×100</strong><br/>
              <small>All controlled by</small><br/>
              <small>global sliders!</small>
            </div>
          </Squircle>
          
          <Squircle 
            width={150} 
            height={100} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${borderRadius * 7}, 70%, 60%), hsl(${borderRadius * 7 + 40}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>
              <strong>Same Size</strong><br/>
              <small>Different gradient</small><br/>
              <small>Same curves!</small>
            </div>
          </Squircle>
          
          <Squircle 
            width={150} 
            height={100} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${tension * 100 + borderRadius * 5}, 70%, 60%), hsl(${tension * 100 + borderRadius * 5 + 40}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>
              <strong>Watch Me</strong><br/>
              <small>Change as you</small><br/>
              <small>move sliders!</small>
            </div>
          </Squircle>
          
          <Squircle 
            width={150} 
            height={100} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${(tension + borderRadius/50) * 120}, 70%, 60%), hsl(${(tension + borderRadius/50) * 120 + 40}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>
              <strong>R: {borderRadius}%</strong><br/>
              <strong>T: {tension}</strong><br/>
              <small>Live values!</small>
            </div>
          </Squircle>
        </div>
      </section>

      {/* SECTION 3: Responsive Showcase */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          📱 Responsive Squircles
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Fully responsive squircles that maintain perfect curves as they stretch and adapt!
        </p>
        
        {/* Full Width Hero */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#666', margin: '1rem 0' }}>🚀 Full Width Hero</h3>
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ 
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: '3rem 2rem',
              minHeight: '150px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Perfect Responsive Hero</h2>
              <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>
                This squircle stretches to full container width while maintaining perfect mathematical curves
              </p>
            </div>
          </Squircle>
        </div>

        {/* Responsive Grid */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🔧 Responsive Grid Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '1.5rem' }}
          >
            <h4 style={{ margin: '0 0 1rem' }}>Card One</h4>
            <p style={{ margin: 0, opacity: 0.9 }}>This card will resize with the grid while keeping perfect squircle curves.</p>
          </Squircle>
          
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)', color: 'white', padding: '1.5rem' }}
          >
            <h4 style={{ margin: '0 0 1rem' }}>Card Two</h4>
            <p style={{ margin: 0, opacity: 0.9 }}>Different gradient, same controlled curves as you adjust the sliders above!</p>
          </Squircle>
          
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)', color: 'white', padding: '1.5rem' }}
          >
            <h4 style={{ margin: '0 0 1rem' }}>Card Three</h4>
            <p style={{ margin: 0, opacity: 0.9 }}>All cards respond to your global settings simultaneously!</p>
          </Squircle>
        </div>

        {/* Extreme Width Tests */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🎯 Extreme Width Stress Tests</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ 
              background: 'linear-gradient(90deg, #ff6b6b, #ee5a24)', 
              color: 'white', 
              padding: '1rem',
              width: '100%'
            }}
          >
            <div>100% Width - Ultra Responsive Squircle with Perfect Curves</div>
          </Squircle>
          
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ 
              background: 'linear-gradient(90deg, #4834d4, #686de0)', 
              color: 'white', 
              padding: '1rem',
              width: '75%'
            }}
          >
            <div>75% Width - Still Perfect Mathematical Curves</div>
          </Squircle>
          
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ 
              background: 'linear-gradient(90deg, #00d2d3, #01a3a4)', 
              color: 'white', 
              padding: '1rem',
              width: '50%'
            }}
          >
            <div>50% Width - Circular Curves</div>
          </Squircle>
        </div>
      </section>

      {/* SECTION 4: Border Showcase */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          🎨 Squircle Borders
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Perfect squircle borders that maintain shape integrity across all dimensions.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <Squircle 
            width={120} 
            height={120} 
            borderRadius={borderRadius} 
            tension={tension}
            squircleBorder={3} 
            squircleBorderColor="#e74c3c"
            style={{ background: 'linear-gradient(45deg, #74b9ff, #0984e3)' }}
          >
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '10px' }}>3px Border</div>
          </Squircle>
          
          <Squircle 
            width={200} 
            height={80} 
            borderRadius={borderRadius} 
            tension={tension}
            squircleBorder={5} 
            squircleBorderColor="#00b894"
            style={{ background: 'linear-gradient(45deg, #fdcb6e, #e17055)' }}
          >
            <div style={{ color: 'white', fontSize: '14px', textAlign: 'center', padding: '10px' }}>5px Green Border</div>
          </Squircle>
          
          <Squircle 
            width={80} 
            height={160} 
            borderRadius={borderRadius} 
            tension={tension}
            squircleBorder={8} 
            squircleBorderColor="#6c5ce7"
            style={{ background: 'linear-gradient(45deg, #fd79a8, #e84393)' }}
          >
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '8px', writingMode: 'vertical-rl' }}>8px Purple</div>
          </Squircle>

          {/* Responsive with borders */}
          <Squircle 
            stretch={true} 
            borderRadius={borderRadius} 
            tension={tension}
            squircleBorder={4}
            squircleBorderColor="#f39c12"
            style={{ 
              background: 'white', 
              color: '#333', 
              padding: '1rem', 
              minWidth: '200px',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <strong>Responsive Border</strong><br/>
              <small>Stretches with content</small>
            </div>
          </Squircle>
        </div>
      </section>

      {/* SECTION 5: Real-World Use Cases */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          🌍 Real-World Use Cases
        </h2>
        
        {/* App Icons */}
        <h3 style={{ color: '#666', margin: '1rem 0' }}>📱 App Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Squircle width={80} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center', padding: '20px' }}>📧</div>
          </Squircle>
          <Squircle width={80} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #f093fb, #f5576c)' }}>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center', padding: '20px' }}>📷</div>
          </Squircle>
          <Squircle width={80} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #4facfe, #00f2fe)' }}>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center', padding: '20px' }}>🎵</div>
          </Squircle>
          <Squircle width={80} height={80} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #43e97b, #38f9d7)' }}>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center', padding: '20px' }}>💬</div>
          </Squircle>
        </div>

        {/* Buttons */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🔘 Modern Buttons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Squircle width={120} height={40} borderRadius={borderRadius} tension={tension} style={{ background: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            Primary
          </Squircle>
          <Squircle width={120} height={40} borderRadius={borderRadius} tension={tension} style={{ background: '#28a745', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            Success
          </Squircle>
          <Squircle width={120} height={40} borderRadius={borderRadius} tension={tension} style={{ background: '#dc3545', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            Danger
          </Squircle>
          <Squircle width={140} height={50} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px' }}>
            Call to Action
          </Squircle>
        </div>

        {/* Cards */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>📄 Content Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <Squircle 
            width={300} 
            height={200} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem' }}
          >
            <h4 style={{ margin: '0 0 1rem', color: '#333' }}>Product Card</h4>
            <p style={{ margin: '0 0 1rem', color: '#666', fontSize: '14px' }}>
              Sharp, precise corners that feel modern yet approachable.
            </p>
            <div style={{ background: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', fontSize: '12px' }}>
              $29.99
            </div>
          </Squircle>
          
          <Squircle 
            width={300} 
            height={200} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '1.5rem' }}
          >
            <h4 style={{ margin: '0 0 1rem' }}>Feature Highlight</h4>
            <p style={{ margin: '0 0 1rem', opacity: 0.9, fontSize: '14px' }}>
              Softer curves create a friendlier, more approachable feeling.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', display: 'inline-block', fontSize: '12px' }}>
              Learn More
            </div>
          </Squircle>
        </div>

        {/* Navigation & Tags */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🏷️ Navigation & Tags</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {['React', 'TypeScript', 'Squircles', 'CSS', 'SVG', 'Responsive', 'Perfect Curves'].map((tag, i) => (
            <Squircle 
              key={tag}
              width={tag.length * 8 + 24} 
              height={32} 
              borderRadius={borderRadius} 
              tension={tension}
              style={{ 
                background: `hsl(${i * 50}, 70%, 90%)`, 
                color: `hsl(${i * 50}, 70%, 30%)`, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              {tag}
            </Squircle>
          ))}
        </div>
      </section>

      {/* SECTION 6: Technical Achievement */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>
          🎮 Technical Achievement
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          What makes this special: Real-time dimension tracking with ResizeObserver + pixel-perfect coordinate systems.
        </p>

        {/* Border Radius Comparison */}
        <h3 style={{ color: '#666', margin: '1rem 0' }}>📐 Global Control Demo</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Squircle 
            width={100} 
            height={100} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${borderRadius * 3}, 70%, 60%), hsl(${borderRadius * 3 + 30}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '10px' }}>
              <strong>Square</strong><br/>
              <small>Global Control</small>
            </div>
          </Squircle>
          
          <Squircle 
            width={120} 
            height={80} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${tension * 120}, 70%, 60%), hsl(${tension * 120 + 30}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '10px' }}>
              <strong>Rectangle</strong><br/>
              <small>Same Settings</small>
            </div>
          </Squircle>
          
          <Squircle 
            width={80} 
            height={120} 
            borderRadius={borderRadius} 
            tension={tension}
            style={{ background: `linear-gradient(45deg, hsl(${(borderRadius + tension * 50) % 360}, 70%, 60%), hsl(${(borderRadius + tension * 50 + 30) % 360}, 70%, 50%))` }}
          >
            <div style={{ color: 'white', fontSize: '12px', textAlign: 'center', padding: '10px' }}>
              <strong>Tall</strong><br/>
              <small>Unified</small>
            </div>
          </Squircle>
        </div>

        {/* Mixed Configurations */}
        <h3 style={{ color: '#666', margin: '2rem 0 1rem' }}>🎨 Live Configuration Examples</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <Squircle width={150} height={100} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)' }}>
            <div style={{ color: 'white', fontSize: '11px', textAlign: 'center', padding: '8px' }}>
              R:{borderRadius}% T:{tension}<br/>Current Settings
            </div>
          </Squircle>
          
          <Squircle width={150} height={100} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #4834d4, #686de0)' }}>
            <div style={{ color: 'white', fontSize: '11px', textAlign: 'center', padding: '8px' }}>
              Same Settings<br/>Different Color
            </div>
          </Squircle>
          
          <Squircle width={150} height={100} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #00d2d3, #01a3a4)' }}>
            <div style={{ color: 'white', fontSize: '11px', textAlign: 'center', padding: '8px' }}>
              All Controlled<br/>Globally!
            </div>
          </Squircle>
          
          <Squircle width={150} height={100} borderRadius={borderRadius} tension={tension} style={{ background: 'linear-gradient(45deg, #ff9ff3, #f368e0)' }}>
            <div style={{ color: 'white', fontSize: '11px', textAlign: 'center', padding: '8px' }}>
              Watch Them<br/>Change Together!
            </div>
          </Squircle>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #ddd', marginTop: '3rem' }}>
        <Squircle 
          stretch={true} 
          borderRadius={borderRadius} 
          tension={tension}
          style={{ 
            background: 'linear-gradient(90deg, #667eea, #764ba2)', 
            color: 'white', 
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <h3 style={{ margin: '0 0 1rem' }}>🎉 Perfect Squircles Achieved!</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            No more ovals, no more compromises. Just mathematically perfect squircle curves 
            that work across every dimension, aspect ratio, and use case. Real-time responsive 
            calculation + pixel-perfect coordinates = pure squircle magic! ✨
          </p>
        </Squircle>
      </footer>
    </div>
  );
}
