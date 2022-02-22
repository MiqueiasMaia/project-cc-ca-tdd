import { ItemDimension } from './itemDimension';
import { ItemWeigth } from './itemWeigth';

export default class Item {
    constructor(
        readonly idItem: number,
        readonly category: string,
        readonly description: string,
        readonly price: number,
        readonly itemDimension?: ItemDimension,
        readonly itemWeigth?: ItemWeigth
    ) { }

    public getVolume(): number {
        if (!this.itemDimension) return 0;
        return this.itemDimension.width/100 * this.itemDimension.height/100 * this.itemDimension.depth/100;
    }

    public getDensity(): number {
        if (!this.itemWeigth) return 0;
        return this.itemWeigth.weigth / this.getVolume();
    }
}
