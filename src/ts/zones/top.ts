import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class Top extends Zone implements IZone {

  private limit: number ;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementHeight = this.htmlElement!.offsetHeight;
    let limit = this.limit * elementHeight;
    if (touchPosition.y <= limit) {
      return true;
    }
    return false;
  }

}
