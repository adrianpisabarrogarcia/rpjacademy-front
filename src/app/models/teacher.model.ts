export class Teacher {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public description: string,
    public password?: string,
    public image?: string
  ) { }
}
