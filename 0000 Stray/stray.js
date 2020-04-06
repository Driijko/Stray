document.documentElement.style.overflow = 'hidden';
let logged = false;

let ship;
let camera;

function setup() {
  createCanvas(3000, 3000);
  ship = new Ship(100, 100);
  camera = new Camera();
}



function draw() {

  background(0);

  fill("red");
  rect(1500, 200, 500, 500);

  ship.update();

  camera.followShip();

  ship.display();
  

}