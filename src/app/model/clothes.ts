import { ClothesType } from './clothesType';

/**
 * @description Models the Clothes objects. Attribute clothesType is an
 * object of class ClothesType, and expeditionDate is meant to be a Date
 * but we define type of any in order to handle the dates as an anonymous
 * objects, avoiding date pickers.
 * @author Alejandro Asensio
 * @version 2019-04-05
 */
export class Clothes {
  id: number;
  clothesType: ClothesType;
  colour: string;
  expeditionDate: any;
  price: number;

  // Question marks, '?', indicates optional parameter
  constructor(
    id?: number,
    clothesType?: ClothesType,
    colour?: string,
    expeditionDate?: any,
    price?: number
  ) {
    this.id = id;
    this.clothesType = clothesType;
    this.colour = colour;
    this.expeditionDate = expeditionDate;
    this.price = price;
  }

//   setId(id: number): void {
//     this.id = id;
//   }
//   setClothesType(clothesType: ClothesType): void {
//     this.clothesType = clothesType;
//   }
//   setColour(colour: string): void {
//     this.colour = colour;
//   }
//   setExpeditionDate(expeditionDate): void {
//     this.expeditionDate = expeditionDate;
//   }
//   setPrice(price: number): void {
//     this.price = price;
//   }

//   getId(): number {
//     return this.id;
//   }
//   getClothesType(): ClothesType {
//     return this.clothesType;
//   }
//   getColour(): string {
//     return this.colour;
//   }
//   getExpeditionDate(): any {
//     return this.expeditionDate;
//   }
//   getPrice(): number {
//     return this.price;
//   }
}
