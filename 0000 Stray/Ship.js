function Ship(x, y) {

  // Spatial
  this.pos = createVector(x, y);
  this.size = 50;
  this.vel = createVector(0, 0);

  // COMPONENTS //////////////////////////////////////////////////////////////////////////////

  this.energyFailure = false;

  // Battery
  const battery = new Battery();

  // Thrusters
  const thrusters = new Thrusters(this.pos, battery);
  this.vel.limit(thrusters.maxSpeed);


  this.update = function() {
    thrusters.update();

    if (thrusters.firing ) {
      this.vel.add(thrusters.acceleration);
    }
      
    this.pos.add(this.vel);
  }

  this.display = function() {

    // Draw Ship Main Body
    strokeWeight(0);

    // Indicate energy failure
    if (this.energyFailure) fill(50);
    else fill(255);

    ellipseMode(CENTER)
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    // Draw components
    thrusters.display(this.pos, this.size);
  }
}