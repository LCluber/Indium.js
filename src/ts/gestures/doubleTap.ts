import { TouchHandler } from '../touchhandler';

export class DoubleTap {
  public maxDuration: number = 750;
  public minDuration: number = 100; // should be between 125 and 500 ms
  public maxMovement: number =  30;
  public callback: Function; 
  
  constructor(callback: Function) {
    this.callback = callback;
  }
  // we only allow little movement
  // and we've reached an end event, so a tap is possible
  
  public trigger(touchHandler :TouchHandler){
    this.callback(touchHandler);
  }

}