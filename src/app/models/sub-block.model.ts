import { Teacher } from './teacher.model';

export class SubBlock {
  constructor(
    public id: number,
    public name: string,
    public order: number,
    public description: string,
    public duration: string,
    public teachers: Teacher[] = []
  ) { }
}
