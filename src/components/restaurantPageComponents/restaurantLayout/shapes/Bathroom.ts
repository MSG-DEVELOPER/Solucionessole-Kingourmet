import { Shape } from './Shape';

export class Bathroom extends Shape {
  width: number;
  height: number;

  constructor(x: number, y: number) {
    super(x, y, '#3498db');
    this.width = 40;
    this.height = 40;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    // Floor tile background
    ctx.fillStyle = '#ecf0f1';
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.strokeStyle = '#bdc3c7';
    ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
    // Grid lines for tiles
    ctx.beginPath();
    ctx.moveTo(0, -this.height / 2);
    ctx.lineTo(0, this.height / 2);
    ctx.moveTo(-this.width / 2, 0);
    ctx.lineTo(this.width / 2, 0);
    ctx.stroke();

    // Toilet Tank
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#7f8c8d';
    ctx.fillRect(-10, -15, 20, 8);
    ctx.strokeRect(-10, -15, 20, 8);

    // Toilet Bowl
    ctx.beginPath();
    ctx.ellipse(0, 5, 8, 10, 0, 0, Math.PI * 2);
    ctx.fill();
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

