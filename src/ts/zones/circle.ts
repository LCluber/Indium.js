import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Circle as T6Circle, Vector2 } from '@lcluber/type6js';

export class Circle extends Zone implements IZone {

  private circle: T6Circle ;

  constructor(positionX: number, positionY: number, radius: number) {
    super();
    this.circle = new T6Circle( positionX, positionY, radius );
  }

  public contains(touchPosition: Vector2): boolean {
    return true;
    //return this.circle.isInside(touchPosition);
  }

}
