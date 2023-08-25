import { Institution } from './institution.model';
import { Block } from './block.model';
import { Price } from './price.model';

export class Course {
  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public slogan: string,
    public description: string,
    public duration: string,
    public image1: string,
    public dateStart: string | Date,   // Nota el tipo unión aquí
    public course: boolean,
    public workshop: boolean,
    public modality: string,
    public dateStartRegistration: string | Date,  // y aquí
    public dateFinishRegistration: string | Date,  // y aquí
    public dateFinish?: string | Date,  // y aquí
    public video?: string,
    public image2?: string,
    public image3?: string,
    public image4?: string,
    public image5?: string,
    public contact?: string,
    public blocks: Block[] = [],
    public institutions: Institution[] = [],
    public prices: Price[] = []
  ) {
    this.dateStart = (typeof dateStart === 'string') ? new Date(dateStart) : dateStart;
    this.dateStartRegistration = (typeof dateStartRegistration === 'string') ? new Date(dateStartRegistration) : dateStartRegistration;
    this.dateFinishRegistration = (typeof dateFinishRegistration === 'string') ? new Date(dateFinishRegistration) : dateFinishRegistration;
    if (dateFinish) {
      this.dateFinish = (typeof dateFinish === 'string') ? new Date(dateFinish) : dateFinish;
    }
  }
}
