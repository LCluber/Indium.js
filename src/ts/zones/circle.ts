import { Zone } from './zone';
import { Circle as T6Circle, Vector2 } from '@lcluber/type6js';

export class Circle extends Zone {

  private circle: T6Circle ;

  constructor(positionX: number, positionY: number, radius: number) {
    super();
    this.circle = new T6Circle( positionX, positionY, radius );
  }

  private contains(touchPosition: Vector2): boolean {
    // if (this.circle.contains(touchPosition)) {
    //   return true;
    // }
    return false;
  }

}
