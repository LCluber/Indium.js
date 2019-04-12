import { Gesture } from './gesture';
import { ContactPoint } from './contact';
import { Zone } from './zone';
//import { Zone } from './types';
import { Dom, } from '@lcluber/weejs';
import { Logger } from '@lcluber/mouettejs';

// export interface Touch {
//   identifier:number;
//     target:EventTarget;
//     screenX:number;
//     screenY:number;
//     clientX:number;
//     clientY:number;
//     pageX:number;
//     pageY:number;
// }

export type HTMLElements = HTMLElement | HTMLCanvasElement;

export class Screen {

  htmlElement: HTMLElements;
  //commands: Command[];
  ongoingTouches: ContactPoint[];
  zones: Zone[];
  gestures: Gesture[];

  constructor(htmlElementId: string) {
    this.htmlElement = Dom.findById(htmlElementId);
    this.initListeners();
    //this.commands = [];
    this.ongoingTouches = [];
  }

  // private addZone(zone: Zone) {
  //   this.zones.push(zone);
  // }

  public addGesture(gesture: Gesture) {
    this.gestures.push(gesture);
  }

  private initListeners(): void {
    //touch listeners
    this.htmlElement.addEventListener("touchstart", this.handleStart, false);
    this.htmlElement.addEventListener("touchend", this.handleEnd, false);
    this.htmlElement.addEventListener("touchcancel", this.handleCancel, false);
    this.htmlElement.addEventListener("touchmove", this.handleMove, false);

  }

  private handleStart(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let touch of touches) {
      //console.log("touchstart:" + i + "...");
      this.ongoingTouches.push(new Gesture(touch));
    }
  }

  private handleMove(event: TouchEvent): void {
    let touches = event.changedTouches;
    for (let touch of touches) {
      let id = this.getOngoingTouchId(touch.identifier);
      if (id) {
        this.ongoingTouches[id].update(touch);
        //this.ongoingTouches.splice(id, 1, touch);
      }
    }
  }

  private handleEnd(event: TouchEvent): void {
    let touches = event.changedTouches;

    for (let touch of touches) {
      let id = this.getOngoingTouchId(touch.identifier);
      if (id) {
        this.ongoingTouches[id].end();
        this.ongoingTouches.splice(id, 1);  // remove it; we're done
      }
    }
  }

  private handleCancel(event: TouchEvent): void{
    event.preventDefault();
    let touches = event.changedTouches;

    for (let touch of touches) {
      let id = this.getOngoingTouchId(touch.identifier);
      if (id) {
        this.ongoingTouches.splice(id, 1);  // remove it; we're done
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
