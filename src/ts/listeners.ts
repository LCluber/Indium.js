import { TouchHandler } from './touchhandler';
import { THTMLElements } from './types';
import { IGestures }  from './interfaces';
import { Logger } from '@lcluber/mouettejs';


export class Listeners {

  gestures: IGestures;
  ongoingTouches: TouchHandler[];

  constructor(htmlElement: THTMLElements, gestures: IGestures) {
    this.gestures = gestures;
    htmlElement.addEventListener("touchstart",  this.handleStart.bind( this ),   false);
    htmlElement.addEventListener("touchend",    this.handleEnd.bind( this ),     false);
    htmlElement.addEventListener("touchcancel", this.handleCancel.bind( this ),  false);
    htmlElement.addEventListener("touchmove",   this.handleMove.bind( this ),    false);
    this.ongoingTouches = [];
  }

  public handleStart(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      console.log("touchstart:", touch);
      this.ongoingTouches.push(new TouchHandler(touch.identifier, touch.pageX, touch.pageY ));
    }
  }

  public handleMove(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        console.log("touchmove:", touch);
        this.ongoingTouches[index].update(touch);
        this.gestures.press.trigger(this.ongoingTouches[index]);
        //this.ongoingTouches.splice(id, 1, touch);
      }
    }
  }

  public handleEnd(event: TouchEvent): void {
    let touches = event.changedTouches;

    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        this.ongoingTouches[index].end();
        console.log("touchend:", touch);
        this.ongoingTouches.splice(index, 1);  // remove it; we're done
      }
    }
  }

  public handleCancel(event: TouchEvent): void{
    event.preventDefault();
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        console.log("touchcancel:", touches);
        this.ongoingTouches.splice(index, 1);  // remove it; we're done
      }
    }
  }

  private getOngoingTouchId(id: number): number | null {
    for (let i = 0; i < this.ongoingTouches.length; i++) {
      if (this.ongoingTouches[i].identifier === id) {
        return i;
      }
    }
    return null;    // not found
  }

  // private copyTouch(touch: Touch) {
  //   return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
  // }
}
