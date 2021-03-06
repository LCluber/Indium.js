import { Gesture } from './gesture';

// A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
// between the given interval and position. The delay option can be used to recognize multi-taps without firing
// a single tap.
//
// The eventData from the emitted event contains the property `tapCount`, which contains the amount of
// multi-taps being recognized.

// Click event has 300 millisecond delay in the mobile web. the essence of tap is touchend. but to judge the coordinates of the finger of touchstart and touchend when the coordinates of the hand x, y direction shift to less than 30 pixels. less than 30 pixels will trigger tap.

export class TouchEnd extends Gesture {

  constructor() {
    super();
  }

  // we only allow little movement
  // and we've reached an end event, so a tap is possible


}
