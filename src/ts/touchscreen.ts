import { Zone }                 from './zones/zone';
import { Listeners }            from './listeners';
import { TZone }                from './types';
import { IZone }                from './interfaces';
import { Dom }                  from '@lcluber/weejs';
import { Logger }               from '@lcluber/mouettejs';

export class TouchScreen extends Zone /*implements IZone*/ {

  listeners: Listeners;

  constructor(htmlElementId: string) {
    super();
    this.htmlElement = Dom.findById(htmlElementId);
    if (this.htmlElement) {
      this.listeners = new Listeners(this.htmlElement, this.gestures);
    }
  }

  public addZone(zone: TZone): void {
    if (this.htmlElement) {
      zone.htmlElement = this.htmlElement;
      this.listeners.zones.push(zone);
    }
  }

  public contains(): boolean {
    return true;
  }

}
