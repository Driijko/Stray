function Camera() {
  this.followShip = function() {
    if (ship.pos.x > (windowWidth / 2) && ship.pos.y > (windowHeight / 2)) {
      window.scrollTo(ship.pos.x - (windowWidth / 2), ship.pos.y - (windowHeight / 2));
    }
    else if (ship.pos.x > windowWidth / 2) {
      window.scrollTo(ship.pos.x - (windowWidth / 2), 0);
    }
    else if (ship.pos.y > windowHeight / 2) {
      window.scrollTo(0, ship.pos.y - (windowHeight/ 2))
    }
  }
}