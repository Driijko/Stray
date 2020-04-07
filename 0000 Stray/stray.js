document.documentElement.style.overflow = 'hidden';
let logged = false;

let ship;
let shipMenu;
let camera;
let mode = "play";

function setup() {
  createCanvas(3000, 3000);
  ship = new Ship(100, 100);
  camera = new Camera();
  shipMenu = new ShipMenu();
}



function draw() {

  background(0);

  if (mode === "play") {
    shipMenu.displayMenu();

    fill("red");
    rect(1500, 200, 500, 500);
  
    fill(0);
    strokeWeight(20);
    stroke(255);
    rect(400, 400, 600, 600);
  
    ship.update();
  
    camera.followShip();
  
    ship.display();
  }
  else if (mode === "menu") {
    shipMenu.display();
  }
}