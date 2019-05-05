import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Vector2 } from '@lcluber/type6js';

export class Left extends Zone implements IZone {

  private limit: number;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  public contains(touchPosition: Vector2): boolean {
    let elementWidth = this.htmlElement!.offsetWidth;
    let limit = this.limit * elementWidth;
    if (touchPosition.x <= limit) {
      return true;
    }
    return false;
  }

}
