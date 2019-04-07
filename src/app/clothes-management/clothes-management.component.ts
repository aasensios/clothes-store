import { Component, OnInit } from '@angular/core';

import { Clothes } from '../model/clothes';
import { ClothesType } from '../model/clothesType';

import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.component.html',
  styleUrls: ['./clothes-management.component.css']
})
export class ClothesManagementComponent implements OnInit {

  article: Clothes;

  // Properties get from service
  colours: string[] = [];

  // Properties to prepare pagination
  articles: Clothes[] = [];
  articlesFiltered: Clothes[] = [];
  articleSelected: Clothes;

  // Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  // Filter properties
  priceFilter: number;
  colourFilter: string;



  constructor(private clothesService: ClothesService) { }

  ngOnInit() {
    // Get the list from service
    this.colours = this.clothesService.getColours();
    this.colours.push('ALL');

    // Modify the number as convenience
    this.generateRandomArticles(50);

    // At the end of ngOnInit, initialize pagination properties
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.articles.length;

    // Assign all articles by default with empty filter
    this.articlesFiltered = this.articles;
  }

  /**
   * @description Loads random article objects to test the app.
   * @param items the number of objects to be randomly generated
   */
  generateRandomArticles(numberOfItems: number) {
    const TYPES: string[] = this.clothesService.getClothesTypes();
    const COLOURS: string[] = this.clothesService.getColours();
    let randomType: string;
    let randomColour: string;
    const TODAY = new Date();
    let randomPrice: number;
    let randomArticle: Clothes;

    // Generate random articles
    for (let i = 0; i < numberOfItems; i++) {
      // Randomize the type of the article
      randomType = TYPES[Math.floor(Math.random() * TYPES.length)];

      // Randomize the colour
      randomColour = COLOURS[Math.floor(Math.random() * COLOURS.length)];

      // Randomize the price
      randomPrice = Math.floor(Math.random() * 500);

      // Instantiate the random article
      randomArticle = new Clothes(
        i,
        new ClothesType(TYPES.indexOf(randomType), randomType),
        randomColour,
        TODAY,
        randomPrice
      );

      // Add random article to articles array property
      this.articles.push(randomArticle);
    }
  }

  filter(): void {
    // Array.filter needs a callback function as a parameter
    this.articlesFiltered = this.articles.filter(
      // Anonimous function as a parameter
      article => {
        let priceValid = false;
        let colourValid = false;
        priceValid = article.price <= this.priceFilter;

        // Check possible errors: undefined (null) or empty string
        if (this.colourFilter && this.colourFilter !== 'ALL') {
          colourValid = article.colour.toLowerCase() === this.colourFilter.toLowerCase();
        } else {
          colourValid = true;
        }

        return (priceValid && colourValid);
      }
    );
  }

  /**
   * Assigns the clicked article to articleSelected property.
   * @param article selected article object
   */
  onSelect(article: Clothes) {
    this.articleSelected = article;
  }

  /**
   * Deletes the selected article.
   * @param article selected article object
   */
  delete(article: Clothes) {
    this.articles.splice(this.articles.indexOf(article));
    console.log(this.articles.length);
  }

}
