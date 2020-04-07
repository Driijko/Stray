function Battery() {
  const capacity = 300;
  this.charge = capacity;
  const screenPos = createVector(50, windowHeight - 50);
  let translateOffset = createVector(0, 0);

  this.drain = function(amount) {
    if (this.charge < amount) {
      return false;
    }
    else {
      this.charge -= amount;
      return true;
    } 
  }

  this.replenish = function(amount) {
    if (this.charge + amount >= capacity) {
      this.charge = capacity;
      return true;
    }
    else this.charge += amount;
    return false;
  }

  this.display = function() {
    
    translateOffset.set(fixedPos());

    push();
    translate(translateOffset.x, translateOffset.y);

    // HUD battery capacity
    strokeWeight(5);
    stroke("green");
    fill(0);
    rect(screenPos.x, screenPos.y, 200, 20);

    // HUD battery current charge
    fill(255, 100, 0);
    strokeWeight(0);
    rect(screenPos.x, screenPos.y + 2, map(this.charge, 0, capacity, 0, 198), 16);

    pop();
  }
}