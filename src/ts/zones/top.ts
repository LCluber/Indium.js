import { Zone } from './zone';

export class Top extends Zone {

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
