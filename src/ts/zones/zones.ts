import { Circle } from './circle';
import { Rectangle } from './rectangle';
import { Top } from './top';
import { Right } from './right';
import { Bottom } from './bottom';
import { Left } from './left';
import { TopLeft } from './topleft';
import { TopRight } from './topright';
import { BottomLeft } from './bottomleft';
import { BottomRight } from './bottomright';

import { Zones } from '../interfaces';
import { TZone } from '../types';


export class Zones {
  
  circles:      Circle[];
  rectangles:   Rectangle[];
  top:          Top;
  right:        Right;
  bottom:       Bottom;
  left:         Left;
  topLeft:      TopLeft;
  topRight:     TopRight;
  bottomLeft:   BottomLeft;
  bottomRight:  BottomRight;

  constructor() {
    
    this.circles    = [];
    this.rectangles = [];
    this.top        = new Top();
    this.right      = new right();
    this.bottom     = new bottom();
    this.left       = new left();
    this.topLeft    = new topLeft();
    this.topRight   = new topRight();
    this.bottomLeft = new bottomLeft();
    this.bottomRight= new bottomRight();
  
  }
  
  public add(zone: string): boolean {
    if (this.hasOwnProperty(zone)){
      this[zone].activate();
      return true;
    }
    return false;
  }
  

}