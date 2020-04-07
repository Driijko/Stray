function ShipMenu() {

  let translationOffset = createVector(0, 0);
  const systemNames = [
    "ENERGY",
    "PROPULSION",
  ];
  let hoverOver;
  let currentSelection = null;
  const boxSize = 200;

  this.displayMenu = function() {
    if (keyIsDown(77)) {
      mode = "menu";
    }
  }

  this.handleMouse = function() {
   
    translationOffset.set(fixedPos());
    push()
    translate(translationOffset.x, translationOffset.y);

    hoverOver = null;
    cursor("default");

    rect((windowWidth / 2) - 700, (windowHeight / 2) - 25, boxSize, 50);
    
    if (collidePointRect(Math.floor(mouseX - translationOffset.x), Math.floor(mouseY - translationOffset.y), (windowWidth / 2) - 700, (windowHeight / 2) - 25, boxSize, 50)) {

      cursor("pointer");
      if (mouseIsPressed) {
        mode = "play";
        cursor("crosshair");
      }
    }

    for (let i = 0 ; i < systemNames.length; i++) {
      rect((windowWidth / 2) - 400, (windowHeight / 2) - 50 + (50 * i), boxSize, 50);
      if(collidePointRect(Math.floor(mouseX - translationOffset.x), Math.floor(mouseY - translationOffset.y), (windowWidth / 2) - 400, (windowHeight / 2) - 50 + (50 * i), boxSize, 50)) {
        hoverOver = systemNames[i];
        cursor("pointer");
      }
    }

    if (mouseIsPressed) {
      console.log(Math.floor(mouseX + translationOffset.x), Math.floor(mouseY - translationOffset.y));
      if (!(currentSelection && hoverOver === null)) {
        currentSelection = hoverOver;
      }
    }

    pop();
  }

  this.display = function() {

    translationOffset.set(fixedPos());
    push()
    translate(translationOffset.x, translationOffset.y);

    strokeWeight(5);
    textAlign(CENTER, CENTER);

    // RESUME BUTTON
    stroke("blue");
    fill(135, 206, 235);
    rect((windowWidth / 2) - 700, (windowHeight / 2) - 25, boxSize, 50);

    noStroke();
    fill('red');
    textSize(35);
    text("RESUME", (windowWidth / 2) - 700, (windowHeight / 2) - 25, boxSize, 50);


    // SYSTEM NAMES LIST
    textSize(25);

    for (let i = 0 ; i < systemNames.length ; i++) {

      let textFill;
      let rectFill;

      if (currentSelection === systemNames[i]) {
        textFill = 0;
        rectFill = "magenta";
      }
      else {
        textFill = 255;
        rectFill = 0;
      }

      stroke(255);
      fill(rectFill);
      rect((windowWidth / 2 ) - 400, (windowHeight / 2) - 50 + (50 * i), boxSize, 50);

      noStroke();
      fill(textFill);
      text(`${systemNames[i]}`, (windowWidth / 2 ) - 400, (windowHeight / 2) - 50 + (50 * i), boxSize, 50)

    }

    // CURRENT SELECTION
    fill(0);
    stroke(255);
    rect((windowWidth / 2) - boxSize, (windowHeight / 2) - boxSize, 600, 400);

    if (currentSelection === null) {
      noStroke();
      fill(255);  
      text("Select a system", (windowWidth / 2) - boxSize, (windowHeight / 2) - boxSize, 600, 400);
    }
    else {
      translate((windowWidth / 2) - boxSize, (windowHeight / 2) - boxSize);

      if (currentSelection === "ENERGY") {
        textSize(35);
        stroke("yellow");
        rect(0, 50, 600, 50);
        text("BATTERY LEVEL 0", 0, 50, 600, 50);
        noStroke();
        fill("yellow");
        textSize(25);
        text(`Capacity: ${ship.battery.capacity}`, 0, 50, 600, 300);
        text(`Current Charge: ${Math.floor(map(ship.battery.charge, 0, ship.battery.capacity, 0, 100))}%`, 0, 50, 600, 400);
      }
      else if (currentSelection === "PROPULSION") {
        textSize(35);
        stroke("blue");
        rect(0, 50, 600, 50);
        text("BASIC THRUSTERS", 0, 50, 600, 50);
        noStroke();
        fill("blue");
        textSize(25);
        text("Rotation Speed: Low", 0, 50, 600, 250);
        text("Acceleration: Low", 0, 50, 600, 350);
        text("Max Speed: Low", 0, 50, 600, 450);
        text("Precision: Low", 0, 50, 600, 550);
      }
    }
    pop();
  }
}