
export class Bottom {

  private limit: number ;

  constructor(limit: number) {
    this.limit = limit;
  }

  private contains(y: number): boolean {
    if (y > this.limit) {
      return true;
    }
    return false;
  }

}
