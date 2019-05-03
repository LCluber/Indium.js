import { Zone }               from './zone';
import { Listeners }          from '../listeners';
import { THTMLElements }      from '../types';
import { IGestures, IZones }  from '../interfaces';
import { Dom }                from '@lcluber/weejs';
import { Logger }             from '@lcluber/mouettejs';

export class TouchScreen extends Zone {

  htmlElement: THTMLElements;
  listeners: Listeners;
  zones: Zone[];

  constructor(htmlElementId: string) {
    super();
    this.htmlElement = Dom.findById(htmlElementId);
    this.listeners = new Listeners(this.htmlElement, <IGestures>this.gestures);
    this.zones = [];
  }


  public addZone(zone: Zone) {
    this.zones.push(zone);
  }

}
