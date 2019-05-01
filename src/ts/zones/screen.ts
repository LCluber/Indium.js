import { Zone }           from './zone';
import { Listeners }      from '../listeners';
import { THTMLElements }  from '../types';
import { IGestures }      from '../interfaces';
import { Dom }            from '@lcluber/weejs';
import { Logger }         from '@lcluber/mouettejs';

export class Screen extends Zone {

  htmlElement: THTMLElements;
  listeners: Listeners;

  constructor(htmlElementId: string) {
    super();
    this.htmlElement = Dom.findById(htmlElementId);
    this.listeners = new Listeners(this.htmlElement, <IGestures>this.gestures);
  }



  // private addZone(zone: Zone) {
  //   this.zones.push(zone);
  // }

}
