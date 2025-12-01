import { Shape } from './Shape';

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number, color: string) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean, getWoodPattern?: (color: string) => CanvasPattern | string) {
    if (!getWoodPattern) return;
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    // Shadow
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = getWoodPattern(this.color) as string | CanvasPattern;
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    // Bevel
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.restore();

    if (isSelected) {
      this.drawHandles(ctx, this.x + this.width / 2, this.y + this.height / 2, this.width, this.height);
    }
  }

  isPointInside(x: number, y: number): boolean {
    const local = this.getLocalPoint(x, y, this.x + this.width / 2, this.y + this.height / 2);
    return Math.abs(local.x) <= this.width / 2 && Math.abs(local.y) <= this.height / 2;
  }

  checkHandles(x: number, y: number): 'ROTATE' | 'RESIZE' | null {
    const cx = this.x + this.width / 2;
    const cy = this.y + this.height / 2;
    const local = this.getLocalPoint(x, y, cx, cy);

    // Rotate handle
    if (Math.abs(local.x) <= 10 && Math.abs(local.y - (-this.height / 2 - 20)) <= 10) return 'ROTATE';

    // Resize handle
    if (Math.abs(local.x - (this.width / 2 + 9)) <= 10 && Math.abs(local.y - (this.height / 2 + 9)) <= 10) return 'RESIZE';

    return null;
  }
}

