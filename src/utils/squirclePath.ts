/**
 * Generates a squircle path using the superellipse formula
 * @param width - Width of the squircle
 * @param height - Height of the squircle
 * @param n - Squircle-ness factor (2=circle, 4=classic squircle, 10=square-ish)
 * @param precision - Number of points to calculate (higher = smoother curve)
 * @returns SVG path string
 */
export function squirclePath(
  width: number,
  height: number,
  n: number = 4,
  precision: number = 100
): string {
  const a = width / 2;
  const b = height / 2;
  const points: [number, number][] = [];

  // Generate points using the superellipse formula: |x/a|^n + |y/b|^n = 1
  for (let i = 0; i <= precision; i++) {
    const t = (i / precision) * 2 * Math.PI;
    
    // Parametric equations for superellipse
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    
    const x = a * Math.sign(cosT) * Math.pow(Math.abs(cosT), 2 / n);
    const y = b * Math.sign(sinT) * Math.pow(Math.abs(sinT), 2 / n);
    
    // Translate to center the shape
    points.push([x + a, y + b]);
  }

  // Create SVG path
  if (points.length === 0) return '';
  
  const [firstX, firstY] = points[0];
  let path = `M ${firstX} ${firstY}`;
  
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    path += ` L ${x} ${y}`;
  }
  
  path += ' Z'; // Close the path
  
  return path;
}

/**
 * Alternative approach using cubic bezier curves for smoother rendering
 * This creates a more optimized path with fewer control points
 */
export function squirclePathSmooth(
  width: number,
  height: number,
  n: number = 4
): string {
  const a = width / 2;
  const b = height / 2;
  
  // Calculate control point distance based on squircle-ness
  // For n=4 (classic squircle), this approximates the superellipse well
  const factor = Math.pow(2, 1/n - 1);
  const cx = a * factor;
  const cy = b * factor;
  
  // Create smooth squircle using cubic bezier curves
  return `
    M ${a} 0
    C ${a + cx} 0, ${width} ${b - cy}, ${width} ${b}
    C ${width} ${b + cy}, ${a + cx} ${height}, ${a} ${height}
    C ${a - cx} ${height}, 0 ${b + cy}, 0 ${b}
    C 0 ${b - cy}, ${a - cx} 0, ${a} 0
    Z
  `.trim().replace(/\s+/g, ' ');
}

/**
 * Generate CSS clip-path polygon for browsers that support it
 */
export function squircleClipPath(
  width: number,
  height: number,
  n: number = 4,
  precision: number = 50
): string {
  const a = width / 2;
  const b = height / 2;
  const points: string[] = [];

  for (let i = 0; i <= precision; i++) {
    const t = (i / precision) * 2 * Math.PI;
    
    const cosT = Math.cos(t);
    const sinT = Math.sin(t);
    
    const x = a * Math.sign(cosT) * Math.pow(Math.abs(cosT), 2 / n);
    const y = b * Math.sign(sinT) * Math.pow(Math.abs(sinT), 2 / n);
    
    // Convert to percentages
    const xPercent = ((x + a) / width) * 100;
    const yPercent = ((y + b) / height) * 100;
    
    points.push(`${xPercent}% ${yPercent}%`);
  }

  return `polygon(${points.join(', ')})`;
}
