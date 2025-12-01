import { Shape } from './Shape';

export class Wall extends Shape {
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, '#2c3e50');
    this.width = width;
    this.height = height;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    // Solid dark fill
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    // Double line border for architectural look
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#34495e';
    ctx.beginPath();
    ctx.moveTo(-this.width / 2 + 4, -this.height / 2 + 4);
    ctx.lineTo(this.width / 2 - 4, -this.height / 2 + 4);
    ctx.moveTo(-this.width / 2 + 4, this.height / 2 - 4);
    ctx.lineTo(this.width / 2 - 4, this.height / 2 - 4);
    ctx.stroke();

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

    if (Math.abs(local.x) <= 10 && Math.abs(local.y - (-this.height / 2 - 20)) <= 10) return 'ROTATE';
    if (Math.abs(local.x - (this.width / 2 + 9)) <= 10 && Math.abs(local.y - (this.height / 2 + 9)) <= 10) return 'RESIZE';
    return null;
  }
}

