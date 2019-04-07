import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CLOTHES_TYPES, COLOURS } from '../model/constants';
import { Clothes } from '../model/clothes';
import { ClothesType } from '../model/clothesType';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

  getClothesTypes(): ClothesType[] {
    return CLOTHES_TYPES;
  }

  getColours(): string[] {
    return COLOURS;
  }

  /**
   * @description Loads random article objects to test the app.
   * @param numberOfItems the number of objects to be randomly generated
   * @author Alejandro Asensio
   * @verison 2019-04-07
   */
  getRandomArticles(numberOfItems: number): Clothes[] {
    const articles: Clothes[] = [];
    let randomType: ClothesType;
    let randomColour: string;
    const TODAY = new Date();
    let randomPrice: number;
    let randomArticle: Clothes;

    // Generate random articles
    for (let i = 0; i < numberOfItems; i++) {
      // Randomize the type of the article
      randomType = CLOTHES_TYPES[Math.floor(Math.random() * CLOTHES_TYPES.length)];

      // Randomize the colour
      randomColour = COLOURS[Math.floor(Math.random() * COLOURS.length)];

      // Randomize the price
      randomPrice = Math.floor(Math.random() * 500);

      // Instantiate the random article
      randomArticle = new Clothes(
        i,
        new ClothesType(CLOTHES_TYPES.indexOf(randomType), randomType.type),
        randomColour,
        TODAY,
        randomPrice
      );

      // Add random article to articles array property
      articles.push(randomArticle);
    }

    return articles;
  }

}
