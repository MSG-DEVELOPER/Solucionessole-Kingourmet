import { Shape } from './Shape';

export class Plant extends Shape {
  radius: number;

  constructor(x: number, y: number) {
    super(x, y, '#2ecc71');
    this.radius = 20;
  }

  draw(ctx: CanvasRenderingContext2D, isSelected: boolean) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Leaves
    for (let i = 0; i < 8; i++) {
      ctx.save();
      ctx.rotate(i * (Math.PI / 4));
      ctx.beginPath();
      ctx.ellipse(10, 0, 10, 4, 0, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? '#27ae60' : '#2ecc71';
      ctx.fill();
      ctx.restore();
    }

    // Center
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#f1c40f';
    ctx.fill();

    ctx.restore();

    if (isSelected) {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Resize handle
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

