
export class Left {

  private limit: number ;

  constructor(limit: number) {
    this.limit = limit;
  }

  private contains(x: number): boolean {
    if (x < this.limit) {
      return true;
    }
    return false;
  }

}
