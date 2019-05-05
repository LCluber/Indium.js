import { TouchStart }    from '../gestures/touchStart';
import { TouchMove }     from '../gestures/touchMove';
import { TouchEnd }      from '../gestures/touchEnd';
import { TouchCancel }   from '../gestures/touchCancel';
import { Tap }           from '../gestures/tap';
import { DoubleTap }     from '../gestures/doubletap';
import { Press }         from '../gestures/press';
import { Swipe }         from '../gestures/swipe';
import { IGestures }     from '../interfaces';
import { THTMLElements } from '../types';
import { Logger }        from '@lcluber/mouettejs';
import { Vector2 }       from '@lcluber/type6js';

export abstract class Zone {

  htmlElement: THTMLElements;
  gestures: IGestures;

  constructor() {
    this.htmlElement = null;
    // var width = this.htmlElement.offsetWidth;
    // var height = this.htmlElement.offsetHeight;
    this.gestures = {
      touchStart: new TouchStart(),
      touchMove:  new TouchMove(),
      touchEnd:   new TouchEnd(),
      touchCancel:new TouchCancel(),
      tap:        new Tap(),
      doubleTap:  new DoubleTap(),
      press:      new Press(),
      swipe:      new Swipe()
    };
  }

  public touchStart(callback: Function): void {
    this.gestures.touchStart.activate(callback);
  }

  public touchMove(callback: Function): void {
    this.gestures.touchMove.activate(callback);
  }

  public touchEnd(callback: Function): void {
    this.gestures.touchEnd.activate(callback);
  }

  public touchCancel(callback: Function): void {
    this.gestures.touchCancel.activate(callback);
  }

  public tap(callback: Function): void {
    this.gestures.tap.activate(callback);
  }

  public doubleTap(callback: Function): void {
    this.gestures.doubleTap.activate(callback);
  }

  public press(callback: Function): void {
    this.gestures.press.activate(callback);
  }

  public swipe(callback: Function): void {
    this.gestures.swipe.activate(callback);
  }

  abstract contains(touchPosition: Vector2): boolean;
}
