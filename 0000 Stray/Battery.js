function Battery() {
  const capacity = 2000;
  let charge = capacity;
  const screenPos = createVector(50, windowHeight - 50);
  let translateOffset = createVector(0, 0);

  this.drain = function(amount) {
    console.log(charge);

    if (charge < amount) {
      return false;
    }
    else {
      charge -= amount;
      return true;
    } 
  }

  this.replenish = function(amount) {
    if (charge + amount >= capacity) {
      charge = capacity;
      return true;
    }
    else charge += amount;
    return false;
  }

  this.display = function() {
    
    if(ship.pos.x > windowWidth / 2) {
      if (ship.pos.x > width - (windowWidth / 2)) {
        translateOffset.x = width - windowWidth;
      }
      else {
        translateOffset.x = ship.pos.x - (windowWidth / 2);
      }
    }
    if(ship.pos.y > windowHeight / 2) {
      if (ship.pos.y > height - (windowHeight / 2)) {
        translateOffset.y = height - windowHeight;
      }
      else {
        translateOffset.y = ship.pos.y - (windowHeight / 2);
      }
    }

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
    rect(screenPos.x, screenPos.y + 2, map(charge, 0, capacity, 0, 198), 16);

    pop();
  }
}