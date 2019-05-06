import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class TopLeft extends Zone implements IZone {

  private topLimit: number ;
  private leftLimit: number ;

  constructor(topLimit: number, leftLimit: number) {
    super();
    this.topLimit = topLimit;
    this.leftLimit = leftLimit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementWidth  = this.htmlElement!.offsetWidth;
    let elementHeight = this.htmlElement!.offsetHeight;
    let topLimit = this.topLimit * elementHeight;
    let leftLimit = this.leftLimit * elementWidth;
    if (touchPosition.y <= topLimit && touchPosition.x <= leftLimit) {
      return true;
    }
    return false;
    
  }

}
