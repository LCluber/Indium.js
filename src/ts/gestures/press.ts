import { TouchHandler } from '../touchhandler';
// Touchstart will open a 750ms's setTimeout. the touchmove, touchend or tow fingers touch the screen will clear the timeout within 750ms. More than 750ms without touchend or touchmove will trigger longTap..

export class Press{

  public maxDuration: number =   0;
  public minDuration: number = 750;// should be between 125 and 500 ms
  public maxMovement: number =   0;
  public callback: Function;

  constructor(callback: Function) {
    this.callback = callback;
  }

  public trigger(touchHandler :TouchHandler){
    this.callback(touchHandler);
  }



}
