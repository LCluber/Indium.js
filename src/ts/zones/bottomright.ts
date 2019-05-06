import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class BottomRight extends Zone implements IZone {

  private bottomLimit: number;
  private rightLimit: number;

  constructor(bottomLimit: number, rightLimit: number) {
    super();
    this.bottomLimit = bottomLimit;
    this.rightLimit = rightLimit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementWidth  = this.htmlElement!.offsetWidth;
    let elementHeight = this.htmlElement!.offsetHeight;
    let bottomLimit = elementHeight - this.bottomLimit * elementHeight;
    let rightLimit  = elementWidth - this.rightLimit * elementWidth;
    if (touchPosition.y >= bottomLimit && touchPosition.x >= rightLimit) {
      return true;
    }
    return false;
    
  }

}
