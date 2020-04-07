function Ship(x, y) {

  // SPATIAL ///////////////////////////////////////////////////////////////////////////////

  this.pos = createVector(x, y);
  this.size = 50;
  this.vel = createVector(0, 0);

  // COMPONENTS //////////////////////////////////////////////////////////////////////////////

  // Battery
  const battery = new Battery();

  // Thrusters
  const thrusters = new Thrusters(this.pos, battery);

  // STATUS /////////////////////////////////////////////////////////////////////////////////

  this.energyFailure = false;

  this.integrity = 100; // Generally speaking, status is measured as a percentage. 



  this.update = function() {

    if (battery.charge <= 0) {
      this.energyFailure = true;
    }

    thrusters.update();

    if (thrusters.firing ) {
      this.vel.add(thrusters.acceleration);
      this.vel.limit(thrusters.maxSpeed);
    }
      
    this.pos.add(this.vel);
  }

  this.display = function() {

    noStroke();

    // Indicate energy failure
    if (this.energyFailure) fill(50);
    else fill(255);

    // Ship Main Body
    ellipseMode(CENTER)
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    // Draw components
    thrusters.display(this.pos, this.size);
    battery.display();
  }
}