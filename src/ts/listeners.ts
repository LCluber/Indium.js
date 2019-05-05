
import { TouchHandler }                    from './touchhandler';
import { THTMLElements, TZone, TGesture }  from './types';
import { IGestures }                       from './interfaces';
// import { Logger }                          from '@lcluber/mouettejs';


export class Listeners {

  gestures: IGestures;
  ongoingTouches: TouchHandler[];
  zones: TZone[];

  constructor(htmlElement: THTMLElements, gestures: IGestures) {
    this.gestures = gestures;
    htmlElement!.addEventListener('touchstart',  this.handleStart.bind( this ),   false);
    htmlElement!.addEventListener('touchmove',   this.handleMove.bind( this ),    false);
    htmlElement!.addEventListener('touchend',    this.handleEnd.bind( this ),     false);
    htmlElement!.addEventListener('touchcancel', this.handleCancel.bind( this ),  false);
    // htmlElement!.addEventListener('mousedown',   this.handleStart.bind( this ),   false);
    // htmlElement!.addEventListener('mousemove',   this.handleMove.bind( this ),    false);
    // htmlElement!.addEventListener('mouseup',     this.handleEnd.bind( this ),     false);

    this.ongoingTouches = [];
    this.zones = [];
  }

  public handleStart(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let touchHandler = new TouchHandler(touch.identifier, touch.pageX, touch.pageY );
      this.ongoingTouches.push(touchHandler);
      if(!this.checkZones(touchHandler, 'touchStart')) {
        this.gestures.touchStart.trigger(touchHandler);
      }
    }
  }

  public handleMove(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        let ongoingTouch = this.ongoingTouches[index];
        ongoingTouch.update(touch);
        if(!this.checkZones(ongoingTouch, 'touchMove')) {
          this.gestures.touchMove.trigger(ongoingTouch);
        }
      }
    }
  }

  public handleEnd(event: TouchEvent): void {
    let touches = event.changedTouches;

    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        let ongoingTouch = this.ongoingTouches[index];
        ongoingTouch.end();
        this.ongoingTouches.splice(index, 1);  // remove it; we're done
        if(!this.checkZones(ongoingTouch, 'touchEnd')) {
          this.gestures.touchEnd.trigger(ongoingTouch);
        }
      }
    }
  }

  public handleCancel(event: TouchEvent): void {
    event.preventDefault();
    let touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      let index = this.getOngoingTouchId(touch.identifier);
      if (index !== null) {
        let ongoingTouch = this.ongoingTouches[index];
        this.ongoingTouches.splice(index, 1);  // remove it; we're done
        if(!this.checkZones(ongoingTouch, 'touchCancel')) {
          this.gestures.touchCancel.trigger(ongoingTouch);
        }
      }
    }
  }

  private checkZones(ongoingTouch: TouchHandler, gesture: TGesture): boolean {
    for (let zone of this.zones) {
      if(zone.contains(ongoingTouch.lastPosition) && zone.gestures[gesture].trigger(ongoingTouch)) {
        return true;
      }
    }
    return false;
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
