import { Shape } from './Shape';

export class Door extends Shape {
  width: number;
  height: number;

  constructor(x: number, y: number) {
    super(x, y, 'none');
    this.width = 50;
    this.height = 50;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    // Frame
    ctx.fillStyle = '#fff';
    ctx.fillRect(-this.width / 2, -this.height / 2, 5, this.height);
    ctx.strokeRect(-this.width / 2, -this.height / 2, 5, this.height);

    // Door leaf (open 90 degrees)
    ctx.fillStyle = '#fff';
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, 5);
    ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, 5);

    // Swing arc
    ctx.beginPath();
    ctx.moveTo(-this.width / 2, -this.height / 2);
    ctx.arc(-this.width / 2, -this.height / 2, this.width, 0, Math.PI / 2);
    ctx.strokeStyle = '#95a5a6';
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

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

