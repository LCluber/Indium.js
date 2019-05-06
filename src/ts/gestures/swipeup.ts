
import { Vector2 } from '@lcluber/type6js';
import { Gesture } from './gesture';

// Here need to pay attention, when the touchstart's hand coordinates and touchend coordinates x, Y direction shift to more than 30, to determine the swipe, less than 30 will judge tap. So the user is from top to bottom, or from bottom to top, or from left to right, from right to left slide? Can be based on the above three judgments, the specific code is as follows:

export class SwipeUp extends Gesture {
  public maxDuration: number = 750;
  public minDuration: number =  30;
  public maxMovement: number =   0;
  public absoluteDirection: Vector2 = new Vector2();

  constructor() {
    super();
  }

  public getDirection(direction: Vector2) {
    this.absoluteDirection.absoluteVector(direction);
    return this.absoluteDirection.x >= this.absoluteDirection.y ? (this.absoluteDirection.x > 0 ? 'Left' : 'Right') : (this.absoluteDirection.y > 0 ? 'Up' : 'Down');
  }


}
