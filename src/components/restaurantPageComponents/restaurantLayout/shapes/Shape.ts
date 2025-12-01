export abstract class Shape {
  x: number;
  y: number;
  color: string;
  rotation: number; // Radians

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.rotation = 0;
  }

  abstract draw(
    ctx: CanvasRenderingContext2D,
    isSelected: boolean,
    getWoodPattern?: (color: string) => CanvasPattern | string
  ): void;
  abstract isPointInside(x: number, y: number): boolean;
  abstract checkHandles(x: number, y: number): 'ROTATE' | 'RESIZE' | null;

  getLocalPoint(x: number, y: number, cx: number, cy: number) {
    const dx = x - cx;
    const dy = y - cy;
    const cos = Math.cos(-this.rotation);
    const sin = Math.sin(-this.rotation);
    return {
      x: dx * cos - dy * sin,
      y: dx * sin + dy * cos,
    };
  }

  drawHandles(ctx: CanvasRenderingContext2D, cx: number, cy: number, width: number, height: number, showRotationHandle: boolean = true) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.rotation);

    // Rotation handle (top)
    if (showRotationHandle) {
      ctx.beginPath();
      ctx.arc(0, -height / 2 - 20, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#2980b9';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.stroke();
    }

    // Resize handle (bottom-right)
    ctx.beginPath();
    ctx.rect(width / 2 + 5, height / 2 + 5, 8, 8);
    ctx.fillStyle = '#2980b9';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    // Selection border
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(-width / 2 - 2, -height / 2 - 2, width + 4, height + 4);
    ctx.setLineDash([]);

    ctx.restore();
  }
}

