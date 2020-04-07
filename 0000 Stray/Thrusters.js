function Thrusters(pos, battery) {

  // STATUS ////////////////////////////////////////////////////////////////////////
  this.integrity = 100;
  this.on = true;
  this.firing = false;

  // SPATIAL ///////////////////////////////////////////////////////////////////////
  this.maxSpeed = 2;
  const accelerationRate = 0.01;
  const rotationSpeed = 2;
  this.acceleration = createVector(0, 0);
  let angle = 0;

  // ENERGY ////////////////////////////////////////////////////////////////////////
  const energySource = battery;
  const energyDrain = 1;
  let emptyBatteryEvent = false;

  // VISUAL ///////////////////////////////////////////////////////////////////////
  const blinkInterval = 20;
  const blinkIntervalLightUp = 5;

  this.update = function() {
    if (battery.charge <= 0 && emptyBatteryEvent === false) {
      this.on = false;
      this.firing = false;
      emptyBatteryEvent = true;
    }
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
        energySource.drain(energyDrain);

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
    if(keyIsDown(65) && this.on) {
      fill("red")
    }
    else fill(0);
    ellipse(20, -10, 15, 15);

    // Clockwise Rotation Indicator
    if(keyIsDown(68) && this.on) {
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