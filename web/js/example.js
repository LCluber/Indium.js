
function shipMove(touch) {
  console.log('tuch',touch);
}


function shipStop(touch) {
  console.log('end',touch);
}

var touchScreen = new Indium.Screen('myCanvas');
touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
