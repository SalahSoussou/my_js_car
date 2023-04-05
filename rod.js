class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;
    this.left = x - width / 2;
    this.right = x + width / 2;
    const infinity = 1000000;
    this.top = -infinity;
    this.buttom = infinity;
    const topLeft = { x: this.left, y: this.top };
    const bottomLeft = { x: this.left, y: this.buttom };
    const topRight = { x: this.right, y: this.top };
    const bottomRigt = { x: this.right, y: this.buttom };
    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRigt],
    ];
  }
  laneCenter(i) {
    const laneWidth = this.width / this.laneCount;
    return (
      this.left + laneWidth / 2 + Math.min(i, this.laneCount - 1) * laneWidth
    );
  }
  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.setLineDash([20, 20]);
    for (let i = 1; i <= this.laneCount - 1; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.buttom);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    this.borders.forEach((e) => {
      ctx.beginPath();
      ctx.moveTo(e[1].x, e[1].y);
      ctx.lineTo(e[0].x, e[0].y);
      ctx.stroke();
    });
  }
}

export default Road;
