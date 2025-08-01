import { describe, it, expect } from 'vitest';
import { squirclePath, squirclePathSmooth, squircleClipPath } from './squirclePath';

describe('squirclePath', () => {
  it('should generate a valid SVG path', () => {
    const path = squirclePath(100, 50, 4, 50);
    expect(path).toMatch(/^M \d+\.?\d* \d+\.?\d*/); // Should start with M (move)
    expect(path).toMatch(/Z$/); // Should end with Z (close)
    expect(path).toContain('L'); // Should contain L (line) commands
  });

  it('should handle different squircle values', () => {
    const circle = squirclePath(100, 100, 2, 20);
    const square = squirclePath(100, 100, 10, 20);
    
    expect(circle).toBeTruthy();
    expect(square).toBeTruthy();
    expect(circle).not.toBe(square);
  });

  it('should handle different dimensions', () => {
    const wide = squirclePath(200, 50, 4, 20);
    const tall = squirclePath(50, 200, 4, 20);
    
    expect(wide).toBeTruthy();
    expect(tall).toBeTruthy();
    expect(wide).not.toBe(tall);
  });
});

describe('squirclePathSmooth', () => {
  it('should generate a smooth bezier path', () => {
    const path = squirclePathSmooth(100, 50, 4);
    expect(path).toMatch(/^M \d+\.?\d* \d+\.?\d*/); // Should start with M
    expect(path).toMatch(/Z$/); // Should end with Z
    expect(path).toContain('C'); // Should contain C (cubic bezier) commands
  });

  it('should be shorter than the mathematical path', () => {
    const mathPath = squirclePath(100, 50, 4, 100);
    const smoothPath = squirclePathSmooth(100, 50, 4);
    
    // Smooth path should be more concise
    expect(smoothPath.length).toBeLessThan(mathPath.length);
  });
});

describe('squircleClipPath', () => {
  it('should generate a CSS clip-path polygon', () => {
    const clipPath = squircleClipPath(100, 50, 4, 20);
    expect(clipPath).toMatch(/^polygon\(/);
    expect(clipPath).toMatch(/\)$/);
    expect(clipPath).toContain('%'); // Should use percentages
  });

  it('should handle different precision values', () => {
    const lowPrecision = squircleClipPath(100, 50, 4, 10);
    const highPrecision = squircleClipPath(100, 50, 4, 50);
    
    // Higher precision should have more points
    const lowPoints = lowPrecision.split(',').length;
    const highPoints = highPrecision.split(',').length;
    expect(highPoints).toBeGreaterThan(lowPoints);
  });
});
