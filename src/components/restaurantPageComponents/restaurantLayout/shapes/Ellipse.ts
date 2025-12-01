import { Shape } from './Shape';

export class Ellipse extends Shape {
  radiusX: number;
  radiusY: number;

  constructor(x: number, y: number, radiusX: number, radiusY: number, color: string) {
    super(x, y, color);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean, getWoodPattern?: (color: string) => CanvasPattern | string) {
    if (!getWoodPattern) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Shadow
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;

    ctx.beginPath();
    ctx.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, Math.PI * 2);
    ctx.fillStyle = getWoodPattern(this.color) as string | CanvasPattern;
    ctx.fill();

    // Bevel
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.stroke();

    ctx.restore();

    if (isSelected) {
      this.drawHandles(ctx, this.x, this.y, this.radiusX * 2, this.radiusY * 2);
    }
  }

  isPointInside(x: number, y: number): boolean {
    const local = this.getLocalPoint(x, y, this.x, this.y);
    return (local.x * local.x) / (this.radiusX * this.radiusX) + (local.y * local.y) / (this.radiusY * this.radiusY) <= 1;
  }

  checkHandles(x: number, y: number): 'ROTATE' | 'RESIZE' | null {
    const local = this.getLocalPoint(x, y, this.x, this.y);

    // Rotate handle
    if (Math.abs(local.x) <= 10 && Math.abs(local.y - (-this.radiusY - 20)) <= 10) return 'ROTATE';

    // Resize handle
    if (Math.abs(local.x - (this.radiusX + 9)) <= 10 && Math.abs(local.y - (this.radiusY + 9)) <= 10) return 'RESIZE';

    return null;
  }
}

