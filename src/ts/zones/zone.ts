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
