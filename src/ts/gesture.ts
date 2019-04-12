import { Zone } from './zone';
import { TGesture } from './types';
import { Is } from '@lcluber/chjs';
import { Vector2 } from '@lcluber/type6js';

export class Gesture {
  zone: Zone | null;

  constructor (type: TGesture, zone?:Zone) {
    if(this.hasOwnProperty(type) && Is.function(this[type])){
      this[type]();
      this.zone = zone || null;
    }
  }

  // A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
  // between the given interval and position. The delay option can be used to recognize multi-taps without firing
  // a single tap.
  //
  // The eventData from the emitted event contains the property `tapCount`, which contains the amount of
  // multi-taps being recognized.
  private tap(): void {

  }

  private doubleTap(): void {

  }

  private pan(): void {

  }

  private press(): void {

  }

}
