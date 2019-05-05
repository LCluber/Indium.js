import { THTMLElements } from './types';
// import { Circle } from './zones/circle';
// import { Rectangle } from './zones/rectangle';
// import { Top } from './zones/top';
// import { Right } from './zones/right';
// import { Bottom } from './zones/bottom';
// import { Left } from './zones/left';
// import { TopLeft } from './zones/topleft';
// import { TopRight } from './zones/topright';
// import { BottomLeft } from './zones/bottomleft';
// import { BottomRight } from './zones/bottomright';


export interface IGesture {
  maxDuration: number;
  minDuration: number;
  maxMovement: number;
  activate:    Function;
  trigger:     Function;
}

export interface IGestures {
  touchStart:  IGesture;
  touchMove:   IGesture;
  touchEnd:    IGesture;
  touchCancel: IGesture;
  tap:         IGesture;
  doubleTap:   IGesture;
  press:       IGesture;
  swipe:       IGesture;
  [key: string]: IGesture
}

export interface IZone {
  htmlElement: THTMLElements;
  gestures: IGestures;
  contains: Function;
}

// export interface IZones {
//   circle:       Circle;
//   rectangle:    Rectangle;
//   top:          Top;
//   right:        Right;
//   bottom:       Bottom;
//   left:         Left;
//   topLeft:      TopLeft;
//   topRight:     TopRight;
//   bottomLeft:   BottomLeft;
//   bottomRight:  BottomRight;
//   [key: string]: Circle | Rectangle | Top | Right | Bottom | Left | TopLeft | TopRight | BottomLeft | BottomRight;
// }
