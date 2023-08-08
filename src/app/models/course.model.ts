import { Institution } from './institution.model';
import { Block } from './block.model';
import { Price } from './price.model';

export class Course {
  constructor(
    public id: number,
    public name: string,
    public slogan: string,
    public description: string,
    public duration: string,
    public image1: string,
    public dateStart: Date,
    public course: boolean,
    public workshop: boolean,
    public modality: string,
    public dateStartRegistration: Date,
    public dateFinishRegistration: Date,
    public dateFinish?: Date,
    public video?: string,
    public image2?: string,
    public image3?: string,
    public image4?: string,
    public image5?: string,
    public contact?: string,
    public blocks: Block[] = [],
    public institutions: Institution[] = [],
    public prices: Price[] = []
  ) { }
}
