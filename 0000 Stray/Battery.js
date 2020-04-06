function Battery() {
  const capacity = 2000;
  let charge = capacity;

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
}