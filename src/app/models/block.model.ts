import { SubBlock } from './sub-block.model';

export class Block {
  constructor(
    public id: number,
    public course_id: number,
    public name: string,
    public sorting: number,
    public description: string,
    public image: string,
    public subBlocks: SubBlock[] = []
  ) { }
}
