function Thrusters(pos, battery) {

  // CONSTANTS
  this.maxSpeed = 2;
  const accelerationRate = 0.01;
  const blinkInterval = 20;
  const blinkIntervalLightUp = 5;
  const rotationSpeed = 2;

  const energySource = battery;
  const energyDrain = 1;

  // VARIABLES
  this.acceleration = createVector(0, 0);
  this.on = true;
  this.firing = false;
  let angle = 0;

  this.update = function() {
    if (this.on) {

      // Rotate Thrusters
      if (keyIsDown(65) && !(keyIsDown(68))) {
        angle -= rotationSpeed;
        if (angle < 0) angle = 360 + angle; 
      }
      if (keyIsDown(68) && !(keyIsDown(65))) {
        angle = (angle + rotationSpeed) % 360;
      }

      // Fire Thrusters
      if (keyIsDown(32)) {
        if (this.firing === false) this.firing = true;

        // Drain Battery
        if(energySource.drain(energyDrain) === false) {
          ship.energyFailure = true;
        };

        this.acceleration = p5.Vector.fromAngle(radians(angle));
        this.acceleration.setMag(accelerationRate);
      }
      
      if (this.firing && !(keyIsDown(32))) {
        this.firing = false;
      }
    }
  }

  this.display = function(shipPos, shipSize) {

    push();

    translate(shipPos.x, shipPos.y);
    angleMode(DEGREES)
    rotate(angle);

    // Draw thruster ring
    strokeWeight(6);
    stroke(0);
    fill(0, 0);
    ellipseMode(CENTER);
    ellipse(0, 0, shipSize - 10, shipSize - 10);

    // Thruster indicators
    strokeWeight(2);

    // Counter-clockwise Rotation Indicator
    stroke(255);
    if(keyIsDown(65)) {
      fill("red")
    }
    else fill(0);
    ellipse(20, -10, 15, 15);

    // Clockwise Rotation Indicator
    if(keyIsDown(68)) {
      fill("red")
    }
    else fill(0);
    ellipse(20, 10, 15, 15);

    // Firing Indicator
    if (this.firing) {
      if ((frameCount % blinkInterval) > blinkInterval - blinkIntervalLightUp) {
        fill(255);
      }
      else fill(0);
    }
    else {
      fill(0);
    }
    ellipse(-20, 0, 20, 20);

    pop();

  }
}