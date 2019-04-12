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

export class TouchPoint extends Touch {

  startTime:      number;
  endTime:        number;
  totalTime:      number;
  startPosition:  Vector2;
  lastPosition:   Vector2;
  direction:      Vector2;

  constructor (touchInit: TouchInit) {
    super(touchInit);
    this.startTime      = + new Date();
    this.startPosition  =   new Vector2(this.pageX, this.pageY);
    this.lastPosition   =   new Vector2();
    this.direction      =   new Vector2();
  }

  public update(touchInit: TouchInit): void {
    this.lastPosition = new Vector2(touchInit.pageX, touchInit.pageY);
    this.direction.subtractVectors(this.lastPosition, this.startPosition);
  }

  public end(): void {
    this.endTime   = + new Date();
    this.totalTime = this.endTime - this.startTime;
  }

}
