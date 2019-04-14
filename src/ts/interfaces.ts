
export interface IGesture {
  maxDuration: number;
  minDuration: number;
  maxMovement: number;
  callback: Function;
  trigger: Function;
}

export interface IGestures {
  tap :       IGesture;
  doubleTap : IGesture;
  press :     IGesture;
  swipe :     IGesture;
  // [key: string]: Level
}