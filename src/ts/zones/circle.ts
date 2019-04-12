import { Circle as T6Circle, Vector2 } from '@lcluber/type6js';

export class Circle {

  private circle: T6Circle ;

  constructor(positionX: number, positionY: number, radius: number) {
    this.circle = new T6Circle( positionX, positionY, radius );
  }

  private contains(touchPosition: Vector2): boolean {
    if (this.circle.contains(touchPosition)) {
      return true;
    }
    return false;
  }

}
