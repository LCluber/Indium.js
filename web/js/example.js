
function shipMove(touch) {
  console.log('move',touch);
}

function shipStop(touch) {
  console.log('end',touch);
}

function shipShoot(touch) {
  console.log('shoot',touch);
}


var touchScreen = new Indium.TouchScreen('myCanvas');

touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
touchScreen.touchCancel(shipStop);

var right = new Indium.Right(0.3);
right.touchStart(shipShoot);
console.log(right);
touchScreen.addZone(right);
