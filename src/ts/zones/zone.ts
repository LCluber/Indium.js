import { TouchStart } from '../gestures/touchStart';
import { TouchMove }  from '../gestures/touchMove';
import { TouchEnd }   from '../gestures/touchEnd';
import { TouchCancel }from '../gestures/touchCancel';
import { Tap }        from '../gestures/tap';
import { DoubleTap }  from '../gestures/doubletap';
import { Press }      from '../gestures/press';
import { Swipe }      from '../gestures/swipe';
import { IGestures }  from '../interfaces';
import { Logger }     from '@lcluber/mouettejs';

export class Zone {

  gestures: Partial<IGestures>;

  constructor() {
    this.gestures = {};
  }

  // private addZone(zone: Zone) {
  //   this.zones.push(zone);
  // }

  public touchStart(callback: Function): void {
    this.gestures.touchStart = new TouchStart(callback);
  }

  public touchMove(callback: Function): void {
    this.gestures.touchMove = new TouchMove(callback);
  }

  public touchEnd(callback: Function): void {
    this.gestures.touchEnd = new TouchEnd(callback);
  }

  public touchCancel(callback: Function): void {
    this.gestures.touchCancel = new TouchCancel(callback);
  }

  public tap(callback: Function): void {
    this.gestures.tap = new Tap(callback);
  }

  public doubleTap(callback: Function): void {
    this.gestures.doubleTap = new DoubleTap(callback);
  }

  public press(callback: Function): void {
    this.gestures.press = new Press(callback);
  }

  public swipe(callback: Function): void {
    this.gestures.swipe = new Swipe(callback);
  }
}
