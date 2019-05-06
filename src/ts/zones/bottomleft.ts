import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class BottomLeft extends Zone implements IZone {

  private bottomLimit: number;
  private leftLimit: number;

  constructor(bottomLimit: number, leftLimit: number) {
    super();
    this.bottomLimit = bottomLimit;
    this.leftLimit = leftLimit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementWidth = this.htmlElement!.offsetWidth;
    let elementHeight = this.htmlElement!.offsetHeight;
    let bottomLimit = elementHeight - this.bottomLimit * elementHeight;
    let leftLimit = this.leftLimit * elementWidth;
    if (touchPosition.y >= bottomLimit && touchPosition.x <= leftLimit) {
      return true;
    }
    return false;
    
  }

}
