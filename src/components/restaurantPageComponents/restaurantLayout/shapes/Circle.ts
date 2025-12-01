import { Shape } from './Shape';

export class Circle extends Shape {
  radius: number;

  constructor(x: number, y: number, radius: number, color: string) {
    super(x, y, color);
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean, getWoodPattern?: (color: string) => CanvasPattern | string) {
    if (!getWoodPattern) return;
    ctx.save();
    ctx.translate(this.x, this.y);

    // Shadow
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;

    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = getWoodPattern(this.color) as string | CanvasPattern;
    ctx.fill();

    // Bevel/Border
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.stroke();

    ctx.restore();

    if (isSelected) {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Resize handle (right edge)
      ctx.beginPath();
      ctx.rect(this.radius + 5, 0, 8, 8);
      ctx.fillStyle = '#2980b9';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();

      // Selection border
      ctx.strokeStyle = '#e74c3c';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(0, 0, this.radius + 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }
  }

  isPointInside(x: number, y: number): boolean {
    const dx = x - this.x;
    const dy = y - this.y;
    return dx * dx + dy * dy <= this.radius * this.radius;
  }

  checkHandles(x: number, y: number): 'ROTATE' | 'RESIZE' | null {
    const dx = x - (this.x + this.radius + 9);
    const dy = y - this.y;
    if (dx * dx + dy * dy <= 64) return 'RESIZE';
    return null;
  }
}

