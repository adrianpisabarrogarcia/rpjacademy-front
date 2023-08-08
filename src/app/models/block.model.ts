import { SubBlock } from './sub-block.model';

export class Block {
  constructor(
    public id: number,
    public name: string,
    public order: number,
    public description: string,
    public image: string,
    public subBlocks: SubBlock[] = []
  ) { }
}
