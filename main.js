import Road from "./rod.js";
import Car from "./car.js";
import Controls from "./controls.js";

const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

cnv.width = 200;
cnv.height = window.innerHeight;

const road = new Road(cnv.width / 2, cnv.width * 0.9);
const car = new Car(road.laneCenter(1), 200, 30, 50);

function animate() {
  car.update();
  cnv.height = window.innerHeight;
  //   ctx.clearRect(0, 0, cnv.width, cnv.height);
  // ctx.save();
  ctx.translate(0, -car.y + cnv.height * 0.6);
  road.draw(ctx);
  car.draw(ctx);
  // ctx.restore();
  requestAnimationFrame(animate);
}
animate();
