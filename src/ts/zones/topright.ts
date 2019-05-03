import { Zone } from './zone';

export class TopRight extends Zone {

  private limit: number ;

  constructor(limit: number) {
    super();
    this.limit = limit;
  }

  private contains(y: number): boolean {
    if (y < this.limit) {
      return true;
    }
    return false;
  }

}
