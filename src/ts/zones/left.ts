import { Zone } from './zone';

export class Left extends Zone {

  private limit: number ;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  private contains(x: number): boolean {
    if (x < this.limit) {
      return true;
    }
    return false;
  }

}
