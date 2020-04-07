function logOnce(variable) {
  console.log(variable);
  logged = true;
}

function fixedPos(screenPos) {
  let translateOffsetX = 0;
  let translateOffsetY = 0;
  if(ship.pos.x > windowWidth / 2) {
    if (ship.pos.x > width - (windowWidth / 2)) {
      translateOffsetX = width - windowWidth;
    }
    else {
      translateOffsetX = ship.pos.x - (windowWidth / 2);
    }
  }
  if(ship.pos.y > windowHeight / 2) {
    if (ship.pos.y > height - (windowHeight / 2)) {
      translateOffsetY = height - windowHeight;
    }
    else {
      translateOffsetY = ship.pos.y - (windowHeight / 2);
    }
  }

  return createVector(translateOffsetX, translateOffsetY);
}

function collidePointRect (pointX, pointY, x, y, xW, yW) {
  if (pointX >= x &&         // right of the left edge AND
      pointX <= x + xW &&    // left of the right edge AND
      pointY >= y &&         // below the top AND
      pointY <= y + yW) {    // above the bottom
          return true;
  }
  return false;
}

// if (!(logged)) logOnce();