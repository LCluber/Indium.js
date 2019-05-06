import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class TopRight extends Zone implements IZone {

  private topLimit: number;
  private rightLimit: number;

  constructor(topLimit: number, rightLimit: number) {
    super();
    this.topLimit = topLimit;
    this.rightLimit = rightLimit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementWidth  = this.htmlElement!.offsetWidth;
    let elementHeight = this.htmlElement!.offsetHeight;
    let topLimit = this.topLimit * elementHeight;
    let rightLimit = elementWidth - this.rightLimit * elementWidth;
    if (touchPosition.y <= topLimit && touchPosition.x >= rightLimit) {
      return true;
    }
    return false;
    
  }

}
