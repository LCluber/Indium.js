import { Circle }      from './zones/circle';
import { Rectangle }   from './zones/rectangle';
import { Top }         from './zones/top';
import { Right }       from './zones/right';
import { Bottom }      from './zones/bottom';
import { Left }        from './zones/left';
import { TopLeft }     from './zones/topleft';
import { TopRight }    from './zones/topright';
import { BottomLeft }  from './zones/bottomleft';
import { BottomRight } from './zones/bottomright';

export type THTMLElements = HTMLElement | HTMLCanvasElement | null;
export type TZone = Circle | Rectangle | Top | Right | Bottom | Left | TopLeft | TopRight | BottomLeft | BottomRight;
// 'left' | 'right' | 'top' | 'bottom' | 'circle' | 'rectangle' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type TGesture = 'touchStart' | 'touchMove' | 'touchEnd' | 'touchCancel' | 'tap' | 'doubleTap' | 'press' | 'swipe';
