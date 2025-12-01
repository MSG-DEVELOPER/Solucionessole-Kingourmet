import { Shape } from './Shape';

export class Window extends Shape {
  width: number;
  height: number;

  constructor(x: number, y: number) {
    super(x, y, '#87CEEB');
    this.width = 60;
    this.height = 10;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    // Glass
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    // Frame
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#34495e';
    ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);

    // Crossbars/Mullions
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -this.height / 2);
    ctx.lineTo(0, this.height / 2);
    ctx.stroke();

    // Reflection lines
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.moveTo(-this.width / 2 + 5, -this.height / 2 + 2);
    ctx.lineTo(-this.width / 2 + 15, this.height / 2 - 2);
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

