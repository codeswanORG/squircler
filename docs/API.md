# Squircler API Documentation

## Installation

```bash
npm install squircler
```

## Basic Usage

```tsx
import { Squircle } from 'squircler';

function MyComponent() {
  return (
    <Squircle n={4} width={120} height={40}>
      Hello Squircle!
    </Squircle>
  );
}
```

## Props Reference

### Core Props

#### `n: number` (default: `4`)
Controls the "squircle-ness" of the shape using the superellipse formula.

- `n = 2`: Perfect circle
- `n = 4`: Classic squircle (most common)
- `n = 6`: More square-like with rounded corners  
- `n = 8`: Very rounded square
- `n = 10+`: Nearly perfect square

#### `width: number | string` (default: `120`)
Width of the squircle. Can be:
- Number: pixels (e.g., `120`)
- String: CSS units (e.g., `"100%"`, `"10rem"`)

#### `height: number | string` (default: `40`)
Height of the squircle. Can be:
- Number: pixels (e.g., `40`)
- String: CSS units (e.g., `"100%"`, `"5rem"`)

#### `as: keyof JSX.IntrinsicElements` (default: `"div"`)
HTML element to render as. Examples:
- `"button"` - For interactive buttons
- `"a"` - For links
- `"span"` - For inline elements
- `"section"` - For semantic sections

### Layout Props

#### `stretch: boolean` (default: `false`)
Whether to stretch to fill the parent container.

```tsx
<div style={{ width: '100%', height: '200px' }}>
  <Squircle stretch={true} n={4}>
    Full width squircle
  </Squircle>
</div>
```

### Performance Props

#### `smooth: boolean` (default: `false`)
Use smooth bezier approximation instead of mathematical precision. 
- `true`: Better performance, less accurate shape
- `false`: Mathematical accuracy, more calculation

#### `precision: number` (default: `100`)
Number of points to calculate for mathematical accuracy. Higher values = smoother curves but more calculation.

### Styling Props

#### `style: CSSProperties`
Standard React style object. All CSS properties are supported.

#### `className: string`
CSS class name for styling.

#### `children: ReactNode`
Content to render inside the squircle.

### HTML Props
All other HTML attributes are passed through to the underlying element.

## Examples

### Button Variations

```tsx
// Primary button
<Squircle
  n={4}
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
  Primary
</Squircle>

// Outline button
<Squircle
  n={4}
  width={120}
  height={40}
  as="button"
  style={{
    background: 'transparent',
    color: '#007AFF',
    border: '2px solid #007AFF',
    fontWeight: '600',
    cursor: 'pointer'
  }}
>
  Outline
</Squircle>
```

### Glass/Blur Effects

```tsx
<Squircle
  n={4}
  width={200}
  height={100}
  style={{
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(16px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    padding: '20px'
  }}
>
  Glass Squircle
</Squircle>
```

### Cards

```tsx
<Squircle
  n={6}
  width={300}
  height={200}
  style={{
    background: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}
>
  <h3 style={{ margin: 0 }}>Card Title</h3>
  <p style={{ margin: 0, color: '#666' }}>
    Card content with squircle border
  </p>
</Squircle>
```

### Avatars

```tsx
<Squircle
  n={3}
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
```

### Progress Bars

```tsx
<Squircle
  n={8}
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
```

### Responsive Design

```tsx
// Full width on mobile, fixed width on desktop
<Squircle
  n={4}
  width="100%"
  height={60}
  style={{
    maxWidth: '400px',
    background: '#007AFF',
    color: 'white',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  Responsive Squircle
</Squircle>
```

## Utility Functions

### `squirclePath(width, height, n, precision)`
Generate raw SVG path for a squircle.

```tsx
import { squirclePath } from 'squircler';

const path = squirclePath(100, 50, 4, 100);
// Returns: "M 50 0 L 51.2 0.1 L ... Z"
```

### `squircleClipPath(width, height, n, precision)`
Generate CSS clip-path polygon.

```tsx
import { squircleClipPath } from 'squircler';

const clipPath = squircleClipPath(100, 50, 4, 50);
// Returns: "polygon(50% 0%, 51.2% 0.2%, ...)"
```

### `squirclePathSmooth(width, height, n)`
Generate optimized bezier path.

```tsx
import { squirclePathSmooth } from 'squircler';

const smoothPath = squirclePathSmooth(100, 50, 4);
// Returns optimized cubic bezier curve
```

## TypeScript Support

Full TypeScript definitions are included:

```tsx
import { Squircle, SquircleProps } from 'squircler';

const MySquircle: React.FC<SquircleProps> = (props) => {
  return <Squircle {...props} />;
};
```

## Performance Tips

1. **Use `smooth={true}`** for better performance when you don't need mathematical precision
2. **Lower `precision`** (e.g., 50) for better performance on complex layouts
3. **Avoid frequent prop changes** - the SVG path is recalculated on every render
4. **Use CSS transforms** for animations instead of changing props

## Browser Support

- Modern browsers with SVG clip-path support
- React 16.8+ (uses hooks)
- No IE support (uses modern CSS features)

## Accessibility

The component passes through all ARIA attributes:

```tsx
<Squircle
  as="button"
  aria-label="Close dialog"
  role="button"
  tabIndex={0}
>
  ×
</Squircle>
```
