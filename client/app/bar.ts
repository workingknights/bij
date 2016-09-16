export class Bar {

  constructor(
    public _id: number,
    public name: string,
    public area: string,
    public stations?: Array<string>,
    public mapurl?: string,
  ) { }
}
