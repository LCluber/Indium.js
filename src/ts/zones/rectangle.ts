import { Zone } from './zone';
import { Rectangle as T6Rectangle, Vector2 } from '@lcluber/type6js';

export class Rectangle extends Zone {

  private rectangle: T6Rectangle ;

  constructor(positionX: number, positionY: number, sizeX: number, sizeY: number) {
    super();
    this.rectangle = new T6Rectangle( positionX, positionY, sizeX, sizeY );
  }

  private contains(touchPosition: Vector2): boolean {
    // if (this.rectangle.contains(touchPosition)) {
    //   return true;
    // }
    return false;
  }

}
