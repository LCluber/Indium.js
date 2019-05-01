
export interface IGesture {
  maxDuration: number;
  minDuration: number;
  maxMovement: number;
  callback: Function;
  trigger: Function;
}

export interface IGestures {
  touchStart: IGesture;
  touchMove:  IGesture;
  touchEnd:   IGesture;
  touchCancel:IGesture;
  tap :       IGesture;
  doubleTap : IGesture;
  press :     IGesture;
  swipe :     IGesture;
  // [key: string]: Level
}
