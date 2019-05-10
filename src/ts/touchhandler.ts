import { Vector2 } from '@lcluber/type6js';
// touchInit: {
//        target: HTMLElement,
//        identifier: number,
//        clientX?: number,
//        clientY?: number,
//        screenY?: number,
//        screenX?: number,
//        pageY?: number,
//        pageX?: number,
//        radiusX?: number,
//        radiusY?: number,
//        rotationAngle?: number,
//        force?: number
//      })

export class TouchHandler /*extends Touch*/ {

  identifier:       number;
  startTime:        number;
  endTime:          number;
  totalTime:        number;
  startPosition:    Vector2;
  lastPosition:     Vector2;
  direction:        Vector2;
  radius:           Vector2;
  squaredDistance:  number;

  constructor (/*touchInit: TouchInit*/identifier: number, pageX: number, pageY: number, radiusX: number, radiusY: number) {
    // super(touchInit);
    this.identifier      =   identifier;
    this.startTime       = + new Date();
    this.startPosition   =   new Vector2(pageX, pageY);
    this.lastPosition    =   new Vector2(pageX, pageY);
    this.direction       =   new Vector2();
    this.radius          =   new Vector2(radiusX, radiusY);
    this.squaredDistance =   0;
  }

  public update(pageX: number, pageY: number, radiusX: number, radiusY: number): TouchHandler {
    this.lastPosition.set(pageX, pageY);
    this.radius.set(radiusX, radiusY);
    this.setDirection();
    this.setDistance();
    return this;
    // this.getGesture();
  }

  // private getGesture(){
  //
  // }
  //
  // private isPress() {
  //
  // }

  private setDirection(): void {
    this.direction.subtractVectors(this.lastPosition, this.startPosition);
  }

  private setDistance(): void {
    this.squaredDistance = this.lastPosition.getSquaredDistance(this.startPosition);
  }

  public end(): void {
    this.endTime   = + new Date();
    this.totalTime = this.endTime - this.startTime;
  }

}
