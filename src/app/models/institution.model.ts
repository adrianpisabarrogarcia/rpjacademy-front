export class Institution {
  constructor(
    public id: number,
    public course_id: number,
    public name: string,
    public logo: string,
    public description?: string,
    public convenes?: boolean,
    public certifies?: boolean,
    public collaborate?: boolean,
  ) { }
}
