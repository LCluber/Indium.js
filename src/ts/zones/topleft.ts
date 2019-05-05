import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class TopLeft extends Zone implements IZone {

  private limit: number ;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  public contains(touchPosition: Vector2): boolean {
    if (touchPosition.y < this.limit) {
      return true;
    }
    return false;
  }

}
