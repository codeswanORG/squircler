import { forwardRef, CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

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
  /** Squircle border width in pixels */
  squircleBorder?: number;
  /** Squircle border color */
  squircleBorderColor?: string;
  /** Content to render inside the squircle */
  children?: ReactNode;
  /** Custom CSS styles */
  style?: CSSProperties;
  /** CSS class name */
  className?: string;
}

/**
 * Generates a squircle path using actual pixel dimensions for uniform curves
 */
function generateSquirclePath(borderRadius: number, tension: number, width: number, height: number): string {
  // Calculate radius based on borderRadius percentage and smaller dimension for uniform curves
  const minDimension = Math.min(width, height);
  const maxRadius = minDimension / 2;
  const radius = Math.min((borderRadius / 50) * maxRadius, maxRadius);
  
  // Calculate control point distance based on tension
  const squircleControl = 0.05 * radius;
  const circularControl = 0.552 * radius;
  const superCircularControl = 0.8 * radius;
  
  let controlDistance;
  if (tension <= 1) {
    controlDistance = squircleControl + (circularControl - squircleControl) * tension;
  } else {
    const extraTension = tension - 1;
    controlDistance = circularControl + (superCircularControl - circularControl) * extraTension;
  }
  
  // Build the path with actual pixel coordinates
  const path = [
    `M ${radius} 0`,
    `L ${width - radius} 0`,
    `C ${width - radius + controlDistance} 0, ${width} ${radius - controlDistance}, ${width} ${radius}`,
    `L ${width} ${height - radius}`,
    `C ${width} ${height - radius + controlDistance}, ${width - radius + controlDistance} ${height}, ${width - radius} ${height}`,
    `L ${radius} ${height}`,
    `C ${radius - controlDistance} ${height}, 0 ${height - radius + controlDistance}, 0 ${height - radius}`,
    `L 0 ${radius}`,
    `C 0 ${radius - controlDistance}, ${radius - controlDistance} 0, ${radius} 0`,
    'Z'
  ];
  
  return path.join(' ');
}

/**
 * Squircle component - renders content with true squircle shapes using SVG
 */
export const Squircle = forwardRef<HTMLDivElement, SquircleProps>(({
  borderRadius = 25,
  tension = 0.5,
  width = 200,
  height = 200,
  as = 'div',
  stretch = false,
  squircleBorder = 0,
  squircleBorderColor = '#000',
  children,
  style,
  className = '',
  ...props
}, ref) => {
  const Element = as as any;
  const containerRef = useRef<HTMLDivElement>(null);
  const [realDimensions, setRealDimensions] = useState({ width: 200, height: 200 });
  
  // Track real-time dimensions for responsive elements
  useEffect(() => {
    if (!stretch || !containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setRealDimensions({ width: rect.width, height: rect.height });
      }
    };
    
    // Initial measurement
    updateDimensions();
    
    // Set up ResizeObserver for real-time updates
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, [stretch]);
  
  // Calculate actual dimensions for path generation
  const widthNum = typeof width === 'number' ? width : parseInt(width?.toString() || '200');
  const heightNum = typeof height === 'number' ? height : parseInt(height?.toString() || '200');
  
  // Use real dimensions for stretch mode, props for fixed mode
  const actualWidth = stretch ? realDimensions.width : widthNum;
  const actualHeight = stretch ? realDimensions.height : heightNum;
  
  // For stretch mode, use normalized coordinates; for fixed size, use pixel coordinates
  let squirclePath: string;
  let clipPathUnits: string;
  
  if (stretch) {
    // For responsive elements, use pixel coordinates with real dimensions
    // This prevents the oval distortion that happens with objectBoundingBox
    squirclePath = generateSquirclePath(borderRadius, tension, actualWidth, actualHeight);
    clipPathUnits = 'userSpaceOnUse';
  } else {
    // Use pixel coordinates for fixed-size elements
    squirclePath = generateSquirclePath(borderRadius, tension, actualWidth, actualHeight);
    clipPathUnits = 'userSpaceOnUse';
  }
  
  // Create unique clip path ID
  const clipId = `squircle-${Math.random().toString(36).substr(2, 9)}`;
  
  const squircleStyle: CSSProperties = {
    width: stretch ? '100%' : width,
    height: stretch ? '100%' : height,
    display: stretch ? 'block' : 'inline-block',
    overflow: 'hidden',
    clipPath: `url(#${clipId})`,
    ...style,
  };

  // If no squircle border, render simple version
  if (squircleBorder <= 0) {
    return (
      <>
        {/* SVG definition */}
        <svg 
          width="0" 
          height="0" 
          style={{ position: 'absolute' }}
          viewBox={`0 0 ${actualWidth} ${actualHeight}`}
        >
          <defs>
            <clipPath id={clipId} clipPathUnits={clipPathUnits}>
              <path d={squirclePath} />
            </clipPath>
          </defs>
        </svg>
        
        {/* The actual element with squircle clipping */}
        <Element
          ref={(el: any) => {
            // Assign both refs
            if (ref) {
              if (typeof ref === 'function') ref(el);
              else ref.current = el;
            }
            if (containerRef.current !== el) {
              (containerRef as any).current = el;
            }
          }}
          className={`squircle ${className}`.trim()}
          style={squircleStyle}
          {...props}
        >
          {children}
        </Element>
      </>
    );
  }

  // With squircle border - handle both stretch and fixed modes
  const borderClipId = `squircle-border-${Math.random().toString(36).substr(2, 9)}`;
  
  // Create inner path based on mode
  let innerPath: string;
  
  if (stretch) {
    // For stretch mode, use pixel-based calculation with actual dimensions
    const innerWidth = Math.max(10, actualWidth - squircleBorder * 2);
    const innerHeight = Math.max(10, actualHeight - squircleBorder * 2);
    innerPath = generateSquirclePath(borderRadius, tension, innerWidth, innerHeight);
  } else {
    // For fixed mode, use pixel-based calculation
    const innerWidth = Math.max(10, actualWidth - squircleBorder * 2);
    const innerHeight = Math.max(10, actualHeight - squircleBorder * 2);
    innerPath = generateSquirclePath(borderRadius, tension, innerWidth, innerHeight);
  }
  
  return (
    <>
      {/* SVG definitions */}
      <svg 
        width="0" 
        height="0" 
        style={{ position: 'absolute' }}
        viewBox={`0 0 ${actualWidth} ${actualHeight}`}
      >
        <defs>
          <clipPath id={borderClipId} clipPathUnits={clipPathUnits}>
            <path d={squirclePath} />
          </clipPath>
          <clipPath id={clipId} clipPathUnits={clipPathUnits}>
            <path d={innerPath} />
          </clipPath>
        </defs>
      </svg>
      
      {/* Outer container with border color */}
      <div
        ref={containerRef}
        style={{
          width: stretch ? '100%' : width,
          height: stretch ? '100%' : height,
          display: stretch ? 'block' : 'inline-block',
          clipPath: `url(#${borderClipId})`,
          background: squircleBorderColor,
          padding: squircleBorder,
          boxSizing: 'border-box',
        }}
      >
        {/* Inner container with content */}
        <Element
          ref={ref}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            clipPath: `url(#${clipId})`,
            ...style,
          }}
          {...props}
        >
          {children}
        </Element>
      </div>
    </>
  );
});

Squircle.displayName = 'Squircle';
