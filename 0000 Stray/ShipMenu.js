function ShipMenu() {

  let currentSelection;

  this.displayMenu = function() {
    if (keyIsDown(77)) {
      mode = "menu";
    }
  }

  this.handleMouse = function() {
    if (mousePressed()) {
      if collidePointRect()
    }
  }

  this.display = function() {
    strokeWeight(5);
    stroke(255);
    fill(0);
    rect((windowWidth / 2) - 200, (windowHeight / 2) - 200, 600, 400);
    for(let i = 0; i < 2 ; i++) {
      rect((windowWidth / 2) - 400, (windowHeight / 2) - 50 + (i * 50), 200, 50);
    }
    textSize(25);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("PROPULSION", (windowWidth / 2) - 400, (windowHeight / 2) - 50, 200, 50);
    text("ENERGY", (windowWidth / 2) - 400, (windowHeight / 2), 200, 50)
  }
}