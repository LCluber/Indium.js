
import { Gesture } from './gesture';

export class DoubleTap extends Gesture {
  public maxDuration: number = 750;
  public minDuration: number = 100; // should be between 125 and 500 ms
  public maxMovement: number =  30;

  constructor() {
    super()
  }

}
