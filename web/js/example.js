
function shipMovements(touch) {
  console.log('tuch',touch);
}

var touchScreen = new Indium.Screen('myCanvas');
touchScreen.press(shipMovements);


