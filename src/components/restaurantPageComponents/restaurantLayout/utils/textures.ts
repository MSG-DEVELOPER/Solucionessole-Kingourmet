const woodPatterns: Record<string, CanvasPattern | string> = {};

export function getWoodPattern(ctx: CanvasRenderingContext2D, color: string): CanvasPattern | string {
  if (woodPatterns[color]) return woodPatterns[color];

  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = 64;
  patternCanvas.height = 64;
  const pCtx = patternCanvas.getContext('2d');

  if (!pCtx) return color;

  // Base color
  pCtx.fillStyle = color;
  pCtx.fillRect(0, 0, 64, 64);

  // Wood grain effect
  pCtx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
  pCtx.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    pCtx.beginPath();
    pCtx.moveTo(0, Math.random() * 64);
    pCtx.bezierCurveTo(20, Math.random() * 64, 40, Math.random() * 64, 64, Math.random() * 64);
    pCtx.stroke();
  }

  const pattern = ctx.createPattern(patternCanvas, 'repeat');
  if (pattern) {
    woodPatterns[color] = pattern;
    return pattern;
  }
  return color;
}

