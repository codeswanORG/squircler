import { forwardRef, CSSProperties, ReactNode } from 'react';

export interface SquircleProps extends React.HTMLAttributes<HTMLElement> {
  /** Border radius percentage (0-50, where 50 = circle) */
  borderRadius?: number;
  /** Tension/smoothness factor (0-1, affects how rounded the corners are) */
  tension?: number;
  /** Width in pixels */
  width?: number | string;
  /** Height in pixels */
  height?: number | string;
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
  /** Whether to stretch to fill parent container */
  stretch?: boolean;
  /** Content to render inside the squircle */
  children?: ReactNode;
  /** Custom CSS styles */
  style?: CSSProperties;
  /** CSS class name */
  className?: string;
}

/**
 * Generates a true squircle path using Bézier curves with tension control
 * This creates a real superellipse-like shape by controlling the curve tension
 */
function generateSquirclePath(width: number, height: number, borderRadius: number, tension: number): string {
  const w = width;
  const h = height;
  
  // Convert borderRadius percentage to actual radius
  const maxRadius = Math.min(w, h) / 2;
  const radius = (borderRadius / 50) * maxRadius;
  
  // Calculate control point distance based on tension
  // tension = 0: squircle curves (tight control points, flatter curves)
  // tension = 1: circular curves (standard control points for smooth circles)
  const circularControl = 0.552 * radius; // Magic number for circular curves
  const squircleControl = 0.1 * radius;   // Much tighter for squircle effect
  const controlDistance = squircleControl + (circularControl - squircleControl) * tension;
  
  // Calculate smooth transition points to avoid sharp edges
  // Use smaller corner radius for smoother transitions
  const cornerRadius = Math.max(radius * 0.8, 4); // Ensure minimum radius for smoothness
  const transitionLength = cornerRadius * 0.3; // Smooth transition area
  
  // Build the path with smooth Bézier curves and proper transitions
  const path = [
    `M ${cornerRadius + transitionLength} 0`, // Start with some offset for smoothness
    
    // Top edge with smooth lead-in
    `L ${w - cornerRadius - transitionLength} 0`,
    
    // Top-right corner (smooth curve)
    `C ${w - cornerRadius + controlDistance} 0, ${w} ${cornerRadius - controlDistance}, ${w} ${cornerRadius + transitionLength}`,
    
    // Right edge
    `L ${w} ${h - cornerRadius - transitionLength}`,
    
    // Bottom-right corner (smooth curve)
    `C ${w} ${h - cornerRadius + controlDistance}, ${w - cornerRadius + controlDistance} ${h}, ${w - cornerRadius - transitionLength} ${h}`,
    
    // Bottom edge
    `L ${cornerRadius + transitionLength} ${h}`,
    
    // Bottom-left corner (smooth curve)
    `C ${cornerRadius - controlDistance} ${h}, 0 ${h - cornerRadius + controlDistance}, 0 ${h - cornerRadius - transitionLength}`,
    
    // Left edge
    `L 0 ${cornerRadius + transitionLength}`,
    
    // Top-left corner (smooth curve)
    `C 0 ${cornerRadius - controlDistance}, ${cornerRadius - controlDistance} 0, ${cornerRadius + transitionLength} 0`,
    
    'Z' // Close path
  ];
  
  return path.join(' ');
}

/**
 * Squircle component - renders content with true squircle shapes using SVG
 */
export const Squircle = forwardRef<HTMLElement, SquircleProps>(({
  borderRadius = 25,
  tension = 0.5,
  width = 200,
  height = 200,
  as = 'div',
  stretch = false,
  children,
  style,
  className = '',
  ...props
}, ref) => {
  const Element = as as any;
  
  // Convert dimensions to numbers for calculations
  const numWidth = typeof width === 'string' ? parseInt(width) || 200 : width;
  const numHeight = typeof height === 'string' ? parseInt(height) || 200 : height;
  
  // Generate the true squircle path
  const squirclePath = generateSquirclePath(numWidth, numHeight, borderRadius, tension);
  
  // Create unique clip path ID
  const clipId = `squircle-${Math.random().toString(36).substr(2, 9)}`;
  
  const squircleStyle: CSSProperties = {
    width: stretch ? '100%' : width,
    height: stretch ? '100%' : height,
    display: 'inline-block',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Default background for visibility
    clipPath: `url(#${clipId})`,
    ...style,
  };

  return (
    <>
      {/* SVG definition for the clip path */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path 
              d={squirclePath} 
              transform={`scale(${1/numWidth}, ${1/numHeight})`}
            />
          </clipPath>
        </defs>
      </svg>
      
      {/* The actual element with squircle clipping */}
      <Element
        ref={ref}
        className={`squircle ${className}`.trim()}
        style={squircleStyle}
        {...props}
      >
        {children}
      </Element>
    </>
  );
});

Squircle.displayName = 'Squircle';
