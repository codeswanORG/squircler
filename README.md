# 🟦 Squircler

**The first React component that renders TRUE mathematical squircles with perfect tension control.**

[![npm version](https://badge.fury.io/js/squircler.svg)](https://badge.fury.io/js/squircler)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 What is Squircler?

**Squircler** brings **authentic Apple-style squircles** to the web. Unlike CSS `border-radius` approximations, Squircler uses **real mathematical Bézier curves** to create true superellipse shapes with precise tension control.

### ✨ Key Features

- 🎯 **TRUE mathematical squircles** - not CSS approximations
- 🎛️ **Precise tension control** - adjust curve flatness mathematically  
- 🔧 **Drop-in replacement** - works with any HTML element
- 💎 **Perfect for modern UI** - buttons, cards, avatars, containers
- 🌟 **Glass effects ready** - backdrop-filter compatible
- 📱 **Responsive & accessible** - scales perfectly
- 🔷 **TypeScript support** - full type safety
- ⚡ **Lightweight** - <7KB gzipped

---

## 📦 Installation

```bash
npm install squircler
```

## 🏃‍♂️ Quick Start

```tsx
import { Squircle } from 'squircler';

function App() {
  return (
    <Squircle 
      borderRadius={25} 
      tension={30}
      width={120} 
      height={40}
      as="button"
      style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Click me!
    </Squircle>
  );
}
```

---

## 🎮 Interactive Demo

**[Try the live demo →](https://codeswan.org/squircler)**

Experiment with border radius and tension values to see real-time squircle generation!

---

## 🛠️ API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderRadius` | `number` | `25` | Corner radius as percentage (0-50%) |
| `tension` | `number` | `0.5` | Curve tension (0-1): 0=squircle, 1=circular |
| `width` | `number \| string` | `200` | Width in pixels or CSS value |
| `height` | `number \| string` | `200` | Height in pixels or CSS value |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` | HTML element to render |
| `stretch` | `boolean` | `false` | Fill parent container |
| `className` | `string` | `''` | CSS class name |
| `style` | `CSSProperties` | `{}` | Inline styles |
| `children` | `ReactNode` | - | Content to render inside |

### Tension Values Guide

- **0-20%**: Pronounced squircle effect (flatter curves)
- **20-50%**: Balanced squircle-to-round transition  
- **50-80%**: Subtle squircle with rounded feel
- **80-100%**: Nearly circular (smooth curves)

---

## 🎨 Examples

### Modern Button
```tsx
<Squircle 
  borderRadius={30} 
  tension={25}
  as="button"
  style={{
    background: '#007AFF',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    fontWeight: '600'
  }}
>
  Get Started
</Squircle>
```

### Glass Card
```tsx
<Squircle 
  borderRadius={35} 
  tension={40}
  style={{
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '24px'
  }}
>
  <h3>Glass Effect Card</h3>
  <p>Perfect backdrop-filter support</p>
</Squircle>
```

### Avatar Container
```tsx
<Squircle 
  borderRadius={45} 
  tension={20}
  width={80} 
  height={80}
  style={{
    background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }}
>
  JT
</Squircle>
```

### Progress Bar
```tsx
<Squircle 
  borderRadius={50} 
  tension={100}
  width={200} 
  height={8}
  style={{ background: '#E5E5E5', overflow: 'hidden' }}
>
  <div style={{
    width: '70%',
    height: '100%',
    background: 'linear-gradient(90deg, #00C851, #007E33)'
  }} />
</Squircle>
```

---

## 🔬 How It Works

Squircler generates **mathematical Bézier curves** using the superellipse formula principles:

1. **Border Radius** controls the corner size (0-50% of smallest dimension)
2. **Tension** adjusts control point distances:
   - Low tension = tighter control points = flatter curves (squircle)
   - High tension = standard control points = rounder curves (circular)
3. **SVG clip-path** applies the mathematical shape to any content

This creates **authentic squircles** that match Apple's design language perfectly.

---

## 🎯 Use Cases

- **🔘 Buttons** - Premium feel over standard rectangles
- **🎴 Cards** - Modern card designs with authentic curves  
- **👤 Avatars** - Unique profile image containers
- **📊 Data visualization** - Progress bars, charts, indicators
- **🖼️ Image containers** - Photo galleries, thumbnails
- **🌟 Glass effects** - Backdrop-filter compatible shapes
- **📱 Mobile UI** - iOS-style interface elements

---

## ⚡ Performance

- **Lightweight**: <7KB gzipped
- **Efficient**: Uses CSS clip-path for hardware acceleration
- **Scalable**: Vector-based shapes scale perfectly
- **Memory friendly**: Minimal DOM overhead

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

---

## 📄 License

MIT © [Silver J. Teichman](https://github.com/codeswanORG) - **CODESWAN** brand of **lepigeon**

---

## 🔗 Links

- **[Live Demo](https://codeswan.org/squircler)**
- **[GitHub Repository](https://github.com/codeswanORG/squircler)**
- **[NPM Package](https://www.npmjs.com/package/squircler)**
- **[Issues & Bug Reports](https://github.com/codeswanORG/squircler/issues)**

---

<div align="center">

**Built with ❤️ by [CODESWAN](https://codeswan.org)**

*Bringing mathematical precision to web design*

</div>
