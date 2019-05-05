import { Zone } from './zone';
import { IZone }  from '../interfaces';
import { Rectangle as T6Rectangle, Vector2 } from '@lcluber/type6js';

export class Rectangle extends Zone implements IZone {

  private rectangle: T6Rectangle ;

  constructor(positionX: number, positionY: number, sizeX: number, sizeY: number) {
    super();
    this.rectangle = new T6Rectangle( positionX, positionY, sizeX, sizeY );
  }

  public contains(touchPosition: Vector2): boolean {
    return this.rectangle.isInside(touchPosition);
  }

}
