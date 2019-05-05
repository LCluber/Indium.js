import { TouchHandler } from '../touchhandler';
import { IGesture }     from '../interfaces';

export abstract class Gesture implements IGesture {
  public maxDuration: number;
  public minDuration: number; // should be between 125 and 500 ms
  public maxMovement: number;
  private callback: Function | null;

  constructor() {
    this.callback = null;
  }
  // we only allow little movement
  // and we've reached an end event, so a tap is possible

  public activate(callback: Function): void {
    this.callback = callback;
  }

  public trigger(touchHandler: TouchHandler): void {
    if (this.callback) {
      this.callback(touchHandler);
    }
  }

}
